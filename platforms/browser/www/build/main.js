webpackJsonp([9],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CallcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallcontactPage = /** @class */ (function () {
    function CallcontactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CallcontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallcontactPage');
    };
    CallcontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-callcontact',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\callcontact\callcontact.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>اتصل بنا</ion-title>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content padding class="getstart">\n\n      <ion-list inset class="transparentinput">\n\n          <ion-item class="transparentinput">\n     \n            <ion-label dir="rtl" color="light" style="font-weight:bold;" color="light" stacked>الاسم بالكامل * </ion-label>\n            <ion-input type="text" placeholder="الاسم بالكامل" style="font-weight:bold;" color="light" dir="rtl" required></ion-input>\n          </ion-item>\n        \n          <ion-item class="transparentinput">\n           \n            <ion-label dir="rtl" color="primary" style="font-weight:bold;" color="light" stacked>البريد الإلكتروني* </ion-label>\n            <ion-input type="email" placeholder="البريد الإلكتروني*" style="font-weight:bold;" color="light" dir="rtl" required></ion-input>\n\n          </ion-item >\n\n          <ion-item class="transparentinput">\n\n              <ion-label dir="rtl" color="primary" style="font-weight:bold;" color="light" stacked> الهاتف* </ion-label>\n            <ion-input type="phone" placeholder=" الهاتف*" style="font-weight:bold;" color="light" dir="rtl" required></ion-input>\n\n            </ion-item>\n\n            <ion-item class="transparentinput">\n\n                <ion-label dir="rtl" color="primary" style="font-weight:bold;" color="light" stacked> الموضوع* </ion-label>\n                <ion-input type="text" placeholder=" الموضوع*" dir="rtl" style="font-weight:bold;" color="light" required></ion-input>\n           </ion-item>\n\n\n\n\n              <ion-item class="transparentinput" >\n\n                  <ion-label dir="rtl"  style="font-weight:bold;" color="light" stacked> رسالتك* </ion-label>\n                  <ion-textarea type="textarea" placeholder=" رسالتك*"  style="font-weight:bold;" color="light" dir="rtl" required ></ion-textarea>\n\n                </ion-item>\n\n                <ion-item class="transparentinput" >\n                  <button ion-button  class="mybutton"   item-end>أرسل</button>\n                  </ion-item>\n        </ion-list>\n\n\n    </ion-content>\n    \n   \n\n\n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\callcontact\callcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CallcontactPage);
    return CallcontactPage;
}());

//# sourceMappingURL=callcontact.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>كلمة العبور</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="getstart">\n    <ion-item class="transparentinput">\n    <ion-label dir="rtl" color="light" stacked>من فضلك إدخل البريد الألكترونى الخاص بك لأستعادة كلمة السر </ion-label>\n    <ion-input type="email" placeholder="البريد الألكترونى" dir="rtl" required></ion-input>\n  </ion-item>\n\n  <ion-item class="transparentinput">\n    <button class="mybutton" ion-button dir="rtl"   item-end>دخول</button>\n    </ion-item>\n  </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DatacontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DatacontactPage = /** @class */ (function () {
    function DatacontactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DatacontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatacontactPage');
    };
    DatacontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datacontact',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\datacontact\datacontact.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>بيانات التواصل</ion-title>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n  \n    </ion-navbar>\n\n  </ion-header>\n    \n  <ion-content padding  class="getstart">\n    <h1 dir="rtl" >مكتب السويد <ion-img   dir="rtl" style="background-color:transparent;color: white"  src="./assets/imgs/sweden.png"></ion-img></h1>\n\n<p dir="rtl">Svärmaregatan 3 , 60361 Norrköping , Sweden</p>\n<p dir="rtl">0046767045506</p>\n<p dir="rtl"> 9AM - 6PM توقيت السويد</p>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2079.9513889347013!2d16.233242!3d58.579512099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46593b1cdb43a225%3A0x614c8fbe14b63e7f!2zU3bDpHJtYXJlZ2F0YW4gMywgNjAzIDYxIE5vcnJrw7ZwaW5nLCBTdcOoZGU!5e0!3m2!1sfr!2stn!4v1531692983579" width="300" height="250" frameborder="0" style="border:0" align="right" llowfullscreen></iframe>\n\n<br>\n<br>\n    <h1 dir="rtl">مكتب تونس <ion-img  dir="rtl"  style="background-color:transparent;color: white"  src="./assets/imgs/tunisia.png"></ion-img></h1>\n    <p dir="rtl" >Avenue de la Bourse – Lys building, 1st floor swedish ,academy office, Les Berges du Lac II 1053</p>\n    <p dir="rtl">00216 29 633 663</p>\n<p dir="rtl"> 9AM - 6PM توقيت تونس</p>\n<p dir="rtl">info@swedish-academy.se</p>\n\n<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.3719783090442!2d10.266792701584103!3d36.847873731630074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4aac1800ec89%3A0x6d300936fe5ea901!2sEagles+Consulting+%26+Services!5e0!3m2!1sfr!2stn!4v1531611737600" width="300" height="250" frameborder="0" style="border:0" align="right"   allowfullscreen></iframe>   \n    </ion-content>'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\datacontact\datacontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DatacontactPage);
    return DatacontactPage;
}());

