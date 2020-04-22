module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kjetiloverby/Desktop/react/Real world projects/sendgridtest/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  });
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    message: ''
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg
        }
      });
      setInputs({
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg
        }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => _objectSpread({}, prev, {
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => _objectSpread({}, prevStatus, {
      submitting: true
    }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return __jsx("main", {
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: handleOnSubmit,
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Email"), __jsx("input", {
    id: "email",
    type: "email",
    onChange: handleOnChange,
    required: true,
    value: inputs.email,
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Message"), __jsx("textarea", {
    id: "message",
    onChange: handleOnChange,
    required: true,
    value: inputs.message,
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    disabled: status.submitting,
    className: "jsx-2466159338",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, !status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...')), status.info.error && __jsx("div", {
    className: "jsx-2466159338" + " " + "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Error: ", status.info.msg), !status.info.error && status.info.msg && __jsx("div", {
    className: "jsx-2466159338" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, status.info.msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2466159338",
    __self: undefined
  }, "main.jsx-2466159338{font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue','Helvetica', 'Arial',sans-serif;padding:20px 20px 60px;max-width:640px;margin:0 auto;font-size:16px;line-height:1.65;}header.jsx-2466159338{height:152px;margin-top:3em;}img.jsx-2466159338{margin-right:8px;height:48px;}hr.jsx-2466159338{border:none;border-top:1px solid #eaeaea;margin-bottom:48px;}h1.jsx-2466159338{font-size:1.5em;font-weight:500;}h2.jsx-2466159338{font-size:16px;font-weight:700;margin:0;}form.jsx-2466159338{display:grid;grid-row-gap:1em;}label.jsx-2466159338{color:#666666;font-size:12px;font-weight:500;text-align:left;text-transform:uppercase;}input.jsx-2466159338,button.jsx-2466159338,textarea.jsx-2466159338,.error.jsx-2466159338,.success.jsx-2466159338{margin:0;border:1px solid #d1d1d1;border-radius:5px;padding:0.5em;vertical-align:middle;white-space:normal;background:none;line-height:1;font-size:1rem;font-family:inherit;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}button.jsx-2466159338,.error.jsx-2466159338,.success.jsx-2466159338{padding:0.65em 1em;background:#0070F3;color:#fff;border:none;cursor:pointer;font-weight:500;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}textarea.jsx-2466159338{height:4em;max-width:622px;}input.jsx-2466159338:focus,textarea.jsx-2466159338:focus,button.jsx-2466159338:focus{outline:0;border-color:#0070F3;}button.jsx-2466159338:hover{background:rgba(0,118,255,0.8);}button.jsx-2466159338:focus{box-shadow:0 0 0 2px rgba(0,118,255,0.5);}button.jsx-2466159338:disabled{pointer-events:none;background:#999;}.error.jsx-2466159338,.success.jsx-2466159338{background:#ee0000;color:#fff;margin-top:16px;text-align:center;}.success.jsx-2466159338{background:#7928CA;}@media screen and (max-width:580px){main.jsx-2466159338{font-size:14px;}header.jsx-2466159338{height:9em;}h2.jsx-2466159338{padding:0 16px;}}@media screen and (max-width:474px){main.jsx-2466159338{font-size:12px;padding:12px;}h2.jsx-2466159338{padding:0 8px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ramV0aWxvdmVyYnkvRGVza3RvcC9yZWFjdC9SZWFsIHdvcmxkIHByb2plY3RzL3NlbmRncmlkdGVzdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBSTBCLEFBUVIsQUFJSSxBQUlMLEFBS0ksQUFJRCxBQUtGLEFBSUMsQUFXTCxBQWVVLEFBU1IsQUFNRCxBQUl3QixBQUdVLEFBR3hCLEFBS0QsQUFPdEIsQUFHb0IsQUFHSixBQUdJLEFBS0EsQUFJRCxTQXJFUyxDQThCSixDQU5MLEFBa0NoQixDQXZGNkIsQ0FSZCxBQXNCRSxDQUlGLEFBaUZmLENBMUZnQixBQTJFaEIsQUFNQSxBQUtlLENBMUZDLENBVEosRUFnRE8sQUE4QlIsQUFNYixDQVhrQixPQWZsQixDQTdEQSxBQXVHRSxDQW5HRixBQXNCa0IsQ0FKbEIsQUE0RGtCLENBakVQLEFBa0RYLEFBR0EsQ0F6REEsRUF3Qm9CLEVBd0NwQixFQXpCYSxFQWxDYixDQVZxQixBQWlFckIsSUE5Q2tCLENBd0RFLEdBOUJOLEdBZkUsUUE3QmhCLENBbUIyQixBQTBCVixHQThCakIsRUE3Q3dCLFVBZ0JOLFVBMUJsQixFQVdxQixFQWpESSxFQWlFRSxlQWZULE1BakRBLFVBa0RGLE1BakRBLFFBa0RDLE1BakRBLE9BK0RqQixFQWJzQixNQWpESCxjQWtEUSxHQWpEM0IsdURBa0RBIiwiZmlsZSI6Ii9Vc2Vycy9ramV0aWxvdmVyYnkvRGVza3RvcC9yZWFjdC9SZWFsIHdvcmxkIHByb2plY3RzL3NlbmRncmlkdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSh7XG4gICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cbiAgfSlcblxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9KVxuXG4gIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHN0YXR1cywgbXNnKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBtc2cgfVxuICAgICAgfSlcbiAgICAgIHNldElucHV0cyh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIGluZm86IHsgZXJyb3I6IHRydWUsIG1zZzogbXNnIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBlID0+IHtcbiAgICBlLnBlcnNpc3QoKVxuICAgIHNldElucHV0cyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KSlcbiAgICBzZXRTdGF0dXMoe1xuICAgICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U3RhdHVzKHByZXZTdGF0dXMgPT4gKHsgLi4ucHJldlN0YXR1cywgc3VibWl0dGluZzogdHJ1ZSB9KSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZW5kJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dHMpXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKVxuICAgIGhhbmRsZVJlc3BvbnNlKHJlcy5zdGF0dXMsIHRleHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdGF0dXMuc3VibWl0dGluZ30+XG4gICAgICAgICAgeyFzdGF0dXMuc3VibWl0dGluZ1xuICAgICAgICAgICAgPyAhc3RhdHVzLnN1Ym1pdHRlZFxuICAgICAgICAgICAgICA/ICdTdWJtaXQnXG4gICAgICAgICAgICAgIDogJ1N1Ym1pdHRlZCdcbiAgICAgICAgICAgIDogJ1N1Ym1pdHRpbmcuLi4nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzdGF0dXMuaW5mby5lcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5FcnJvcjoge3N0YXR1cy5pbmZvLm1zZ308L2Rpdj5cbiAgICAgICl9XG4gICAgICB7IXN0YXR1cy5pbmZvLmVycm9yICYmIHN0YXR1cy5pbmZvLm1zZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPntzdGF0dXMuaW5mby5tc2d9PC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gSWNvbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJyxcbiAgICAgICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDYwcHg7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1MnB4O1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgfVxuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxuICBociB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxZW07XG4gIH1cbiAgbGFiZWwge1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBpbnB1dCxcbiAgYnV0dG9uLFxuICB0ZXh0YXJlYSxcbiAgLmVycm9yLFxuICAuc3VjY2VzcyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB9XG4gIGJ1dHRvbixcbiAgLmVycm9yLFxuICAuc3VjY2VzcyB7XG4gICAgcGFkZGluZzogMC42NWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3MEYzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICBtYXgtd2lkdGg6IDYyMnB4O1xuICB9XG4gIGlucHV0OmZvY3VzLFxuICB0ZXh0YXJlYTpmb2N1cyxcbiAgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNzBGMztcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE4LCAyNTUsIDAuOCk7XG4gIH1cbiAgYnV0dG9uOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAxMTgsIDI1NSwgMC41KTtcbiAgfVxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gIH1cbiAgLmVycm9yLFxuICAuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogI2VlMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogIzc5MjhDQVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgbWFpbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGhlYWRlciB7XG4gICAgICBoZWlnaHQ6IDllbTtcbiAgICB9XG4gICAgaDIge1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzRweCkge1xuICAgIG1haW4ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICB9XG4gICAgaDIge1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/kjetiloverby/Desktop/react/Real world projects/sendgridtest/pages/index.js */"));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kjetiloverby/Desktop/react/Real world projects/sendgridtest/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map