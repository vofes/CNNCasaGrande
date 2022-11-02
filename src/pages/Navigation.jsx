import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogoContainer, NavigationBar, LeftPart, RowList, ColumnList, LinkContainer, NdA, NsLi, MenuButton, MenuIcon } from './NavigationStyle';
import logo from '../images/navigationLogo.png';
import menuIcon from '../images/menuIcon.png';
import useWindowDimensions from './Window';

const ExternalLink = (props) => {
  return (
    <LinkContainer style ={{
      paddingBottom: (props.wrapText === false) ? "25px" : "0px",
    }}>
      <NsLi>
        <NdA href={props.to}>
          {props.wrapText === true ? props.name.replaceAll(' ', '\n') : props.name}
        </NdA>
      </NsLi>
    </LinkContainer>
  );
};

const PageLink = (props) => {
  return (
    <LinkContainer style ={{
      paddingBottom: (props.wrapText === false) ? "25px" : "0px",
    }}>
      <NsLi>
        {/* Styled Components not working with NavLink */}
        <NavLink to={props.to} onClick={() => props.onClick(props.to)} style={{
          textDecoration: "none", 
          color: (props.currentPath === props.to) ? "orange" : "white"
        }}> 
          {props.wrapText === true ? props.name.replaceAll(' ', '\n') : props.name}
        </NavLink>
      </NsLi>
    </LinkContainer>
  );
};

const Links = (props) => {
  return [
      <PageLink     name="ГЛАВНАЯ СТРАНИЦА" wrapText={props.wrapText} to="/"            currentPath={props.currentPath} onClick={props.setCurrentPath}/>,
      <ExternalLink name="ОНЛАЙН ТЕСТЫ"     wrapText={props.wrapText} to="https://forum.arizona-rp.com/threads/4774981/"/>,
      <PageLink     name="ПРАВИЛА СМИ"      wrapText={props.wrapText} to="/rulesCNN"    currentPath={props.currentPath} onClick={props.setCurrentPath}/>,
      <ExternalLink name="РЕКЛАМНЫЕ УСЛУГИ" wrapText={props.wrapText} to="https://forum.arizona-rp.com/threads/5313489/"/>,
      <PageLink     name="РУКОВОДСТВО"      wrapText={props.wrapText} to="/management"  currentPath={props.currentPath} onClick={props.setCurrentPath}/>,
      <ExternalLink name="ПРОЧЕЕ"           wrapText={props.wrapText} to="https://forum.arizona-rp.com/forums/1804/"/>
  ]
};

function LinksList(props) {
  if(props.direction === "row")
  {
    return(
      <RowList>
        <Links currentPath={props.currentPath} setCurrentPath={props.setCurrentPath} wrapText={true}></Links>
      </RowList>
    );
  }

  return (
    <ColumnList>
      <Links currentPath={props.currentPath} setCurrentPath={props.setCurrentPath} wrapText={false}></Links>
    </ColumnList>
  );
}


// Navigation
function Navigation() {
  // simple hook
  const [currentPath, setCurrentPath] = useState(useLocation().pathname);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const { width } = useWindowDimensions();

  return (
    <div>
      <NavigationBar>
            <LeftPart>
              <LogoContainer>
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" onClick={() => setCurrentPath("/")}></img>
                </NavLink>
              </LogoContainer>
              {width > 1000 ? (<LinksList direction="row" currentPath={currentPath} setCurrentPath={setCurrentPath}/>) : null}

            </LeftPart>

            {width <= 1000 ? (
            <MenuButton onClick={handleOpen}>
              <MenuIcon src={menuIcon}></MenuIcon>
            </MenuButton>
            ) : null}

      </NavigationBar>

      {open && width <= 1000 ? (
        <LinksList direction="column" currentPath={currentPath} setCurrentPath={setCurrentPath}/>
      ) : null}

    </div>
  );
}

export default Navigation;