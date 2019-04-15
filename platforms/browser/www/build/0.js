webpackJsonp([0],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageModule", function() { return SliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderPageModule = /** @class */ (function () {
    function SliderPageModule() {
    }
    SliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slider__["a" /* SliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slider__["a" /* SliderPage */]),
            ],
        })
    ], SliderPageModule);
    return SliderPageModule;
}());

//# sourceMappingURL=slider.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderPage = /** @class */ (function () {
    function SliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SliderPage.prototype.ionViewDidLoad = function () {
    };
    SliderPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], SliderPage.prototype, "Slides", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\slider\slider.html"*/'\n<ion-content class="getstart">\n\n<ion-slides pager="true" class="swiper-pagination-bullet-active" style= "background-color:#0071ae ;color: white">\n\n<ion-slide style="background-color:#0071ae ;color: white">\n    <ion-img width="350" height="90"  style="background-color:#0071ae;color: white"  src="./assets/imgs/مرحبا بكم.jpg"></ion-img>\n    <h1> مرحباً بكم</h1>\n  <p>\n      تجتهد إدارة الاكاديمية السويدية للتدريب الرياضي في تعريب وتطوير منظومات دراسية و بحثية متميزة باللغة العربية في ميدان العلوم الرياضية المعاصرة و إعادة صياغتها بما ينسجم مع متطلبات الطالب و الباحث العربي واللغة العربية كعامل أساسي للإبداع والتحصيل والبحث العلمي في مجالات الرياضة وتطبيقاتها \n  </p>\n  <p>يقوم النهج الفكري و التطبيقي في الاكاديمية السويدية للتدريب الرياضي على مجموعة من المرتكزات والثوابت المنهجية التي تقوم بنظم استراتيجيات العمل القريبة والبعيدة ، كما تشكل تلك المرتكزات الأدوات الأساسية التي تستخدمها إدارات وأقسام الأكاديمية لتنفيذ حزمة الأهداف التنويرية التي تسعى إليها في الوطن العربي</p>\n</ion-slide>\n\n<ion-slide  style="background-color:#0071ae;color: white">\n\n   \n  \n    <ion-img  width="350" height="90" style="background-color:#0071ae;color: white"  src="./assets/imgs/مميزاتنا.jpg"></ion-img>\n    <h4> مميزاتنا</h4>\n    <p>\n     تتمتع الأكاديمية السويدية للتدريب الرياضي  بالعديد من المزايا الاستثنائية سواء في نظامها التعليمي الفريد أو برامجها التدريبية النوعية أو البنية الإدارية و الإشرافية الرفيعة .\n    </p>\n       <p> +19 مدرب جاهز <ion-img  width="40" height="40"  style="background-color:#0071ae;color: white"  src="./assets/imgs/weightlifting_1.png"></ion-img></p>\n  <p> +16  كتاب للاكاديمية <ion-img width="40" height="40" style="background-color:#0071ae;color: white"   src="./assets/imgs/open_book.png"></ion-img></p>\n   <p> 5150 طالب مسجل <ion-img width="40" height="40" style="background-color:#0071ae;color: white"  src="./assets/imgs/weightlifting_2.png"></ion-img></p>\n   <p> 104 برنامج تدريبي <ion-img width="40" height="40" style="background-color:#0071ae;color: white"  src="./assets/imgs/heart_beats.png"></ion-img></p>\n\n   </ion-slide>\n  <ion-slide style="background-color:#0071ae;color: white">\n      <ion-img width="350" height="90"  style="background-color:#0071ae;color: white"  src="./assets/imgs/اهدافنا.jpg"></ion-img>\n      <h3>أهدافنا</h3>\n      <p>تجتهد إدارة الاكاديمية السويدية للتدريب الرياضي في تعريب وتطوير منظومات دراسية و بحثية متميزة باللغة العربية في ميدان العلوم الرياضية المعاصرة و إعادة صياغتها بما ينسجم مع متطلبات الطالب و الباحث العربي واللغة العربية كعامل أساسي للإبداع والتحصيل والبحث العلمي في مجالات الرياضة وتطبيقاتها</p>\n\n      <button ion-button  (click)="home()" class="buttom"> الرئيسية </button>\n    </ion-slide>\n</ion-slides>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mariam\Desktop\Stage_swedish-academy\Swedish-academy\src\pages\slider\slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ })

});
//# sourceMappingURL=0.js.map