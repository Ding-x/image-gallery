webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/ImageComponent.js":
/*!*************************************!*\
  !*** ./component/ImageComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            mutation productDeleteImages($id: ID!, $imageIds: [ID!]!) {\n                productDeleteImages(id: $id, imageIds: $imageIds) {\n                userErrors {\n                    field\n                    message\n                }\n                deletedImageIds\n                product {\n                    id\n                }\n                }\n            }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ImageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageComponent, _React$Component);

  function ImageComponent(props) {
    var _this;

    _classCallCheck(this, ImageComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeSize", function () {
      var data = _this.state.data;
      data.clicked = !data.clicked;

      _this.setState({
        data: data
      });
    });

    _this.state = {
      data: _this.props.data
    };
    return _this;
  }

  _createClass(ImageComponent, [{
    key: "render",
    value: function render() {
      var imagestyle = {
        width: "100%",
        height: "300px"
      };
      var root = {
        float: "left",
        height: "450px"
      };
      var btnstyle = {
        margin: "10px auto"
      };
      var DELETE_IMAGE = gql(_templateObject());
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: imagestyle,
        src: this.state.data.src,
        onClick: this.changeSize
      }));
    }
  }]);

  return ImageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);

/***/ })

})
//# sourceMappingURL=index.js.9f7b3680e6693a721b9b.hot-update.js.map