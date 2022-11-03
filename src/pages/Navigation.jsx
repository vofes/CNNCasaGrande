import React from "react";
import { Link, Nav, TopBar, HamburgerContainer, InvisibleButton } from "./NavigationStyle";
import { isMobile } from "react-device-detect";

import LogoIcon from "../images/navigationLogo.png";
import MenuIcon from "../images/menuIcon.png";

const Links = () => {
  return [
    <Link innerHTML="ГЛАВНАЯ СТРАНИЦА"  to="/"/>,
    <Link innerHTML="ОНЛАЙН ТЕСТЫ"      to="https://forum.arizona-rp.com/threads/4774981/"/>,
    <Link innerHTML="ПРАВИЛА СМИ"       to="/rulesCNN"/>,
    <Link innerHTML="РЕКЛАМНЫЕ УСЛУГИ"  to="https://forum.arizona-rp.com/threads/5313489/"/>,
    <Link innerHTML="РУКОВОДСТВО"       to="/management"/>,
    <Link innerHTML="ПРОЧЕЕ"            to="https://forum.arizona-rp.com/forums/1804/"/>,
  ];
};

const Logo = () => {
  return (
    <Link 
      innerHTML={(<img src={LogoIcon} width="35px" height="35px"></img>)} 
      to="/"
    />
  );
};

const MenuButton = (props) => {
  if(props.hide === false)
  {
    return (
      <InvisibleButton onClick={props.onClick}>
        <img src={MenuIcon} width="35px" height="35px"></img>
      </InvisibleButton>
    );
  }
};

const DesktopLinks = (props) => {
  if(props.hide === false)
  {
    return <Links/>;
  }
};

const MobileHamburger = (props) => {
  if(props.hide === false)
  {
    return(
      <HamburgerContainer>
        <Links/>
      </HamburgerContainer>
    );
  }
};

function Navigation() 
{
  // hooks
  const [menuOpen, menuSet] = React.useState(false);
  const toggleMenu = () => {
    menuSet(!menuOpen);
  };

  return (
    <Nav>
      <TopBar>
        <div>
          <Logo/>
          <DesktopLinks hide={isMobile}/>
        </div>
        <MenuButton hide={!isMobile} onClick={toggleMenu}/>
      </TopBar>
      <MobileHamburger hide={!menuOpen || !isMobile}/>
    </Nav>
  );
}

export default Navigation;