webpackJsonp([7],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskmodalPage = /** @class */ (function () {
    function TaskmodalPage(taskServiceProvider, params, viewCtrl, toastCtrl, navCtrl) {
        var _this = this;
        this.taskServiceProvider = taskServiceProvider;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.task = {};
        if (this.params.data.id) {
            this.taskServiceProvider.get(this.params.get('id')).subscribe(function (task) {
                _this.task = task;
                _this.task.href = task._links.self.href;
            });
        }
    }
    TaskmodalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TaskmodalPage');
        setTimeout(function () {
            _this.title.setFocus();
        }, 150);
    };
    TaskmodalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    TaskmodalPage.prototype.save = function (form) {
        var _this = this;
        var update = form['href'];
        this.taskServiceProvider.save(form).subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: 'Task "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
                duration: 2000
            });
            toast.present();
            _this.closeModal();
        }, function (error) { return _this.error = error; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], TaskmodalPage.prototype, "title", void 0);
    TaskmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taskmodal',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\taskmodal\taskmodal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n    <ion-title text-center="">Task Details</ion-title>\n    <ion-buttons end>\n      <button type="submit" ion-button [disabled]="!taskForm.form.valid" (click)="save(taskForm.value)">Save</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <form #taskForm="ngForm" (ngSubmit)="save(taskForm.value)">\n    <input type="hidden" name="href" [(ngModel)]="task.href">\n\n    <ion-list>\n    <ion-list-header>\n      About\n    </ion-list-header>\n    <ion-item>\n      <ion-input type="text" placeholder="Title" name="title" required [(ngModel)]="task.title" #title></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Enter a description"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Date/Time\n    </ion-list-header>\n    <ion-item>\n      <ion-label>All-day</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Starts</ion-label>\n      <ion-datetime displayFormat="D-MMM-YY h:mm A" pickerFormat="DDD MMM YY h mm A" name="startdate" [(ngModel)]="startDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ends</ion-label>\n      <ion-datetime displayFormat="D-MMM-YY h:mm A" pickerFormat="DDD MMM YY h mm A" name="enddate" [(ngModel)]="endDate"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Project Info\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Assign</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Project</ion-label>\n    </ion-item>\n  </ion-list>\n    <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\taskmodal\taskmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__["a" /* TaskServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TaskmodalPage);
    return TaskmodalPage;
}());

//# sourceMappingURL=taskmodal.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskmodal_taskmodal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__taskviewmodal_taskviewmodal__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_task_service_task_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllItemsPage = /** @class */ (function () {
    function AllItemsPage(navCtrl, navparams, modalCtrl, taskServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.modalCtrl = modalCtrl;
        this.taskServiceProvider = taskServiceProvider;
        this.toastCtrl = toastCtrl;
    }
    AllItemsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AllItemsPage');
        this.taskServiceProvider.getMyTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    AllItemsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    AllItemsPage.prototype.openModal = function (Taskid) {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__taskmodal_taskmodal__["a" /* TaskmodalPage */], Taskid);
        myModal.present();
        myModal.onDidDismiss(function () { return _this.ionViewDidLoad(); });
    };
    AllItemsPage.prototype.openviewModal = function (tid) {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__taskviewmodal_taskviewmodal__["a" /* TaskviewmodalPage */], tid);
        myModal.present();
        myModal.onDidDismiss(function () { return _this.ionViewDidLoad(); });
    };
    AllItemsPage.prototype.remove = function (task) {
        var _this = this;
        this.taskServiceProvider.remove(task.id).subscribe(function (response) {
            for (var i = 0; i < _this.tasks.length; i++) {
                if (_this.tasks[i] === task) {
                    _this.tasks.splice(i, 1);
                    var toast = _this.toastCtrl.create({
                        message: 'Task "' + task.title + '" deleted.',
                        duration: 2000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
        });
    };
    AllItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-items',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\all-items\all-items.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>All Items</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let task of tasks">\n      <!--<ion-item (click)="openModal({id: task.id})">-->\n      <ion-item (click)="openviewModal({id: task.id})">\n        <ion-icon name="ios-list-box-outline" item-left></ion-icon>\n        <h2>{{task.title}}</h2>ion\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="remove(task)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab bottom right >\n    <button ion-fab ><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab >\n        <ion-icon name="ios-calendar"></ion-icon>\n        <ion-label>Event</ion-label>\n      </button>\n      <button ion-fab (click)="openModal()">\n        <ion-icon name="ios-list-box"></ion-icon>\n        <ion-label>Task</ion-label>\n      </button>\n      <button ion-fab >\n        <ion-icon name="ios-paper"></ion-icon>\n        <ion-label>Note</ion-label>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\all-items\all-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_task_service_task_service__["a" /* TaskServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AllItemsPage);
    return AllItemsPage;
}());

//# sourceMappingURL=all-items.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskviewmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__ = __webpack_require__(62);
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
 * Generated class for the TaskviewmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskviewmodalPage = /** @class */ (function () {
    function TaskviewmodalPage(navCtrl, params, viewCtrl, toastCtrl, taskServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.taskServiceProvider = taskServiceProvider;
        this.task = {};
        if (this.params.data.id) {
            this.taskServiceProvider.get(this.params.get('id')).subscribe(function (task) {
                _this.task = task;
                _this.task.href = task._links.self;
            });
        }
    }
    TaskviewmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskviewmodalPage');
    };
    TaskviewmodalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], TaskviewmodalPage.prototype, "title", void 0);
    TaskviewmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taskviewmodal',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\taskviewmodal\taskviewmodal.html"*/'<!--\n  Generated template for the TaskviewmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="edit()">Edit</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #taskForm="ngForm" (ngSubmit)="save(taskForm.value)">\n    <input type="hidden" name="href" [(ngModel)]="task.href">\n    <ion-list>\n      <ion-item>\n        <ion-input color="black" disabled type="text" placeholder="Title" name="title" [(ngModel)]="task.title" #title></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder="Enter a description"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\taskviewmodal\taskviewmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_task_service_task_service__["a" /* TaskServiceProvider */]])
    ], TaskviewmodalPage);
    return TaskviewmodalPage;
}());

