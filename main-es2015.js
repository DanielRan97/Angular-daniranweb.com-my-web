(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/components/mainPage/main-page.module */ "./src/app/components/mainPage/main-page.module.ts")).then(m => m.MainPageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'danielWeb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mainPage_main_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mainPage/main-page.module */ "./src/app/components/mainPage/main-page.module.ts");
/* harmony import */ var _core_mainModules_firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/mainModules/firebase/firebase.module */ "./src/app/core/mainModules/firebase/firebase.module.ts");







_core_mainModules_firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__["FirebaseModule"];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_mainModules_firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__["FirebaseModule"],
            _components_mainPage_main_page_module__WEBPACK_IMPORTED_MODULE_4__["MainPageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_mainModules_firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__["FirebaseModule"],
        _components_mainPage_main_page_module__WEBPACK_IMPORTED_MODULE_4__["MainPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_mainModules_firebase_firebase_module__WEBPACK_IMPORTED_MODULE_5__["FirebaseModule"],
                    _components_mainPage_main_page_module__WEBPACK_IMPORTED_MODULE_4__["MainPageModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/main-page-routing.modules.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/mainPage/main-page-routing.modules.ts ***!
  \******************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_mainPage_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mainPage/main-page.component */ "./src/app/components/mainPage/pages/mainPage/main-page.component.ts");





const routes = [
    { path: '', component: _pages_mainPage_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"], pathMatch: 'full' },
    { path: 'main', component: _pages_mainPage_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] }
];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/main-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mainPage/main-page.module.ts ***!
  \*********************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_page_routing_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page-routing.modules */ "./src/app/components/mainPage/main-page-routing.modules.ts");
/* harmony import */ var _pages_mainPage_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/mainPage/main-page.component */ "./src/app/components/mainPage/pages/mainPage/main-page.component.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/components/mainPage/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_aboutMe_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/aboutMe/about.component */ "./src/app/components/mainPage/pages/aboutMe/about.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/components/mainPage/pages/projects/projects.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/components/mainPage/pages/skills/skills.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/components/mainPage/pages/contact/contact.component.ts");










class MainPageModule {
}
MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageModule_Factory(t) { return new (t || MainPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_page_routing_modules__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_pages_mainPage_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _pages_aboutMe_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_page_routing_modules__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_mainPage_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _pages_aboutMe_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_page_routing_modules__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/pages/aboutMe/about.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/mainPage/pages/aboutMe/about.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 14, vars: 0, consts: [["id", "about"], ["src", "/assets/daniel.jpg"], ["id", "text"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello! My name is Daniel Ran. I live in Kiryat Motzkin, Israel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I started my path in development in 2019 at int College, Tel Aviv.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " My main profession is full stack web developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I created this site to show my main projects.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#about[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n  padding: 10px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  height: 202px;\r\n  width: 203px;\r\n  border-radius: 100%;\r\n  border: 10px solid #ddd;\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-family: 'Unna', serif;\r\n  font-size: 72px;\r\n  color: #4f4f4f;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n#text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluUGFnZS9wYWdlcy9hYm91dE1lL2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsNEVBQTRFOztBQUU5RTs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW5QYWdlL3BhZ2VzL2Fib3V0TWUvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDIwMnB4O1xyXG4gIHdpZHRoOiAyMDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZGRkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdVbm5hJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA3MnB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG5cclxuI3RleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/pages/contact/contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mainPage/pages/contact/contact.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 23, vars: 0, consts: [["id", "contact"], [2, "width", "300px", "display", "inline-block", "margin-left", "auto", "margin-right", "auto"], [1, "fas", "fa-home"], [1, "fas", "fa-envelope"], [1, "fas", "fa-phone"], [1, "fab", "fa-github", 2, "font-size", "20px"], ["href", "https://github.com/DanielRan97"], [1, "fab", "fa-linkedin"], ["href", "https://www.linkedin.com/in/daniel-ran-4b31961b6/"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Kiryat Motzkin, Israel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Daniel.daniel.ran@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 054-2571330");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#contact[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 100px;\r\n    background-color: darkcyan ;\r\n    width: 100%;\r\n    position: absolute;\r\n\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Unna', serif;\r\n    font-size: 72px;\r\n    color: #4f4f4f;\r\n    font-weight: bold;\r\n  \r\n  }\r\n\r\ni[_ngcontent-%COMP%]{\r\n    float: left;\r\n  }\r\n\r\na[_ngcontent-%COMP%]{\r\n    color: black;\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n      color: white;\r\n  }\r\n\r\n@media(max-width : 360px){\r\n      h1[_ngcontent-%COMP%]{\r\n          font-size: 40px;\r\n      }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluUGFnZS9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCOztFQUVuQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtNQUNJLFlBQVk7RUFDaEI7O0FBRUE7TUFDSTtVQUNJLGVBQWU7TUFDbkI7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpblBhZ2UvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW4gO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ1VubmEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgXHJcbiAgfVxyXG5cclxuICBpe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlcntcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aCA6IDM2MHB4KXtcclxuICAgICAgaDF7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/pages/mainPage/main-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/mainPage/pages/mainPage/main-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/components/mainPage/pages/welcome/welcome.component.ts");
/* harmony import */ var _aboutMe_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aboutMe/about.component */ "./src/app/components/mainPage/pages/aboutMe/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/components/mainPage/pages/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/components/mainPage/pages/skills/skills.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/components/mainPage/pages/contact/contact.component.ts");







class MainPageComponent {
    constructor() {
        this.scrollToElement = 'projects';
    }
    scroll(el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 46, vars: 0, consts: [[1, "mainPage"], ["id", "nav"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["id", "navTitle", 1, "navbar-brand", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], [1, "navButton", 3, "click"], ["id", "navIcons"], ["href", "https://github.com/DanielRan97"], [1, "fab", "fa-github", 2, "font-size", "20px"], ["href", "https://www.linkedin.com/in/daniel-ran-4b31961b6/"], [1, "fab", "fa-linkedin"], ["id", "welcome"], ["welcome", ""], ["id", "about"], ["about", ""], ["id", "projects"], ["projects", ""], ["id", "skills"], ["skills", ""], ["id", "contact"], ["contact", ""]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "daniranweb.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.scroll(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.scroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Main Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return ctx.scroll(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.scroll(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _aboutMe_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  background-color: darkcyan !important;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: +1;\r\n}\r\n\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: black;\r\n  margin: 5px;\r\n  font-size: 30px;\r\n\r\n}\r\n\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n\r\n#navIcons[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 28px;\r\n}\r\n\r\n\r\n.navButton[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  color: black;\r\n  position: relative;\r\n  top: 5px;\r\n  left: 45px;\r\n\r\n}\r\n\r\n\r\n.navButton[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n}\r\n\r\n\r\n.navButton[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n\r\n#welcome[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n\r\n@media(max-width : 991px) {\r\n  .navButton[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background: none;\r\n    color: black;\r\n    position: relative;\r\n    top: 5px;\r\n    left: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluUGFnZS9wYWdlcy9tYWluUGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7O0FBRWpCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7O0FBRVo7OztBQUdBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW5QYWdlL3BhZ2VzL21haW5QYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiArMTtcclxufVxyXG5cclxuXHJcbm5hdiBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxufVxyXG5cclxubmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNuYXZJY29ucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjhweDtcclxufVxyXG5cclxuXHJcbi5uYXZCdXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogNDVweDtcclxuXHJcbn1cclxuXHJcblxyXG4ubmF2QnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4ubmF2QnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4jd2VsY29tZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDogOTkxcHgpIHtcclxuICAubmF2QnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/pages/projects/projects.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/mainPage/pages/projects/projects.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 37, vars: 0, consts: [["id", "projects"], ["id", "imgDiv"], ["id", "project1"], ["src", "/assets/caseProject.jpg"], ["href", "https://github.com/DanielRan97/PhoneCover"], [1, "fab", "fa-github"], ["href", "https://github.com/DanielRan97", 2, "display", "block", "font-size", "30px", "margin-top", "10px"], [1, "fab", "fa-github-square"], ["id", "project2"], ["src", "/assets/movieList1.jpg"], ["href", "https://github.com/DanielRan97/Movie-List"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Main project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Phone Covers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Phone cases app with Admin interface : products,orders and news letter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This app was created for a college project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This app was created with Angular for the front-end And c# + fireBase for the back-end.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Link to GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "For more projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Movie List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Movie List app created for collage test. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " in this project you can save favorite movies from imbd and sort by category. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " this app created with Angular for the front-end And fireBase for the back-end.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Link to GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "For more projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#projects[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color:#f3f3f5;\r\n    margin-top: 60px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Unna', serif;\r\n    font-size: 72px;\r\n    color: #4f4f4f;\r\n    font-weight: bold;\r\n  \r\n  }\r\n\r\n#imgDiv[_ngcontent-%COMP%]{\r\n    max-width:900px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: auto;\r\n     max-width: 100%;\r\n  }\r\n\r\nh3[_ngcontent-%COMP%]{\r\n      margin-top: 20px;\r\n  }\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluUGFnZS9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7O0VBRW5COztBQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxZQUFZO0tBQ1gsZUFBZTtFQUNsQjs7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW5QYWdlL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvamVjdHN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ1VubmEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAjaW1nRGl2e1xyXG4gICAgbWF4LXdpZHRoOjkwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaDN7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/pages/skills/skills.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/mainPage/pages/skills/skills.component.ts ***!
  \**********************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SkillsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SkillsComponent {
    constructor() {
        this.skills = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmTcXaqXIR7fTrA1qG4lP4SJmTAYq5_czpeQ&usqp=CAU",
            "data:image/jpeg;base64,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",
            "https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV",
            "https://www.cloudsavvyit.com/p/uploads/2020/02/ba1dae28.png",
            "https://julien.lebunetel.com/dev/CSS_frameworks/images/bootstrap-social.png",
            "https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLrPd1Wp-eNbTQdNoIHYuo2CIUSexSJN90rQ&usqp=CAU",
            "https://5.imimg.com/data5/DC/DG/GLADMIN-43091998/net-training-institute-500x500.png",
            "https://i.pinimg.com/originals/21/88/b3/2188b32bdef2b4d92d0933a31a131b9d.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlACpJ9xebH78SqXXDOogWAJ3_IHfFh68-vQ&usqp=CAU",
            "data:image/png;base64,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",
            "https://cloudblogs.microsoft.com/uploads/prod/sites/32/2020/05/SQL.png"
        ];
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 4, vars: 1, consts: [["id", "skills"], ["style", "display: inline-block;", 4, "ngFor", "ngForOf"], [2, "display", "inline-block"], [3, "src"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#skills[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Unna', serif;\r\n    font-size: 72px;\r\n    color: #4f4f4f;\r\n    font-weight: bold;\r\n  \r\n  }\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  \r\n    height: 183px;\r\n    width: 275px;\r\n    margin: 20px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    \r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover{\r\n\r\n    box-shadow:0 4px 56px 0 rgba(0, 0, 0, 0.2), 0 6px 38px 0 rgba(0, 0, 0, 0.19);\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluUGFnZS9wYWdlcy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCOztFQUVuQjs7QUFFRjs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWiw0RUFBNEU7SUFDNUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUksNEVBQTRFOztBQUVoRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpblBhZ2UvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NraWxsc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVW5uYScsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICBcclxuICB9XHJcblxyXG5pbWd7XHJcbiAgXHJcbiAgICBoZWlnaHQ6IDE4M3B4O1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBcclxufVxyXG5cclxuaW1nOmhvdmVye1xyXG5cclxuICAgIGJveC1zaGFkb3c6MCA0cHggNTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMzhweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mainPage/pages/welcome/welcome.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mainPage/pages/welcome/welcome.component.ts ***!
  \************************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 9, vars: 0, consts: [["id", "welcome"], ["id", "bgcolor"], ["id", "title"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to my website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Daniel Ran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FULL STACK WEB DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#welcome[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: 680px;\r\n  width: 100%;\r\n  background-image: url('https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_1280.jpg');\r\n  background-position: center;\r\n  display: block;\r\n\r\n}\r\n\r\n#bgcolor[_ngcontent-%COMP%] {\r\n  background-color: #ffffffbf;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  margin-top: 300px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-family: 'Unna', serif;\r\n  font-size: 72px;\r\n  color: #4f4f4f;\r\n  font-weight: bold;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-family: 'Unna', serif;\r\n  font-size: 50px;\r\n  color: #4f4f4f;\r\n  font-weight: bold;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  font-family: 'Unna', serif;\r\n  font-size: 30px;\r\n  background-color: darkcyan;\r\n  display: inline-block;\r\n  padding: 1px;\r\n  color: #2c2c2c;\r\n  font-weight: bold;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .downBottub[_ngcontent-%COMP%] {\r\nmargin-top: 20px;\r\n}\r\n\r\n@media (max-width : 441px){\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 64px;\r\n  }\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluUGFnZS9wYWdlcy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLCtGQUErRjtFQUMvRiwyQkFBMkI7RUFDM0IsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFJQTs7RUFFRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpblBhZ2UvcGFnZXMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNjgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAyLzE5LzEwLzAwL2xhcHRvcC0xMjA5MDA4XzEyODAuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuI2JnY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gIG1hcmdpbi10b3A6IDMwMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdVbm5hJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA3MnB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1mYW1pbHk6ICdVbm5hJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1mYW1pbHk6ICdVbm5hJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgY29sb3I6ICMyYzJjMmM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgxICwgaDMgLCBoNSAsIC5kb3duQm90dHViIHtcclxubWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDQ0MXB4KXtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gIH1cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/mainModules/firebase/firebase.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/mainModules/firebase/firebase.module.ts ***!
  \**************************************************************/
/*! exports provided: FirebaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseModule", function() { return FirebaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");






const fireBase = [
    _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"],
    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]
];
class FirebaseModule {
}
FirebaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirebaseModule });
FirebaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirebaseModule_Factory(t) { return new (t || FirebaseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            fireBase
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirebaseModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    fireBase
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAwS0a0kT_oSaZSEB9tXHfIuBSkOnseXRk",
        authDomain: "daniel-s-web.firebaseapp.com",
        databaseURL: "https://daniel-s-web.firebaseio.com",
        projectId: "daniel-s-web",
        storageBucket: "daniel-s-web.appspot.com",
        messagingSenderId: "433321780130",
        appId: "1:433321780130:web:b013a5502f06cc28da48fb",
        measurementId: "G-QYX1TN3Y6S"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Desktop\Development Projects\Daniel's web\danielWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map