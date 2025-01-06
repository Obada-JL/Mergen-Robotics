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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            is_visible: false\n        };\n    }\n    componentDidMount() {\n        var scrollComponent = this;\n        document.addEventListener(\"scroll\", function(e) {\n            scrollComponent.toggleVisibility();\n        });\n    }\n    toggleVisibility() {\n        if (window.pageYOffset > 300) {\n            this.setState({\n                is_visible: true\n            });\n        } else {\n            this.setState({\n                is_visible: false\n            });\n        }\n    }\n    scrollToTop() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    }\n    render() {\n        const { is_visible } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-to-top\",\n            children: is_visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"top\",\n                onClick: ()=>this.scrollToTop(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\components\\\\Shared\\\\GoTop.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\components\\\\Shared\\\\GoTop.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\components\\\\Shared\\\\GoTop.js\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\components\\\\Shared\\\\GoTop.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFFMUIsTUFBTUUsY0FBY0QsNENBQVNBO0lBQzFDRSxZQUFZQyxLQUFLLENBQUU7UUFDakIsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsS0FBSyxHQUFHO1lBQ1hDLFlBQVk7UUFDZDtJQUNGO0lBRUFDLG9CQUFvQjtRQUNsQixJQUFJQyxrQkFBa0IsSUFBSTtRQUMxQkMsU0FBU0MsZ0JBQWdCLENBQUMsVUFBVSxTQUFVQyxDQUFDO1lBQzdDSCxnQkFBZ0JJLGdCQUFnQjtRQUNsQztJQUNGO0lBRUFBLG1CQUFtQjtRQUNqQixJQUFJQyxPQUFPQyxXQUFXLEdBQUcsS0FBSztZQUM1QixJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFDWlQsWUFBWTtZQUNkO1FBQ0YsT0FBTztZQUNMLElBQUksQ0FBQ1MsUUFBUSxDQUFDO2dCQUNaVCxZQUFZO1lBQ2Q7UUFDRjtJQUNGO0lBRUFVLGNBQWM7UUFDWkgsT0FBT0ksUUFBUSxDQUFDO1lBQ2RDLEtBQUs7WUFDTEMsVUFBVTtRQUNaO0lBQ0Y7SUFFQUMsU0FBUztRQUNQLE1BQU0sRUFBRWQsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDRCxLQUFLO1FBQ2pDLHFCQUNFLDhEQUFDZ0I7WUFBSUMsV0FBVTtzQkFDWmhCLDRCQUNDLDhEQUFDZTtnQkFBSUMsV0FBVTtnQkFBTUMsU0FBUyxJQUFNLElBQUksQ0FBQ1AsV0FBVzs7a0NBQ2xELDhEQUFDUTt3QkFBRUYsV0FBVTs7Ozs7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLdkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhcml0b24vLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcz9lMDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29Ub3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNfdmlzaWJsZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBzY3JvbGxDb21wb25lbnQgPSB0aGlzO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNjcm9sbENvbXBvbmVudC50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc192aXNpYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc192aXNpYmxlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzX3Zpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiPlxuICAgICAgICB7aXNfdmlzaWJsZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNjcm9sbFRvVG9wKCl9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwXCI+PC9pPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR29Ub3AiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpc192aXNpYmxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxDb21wb25lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2V0U3RhdGUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/flaticon.css */ \"./styles/flaticon.css\");\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/fontawesome.min.css */ \"./styles/fontawesome.min.css\");\n/* harmony import */ var _styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\n\n\n\n\n\n\n\n\n\n\n// Global Styles\n\n\n\n\nfunction App({ Component, pageProps }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\pages\\\\_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mergen Robotics\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                scrollStepInPx: \"50\",\n                delayInMs: \"10.50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iTEK\\\\Downloads\\\\themeforest-JcPZFlYs-bariton-react-next-it-machine-learning-template\\\\bariton-it-machine-learning-react-nextjs-template\\\\using-pages-router-with-javascript\\\\pages\\\\_app.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0o7QUFDb0I7QUFDTDtBQUNMO0FBQ087QUFDb0I7QUFDdkM7QUFDTztBQUUzQixnQkFBZ0I7QUFDYTtBQUNLO0FBRUw7QUFDa0I7QUFFaEMsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRE4sc0RBQWUsQ0FBQztRQUNkQywrQ0FBUTtJQUNWLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ0MsbURBQUlBOztrQ0FDSCw4REFBQ087d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7OztrQ0FFViw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ1A7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUd4Qiw4REFBQ0gsaUVBQUtBO2dCQUFDVSxnQkFBZTtnQkFBS0MsV0FBVTs7Ozs7Ozs7QUFHM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXJpdG9uLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2ZsYXRpY29uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnRhd2Vzb21lLm1pbi5jc3NcIjtcbmltcG9ydCBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvYnVuZGxlXCI7XG5cbi8vIEdsb2JhbCBTdHlsZXNcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9yZXNwb25zaXZlLmNzc1wiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgR29Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPk1lcmdlbiBSb2JvdGljczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgey8qIEdvIFRvcCBCdXR0b24gKi99XG4gICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCI1MFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFPUyIsIkhlYWQiLCJHb1RvcCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImluaXQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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