//# sourceMappingURL=taskviewmodal.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalenderPage = /** @class */ (function () {
    function CalenderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalenderPage');
    };
    CalenderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calender',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\calender\calender.html"*/'<!--\n  Generated template for the CalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align: center;">Calender</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\calender\calender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CalenderPage);
    return CalenderPage;
}());

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\projects\projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Projects</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab bottom right >\n    <button ion-fab ><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\projects\projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__today_today__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_items_all_items__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calender_calender__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_team__ = __webpack_require__(157);
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
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.todayRoot = __WEBPACK_IMPORTED_MODULE_2__today_today__["a" /* TodayPage */];
        this.allItemsRoot = __WEBPACK_IMPORTED_MODULE_3__all_items_all_items__["a" /* AllItemsPage */];
        this.calenderRoot = __WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */];
        this.projectsRoot = __WEBPACK_IMPORTED_MODULE_5__projects_projects__["a" /* ProjectsPage */];
        this.teamRoot = __WEBPACK_IMPORTED_MODULE_6__team_team__["a" /* TeamPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="todayRoot" tabTitle="Today" tabIcon="md-calendar"></ion-tab>\n    <ion-tab [root]="allItemsRoot" tabTitle="All items" tabIcon="md-list-box"></ion-tab>\n    <ion-tab [root]="calenderRoot" tabTitle="Calender" tabIcon="ios-calendar"></ion-tab>\n    <ion-tab [root]="projectsRoot" tabTitle="Projects" tabIcon="md-folder-open"></ion-tab>\n    <ion-tab [root]="teamRoot" tabTitle="Team" tabIcon="ios-people"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taskmodal_taskmodal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the TodayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodayPage = /** @class */ (function () {
    function TodayPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    TodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodayPage');
    };
    TodayPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    TodayPage.prototype.openModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__taskmodal_taskmodal__["a" /* TaskmodalPage */]);
        myModal.present();
    };
    TodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-today',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\today\today.html"*/'<!--\n  Generated template for the TodayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title  style="text-align: center;">Today</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-fab bottom right >\n    <button ion-fab ><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n        <button ion-fab >\n          <ion-icon name="ios-calendar"></ion-icon>\n          <ion-label>Event</ion-label>\n        </button>\n        <button ion-fab (click)="openModal()" >\n          <ion-icon name="ios-list-box"></ion-icon>\n          <ion-label>Task</ion-label>\n        </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\today\today.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
    ], TodayPage);
    return TodayPage;
}());

