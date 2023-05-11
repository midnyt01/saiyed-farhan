import { GlobalContext } from "@/context/global.context";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import MainLogo from "../../assets/sf-white.png";

const Container = styled.div`
  width: 300px;
  background-color: black;
  position: fixed;
  color: white;
  top: 0;
  right: 0;
  height: 100vh;
  padding-bottom: 100px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  position: relative;
  padding-top: 100px;
  align-items: center;
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
`;

const MainLogoContainer = styled.div``;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: center;
`;

const NavItems = styled.div`
  font-size: 14px;
  a {
    color: white !important;
  }
`;

const PoliciesContainer = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 16ppx;
`;
const Policy = styled.p`
  margin: 0;
  flex: 1;
  cursor: pointer;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 14px;
`;

const Social = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const SidebarCtaButtons = styled.div`
  margin-top: 15px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    color: #fff;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 8px;
    margin: 10px 0 6px 0;
    font-size: 14px
  }
`

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && !containerRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef, setIsSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Container isSidebarOpen={isSidebarOpen} ref={containerRef}>
      <Wrapper>
        <CloseContainer onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faClose} size="2xl" />
        </CloseContainer>
        <MainLogoContainer>
          <Image src={MainLogo} alt="main-logo" width={100} />
        </MainLogoContainer>
        <NavItemContainer>
          <NavItems onClick={toggleSidebar}>
            <Link href="/">Home</Link>
          </NavItems>
          <NavItems onClick={toggleSidebar}>
            <Link href="/digital-marketing-services/branding">Services</Link>
          </NavItems>
          <NavItems onClick={toggleSidebar}>
            <Link href="/blogs">Blogs</Link>
          </NavItems>
          <NavItems onClick={toggleSidebar}>
            <Link href="/casestudies">CaseStudies</Link>
          </NavItems>
        </NavItemContainer>
        {/* <PoliciesContainer>
          <Policy>Privacy Policy</Policy>
          <Policy>Terms and Conditions</Policy>
          <Policy>Return and refund policy</Policy>
        </PoliciesContainer> */}
        <SocialContainer>
          <Social>
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </Social>
          <Social>
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </Social>
          <Social>
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </Social>
          <Social>
            <FontAwesomeIcon icon={faAt} size="xl" />
          </Social>
        </SocialContainer>
        <SidebarCtaButtons>
          <Link href='/contact'>Request a Quote</Link>
          <Link href='/contact'>Get Free Consultation</Link>
        </SidebarCtaButtons>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
