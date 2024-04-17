import { Link } from "react-router-dom";
import styled from "styled-components";
import { smDown } from "../utils/responsive";
import { WrapperContainer } from "./SliderItem";
const Container = styled.div`
  background-color: #000b1c;
`;
const ContainerWrapper = styled(WrapperContainer)`
  padding: 24px 12px;
`;
const Wrapper = styled.div`
  margin: 0 -12px;
  display: flex;
  justify-content: space-between;
  ${smDown({
    flexDirection: "column",
    alignItems: "center",
    ["& > div:first-of-type"]: {
      marginBottom: 16,
    },
  })}
`;
const Col = styled.div`
  font-size: 1rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: 400;
  line-height: 1.5;
  padding: 0 12px;
  color: ${({ theme }) => theme.palette.primary.light};
`;
const CopyrightLink = styled(Link)`
  font-weight: 400;
  color: ${({ theme }) => theme.palette.primary.light};
  line-height: 1.5;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
const Copyright = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Wrapper>
          <Col>
            &copy; <CopyrightLink to="">Finanza</CopyrightLink>, All Right
            Reserved
          </Col>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Copyright;
