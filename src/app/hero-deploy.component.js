"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_service_1 = require("./hero.service");
var HeroDeployComponent = (function () {
    function HeroDeployComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.compared = false;
    }
    // Returns random number between two values
    HeroDeployComponent.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // Will return errors if hero IDs aren't continuous
    HeroDeployComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.randomInt(11, 20);
        this.heroService.getHero(id)
            .then(function (hero) { return _this.hero = hero; });
        var enemyId = this.randomInt(11, 20);
        // If get the same hero id, pick a random one until it isn't the same
        if (enemyId === id) {
            do {
                enemyId = this.randomInt(11, 20);
            } while (enemyId === id);
        }
        this.heroService.getHero(enemyId)
            .then(function (hero) { return _this.enemyHero = hero; });
    };
    HeroDeployComponent.prototype.tryAgain = function () {
        var _this = this;
        this.compared = false;
        this.test = 3;
        this.winner = '';
        var id = this.randomInt(11, 20);
        this.heroService.getHero(id)
            .then(function (hero) { return _this.hero = hero; });
        var enemyId = this.randomInt(11, 20);
        // If get the same hero id, pick a random one until it isn't the same
        if (enemyId === id) {
            do {
                enemyId = this.randomInt(11, 20);
            } while (enemyId === id);
        }
        this.heroService.getHero(enemyId)
            .then(function (hero) { return _this.enemyHero = hero; });
    };
    HeroDeployComponent.prototype.compareStat = function (stat) {
        switch (stat) {
            case 0:
                this.test = 0;
                if (this.hero.strength > this.enemyHero.strength) {
                    this.compared = true;
                    console.log('compared strength - hero wins');
                    this.winner = 'hero';
                }
                else {
                    this.compared = true;
                    console.log('compared strength - hero loses');
                    this.winner = 'enemy';
                }
                break;
            case 1:
                this.test = 1;
                if (this.hero.speed > this.enemyHero.speed) {
                    this.compared = true;
                    console.log('compared speed - hero wins');
                    this.winner = 'hero';
                }
                else {
                    this.compared = true;
                    console.log('compared speed - hero loses');
                    this.winner = 'enemy';
                }
                break;
            case 2:
                this.test = 2;
                if (this.hero.intelligence > this.enemyHero.intelligence) {
                    this.compared = true;
                    console.log('compared intelligence - hero wins');
                    this.winner = 'hero';
                }
                else {
                    this.compared = true;
                    console.log('compared intelligence - hero loses');
                    this.winner = 'enemy';
                }
                break;
        }
    };
    HeroDeployComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDeployComponent;
}());
HeroDeployComponent = __decorate([
    core_1.Component({
        selector: 'hero-deploy',
        templateUrl: './hero-deploy.component.html',
        styleUrls: ['./hero-deploy.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDeployComponent);
exports.HeroDeployComponent = HeroDeployComponent;
//# sourceMappingURL=hero-deploy.component.js.map