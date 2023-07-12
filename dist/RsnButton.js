"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RsnButton;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function RsnButton(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "text-3xl font-bold bg-yellow-200 border-[10px] border-[#f00]"
  }, text);
}