webpackJsonp([17],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallcontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
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
    function CallcontactPage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.subject = '';
        this.body = '';
        this.to = '';
        this.name = '';
        this.phone = '';
    }
    CallcontactPage.prototype.send = function () {
        var email = {
            to: 'mariam.cheikh@esprit.tn',
            cc: [],
            bcc: [],
            attachement: [],
            subject: this.subject,
            body: this.body + '   Sent by ' + this.name + '' + this.phone,
            isHtml: false,
            app: "Gmail"
        };
        this.emailComposer.open(email);
    };
    CallcontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallcontactPage');
    };
    CallcontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-callcontact',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\callcontact\callcontact.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>اتصل بنا</ion-title>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content padding class="getstart">\n\n      <ion-list inset class="transparentinput">\n\n          <ion-item class="transparentinput">\n     \n            <ion-label dir="rtl" color="light" style="font-weight:bold;" color="light" stacked>الاسم بالكامل * </ion-label>\n            <ion-input type="text" [(ngModel)]="name" placeholder="الاسم بالكامل" style="font-weight:bold;" color="light" dir="rtl" required></ion-input>\n          </ion-item>\n        \n          <ion-item class="transparentinput">\n           \n            <ion-label dir="rtl" color="primary" style="font-weight:bold;" color="light" stacked>البريد الإلكتروني* </ion-label>\n            <ion-input  [(ngModel)]="to" type="email" placeholder="البريد الإلكتروني*" style="font-weight:bold;" color="light" dir="rtl" required></ion-input>\n\n          </ion-item >\n\n          <ion-item class="transparentinput">\n\n              <ion-label dir="rtl" color="primary" style="font-weight:bold;" color="light" stacked> الهاتف* </ion-label>\n            <ion-input type="phone" [(ngModel)]="phone" placeholder=" الهاتف*" style="font-weight:bold;" color="light" dir="rtl" required></ion-input>\n\n            </ion-item>\n\n            <ion-item class="transparentinput">\n\n                <ion-label dir="rtl" color="primary" style="font-weight:bold;" color="light" stacked> الموضوع* </ion-label>\n                <ion-input [(ngModel)]="subject" type="text" placeholder=" الموضوع*" dir="rtl" style="font-weight:bold;" color="light" required></ion-input>\n           </ion-item>\n\n\n\n\n              <ion-item class="transparentinput" >\n\n                  <ion-label dir="rtl"  style="font-weight:bold;" color="light" stacked> رسالتك* </ion-label>\n                  <ion-textarea [(ngModel)]="body" type="textarea" placeholder=" رسالتك*"  style="font-weight:bold;" color="light" dir="rtl" required ></ion-textarea>\n\n                </ion-item>\n\n\n                \n                <ion-item class="transparentinput" >\n                  <button ion-button  round block  class="mybutton"  (click)="send()"   item-end>أرسل</button>\n                  </ion-item>\n        </ion-list>\n\n\n    </ion-content>\n    \n   \n\n\n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\callcontact\callcontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], CallcontactPage);
    return CallcontactPage;
}());

//# sourceMappingURL=callcontact.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurriculumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurriculumPage = /** @class */ (function () {
    function CurriculumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CurriculumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurriculumPage');
    };
    CurriculumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curriculum',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\curriculum\curriculum.html"*/'<!--\n  Generated template for the CurriculumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>المنهج الدراسي </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n\n<ion-content padding class="getstart">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\curriculum\curriculum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CurriculumPage);
    return CurriculumPage;
}());

//# sourceMappingURL=curriculum.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>كلمة العبور</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="getstart">\n    <ion-item class="transparentinput">\n    <ion-label dir="rtl" color="light" stacked>من فضلك إدخل البريد الألكترونى الخاص بك لأستعادة كلمة السر </ion-label>\n    <ion-input type="email" placeholder="البريد الألكترونى" dir="rtl" required></ion-input>\n  </ion-item>\n\n  <ion-item class="transparentinput">\n    <button  round block class="mybutton" ion-button dir="rtl"   item-end>دخول</button>\n    </ion-item>\n  </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the CoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachPage = /** @class */ (function () {
    function CoachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CoachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoachPage');
    };
    CoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\coach\coach.html"*/'<!--\n  Generated template for the CoachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>الاساتذة </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="getstart">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\coach\coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CoachPage);
    return CoachPage;
}());