//# sourceMappingURL=datacontact.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>تسجيل</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding   color="light" style="font-weight:bold;" class="getstart">\n\n    <ion-list inset class="transparentinput">\n\n\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>اختر اسم مستخدم * </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" اسم المستخدم " required></ion-input>\n      </ion-item>\n\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>البريد الإلكتروني * </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" البريد الإلكتروني " required></ion-input>\n      </ion-item>\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>رقم الجوال  * </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" رقم الجوال  " required></ion-input>\n      </ion-item>\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>اختر كلمة المرور * </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" اختر كلمة المرور " required></ion-input>\n      </ion-item>\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>اختر اسم مستخدم * </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" اسم المستخدم " required></ion-input>\n      </ion-item>\n\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>تأكيد كلمة المرور* </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" تأكيد كلمة المرور " required></ion-input>\n      </ion-item>\n\n     \n      <ion-item class="transparentinput">\n        <ion-label  dir="rtl">أوفق علي الشروط والأحكام </ion-label>\n        <ion-checkbox color="light" dir="rtl" ></ion-checkbox>\n      </ion-item>\n                       \n              <button  dir="rtl" ion-button  class="mybutton">تسجيل</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabslog_tabslog__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabslog_tabslog__["a" /* TabslogPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الرئيسية </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding    style="font-weight:bold;" class="getstart"  >\n  <h3 dir="rtl">  SAST مرحبا بكم في  </h3>\n<br>\n<ion-img dir="rtl"  width="300" height="100" src="./assets/imgs/SASTTTT.png" style="background: transparent;\nalign-items: center;"    ></ion-img>\n  <p dir="rtl">\nلطالما كان هدف الاكاديمية السويدية للتدريب الرياضي  والمجلس العالمي للعلوم الرياضية في السويد  أن نكون في طليعة المؤسسات التدريبية العاملة في تطوير العلوم الرياضية، وقد سعينا منذ البداية إلى ترسيخ سمعتنا عبر تقديم الدورات التدريبية الأعلى جودة في المنطقة العربية\n </p>\n\n  <button ion-button dir="rtl"  (click)="login()" class="mybutton">إبدأ الأن</button>\n  <p>\n  الأكاديمية السويدية للتدريب الرياضي  حاصلة على أعلى مستوى من الاعتماد الدولي. حيث تتمتع جميع البرامج الرياضية التدريبية التي تنفذها الأكاديمية السويدية للتدريب الرياضي  و دون أي استثناء، بأعلى مستوى من الاعتماد الدولي والمصادقات للشهادات الصادرة من المملكة السويدية والمتمثل في الاعتماد الدولي و المصادقات الكاملة من الجهات التالية\n\n  </p>\n  <ion-img dir="rtl" width="250" height="150" src="./assets/imgs/EA.png" style="background: transparent;"  ></ion-img>\n    <ion-img dir="rtl" width="230" height="160" src="./assets/imgs/EREPS.png" style="background: transparent" ></ion-img>\n   <ion-img  dir="rtl" width="230" height="230" src="./assets/imgs/GCSS.png" style="background: transparent" ></ion-img>\n  <ion-img dir="rtl" width="230" height="70" src="./assets/imgs/ICSSPE.png" style="background: transparent" ></ion-img>\n    <ion-img dir="rtl" width="230" height="200" src="./assets/imgs/IASE.png" style="background: transparent" ></ion-img>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabslogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabslogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabslogPage = /** @class */ (function () {
    function TabslogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
    }
    TabslogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabslogPage');
    };
    TabslogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabslog',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\tabslog\tabslog.html"*/'<!--\n  Generated template for the TabslogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="دخول" tabIcon="md-contact"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="تسجيل" tabIcon="clipboard"></ion-tab>\n  \n  </ion-tabs>\n  \n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\tabslog\tabslog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabslogPage);
    return TabslogPage;
}());

