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
import ThemeToggle from "../theme-toggle/theme-toggle";

const Container = styled.div`
  width: 300px;
  background-color: black;
  position: fixed;
  color: white;
  top: 0;
  right: 0;
  height: 100vh;
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
`;

const NavItems = styled.div`
  font-size: 20px;
  a {
    color: white !important;
  }
`;

const PoliciesContainer = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 15px;
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
`;

const Social = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
`;

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
          <NavItems>
            <Link href="/">Home</Link>
          </NavItems>
          <NavItems>
            <Link href="/">Services</Link>
          </NavItems>
          <NavItems>
            <Link href="/">Blogs</Link>
          </NavItems>
          <NavItems>
            <Link href="/">CaseStudies</Link>
          </NavItems>
        </NavItemContainer>
        <PoliciesContainer>
          <Policy>Privacy Policy</Policy>
          <Policy>Terms and Conditions</Policy>
          <Policy>Return and refund policy</Policy>
        </PoliciesContainer>
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
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
