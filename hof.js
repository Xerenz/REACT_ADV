// HOF
function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
function filter(elems, predicate) {
    var res = [];
    forEach(elems, function (elem) {
        if (predicate(elem)) {
            res.push(elem);
        }
    });
    return res;
}
function map(elems, transformFn) {
    var res = [];
    forEach(elems, function (elem) {
        res.push(transformFn(elem));
    });
    return res;
}
var nos = [5, 6, 3, 1, 19, 23, 80];
var names = ["Kim", "Peter", "George", "Brad"];
forEach(nos, console.log);
forEach(names, console.log);
var evens = filter(nos, function (no) { return no % 2 === 0; });
forEach(evens, console.log);
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var productNames = map(products, function (p) { return p.name; });
var doubles = map(nos, function (no) { return no * 2; });
forEach(productNames, console.log);