//# sourceMappingURL=coach.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatacontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DatacontactPage);
    return DatacontactPage;
}());

//# sourceMappingURL=datacontact.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infocourse_infocourse__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curriculum_curriculum__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forum_forum__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exams_exams__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coach_coach__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rate_rate__ = __webpack_require__(113);
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
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__infocourse_infocourse__["a" /* InfocoursePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__curriculum_curriculum__["a" /* CurriculumPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__forum_forum__["a" /* ForumPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__exams_exams__["a" /* ExamsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__coach_coach__["a" /* CoachPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_7__rate_rate__["a" /* RatePage */];
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\details\details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-tabs>\n    \n    <ion-tab [root]="tab6Root" tabTitle="تقييمات الدورة"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="الاساتذة"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="الامتحانات"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="المناقشات"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="المنهج الدراسي"></ion-tab>\n    <ion-tab [root]="tab1Root" tabTitle="معلومات الدورة"></ion-tab>\n    \n  \n  </ion-tabs>\n  '/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfocoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the InfocoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfocoursePage = /** @class */ (function () {
    function InfocoursePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfocoursePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfocoursePage');
    };
    InfocoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infocourse',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\infocourse\infocourse.html"*/'<!--\n  Generated template for the InfocoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>معلومات الدورة </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="getstart">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\infocourse\infocourse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InfocoursePage);
    return InfocoursePage;
}());

//# sourceMappingURL=infocourse.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumPage');
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forum',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\forum\forum.html"*/'<!--\n  Generated template for the ForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> المناقشات </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding class="getstart">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\forum\forum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamsPage = /** @class */ (function () {
    function ExamsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamsPage');
    };
    ExamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exams',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\exams\exams.html"*/'<!--\n  Generated template for the ExamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> الامتحانات </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="getstart">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\exams\exams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ExamsPage);
    return ExamsPage;
}());

//# sourceMappingURL=exams.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatePage = /** @class */ (function () {
    function RatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatePage');
    };
    RatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rate',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\rate\rate.html"*/'<!--\n  Generated template for the RatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> تقييمات الدورة </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="getstart">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\rate\rate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profilfb_profilfb__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(82);
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
    function LoginPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.userData = { "username": "", "password": "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.forgotemail = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    LoginPage.prototype.loginWithFB = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profilfb_profilfb__["a" /* ProfilfbPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.postData(this.userData, 'login').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                console.log(_this.responseData);
                localStorage.setItem('userData', JSON.stringify(_this.responseData));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilPage */]);
            }
            else {
                console.log("error");
            }
        }, function (err) {
            // Error log
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\login\login.html"*/' <ion-header>\n\n  <ion-navbar>\n    <ion-title>دخول</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="getstart" >\n\n    <ion-list inset class="transparentinput">\n\n        <ion-item class="transparentinput">\n          <ion-label   dir="rtl"  color="light" stacked>اسم المستخدم او البريد الإلكتروني او رقم الجوال * </ion-label>\n          <ion-input type="text"  dir="rtl" placeholder=" اسم المستخدم او البريد الإلكتروني او رقم الجوال" required  [(ngModel)]="userData.username"></ion-input>\n        </ion-item>\n      \n        <ion-item  class="transparentinput">\n         <ion-label   dir="rtl" color="light" stacked>كلمة المرور* </ion-label>\n          <ion-input  dir="rtl" type="password" placeholder="كلمة المرور*" required [(ngModel)]="userData.password" ></ion-input>\n        </ion-item>\n         <ion-item class="transparentinput">\n                <ion-label  dir="rtl">تذكرني</ion-label>\n                <ion-checkbox color="light" dir="rtl" ></ion-checkbox>\n              </ion-item>\n    \n        <!-- <a button  dir="rtl" class="a" href="forgotemail()" (click)="forgotemail()"  color="light" > هل نسيت كلمة العبور؟</a>-->\n       \n              <button ion-button  round block  dir="rtl"  (click)="login()" class="mybutton"> دخول </button>\n              <button ion-button  round block  dir="rtl"  (click)="loginWithFB()" class="mybutton"> دخول عبر فيسبوك</button>\n              <button ion-button round block   dir="rtl" href  (click)="forgotemail()" class="mybutton"> هل نسيت كلمة العبور؟</button>\n              \n              <!-- <ion-card *ngIf="userData">\n                <ion-card-header>{{ userData.username }}</ion-card-header>\n                <img [src]="userData.picture" />\n                <ion-card-content>\n                  <p>Email: {{ userData.email }}</p>\n                  <p>First Name: {{ userData.first_name }}</p>\n                </ion-card-content>\n              </ion-card> -->\n             \n            </ion-list>\n\n</ion-content>\n\n\n\n\n\n\n '/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilfbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(172);
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
 * Generated class for the ProfilfbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilfbPage = /** @class */ (function () {
    function ProfilfbPage(navCtrl, navParams, facebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
    }
    ProfilfbPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilfbPage');
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    };
    ProfilfbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilfb',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\profilfb\profilfb.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>حسابي </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="getstart">\n\n\n  <h1 dir="rtl" > مرحباً بك في حسابك</h1>\n  <ion-card dir="rtl" *ngIf="userData" >\n    <ion-card-header dir="rtl">{{ userData.username }}</ion-card-header>\n    <img dir="rtl" [src]="userData.picture" />\n    <ion-card-content dir="rtl" >\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n  </ion-card>\n \n</ion-content>'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\profilfb\profilfb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], ProfilfbPage);
    return ProfilfbPage;
}());

