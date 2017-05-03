webpackJsonp([0],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thanks_component__ = __webpack_require__(542);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksModule", function() { return ThanksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThanksModule = (function () {
    function ThanksModule() {
    }
    return ThanksModule;
}());
ThanksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__thanks_component__["a" /* ThanksComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__thanks_component__["a" /* ThanksComponent */], pathMatch: 'full' }
            ])
        ]
    })
], ThanksModule);

//# sourceMappingURL=thanks.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThanksComponent = (function () {
    function ThanksComponent() {
    }
    return ThanksComponent;
}());
ThanksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'thanks',
        template: __webpack_require__(544),
        styles: [__webpack_require__(543)]
    })
], ThanksComponent);

//# sourceMappingURL=thanks.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "h1 {\n    width: 100%;\n    position: absolute;\n    font-size: 50px;\n    top: 50%;\n    margin-top: -25px;\n}\nspan {\n    padding: 20px 40px;\n    border: 1px solid #fff;\n    background: rgba(0,0,0,0.35);\n}"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"txt-center\">\n  <span>Thanks!</span>\n</h1>"

/***/ })

});
//# sourceMappingURL=0.client.js.map