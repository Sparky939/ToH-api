"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice', strength: 42, speed: 34, intelligence: 11 },
            { id: 12, name: 'Narco', strength: 23, speed: 44, intelligence: 62 },
            { id: 13, name: 'Bombasto', strength: 86, speed: 5, intelligence: 32 },
            { id: 14, name: 'Celeritas', strength: 12, speed: 35, intelligence: 54 },
            { id: 15, name: 'Magneta', strength: 50, speed: 61, intelligence: 24 },
            { id: 16, name: 'RubberMan', strength: 36, speed: 78, intelligence: 31 },
            { id: 17, name: 'Dynama', strength: 54, speed: 59, intelligence: 25 },
            { id: 18, name: 'Dr IQ', strength: 7, speed: 14, intelligence: 95 },
            { id: 19, name: 'Magma', strength: 82, speed: 27, intelligence: 29 },
            { id: 20, name: 'Tornado', strength: 47, speed: 98, intelligence: 19 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map