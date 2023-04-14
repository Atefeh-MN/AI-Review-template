import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import {setPageDirection}from '../../utils/direction';
import usFlag from "../../assets/img/flags/us.png";
import irFlag from '../../assets/img/flags/ir.png';
import useSidebar from '../../hooks/useSidebar';
import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  LAYOUT,
  THEME,
} from "../../constants";

const languageOptions = {
  en: {
    icon: usFlag,
    name: "EN",
    char:'en',
  },
  fa: {
    icon: irFlag,
    name: "فارسی",
    char:"fa",
  },
};

const NavbarLanguages = () => {
  const { i18n } = useTranslation();
 const { setPosition, setBehavior } = useSidebar();
  const selectedLanguage = languageOptions[i18n.language];
   
  return (
    <Dropdown className="me-1 nav-item" align="center">
      <Dropdown.Toggle as="a" className="nav-link nav-flag">
        <span style={{fontSize:"0.8rem"}} >
             {selectedLanguage.name}
        </span>
        <img src={selectedLanguage.icon} alt={selectedLanguage.name} /> 
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(languageOptions).map((language) => (
          <Dropdown.Item
            key={language}
            className="d-flex p-1"
            onClick={() =>
            {
              i18n.changeLanguage( language )
                setPosition(language ==='en'? SIDEBAR_POSITION.LEFT:SIDEBAR_POSITION.RIGHT);
             setPageDirection(language)}}
          >
            <img
              src={languageOptions[language].icon}
              alt="English"
              width="20"
              className="align-middle me-1"
            />
            <span className="align-middle">
              {languageOptions[language].name}
            </span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarLanguages;
