function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Button$1 = _interopDefault(require('@material-ui/core/Button'));
var GetAppIcon = _interopDefault(require('@material-ui/icons/GetApp'));
var reactBootstrap = require('react-bootstrap');
var Container = _interopDefault(require('react-bootstrap/Container'));
require('react-bootstrap/Button');

var version = "1.2.54";

var Version = (function () {
  return /*#__PURE__*/React.createElement("div", null, "Version: ", version);
});

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var _default = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("figure", {
      className: "ts-Image"
    }, /*#__PURE__*/React.createElement("img", {
      src: this.props.src
    }), /*#__PURE__*/React.createElement("figcaption", null, this.props.children), this.props.source && /*#__PURE__*/React.createElement("figcaption", {
      className: "source"
    }, "(source: ", this.props.source, ")"));
  };

  return _default;
}(React.Component);

var CTA = (function (props) {
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

function YouTube(props) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "ts-YouTube"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: "https://www.youtube.com/embed/" + props.id,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("figcaption", null, props.title));
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
      border: "" + (props.border ? props.border : 'none'),
      boxShadow: "" + (props.boxShadow ? props.boxShadow : '0px 0px 22px #E0E0E0')
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
    var output = htmlEntities(input).replace(/##/g, '<strong>').replace(/#\/#/g, '</strong>');
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

var Button = (function (props) {
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "Button " + className,
    style: style
  }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, props.children), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  })));
});

var _default$1 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.tag = props.tag ? props.tag : 'h2';
    _this.style = props.style ? props.style : {};
    _this.brand = {
      image: '',
      width: '120px',
      height: '40px'
    };
    Object.assign(_this.brand, props.brand);
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(reactBootstrap.Navbar, {
      className: "NavBar",
      style: this.style,
      fixed: "top",
      bg: "dark",
      variant: "dark",
      expand: "lg"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Navbar.Brand, {
      href: "/",
      style: {
        width: this.brand.width,
        height: this.brand.height,
        backgroundImage: "url(" + this.brand.image + ")"
      }
    }), /*#__PURE__*/React.createElement(reactBootstrap.Navbar.Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), /*#__PURE__*/React.createElement(reactBootstrap.Navbar.Collapse, {
      id: "basic-navbar-nav"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Nav, {
      className: "ml-auto mr-auto"
    }, /*#__PURE__*/React.createElement(reactBootstrap.Nav.Link, {
      href: "#WIP"
    }, "Explore"), /*#__PURE__*/React.createElement(reactBootstrap.Nav.Link, {
      href: "#WIP"
    }, "Learn"), /*#__PURE__*/React.createElement(reactBootstrap.Nav.Link, {
      href: "#WIP"
    }, "Mojo Pro"), /*#__PURE__*/React.createElement(reactBootstrap.Nav.Link, {
      href: "#WIP"
    }, "Market"), /*#__PURE__*/React.createElement(reactBootstrap.Nav.Link, {
      href: "#WIP"
    }, "Templates"), /*#__PURE__*/React.createElement(reactBootstrap.NavDropdown, {
      title: "Dropdown",
      id: "basic-nav-dropdown"
    }, /*#__PURE__*/React.createElement(reactBootstrap.NavDropdown.Item, {
      href: "#action/3.1"
    }, "Action"), /*#__PURE__*/React.createElement(reactBootstrap.NavDropdown.Item, {
      href: "#action/3.2"
    }, "Another action"), /*#__PURE__*/React.createElement(reactBootstrap.NavDropdown.Item, {
      href: "#action/3.3"
    }, "Something"), /*#__PURE__*/React.createElement(reactBootstrap.NavDropdown.Divider, null), /*#__PURE__*/React.createElement(reactBootstrap.NavDropdown.Item, {
      href: "#action/3.4"
    }, "Separated link"))), /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      inline: true
    }, /*#__PURE__*/React.createElement(Button, null, "Login")))));
  };

  return _default;
}(React.Component);

var _default$2 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("section", {
      className: "Section"
    }, /*#__PURE__*/React.createElement(Container, null, this.props.children));
  };

  return _default;
}(React.Component);

var _default$3 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.className = '';

    switch (props.type) {
      case 'huge':
        _this.tag = 'h1';
        _this.className = 'huge';
        break;

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        _this.tag = props.type;
        break;

      default:
        _this.tag = 'h2';
    }

    _this.className = props.className ? _this.className + ' ' + props.className : _this.className;
    _this.style = props.style ? props.style : {};
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "Headline " + this.className,
      style: this.style
    }, this.props.metaTitle ? /*#__PURE__*/React.createElement("div", {
      className: "metaTitle"
    }, this.props.metaTitle) : '', /*#__PURE__*/React.createElement(this.tag, null, this.props.children), this.props.subTitle ? /*#__PURE__*/React.createElement("div", {
      className: "subTitle"
    }, this.props.subTitle) : '');
  };

  return _default;
}(React.Component);

var Text = (function (props) {
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "Text " + className,
    style: style
  }, props.children);
});

var _default$4 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.tag = props.tag ? props.tag : 'h2';
    _this.style = props.style ? props.style : {};
    Object.assign(_this.style, {
      backgroundImage: "url(" + _this.props.background + ")"
    });
    _this.backdrop1Style = props.backdrop1 ? {
      backgroundImage: "url(" + _this.props.backdrop1 + ")"
    } : {};
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(Container, {
      fluid: true,
      className: "HeroBase",
      style: this.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "backdrop1",
      style: this.backdrop1Style
    }), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, {
      md: {
        offset: 0,
        span: 7
      }
    }, this.props.children), /*#__PURE__*/React.createElement(reactBootstrap.Col, {
      md: {
        offset: 1,
        span: 2
      }
    }))));
  };

  return _default;
}(React.Component);

var _default$5 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.tag = props.tag ? props.tag : 'h2';
    _this.style = props.style ? props.style : {};
    Object.assign(_this.style, {
      backgroundImage: "url(" + _this.props.background + ")"
    });
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(Container, {
      fluid: true,
      className: "HeroA",
      style: this.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "backdrop"
    }), /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, {
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
    }, this.props.subTitle) : '', this.props.children), /*#__PURE__*/React.createElement(reactBootstrap.Col, {
      md: {
        offset: 1,
        span: 2
      }
    })));
  };

  return _default;
}(React.Component);

exports.Button = Button;
exports.CTA = CTA;
exports.Code = Code;
exports.Download = Download;
exports.Headline = _default$3;
exports.HeroA = _default$5;
exports.HeroBase = _default$4;
exports.IFrame = IFrame;
exports.Image = _default;
exports.NavBar = _default$1;
exports.Section = _default$2;
exports.Text = Text;
exports.Version = Version;
exports.Video = Video;
exports.YouTube = YouTube;
//# sourceMappingURL=index.js.map