//# sourceMappingURL=tabslog.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    // userData: any;
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.forgotemail = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    LoginPage.prototype.loginWithFB = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\login\login.html"*/' <ion-header>\n\n  <ion-navbar>\n    <ion-title>دخول</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="getstart" >\n\n    <ion-list inset class="transparentinput">\n\n        <ion-item class="transparentinput">\n          <ion-label   dir="rtl"  color="light" stacked>اسم المستخدم او البريد الإلكتروني او رقم الجوال * </ion-label>\n          <ion-input type="text"  dir="rtl" placeholder=" اسم المستخدم او البريد الإلكتروني او رقم الجوال" required></ion-input>\n        </ion-item>\n      \n        <ion-item  class="transparentinput">\n         <ion-label   dir="rtl" color="light" stacked>كلمة المرور* </ion-label>\n          <ion-input  dir="rtl" type="password" placeholder="كلمة المرور*" required></ion-input>\n        </ion-item>\n         <ion-item class="transparentinput">\n                <ion-label  dir="rtl">تذكرني</ion-label>\n                <ion-checkbox color="light" dir="rtl" ></ion-checkbox>\n              </ion-item>\n    \n        <!-- <a button  dir="rtl" class="a" href="forgotemail()" (click)="forgotemail()"  color="light" > هل نسيت كلمة العبور؟</a>-->\n              <button ion-button   dir="rtl" href  (click)="forgotemail()" class="mybutton"> هل نسيت كلمة العبور؟</button>\n              <button ion-button   dir="rtl"  (click)="loginWithFB()" class="mybutton"> دخول عبر فيسبوك</button>\n              <!-- <ion-card *ngIf="userData">\n                <ion-card-header>{{ userData.username }}</ion-card-header>\n                <img [src]="userData.picture" />\n                <ion-card-content>\n                  <p>Email: {{ userData.email }}</p>\n                  <p>First Name: {{ userData.first_name }}</p>\n                </ion-card-content>\n              </ion-card> -->\n             \n            </ion-list>\n\n</ion-content>\n\n\n\n\n\n\n '/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabscontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datacontact_datacontact__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__callcontact_callcontact__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabscontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabscontactPage = /** @class */ (function () {
    function TabscontactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__datacontact_datacontact__["a" /* DatacontactPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__callcontact_callcontact__["a" /* CallcontactPage */];
    }
    TabscontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabscontactPage');
    };
    TabscontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabscontact',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\tabscontact\tabscontact.html"*/'\n\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="بيانات التواصل" tabIcon="briefcase"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="اتصل بنا" tabIcon="call"></ion-tab>\n  \n  </ion-tabs>\n  \n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\tabscontact\tabscontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabscontactPage);
    return TabscontactPage;
}());

//# sourceMappingURL=tabscontact.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/callcontact/callcontact.module": [
		287,
		8
	],
	"../pages/contact/contact.module": [
		288,
		7
	],
	"../pages/datacontact/datacontact.module": [
		289,
		6
	],
	"../pages/login/login.module": [
		293,
		5
	],
	"../pages/profil/profil.module": [
		295,
		4
	],
	"../pages/register/register.module": [
		290,
		3
	],
	"../pages/slider/slider.module": [
		291,
		0
	],
	"../pages/tabscontact/tabscontact.module": [
		294,
		2
	],
	"../pages/tabslog/tabslog.module": [
		292,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'الدورة ' + i,
                note: 'الدورة' + i + 'شارك الأن',
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الدورات</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="getstart">\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profil_profil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabslog_tabslog__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_datacontact_datacontact__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_callcontact_callcontact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabscontact_tabscontact__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabslog_tabslog__["a" /* TabslogPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datacontact_datacontact__["a" /* DatacontactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_callcontact_callcontact__["a" /* CallcontactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabscontact_tabscontact__["a" /* TabscontactPage */]
                //SliderPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                    links: [
                        { loadChildren: '../pages/callcontact/callcontact.module#CallcontactPageModule', name: 'CallcontactPage', segment: 'callcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datacontact/datacontact.module#DatacontactPageModule', name: 'DatacontactPage', segment: 'datacontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabslog/tabslog.module#TabslogPageModule', name: 'TabslogPage', segment: 'tabslog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabscontact/tabscontact.module#TabscontactPageModule', name: 'TabscontactPage', segment: 'tabscontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabslog_tabslog__["a" /* TabslogPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datacontact_datacontact__["a" /* DatacontactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_callcontact_callcontact__["a" /* CallcontactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datacontact_datacontact__["a" /* DatacontactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabscontact_tabscontact__["a" /* TabscontactPage */]
                // SliderPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabscontact_tabscontact__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'SliderPage';
        this.showSplash = true; // <-- show animation
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'الرئيسية', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'الدورات', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'إتصل بنا', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabscontact_tabscontact__["a" /* TabscontactPage */] },
            { title: 'حسابي', component: __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__["a" /* ProfilPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\app\app.html"*/'\n<div *ngIf="showSplash" class="splash">\n    <div class="spinner"></div>\n  </div> \n\n\n<ion-menu [content]="content"  class="getstart">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>القائمة </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list  >\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams, facebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilPage');
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\profil\profil.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>حسابي </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding  class="getstart">\n\n  <ion-card dir="rtl" *ngIf="userData" >\n    <ion-card-header dir="rtl">{{ userData.username }}</ion-card-header>\n    <img dir="rtl" [src]="userData.picture" />\n    <ion-card-content dir="rtl" >\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n  </ion-card>\n \n</ion-content>'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map