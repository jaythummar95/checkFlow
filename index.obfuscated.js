var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");



var _reactNative = require("react-native");
var _App = _interopRequireDefault(require("./App"));
var _app = require("./app.json"); /**
                                   * @format
                                   */_reactNative.AppRegistry.registerComponent(_app.name, function () {return _App.default;});