import { useEffect, useLayoutEffect, useState } from "react";
import RoutesWrapper from "./components/RoutesWrapper";
import Spinner from "./components/Spinner";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  ChannelService.loadScript();
  ChannelService.boot({
    pluginKey: "faaa4acd-acaf-464e-a7db-4e636e46e0e3",
  });
  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);
  return loading ? <Spinner /> : <RoutesWrapper />;
}

export default App;
