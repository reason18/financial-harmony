// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../assets/images/logo.svg";
import { ContactsList } from "../contacts-list";

const navigation = [
  {
    link: "/about",
    title: "О нас",
  },
  {
    link: "/clients",
    title: "Наши клиенты",
  },
  {
    link: "/services",
    title: "Наши услуги",
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
];

const UpperHeader = ({ show }) => {
  let upperHeaderClassNames = show ? "upper-header" : "upper-header hidden";
  return (
    <div
      className={`container-wrapper font-secondary ${upperHeaderClassNames}`}
    >
      <div className={`row justify-content-between `}>
        <div className="contacts">
          <select defaultValue={0} className="localization-switch">
            <option value={0}>RU</option>
            <option value={1}>UA</option>
          </select>
          <ContactsList className="header-contacts-list" />
        </div>
        <div className="callback">
          <button
            type="button"
            className="call-back-btn btn btn-primary custom-button"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

class LowerHeader extends React.Component {
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.showHeaderLogo === false &&
      this.props.showHeaderLogo === true
    ) {
    } else if (
      prevProps.showHeaderLogo === true &&
      this.props.showHeaderLogo === false
    ) {
    }
  };
  render() {
    let { expanded, showLogo } = this.props;
    let leftSideNav = [];
    let rightSideNav = [];
    navigation.forEach((item, index) => {
      if (index < 3) {
        leftSideNav.push(item);
      } else {
        rightSideNav.push(item);
      }
    });
    let classNames = expanded ? "expanded" : "";
    let logoStyle = showLogo ? "" : "hidden";
    return (
      <div className={`row lower-header ${classNames}`}>
        <nav className="nav col px-0 justify-content-around align-items-center">
          {leftSideNav.map((item, index) => (
            <a className="nav-link" href={`#${item.link}`} key={index}>
              {item.title}
            </a>
          ))}
        </nav>
        <div className={`col px-0 header-logo ${logoStyle} animated`}>
          <a className="logo-wrapper" href={`#`}>
            <img src={logo} />
          </a>
        </div>
        <nav className="nav  col px-0 justify-content-around align-items-center">
          {rightSideNav.map((item, index) => (
            <a className="nav-link" href={`#${item.link}`} key={index}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    );
  }
}

class Header extends React.Component {
  state = {
    showUpperHeader: true,
    expandedLowerHeader: true,
    showHeaderLogo: false,
  };
  onScroll = e => {
    if (window.pageYOffset > 50 && this.state.showUpperHeader) {
      this.setState({
        ...this.state,
        showUpperHeader: false,
      });
    }
    if (window.pageYOffset < 50 && !this.state.showUpperHeader) {
      this.setState({
        ...this.state,
        showUpperHeader: true,
      });
    }

    if (window.pageYOffset > 150 && this.state.expandedLowerHeader) {
      this.setState({
        ...this.state,
        expandedLowerHeader: false,
      });
    }

    if (window.pageYOffset < 150 && !this.state.expandedLowerHeader) {
      this.setState({
        ...this.state,
        expandedLowerHeader: true,
      });
    }

    if (window.pageYOffset > 450 && !this.state.showHeaderLogo) {
      this.setState({
        ...this.state,
        showHeaderLogo: true,
      });
    }

    if (window.pageYOffset < 450 && this.state.showHeaderLogo) {
      this.setState({
        ...this.state,
        showHeaderLogo: false,
      });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };
  render() {
    return (
      <header
        className="container-fluid layout-header px-0"
        ref={node => (this.header = node)}
      >
        <UpperHeader show={this.state.showUpperHeader} />
        <LowerHeader
          expanded={this.state.expandedLowerHeader}
          showLogo={this.state.showHeaderLogo}
        />
      </header>
    );
  }
}

export default Header;
