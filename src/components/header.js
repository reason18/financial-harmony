// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const contacts = [
  {
    type: "mailto",
    value: "f.harmony@gmail.com",
  },
  {
    type: "tel",
    value: "+380-99-99-99-999",
  },
  {
    type: "tel",
    value: "+380-99-99-99-999",
  },
];

const navigation = [
  {
    link: "/services",
    title: "Услуги",
  },
  {
    link: "/about",
    title: "О нас",
  },
  {
    link: "/advantages",
    title: "Преимущества",
  },
  {
    link: "/garanties",
    title: "Гарантии",
  },
  {
    link: "/become-a-client",
    title: "Как стать клиентом",
  },
  {
    link: "/contacts",
    title: "Контакты",
  },
];

const HeaderContactsList = ({ contacts }) => {
  return (
    <ul className="d-inline-block header-contacts-list m-0 p-0 h-100">
      {contacts.map(contact => (
        <li className="header-contact-list-item d-inline-block h-100 text-center">
          <a
            href={`${contact.type}:${contact.value}`}
            data-rel="external"
            className="m-0 h-100 d-block"
          >
            <span className="h-100 icon d-inline-block" />
            <span className="text d-inline-block">{contact.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const UpperHeader = () => {
  return (
    <div className="row upper-header justify-content-between">
      <div className="localization-switch">
        <select defaultValue={0} className="h-100">
          <option value={0}>RU</option>
          <option value={1}>UA</option>
        </select>
      </div>
      <div className="header-contacts">
        <HeaderContactsList contacts={contacts} />
        <button
          type="button"
          className="call-back-btn btn btn-success rounded-0 h-100"
        >
          Заказать звонок
        </button>
      </div>
    </div>
  );
};

const LowerHeader = ({}) => {
  return (
    <nav>
      <ul>
        {navigation.map(item => (
          <li className="d-inline-block">
            <a className="h-100" href={`#${item.link}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = ({ siteTitle }) => (
  <header className="container-fluid layout-header">
    <UpperHeader />
    <LowerHeader />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
