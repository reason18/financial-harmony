// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../assets/images/logo.svg";

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

const HeaderContactsList = ({ contacts }) => {
  return (
    <ul className="d-inline-block header-contacts-list m-0 p-0 text-black">
      {contacts.map((contact, i) => (
        <li
          className="header-contact-list-item d-inline-block text-center"
          key={i}
        >
          <a
            href={`${contact.type}:${contact.value}`}
            data-rel="external"
            className="m-0 d-block"
          >
            <span className="icon d-inline-block" />
            <span className="text d-inline-block">{contact.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const UpperHeader = ({ show }) => {
  let upperHeaderClassNames = show ? "upper-header" : "upper-header hidden";
  return (
    <div className={`container-wrapper font-secondary ${upperHeaderClassNames}`}>
      <div className={`row justify-content-between `}>
          <div className="contacts">
            <select defaultValue={0} className="localization-switch">
              <option value={0}>RU</option>
              <option value={1}>UA</option>
            </select>
            <HeaderContactsList contacts={contacts} />
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
  //   onScroll = (e) => {
  //     let finaleScrollPoint = 450;
  //     if(window.pageYOffset > finaleScrollPoint) return;
  //     let startScrollPoint = 0;
  //     let startScaleValue = 1;
  //     let fineleScaleValue = 0;
  //     let scrollDiff = Math.abs(startScrollPoint - finaleScrollPoint);
  //     let scaleDiff = Math.abs(startScaleValue - fineleScaleValue);

  //     let startTransformValue = 0;
  //     let finaleTransformValue = 100;
  //     let transformDiff =  Math.abs(startTransformValue - finaleTransformValue);

  //     let transformFactor = Math.round((transformDiff / scrollDiff) * 10000) / 10000;
  //     let scaleFactor = Math.round((scaleDiff / scrollDiff) * 10000) / 10000;

  //     let currentScaleValue = 1 - (window.pageYOffset * scaleFactor);
  //     let currentTransformValue = window.pageYOffset * transformFactor;

  //     this.logo.style.transform = `translate(0,${currentTransformValue}px) scale(${currentScaleValue})`;
  // }
  // componentDidMount = () => {
  //   window.addEventListener("scroll", this.onScroll)
  // }
  // componentWillUnmount = () => {
  //   window.removeEventListener("scroll", this.onScroll)
  // }
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.showHeaderLogo === false &&
      this.props.showHeaderLogo === true
    ) {
      // animateCSS('.header-logo', 'bounce')
    } else if (
      prevProps.showHeaderLogo === true &&
      this.props.showHeaderLogo === false
    ) {
      // animateCSS('.header-logo', 'bounce')
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
    // console.log("e", window.pageYOffset)
    // if(window.pageYOffset <= 52) {
    //   this.header.style.marginTop = `-${window.pageYOffset}px`
    // }
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
    // const { siteTitle } = this.props;

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

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
