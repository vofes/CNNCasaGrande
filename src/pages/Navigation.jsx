import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogoContainer, NavigationBar, Menu, RowList, LinkContainer, PhoneContainer, PhoneRow, PhoneIcon, NdA, NsLi } from './NavigationStyle';
import logo from '../images/navigationLogo.png';
import phoneIcon from '../images/phoneIcon.png'

const ExternalLink = (props) => {
  return (
    <LinkContainer>
      <NsLi>
        <NdA href={props.to}>
          {props.name.replaceAll(' ', '\n')}
        </NdA>
      </NsLi>
    </LinkContainer>
  );
};

const PageLink = (props) => {
  return (
    <LinkContainer>
      <NsLi>
        {/* Styled Components not working with NavLink */}
        <NavLink to={props.to} onClick={props.onClick} style={{
          textDecoration: "none", 
          color: (props.currentPath == props.to) ? "orange" : "white"
        }}> 
          {props.name.replaceAll(' ', '\n')}
        </NavLink>
      </NsLi>
    </LinkContainer>
  );
};

// Navigation
function Navigation() {
  // simple hook
  const [currentPath, setCurrentPath] = useState(useLocation().pathname);

  return (
    <NavigationBar>
          <Menu>
            <LogoContainer>
              <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="Logo"></img>
              </NavLink>
            </LogoContainer>

            <RowList>

              <PageLink currentPath={currentPath} name="ГЛАВНАЯ СТРАНИЦА" to="/" onClick={() => setCurrentPath("/")}/>
              <ExternalLink name="ОНЛАЙН ТЕСТЫ" to="https://forum.arizona-rp.com/threads/4774981/"/>
              <PageLink currentPath={currentPath} name="ПРАВИЛА СМИ" to="/rulesCNN" onClick={() => setCurrentPath("/rulesCNN")}/>
              <ExternalLink name="РЕКЛАМНЫЕ УСЛУГИ" to="https://forum.arizona-rp.com/threads/5313489/"/>
              <PageLink currentPath={currentPath} name="РУКОВОДСТВО" to="/management" onClick={() => setCurrentPath("/management")}/>
              <ExternalLink name="ПРОЧЕЕ" to="https://forum.arizona-rp.com/forums/1804/"/>

            </RowList>
          </Menu>

          <PhoneContainer>
            <PhoneRow>
              <PhoneIcon src={phoneIcon}></PhoneIcon>
              626-626-1
            </PhoneRow>
          </PhoneContainer>
    </NavigationBar>
  );
}

export default Navigation;