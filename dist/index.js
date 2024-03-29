function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Button$1 = _interopDefault(require('@material-ui/core/Button'));
var GetAppIcon = _interopDefault(require('@material-ui/icons/GetApp'));
var reactBootstrap = require('react-bootstrap');
var Container$1 = _interopDefault(require('react-bootstrap/Container'));
require('react-bootstrap/Button');

var version = "1.3.23";

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

var _default$1 = /*#__PURE__*/function () {
  function _default() {}

  _default.getSlot = function getSlot(props, id) {
    if (props.children instanceof Array) {
      var child = props.children.find(function (item) {
        return item.type === id;
      });
      return child ? child.props.children : null;
    }

    return;
  };

  _default.getSlots = function getSlots(props, slots) {
    if (!(props.children instanceof Array)) return props;
    var result = {};
    slots.forEach(function (id) {
      var child = props.children.find(function (item) {
        return item.type === id;
      });
      result[id] = child ? child.props.children : props[id];
    });
    return result;
  };

  _default.childrenWithoutSlots = function childrenWithoutSlots(props, slots) {
    if (!(props.children instanceof Array)) return props.children;
    var children = React.Children.toArray(props.children);
    slots.forEach(function (id) {
      var child = children.find(function (item) {
        return item.type === id;
      });
      child && children.splice(children.indexOf(child), 1);
    });
    return children;
  };

  return _default;
}();

function SlotDemo(props) {
  var slotNames = ['xxx'];
  var slots = _default$1.getSlots(props, slotNames);
  return /*#__PURE__*/React.createElement("div", null, _default$1.childrenWithoutSlots(props, slotNames), /*#__PURE__*/React.createElement("hr", null), slots.xxx);
}

var Button = (function (props) {
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "Button " + className,
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, props.children), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  })));
});

var _default$2 = /*#__PURE__*/function (_React$Component) {
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
    }, this.props.items), /*#__PURE__*/React.createElement(reactBootstrap.Form, {
      inline: true
    }))));
  };

  return _default;
}(React.Component);

var Footer = (function (props) {
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "Footer " + className,
    style: style
  }, props.children);
});

var _default$3 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "Spacer",
      style: {
        height: (this.props.height ? this.props.height : 40) + 'px'
      }
    });
  };

  return _default;
}(React.Component);

var _default$4 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("section", {
      className: "Section"
    }, /*#__PURE__*/React.createElement(Container$1, null, this.props.children));
  };

  return _default;
}(React.Component);

var _default$5 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.slotNames = ['meta', 'sub'];
    _this.slots = _default$1.getSlots(_this.props, _this.slotNames);
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
    }, this.props.uid, this.slots.meta ? /*#__PURE__*/React.createElement("div", {
      className: "metaTitle"
    }, this.slots.meta) : '', /*#__PURE__*/React.createElement(this.tag, null, _default$1.childrenWithoutSlots(this.props, this.slotNames)), this.slots.sub ? /*#__PURE__*/React.createElement("div", {
      className: "subTitle"
    }, this.slots.sub) : '');
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

var ImageText = (function (props) {
  var className = props.className ? props.className : '';
  className += props.reversed ? ' reversed' : '';
  var style = props.style ? props.style : {};
  Object.assign(style, {
    backgroundImage: "url(" + props.background + ")"
  });
  var aspectRatio = props.aspectRatio ? 1 / props.aspectRatio : 1 / (16 / 9);
  return /*#__PURE__*/React.createElement("section", {
    className: "ImageText " + className,
    style: style
  }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, {
    lg: props.reversed ? {
      offset: 1,
      span: 6
    } : {
      offset: 0,
      span: 6
    },
    className: "firstCol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "frameWrapper",
    style: {
      paddingTop: aspectRatio * 100 + "%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "image",
    style: {
      backgroundImage: "url(" + _default$1.getSlot(props, 'image') + ")"
    }
  }))), /*#__PURE__*/React.createElement(reactBootstrap.Col, {
    lg: props.reversed ? {
      offset: 0,
      span: 5
    } : {
      offset: 1,
      span: 5
    },
    className: "secondCol"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-h2"
  }, _default$1.getSlot(props, 'title')), /*#__PURE__*/React.createElement("div", null, _default$1.getSlot(props, 'body')), /*#__PURE__*/React.createElement("div", null, _default$1.getSlot(props, 'murx'))))));
});

