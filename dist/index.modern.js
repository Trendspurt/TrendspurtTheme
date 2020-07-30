import React from 'react';
import Button$1 from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Navbar, Container, Nav, NavDropdown, Form, Row, Col } from 'react-bootstrap';
import Container$1 from 'react-bootstrap/Container';
import 'react-bootstrap/Button';

var version = "1.3.4";

var Version = (() => {
  return /*#__PURE__*/React.createElement("div", null, "Version: ", version);
});

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("figure", {
      className: "ts-Image"
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.src
    }), /*#__PURE__*/React.createElement("figcaption", null, this.props.children), this.props.source && /*#__PURE__*/React.createElement("figcaption", {
      className: "source"
    }, "(source: ", this.props.source, ")"));
  }

}

var CTA = (props => {
  return /*#__PURE__*/React.createElement("div", null, props.children);
});

function download(props) {
  window.open(props.url);
}

function Download(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ts-Download"
  }, /*#__PURE__*/React.createElement(Button$1, {
    variant: "outlined",
    startIcon: /*#__PURE__*/React.createElement(GetAppIcon, null),
    onClick: download.bind(this, props)
  }, "Download"), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, props.children));
}

function Video(props) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "ts-Video"
  }, /*#__PURE__*/React.createElement("video", {
    controls: true
  }, /*#__PURE__*/React.createElement("source", {
    src: props.path,
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("figcaption", null, props.title));
}

function IFrame(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ts-IFrame",
    style: Object.assign({}, props.style)
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: props.src,
    frameBorder: "0",
    style: {
      height: props.height,
      boxSizing: 'content-box',
      border: `${props.border ? props.border : 'none'}`,
      boxShadow: `${props.boxShadow ? props.boxShadow : '0px 0px 22px #E0E0E0'}`
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "caption"
  }, props.title));
}

function Code(props) {
  function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function format(input) {
    let output = htmlEntities(input).replace(/##/g, '<strong>').replace(/#\/#/g, '</strong>');
    return output;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "ts-Code",
    style: Object.assign({}, props.style)
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      fontSize: '.9rem',
      padding: '20px',
      backgroundColor: '#F6F6F6',
      border: '1px solid #EEE',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("code", {
    dangerouslySetInnerHTML: {
      __html: format(props.children)
    }
  })));
}

var Button = (props => {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "Button " + className,
    style: style
  }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, props.children), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  })));
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
    this.style = props.style ? props.style : {};
    this.brand = {
      image: '',
      width: '120px',
      height: '40px'
    };
    Object.assign(this.brand, props.brand);
  }

  render() {
    return /*#__PURE__*/React.createElement(Navbar, {
      className: "NavBar",
      style: this.style,
      fixed: "top",
      bg: "dark",
      variant: "dark",
      expand: "lg"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Navbar.Brand, {
      href: "/",
      style: {
        width: this.brand.width,
        height: this.brand.height,
        backgroundImage: `url(${this.brand.image})`
      }
    }), /*#__PURE__*/React.createElement(Navbar.Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), /*#__PURE__*/React.createElement(Navbar.Collapse, {
      id: "basic-navbar-nav"
    }, /*#__PURE__*/React.createElement(Nav, {
      className: "ml-auto mr-auto"
    }, /*#__PURE__*/React.createElement(Nav.Link, {
      href: "#WIP"
    }, "Explore"), /*#__PURE__*/React.createElement(Nav.Link, {
      href: "#WIP"
    }, "Learn"), /*#__PURE__*/React.createElement(Nav.Link, {
      href: "#WIP"
    }, "Mojo Pro"), /*#__PURE__*/React.createElement(Nav.Link, {
      href: "#WIP"
    }, "Market"), /*#__PURE__*/React.createElement(Nav.Link, {
      href: "#WIP"
    }, "Templates"), /*#__PURE__*/React.createElement(NavDropdown, {
      title: "Dropdown",
      id: "basic-nav-dropdown"
    }, /*#__PURE__*/React.createElement(NavDropdown.Item, {
      href: "#action/3.1"
    }, "Action"), /*#__PURE__*/React.createElement(NavDropdown.Item, {
      href: "#action/3.2"
    }, "Another action"), /*#__PURE__*/React.createElement(NavDropdown.Item, {
      href: "#action/3.3"
    }, "Something"), /*#__PURE__*/React.createElement(NavDropdown.Divider, null), /*#__PURE__*/React.createElement(NavDropdown.Item, {
      href: "#action/3.4"
    }, "Separated link"))), /*#__PURE__*/React.createElement(Form, {
      inline: true
    }, /*#__PURE__*/React.createElement(Button, null, "Login")))));
  }

}

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("section", {
      className: "Section"
    }, /*#__PURE__*/React.createElement(Container$1, null, this.props.children));
  }

}

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.className = '';

    switch (props.type) {
      case 'huge':
        this.tag = 'h1';
        this.className = 'huge';
        break;

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        this.tag = props.type;
        break;

      default:
        this.tag = 'h2';
    }

    this.className = props.className ? this.className + ' ' + props.className : this.className;
    this.style = props.style ? props.style : {};
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "Headline " + this.className,
      style: this.style
    }, this.props.metaTitle ? /*#__PURE__*/React.createElement("div", {
      className: "metaTitle"
    }, this.props.metaTitle) : '', /*#__PURE__*/React.createElement(this.tag, null, this.props.children), this.props.subTitle ? /*#__PURE__*/React.createElement("div", {
      className: "subTitle"
    }, this.props.subTitle) : '');
  }

}

var Text = (props => {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "Text " + className,
    style: style
  }, props.children);
});

class HeroBase extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
    this.style = props.style ? props.style : {};
    Object.assign(this.style, {
      backgroundImage: `url(${this.props.background})`
    });
    this.backdrop1Style = props.backdrop1 ? {
      backgroundImage: `url(${this.props.backdrop1})`
    } : {};
  }

  render() {
    return /*#__PURE__*/React.createElement(Container$1, {
      fluid: true,
      className: "HeroBase",
      style: this.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "backdrop1",
      style: this.backdrop1Style
    }), /*#__PURE__*/React.createElement(Container$1, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      lg: {
        offset: 0,
        span: 7
      }
    }, this.props.children), /*#__PURE__*/React.createElement(Col, {
      lg: {
        offset: 1,
        span: 2
      }
    }, "RIGHT COL"))));
  }

}

class HeroA extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
    this.style = props.style ? props.style : {};
    Object.assign(this.style, {
      backgroundImage: `url(${this.props.background})`
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(Container$1, {
      fluid: true,
      className: "HeroA",
      style: this.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "backdrop"
    }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
      md: {
        offset: 1,
        span: 7
      }
    }, this.props.metaTitle ? /*#__PURE__*/React.createElement("div", {
      className: "metaTitle"
    }, this.props.metaTitle) : '', /*#__PURE__*/React.createElement("h1", {
      className: "title"
    }, this.props.title), this.props.subTitle ? /*#__PURE__*/React.createElement("h2", {
      className: "subTitle"
    }, this.props.subTitle) : '', this.props.children), /*#__PURE__*/React.createElement(Col, {
      md: {
        offset: 1,
        span: 2
      }
    })));
  }

}

function YouTube(props) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "YouTube"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: "https://www.youtube.com/embed/" + props.id,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("figcaption", null, props.title));
}

export { Button, CTA, Code, Download, Headline, HeroA, HeroBase, IFrame, Image, NavBar, Section, Text, Version, Video, YouTube };
//# sourceMappingURL=index.modern.js.map
