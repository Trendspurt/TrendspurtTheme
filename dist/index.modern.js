import React from 'react';

var styles = {"test":"_3ybTi"};

var TextBasic = (function (_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "[TextBasic]: ", text));
});

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent, TextBasic };
//# sourceMappingURL=index.modern.js.map