var _default$6 = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.className = props.className ? props.className : '';
    _this.style = props.style ? props.style : {};
    _this.tag = props.tag ? props.tag : 'h2';
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
    return /*#__PURE__*/React.createElement(reactBootstrap.Container, {
      fluid: true,
      className: "HeroBase " + this.className,
      style: this.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "backdrop1",
      style: this.backdrop1Style
    }), /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, {
      lg: {
        offset: 0,
        span: 12
      }
    }, this.props.children))));
  };

  return _default;
}(React.Component);

var _default$7 = /*#__PURE__*/function (_React$Component) {
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
    return /*#__PURE__*/React.createElement(Container$1, {
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

var Claim = (function (props) {
  var className = props.className ? props.className : '';
  className += props.inverted ? 'inverted' : '';
  var style = props.style ? props.style : {};
  Object.assign(style, {
    backgroundImage: "url(" + props.background + ")"
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "Claim " + className,
    style: style
  }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, {
    lg: {
      offset: 1,
      span: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font2-h1"
  }, props.title), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "font-h1",
    style: {
      fontWeight: 'normal'
    }
  }, props.children)))));
});

function YouTube(props) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "YouTube"
  }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement("div", {
    className: "frameWrapper"
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: "https://www.youtube.com/embed/" + props.id,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), /*#__PURE__*/React.createElement("figcaption", null, props.title)));
}

var MojoEmbed = (function (props) {
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  Object.assign(style, {
    backgroundImage: "url(" + props.background + ")"
  });
  var aspectRatio = props.aspectRatio ? 1 / props.aspectRatio : 1 / (16 / 9);
  return /*#__PURE__*/React.createElement("section", {
    className: "MojoEmbed " + className,
    style: style
  }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, {
    lg: {
      offset: 1,
      span: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "frameWrapper",
    style: {
      paddingTop: aspectRatio * 100 + "%"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: props.src,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))))));
});

var Container = (function (props) {
  var className = props.className ? props.className : '';
  var style = props.style ? props.style : {};
  return /*#__PURE__*/React.createElement("div", {
    className: "container Container " + className,
    style: style
  }, props.children);
});

var TextVideo = (function (props) {
  var className = props.className ? props.className : '';
  className += props.reversed ? ' reversed' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: "TextVideo " + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, props.meta), /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, props.title), /*#__PURE__*/React.createElement("h2", {
    className: "subtitle"
  }, props.sub), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, props.body)), /*#__PURE__*/React.createElement("div", {
    className: "video-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video"
  }, /*#__PURE__*/React.createElement("video", {
    src: props.video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: "true"
  })))));
});

var VideoHeroA = (function (props) {
  var className = props.className ? props.className : '';
  className += props.reversed ? ' reversed' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: "VideoHeroA " + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video"
  }, /*#__PURE__*/React.createElement("video", {
    src: "/video2.mp4",
    autoPlay: true,
    muted: true,
    loop: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement(reactBootstrap.Container, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_default$5, {
    type: "huge"
  }, "Mojo for Adobe XD"), /*#__PURE__*/React.createElement(Text, null, "Now available")))))));
});

console.log("[ TsTheme v" + version + " ]");

exports.Button = Button;
exports.CTA = CTA;
exports.Claim = Claim;
exports.Code = Code;
exports.Container = Container;
exports.Download = Download;
exports.Footer = Footer;
exports.Headline = _default$5;
exports.HeroA = _default$7;
exports.HeroBase = _default$6;
exports.IFrame = IFrame;
exports.Image = _default;
exports.ImageText = ImageText;
exports.MojoEmbed = MojoEmbed;
exports.NavBar = _default$2;
exports.Section = _default$4;
exports.SlotDemo = SlotDemo;
exports.Spacer = _default$3;
exports.Text = Text;
exports.TextVideo = TextVideo;
exports.Version = Version;
exports.Video = Video;
exports.VideoHeroA = VideoHeroA;
exports.YouTube = YouTube;
//# sourceMappingURL=index.js.map
