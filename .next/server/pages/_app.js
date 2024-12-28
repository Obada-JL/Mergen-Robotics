/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            is_visible: false\n        };\n    }\n    componentDidMount() {\n        var scrollComponent = this;\n        document.addEventListener(\"scroll\", function(e) {\n            scrollComponent.toggleVisibility();\n        });\n    }\n    toggleVisibility() {\n        if (window.pageYOffset > 300) {\n            this.setState({\n                is_visible: true\n            });\n        } else {\n            this.setState({\n                is_visible: false\n            });\n        }\n    }\n    scrollToTop() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    }\n    render() {\n        const { is_visible } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-to-top\",\n            children: is_visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"top\",\n                onClick: ()=>this.scrollToTop(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\components\\\\Shared\\\\GoTop.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\components\\\\Shared\\\\GoTop.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\components\\\\Shared\\\\GoTop.js\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\components\\\\Shared\\\\GoTop.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFFMUIsTUFBTUUsY0FBY0QsNENBQVNBO0lBQzFDRSxZQUFZQyxLQUFLLENBQUU7UUFDakIsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsS0FBSyxHQUFHO1lBQ1hDLFlBQVk7UUFDZDtJQUNGO0lBRUFDLG9CQUFvQjtRQUNsQixJQUFJQyxrQkFBa0IsSUFBSTtRQUMxQkMsU0FBU0MsZ0JBQWdCLENBQUMsVUFBVSxTQUFVQyxDQUFDO1lBQzdDSCxnQkFBZ0JJLGdCQUFnQjtRQUNsQztJQUNGO0lBRUFBLG1CQUFtQjtRQUNqQixJQUFJQyxPQUFPQyxXQUFXLEdBQUcsS0FBSztZQUM1QixJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFDWlQsWUFBWTtZQUNkO1FBQ0YsT0FBTztZQUNMLElBQUksQ0FBQ1MsUUFBUSxDQUFDO2dCQUNaVCxZQUFZO1lBQ2Q7UUFDRjtJQUNGO0lBRUFVLGNBQWM7UUFDWkgsT0FBT0ksUUFBUSxDQUFDO1lBQ2RDLEtBQUs7WUFDTEMsVUFBVTtRQUNaO0lBQ0Y7SUFFQUMsU0FBUztRQUNQLE1BQU0sRUFBRWQsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDRCxLQUFLO1FBQ2pDLHFCQUNFLDhEQUFDZ0I7WUFBSUMsV0FBVTtzQkFDWmhCLDRCQUNDLDhEQUFDZTtnQkFBSUMsV0FBVTtnQkFBTUMsU0FBUyxJQUFNLElBQUksQ0FBQ1AsV0FBVzs7a0NBQ2xELDhEQUFDUTt3QkFBRUYsV0FBVTs7Ozs7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLdkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhcml0b24vLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcz9lMDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvVG9wIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNfdmlzaWJsZTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgc2Nyb2xsQ29tcG9uZW50ID0gdGhpcztcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgc2Nyb2xsQ29tcG9uZW50LnRvZ2dsZVZpc2liaWxpdHkoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNfdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc192aXNpYmxlOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb1RvcCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNfdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiPlxyXG4gICAgICAgIHtpc192aXNpYmxlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCIgb25DbGljaz17KCkgPT4gdGhpcy5zY3JvbGxUb1RvcCgpfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctdXBcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkdvVG9wIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaXNfdmlzaWJsZSIsImNvbXBvbmVudERpZE1vdW50Iiwic2Nyb2xsQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNldFN0YXRlIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/flaticon.css */ \"./styles/flaticon.css\");\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/fontawesome.min.css */ \"./styles/fontawesome.min.css\");\n/* harmony import */ var _styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\n\n\n\n\n\n\n\n\n\n\n// Global Styles\n\n\n\n\nfunction App({ Component, pageProps }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\pages\\\\_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mergen Robotics\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                scrollStepInPx: \"50\",\n                delayInMs: \"10.50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\midog\\\\Desktop\\\\MergenWeb\\\\Mergen-Robotics\\\\pages\\\\_app.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0o7QUFDb0I7QUFDTDtBQUNMO0FBQ087QUFDb0I7QUFDdkM7QUFDTztBQUUzQixnQkFBZ0I7QUFDYTtBQUNLO0FBRUw7QUFDa0I7QUFFaEMsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRE4sc0RBQWUsQ0FBQztRQUNkQywrQ0FBUTtJQUNWLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ0MsbURBQUlBOztrQ0FDSCw4REFBQ087d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7OztrQ0FFViw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ1A7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUd4Qiw4REFBQ0gsaUVBQUtBO2dCQUFDVSxnQkFBZTtnQkFBS0MsV0FBVTs7Ozs7Ozs7QUFHM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXJpdG9uLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZmxhdGljb24uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9mb250YXdlc29tZS5taW4uY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3NcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL2J1bmRsZVwiO1xyXG5cclxuLy8gR2xvYmFsIFN0eWxlc1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9yZXNwb25zaXZlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgR29Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5pbml0KCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGl0bGU+TWVyZ2VuIFJvYm90aWNzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cclxuICAgICAgey8qIEdvIFRvcCBCdXR0b24gKi99XHJcbiAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjUwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBT1MiLCJIZWFkIiwiR29Ub3AiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJpbml0IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/flaticon.css":
/*!*****************************!*\
  !*** ./styles/flaticon.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/fontawesome.min.css":
/*!************************************!*\
  !*** ./styles/fontawesome.min.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/swiper","vendor-chunks/react-accessible-accordion","vendor-chunks/aos"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();