//# sourceMappingURL=profilfb.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_profil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(82);
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
    function RegisterPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
    }
    RegisterPage.prototype.signup = function () {
        var _this = this;
        this.authService.postData(this.userData, 'signup').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                console.log(_this.responseData);
                localStorage.setItem('userData', JSON.stringify(_this.responseData));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__profil_profil__["a" /* ProfilPage */]);
            }
            else {
                console.log("error");
            }
        }, function (err) {
            // Error log
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>تسجيل</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding   color="light" style="font-weight:bold;" class="getstart">\n\n    <ion-list inset class="transparentinput">\n\n\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>اختر اسم مستخدم * </ion-label>\n        <ion-input type="text"  dir="rtl" placeholder=" اسم المستخدم " required [(ngModel)]="userData.name" ></ion-input>\n      </ion-item>\n\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>البريد الإلكتروني * </ion-label>\n        <ion-input type="text"  dir="rtl"   placeholder=" البريد الإلكتروني " required [(ngModel)]="userData.email"></ion-input>\n      </ion-item>\n  \n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>اختر كلمة المرور * </ion-label>\n        <ion-input type="text"    dir="rtl" placeholder=" اختر كلمة المرور " required [(ngModel)]="userData.password"></ion-input>\n      </ion-item>\n      <ion-item class="transparentinput">\n        <ion-label   dir="rtl"  color="light" stacked>اختر اسم مستخدم * </ion-label>\n        <ion-input type="text"    dir="rtl" placeholder=" اسم المستخدم " required [(ngModel)]="userData.username"></ion-input>\n      </ion-item>\n\n     \n\n     \n      <ion-item class="transparentinput">\n        <ion-label  dir="rtl">أوفق علي الشروط والأحكام </ion-label>\n        <ion-checkbox color="light" dir="rtl" ></ion-checkbox>\n      </ion-item>\n                       \n              <button  round block dir="rtl" ion-button   (click)="signup()"  class="mybutton">تسجيل</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabslogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(116);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabslogPage);
    return TabslogPage;
}());

