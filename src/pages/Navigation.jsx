import React from "react";
import { NavLink } from "react-router-dom";

const ExternalLink = (props) => {
  return (
    <li className="nav-item">
    <a className="nav-link" href={props.to}>
      {props.name}
    </a>
  </li>
  );
};

const PageLink = (props) => {
  return (
    <li className="nav-item">
    <NavLink className="nav-link" to={props.to}>
      {props.name}
    </NavLink>
  </li>
  );
};


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">



          <NavLink className="navbar-brand" to="/">
            React Multi-Page Website
          </NavLink>

          <div>
            <ul className="navbar-nav ml-auto">

              <PageLink name="Главная страница" to="/"/>
              <ExternalLink name="Онлайн тесты" to="https://forum.arizona-rp.com/threads/4774981/"/>
              <PageLink name="Правила СМИ" to="/rulesCNN"/>
              <ExternalLink name="Рекламные услуги" to="https://forum.arizona-rp.com/threads/5313489/"/>
              <PageLink name="Руководство" to="/management"/>
              <ExternalLink name="Прочее" to="https://forum.arizona-rp.com/forums/1804/"/>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;