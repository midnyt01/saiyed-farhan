import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCat,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MainLogo from "../../assets/sf-white.png";
import MainLogo2 from "../../assets/sf-black.png";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../sidebar/sidebar";
import { GlobalContext } from "@/context/global.context";
// import ThemeToggle from "../theme-toggle/theme-toggle";
// import ProfileInfo from "../profile-info/profile-info";
import ServicesCard from "../services-card/services-card";
// import Sidebar from '../sidebar/sidebar';

const Container = styled.div`
background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  justify-content: space-between;
  background: transparent;
  margin: auto;
  padding: 7px 10px;
  box-sizing: border-box;
  text-transform: uppercase;
`;

const MainLogoContainer = styled.div`
  flex: 20 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
`;

const NavList = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: inline;
  }
`;
const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ListItem = styled.li`
  margin-right: 30px;
  font-size: 18px;
  cursor: pointer;

  img {
    border: 3px solid;
    border-radius: 50%;
  }
  svg {
    transition: transform 0.35s ease;
    transform: ${(props) => props.rot};
  }
`;

const ExtraItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
  align-items: center;
  margin-right: 20px;
  @media (min-width: 800px) {  
  column-gap: 30px;
  margin-right: 30px;
  }
`;

const ExtraItems = styled.div`
  font-size: 18px;
  cursor: pointer;

  img {
    border: 3px solid;
    border-radius: 50%;
  }
`;

const SidebarIconContainer = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  const {
    theme,
    setIsSidebarOpen,
    isSidebarOpen,
    isProfileInfoOpen,
    setIsProfileInfoOpen,
    isServiceCardOpen,
    setIsServiceCardOpen,
    userFace,
  } = useContext(GlobalContext);

  const toggleSidebar = () => {
    console.log("toggling");
    setIsSidebarOpen(true);
  };

  const toggleProfileInfoTab = () => {
    setIsProfileInfoOpen(!isProfileInfoOpen);
  };

  const toggleServiceCard = () => {
    setIsServiceCardOpen(!isServiceCardOpen);
  };

  return (
    <Container>
      <Wrapper>
        <MainLogoContainer>
          <Link href="/">
            {theme == "dark" ? (
              <Image src={MainLogo} alt="Saiyed Farhan" width={100} />
            ) : (
              <Image src={MainLogo2} alt="Saiyed Farhan" width={100} />
            )}
          </Link>
        </MainLogoContainer>
        <NavList>
          <UnorderedList>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem
              onClick={toggleServiceCard}
              rot={isServiceCardOpen ? "rotate(-180deg)" : "rotate(0deg)"}
            >
              Services <FontAwesomeIcon icon={faChevronDown} />
            </ListItem>
            {/* <ListItem>
              <Link href="/casestudies">Case Studies</Link>
            </ListItem> */}
            <ListItem>
              <Link href="/blogs">Blogs</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact-me">Contact Me</Link>
            </ListItem>
             <ListItem>
              <Link href="/online-marketing-consultant">About</Link>
            </ListItem>
            <ServicesCard />
          </UnorderedList>
        </NavList>
        <SidebarIconContainer onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </SidebarIconContainer>
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