//# sourceMappingURL=tabslog.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabslog_tabslog__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(40);
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
        if (localStorage.getItem('userData')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilPage */]);
        }
    }
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabslog_tabslog__["a" /* TabslogPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الرئيسية </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding    style="font-weight:bold;" class="getstart"  >\n  <h3 dir="rtl">  SAST مرحبا بكم في  </h3>\n<br>\n<ion-img dir="rtl"  width="300" height="100" src="./assets/imgs/SASTTTT.png" style="background: transparent;\nalign-items: center;"    ></ion-img>\n  <p dir="rtl">\nلطالما كان هدف الاكاديمية السويدية للتدريب الرياضي  والمجلس العالمي للعلوم الرياضية في السويد  أن نكون في طليعة المؤسسات التدريبية العاملة في تطوير العلوم الرياضية، وقد سعينا منذ البداية إلى ترسيخ سمعتنا عبر تقديم الدورات التدريبية الأعلى جودة في المنطقة العربية\n </p>\n\n  <button ion-button dir="rtl"   round block (click)="login()" class="mybutton">إبدأ الأن</button>\n  <p>\n  الأكاديمية السويدية للتدريب الرياضي  حاصلة على أعلى مستوى من الاعتماد الدولي. حيث تتمتع جميع البرامج الرياضية التدريبية التي تنفذها الأكاديمية السويدية للتدريب الرياضي  و دون أي استثناء، بأعلى مستوى من الاعتماد الدولي والمصادقات للشهادات الصادرة من المملكة السويدية والمتمثل في الاعتماد الدولي و المصادقات الكاملة من الجهات التالية\n\n  </p>\n  <ion-img dir="rtl" width="250" height="150" src="./assets/imgs/EA.png" style="background: transparent;"  ></ion-img>\n    <ion-img dir="rtl" width="230" height="160" src="./assets/imgs/EREPS.png" style="background: transparent" ></ion-img>\n   <ion-img  dir="rtl" width="230" height="230" src="./assets/imgs/GCSS.png" style="background: transparent" ></ion-img>\n  <ion-img dir="rtl" width="230" height="70" src="./assets/imgs/ICSSPE.png" style="background: transparent" ></ion-img>\n    <ion-img dir="rtl" width="230" height="200" src="./assets/imgs/IASE.png" style="background: transparent" ></ion-img>\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabscontactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datacontact_datacontact__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__callcontact_callcontact__ = __webpack_require__(104);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabscontactPage);
    return TabscontactPage;
}());

//# sourceMappingURL=tabscontact.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/callcontact/callcontact.module": [
		299,
		34
	],
	"../pages/coach/coach.module": [
		302,
		33
	],
	"../pages/contact/contact.module": [
		301,
		32
	],
	"../pages/curriculum/curriculum.module": [
		300,
		31
	],
	"../pages/datacontact/datacontact.module": [
		303,
		30
	],
	"../pages/details/details.module": [
		304,
		29
	],
	"../pages/exams/exams.module": [
		305,
		28
	],
	"../pages/forum/forum.module": [
		311,
		27
	],
	"../pages/infocourse/infocourse.module": [
		306,
		26
	],
	"../pages/login/login.module": [
		307,
		25
	],
	"../pages/profilfb/profilfb.module": [
		315,
		24
	],
	"../pages/rate/rate.module": [
		309,
		23
	],
	"../pages/register/register.module": [
		310,
		22
	],
	"../pages/slider/slider.module": [
		313,
		19
	],
	"../pages/tabscontact/tabscontact.module": [
		314,
		21
	],
	"../pages/tabslog/tabslog.module": [
		312,
		20
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(109);
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
        // If we navigated to this page, we will have an item available as a nav param
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    /*itemTapped(event, item) {
      // That's right, we're pushing to ourselves!
      this.navCtrl.push(ListPage, {
        item: item
      });
    }*/
    ListPage.prototype.details = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>الدورات</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n    <ion-content padding class="getstart" >\n\n        <ion-card (click)="details()"   >\n            <img  src="./assets/imgs/nin-live.png"/>\n            <ion-card-content>\n              <ion-card-title>\n                Nine Inch Nails Live\n                </ion-card-title>\n              <p>\n                The most popular industrial group ever, and largely\n                responsible for bringing the music to a mass audience.\n              </p>\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card (click)="details()"   >\n              <img  src="./assets/imgs/nin-live.png"/>\n              <ion-card-content>\n                <ion-card-title>\n                  Nine Inch Nails Live\n                  </ion-card-title>\n                <p>\n                  The most popular industrial group ever, and largely\n                  responsible for bringing the music to a mass audience.\n                </p>\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card (click)="details()">\n                <img  src="./assets/imgs/nin-live.png"/>\n                <ion-card-content>\n                  <ion-card-title>\n                    Nine Inch Nails Live\n                    </ion-card-title>\n                  <p>\n                    The most popular industrial group ever, and largely\n                    responsible for bringing the music to a mass audience.\n                  </p>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card (click)="details()" >\n                  <img  src="./assets/imgs/nin-live.png"/>\n                  <ion-card-content>\n                    <ion-card-title>\n                      Nine Inch Nails Live\n                      </ion-card-title>\n                    <p>\n                      The most popular industrial group ever, and largely\n                      responsible for bringing the music to a mass audience.\n                    </p>\n                  </ion-card-content>\n                </ion-card>\n\n             \n      </ion-content>\n    \n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profilfb_profilfb__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabslog_tabslog__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_datacontact_datacontact__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_callcontact_callcontact__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabscontact_tabscontact__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_details_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_infocourse_infocourse__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_curriculum_curriculum__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forum_forum__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_exams_exams__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_coach_coach__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_auth_service__ = __webpack_require__(82);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabslog_tabslog__["a" /* TabslogPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_datacontact_datacontact__["a" /* DatacontactPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_callcontact_callcontact__["a" /* CallcontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabscontact_tabscontact__["a" /* TabscontactPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_infocourse_infocourse__["a" /* InfocoursePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_curriculum_curriculum__["a" /* CurriculumPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_exams_exams__["a" /* ExamsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profilfb_profilfb__["a" /* ProfilfbPage */]
                //SliderPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                    links: [
                        { loadChildren: '../pages/callcontact/callcontact.module#CallcontactPageModule', name: 'CallcontactPage', segment: 'callcontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curriculum/curriculum.module#CurriculumPageModule', name: 'CurriculumPage', segment: 'curriculum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach/coach.module#CoachPageModule', name: 'CoachPage', segment: 'coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datacontact/datacontact.module#DatacontactPageModule', name: 'DatacontactPage', segment: 'datacontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exams/exams.module#ExamsPageModule', name: 'ExamsPage', segment: 'exams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infocourse/infocourse.module#InfocoursePageModule', name: 'InfocoursePage', segment: 'infocourse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate/rate.module#RatePageModule', name: 'RatePage', segment: 'rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabslog/tabslog.module#TabslogPageModule', name: 'TabslogPage', segment: 'tabslog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabscontact/tabscontact.module#TabscontactPageModule', name: 'TabscontactPage', segment: 'tabscontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilfb/profilfb.module#ProfilfbPageModule', name: 'ProfilfbPage', segment: 'profilfb', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabslog_tabslog__["a" /* TabslogPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_datacontact_datacontact__["a" /* DatacontactPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_callcontact_callcontact__["a" /* CallcontactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_datacontact_datacontact__["a" /* DatacontactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabscontact_tabscontact__["a" /* TabscontactPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_infocourse_infocourse__["a" /* InfocoursePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_curriculum_curriculum__["a" /* CurriculumPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forum_forum__["a" /* ForumPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_exams_exams__["a" /* ExamsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profilfb_profilfb__["a" /* ProfilfbPage */]
                // SliderPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabscontact_tabscontact__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ContactPage } from '../pages/contact/contact';


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\app\app.html"*/'\n<div *ngIf="showSplash" class="splash">\n    <div class="spinner"></div>\n  </div> \n\n\n<ion-menu [content]="content"  class="getstart">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>القائمة </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list  >\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
    }
    // or WelcomePage or else...
    ProfilPage.prototype.backToWelcome = function () {
        this.navCtrl.setRoot(this.rootPage);
    };
    /*
    backToWelcome(){
    
       // const root = this.app.getRootNavs()[5]
         //root.popToRoot();
    }*/
    ProfilPage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 2000);
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\profil\profil.html"*/'\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>حسابي </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n<ion-content padding class="getstart">\n    <h1 dir="rtl" > مرحباً بك في حسابك</h1>\n     <h2 dir="rtl" >مرحباً {{userDetails.name}}</h2>\n     <h3 dir="rtl" >البريد الكتروني: {{userDetails.email}}</h3>\n     <h3 dir="rtl" >اسم المستخدم: {{userDetails.username}}</h3>\n\n     <button ion-button round block  dir="rtl"  class="mybutton" (click)="logout()">خروج</button>\n   </ion-content>'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _b || Object])
    ], ProfilPage);
    return ProfilPage;
    var _a, _b;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://192.168.1.7/PHP-Slim-Restful/api/';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map