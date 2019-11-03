"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MyCBM", {
  enumerable: true,
  get: function get() {
    return _myCbm["default"];
  }
});
exports.info = void 0;

var _myCbm = _interopRequireDefault(require("./my-cbm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var info = {
  name: "my simple CBM",
  version: "v0.1.0",
  // optional
  description: "This is a template CBM",
  // optional
  about: "server-state" // optional
  // logoUrl: "/path/to/logo or base64" // optional

};
exports.info = info;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MyCBM(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_core.Typography, null, "My CBM module!"), _react["default"].createElement(_core.Typography, null, "Data: ", props.data));
}

MyCBM.propTypes = {
  data: _propTypes["default"].node.isRequired
};
var _default = MyCBM;
exports["default"] = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyIsInNyYy9teS1jYm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTSxJQUFJLEdBQUc7QUFDVCxFQUFBLElBQUksRUFBRSxlQURHO0FBRVQsRUFBQSxPQUFPLEVBQUUsUUFGQTtBQUVVO0FBQ25CLEVBQUEsV0FBVyxFQUFFLHdCQUhKO0FBRzhCO0FBQ3ZDLEVBQUEsS0FBSyxFQUFFLGNBSkUsQ0FJYztBQUN2Qjs7QUFMUyxDQUFiOzs7Ozs7Ozs7QUNGQTs7QUFDQTs7QUFDQTs7OztBQUdBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFDbEIsU0FDSSw2Q0FDSSxnQ0FBQyxnQkFBRCx5QkFESixFQUlJLGdDQUFDLGdCQUFELGtCQUNXLEtBQUssQ0FBQyxJQURqQixDQUpKLENBREo7QUFVSDs7QUFFRCxLQUFLLENBQUMsU0FBTixHQUFrQjtBQUNkLEVBQUEsSUFBSSxFQUFFLHNCQUFVLElBQVYsQ0FBZTtBQURQLENBQWxCO2VBSWUsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUNCTSBmcm9tICcuL215LWNibSc7XG5cbmNvbnN0IGluZm8gPSB7XG4gICAgbmFtZTogXCJteSBzaW1wbGUgQ0JNXCIsXG4gICAgdmVyc2lvbjogXCJ2MC4xLjBcIiwgLy8gb3B0aW9uYWxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdGVtcGxhdGUgQ0JNXCIsIC8vIG9wdGlvbmFsXG4gICAgYWJvdXQ6IFwic2VydmVyLXN0YXRlXCIsIC8vIG9wdGlvbmFsXG4gICAgLy8gbG9nb1VybDogXCIvcGF0aC90by9sb2dvIG9yIGJhc2U2NFwiIC8vIG9wdGlvbmFsXG59O1xuXG5leHBvcnQge1xuICAgIE15Q0JNLFxuICAgIGluZm9cbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5cbmZ1bmN0aW9uIE15Q0JNKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIE15IENCTSBtb2R1bGUhXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICBEYXRhOiB7cHJvcHMuZGF0YX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuTXlDQk0ucHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15Q0JNOyJdfQ==