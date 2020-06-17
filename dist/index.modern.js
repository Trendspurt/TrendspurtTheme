import React from 'react';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

var version = "1.2.49";

var Version = (() => {
  return /*#__PURE__*/React.createElement("div", null, "Version: ", version);
});

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
  }

  render() {
    return /*#__PURE__*/React.createElement("section", {
      className: "ts-Headline"
    }, /*#__PURE__*/React.createElement(this.tag, null, this.props.children));
  }

}

var Text = (props => {
  return /*#__PURE__*/React.createElement("div", null, props.children);
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

export { CTA, Code, Download, Headline, IFrame, Image, Text, Version, Video, YouTube };
//# sourceMappingURL=index.modern.js.map