//# sourceMappingURL=today.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamPage = /** @class */ (function () {
    function TeamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamPage');
    };
    TeamPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    TeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\pages\team\team.html"*/'<!--\n  Generated template for the TeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Team</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab bottom right >\n    <button ion-fab ><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab >\n        <ion-icon name="ios-calendar"></ion-icon>\n        <ion-label>Event</ion-label>\n      </button>\n      <button ion-fab >\n        <ion-icon name="ios-list-box"></ion-icon>\n        <ion-label>Task</ion-label>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\pages\team\team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeamPage);
    return TeamPage;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-items/all-items.module": [
		682,
		6
	],
	"../pages/calender/calender.module": [
		683,
		5
	],
	"../pages/projects/projects.module": [
		684,
		4
	],
	"../pages/tabs/tabs.module": [
		685,
		3
	],
	"../pages/taskviewmodal/taskviewmodal.module": [
		686,
		2
	],
	"../pages/team/team.module": [
		687,
		1
	],
	"../pages/today/today.module": [
		688,
		0
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_today_today__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_all_items_all_items__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_calender_calender__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_team_team__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_menu_header_menu__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_taskmodal_taskmodal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_taskviewmodal_taskviewmodal__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_task_service_task_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(213);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_today_today__["a" /* TodayPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_all_items_all_items__["a" /* AllItemsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calender_calender__["a" /* CalenderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_team_team__["a" /* TeamPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_menu_header_menu__["a" /* HeaderMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_taskmodal_taskmodal__["a" /* TaskmodalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_taskviewmodal_taskviewmodal__["a" /* TaskviewmodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/all-items/all-items.module#AllItemsPageModule', name: 'AllItemsPage', segment: 'all-items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taskviewmodal/taskviewmodal.module#TaskviewmodalPageModule', name: 'TaskviewmodalPage', segment: 'taskviewmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/today/today.module#TodayPageModule', name: 'TodayPage', segment: 'today', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_today_today__["a" /* TodayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_all_items_all_items__["a" /* AllItemsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calender_calender__["a" /* CalenderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_team_team__["a" /* TeamPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_menu_header_menu__["a" /* HeaderMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_taskmodal_taskmodal__["a" /* TaskmodalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_taskviewmodal_taskviewmodal__["a" /* TaskviewmodalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_task_service_task_service__["a" /* TaskServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TaskServiceProvider = /** @class */ (function () {
    function TaskServiceProvider(http) {
        this.http = http;
        this.API = 'http://localhost:8080';
        this.Tasks_API = this.API + '/tasks';
        console.log('Hello TaskServiceProvider Provider');
    }
    TaskServiceProvider.prototype.getMyTasks = function () {
        return this.http.get(this.API + '/my-tasks');
    };
    TaskServiceProvider.prototype.remove = function (id) {
        return this.http.delete(this.Tasks_API + '/' + id);
    };
    TaskServiceProvider.prototype.get = function (id) {
        return this.http.get(this.Tasks_API + '/' + id);
    };
    TaskServiceProvider.prototype.save = function (task) {
        var result;
        if (task['href']) {
            result = this.http.put(task.href, task);
        }
        else {
            result = this.http.post(this.Tasks_API, task);
        }
        return result.catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error); });
    };
    TaskServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TaskServiceProvider);
    return TaskServiceProvider;
}());

//# sourceMappingURL=task-service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(155);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-item no-lines style="margin-top: 30px; margin-bottom: 30px ">\n      <ion-avatar item-start>\n        <img style="height: 70px; width: 70px" src="../assets/imgs/profile.jpg">\n      </ion-avatar>\n      <h2>Karsten Ottenberg</h2>\n    </ion-item>\n  </ion-header>\n  <ion-content>\n    <header-menu></header-menu>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent() {
        console.log('Hello HeaderMenuComponent Component');
        this.text = 'Hello World';
    }
    HeaderMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header-menu',template:/*ion-inline-start:"F:\programming\Ionic\Files\blank\src\components\header-menu\header-menu.html"*/'<!-- Generated template for the HeaderMenuComponent component -->\n<div>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="ios-contact-outline" item-start></ion-icon>\n      Profile\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-settings-outline" item-start></ion-icon>\n      Settings\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-chatboxes-outline" item-start></ion-icon>\n      Support Forum\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-megaphone-outline" item-start></ion-icon>\n      App Feedback\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-share-outline" item-start></ion-icon>\n      Share app\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-book-outline" item-start></ion-icon>\n      About\n    </ion-item>\n  </ion-list>\n</div>\n'/*ion-inline-end:"F:\programming\Ionic\Files\blank\src\components\header-menu\header-menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());

//# sourceMappingURL=header-menu.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map