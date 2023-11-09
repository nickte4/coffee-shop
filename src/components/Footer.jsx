import { useEffect, useState } from "react";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 640;
  });

  function handleResize() {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>;
}
