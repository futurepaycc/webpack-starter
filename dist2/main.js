webpackJsonp([2],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);



let computeNames = (() => {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _, names;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 70));

                case 2:
                    _ = _context.sent;
                    names = _.chain(users).map(function (item) {
                        return item.name;
                    }).join(',').value();
                    return _context.abrupt('return', names);

                case 5:
                case 'end':
                    return _context.stop();
            }
        }, _callee, this);
    }));

    return function computeNames() {
        return _ref.apply(this, arguments);
    };
})();

// let names = await computeNames()


let users = [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }, { 'name': 'pebbles', 'age': 18 }];

let names = computeNames();

let element = document.createElement('div');
element.innerHTML = names;

document.body.appendChild(component());

/***/ })

},[72]);