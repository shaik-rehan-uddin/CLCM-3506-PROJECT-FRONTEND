import { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Paragraph, ParagraphWithLightBorder, Title } from "./About";
import { Button, Input, InputContainer, TextArea } from "./CallBack";
import { WrapperContainer } from "./SliderItem";
import { smDown } from "../utils/responsive";
import { gsap } from "gsap";

const Container = styled(WrapperContainer)`
  padding: 48px 12px;
`;
const Wrapper = styled.div`
  margin: 0 -12px;
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  padding: 0 12px;
  width: 50%;
  ${smDown({
    width: "100%",
  })}
`;
const StyledParagraph = styled(Paragraph)``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const StyledInputContainer = styled(InputContainer)`
  width: 100%;
`;
const FormButton = styled(Button)`
  margin: 16px 8px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 450px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Contact = () => {
  // Container scroll trigger animation
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const contactTween = gsap.from(containerEl.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerEl.current,
      },
    });

    return () => {
      if (contactTween) contactTween.kill();
    };
  }, []);

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Function to handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send data to POST endpoint
      const response = await fetch("your-post-endpoint-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Handle response as needed
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Col>
          <ParagraphWithLightBorder>Contact</ParagraphWithLightBorder>
          <Title>If You Have Any Query, Please Contact Us</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
              />
            </InputContainer>
            <InputContainer>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
              />
            </InputContainer>
            <StyledInputContainer>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
              />
            </StyledInputContainer>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
            />
            <FormButton type="submit">Send Message</FormButton>
          </Form>
        </Col>
        <Col>
          <Iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=calgary+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            aria-hidden="false"
            tabIndex={0}
          />
        </Col>
      </Wrapper>
    </Container>
  );
};

export default Contact;
