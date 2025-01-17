"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  var tawkId = pluginOptions.tawkId;
  var widgetId = pluginOptions.widgetId || "default";
  var source = "https://embed.tawk.to/" + tawkId + "/" + widgetId;

  return setPostBodyComponents([_react2.default.createElement("script", { key: "gatsby-plugin-tawk", src: source })]);
};