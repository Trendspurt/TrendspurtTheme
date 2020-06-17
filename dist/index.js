function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var GetAppIcon = _interopDefault(require('@material-ui/icons/GetApp'));

var version = "1.2.46";

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
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.tag = props.tag ? props.tag : 'h2';
    return _this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("section", {
      className: "ts-Headline"
    }, /*#__PURE__*/React.createElement(this.tag, null, this.props.children));
  };

  return _default;
}(React.Component);

var Text = (function (props) {
  return /*#__PURE__*/React.createElement("div", null, props.children);
});

var _default$1 = /*#__PURE__*/function (_React$Component) {
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
      "class": "source"
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
  }, /*#__PURE__*/React.createElement(Button, {
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
    style: Object.assign({
      height: props.height,
      boxSizing: 'content-box'
    }, props.style)
  }, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    src: props.src,
    frameBorder: "0"
  }), /*#__PURE__*/React.createElement("p", null, props.title));
}

exports.CTA = CTA;
exports.Download = Download;
exports.Headline = _default;
exports.IFrame = IFrame;
exports.Image = _default$1;
exports.Text = Text;
exports.Version = Version;
exports.Video = Video;
exports.YouTube = YouTube;
//# sourceMappingURL=index.js.map
