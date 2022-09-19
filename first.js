// function defiition
function fetchData(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ "name": "iPhone", "price": 89000.00 });
        }, 1000);
    });
}
fetchData(23).then(function (data) { return console.log(data); }, function (error) { return console.log(error); });
console.log("End"); // executed before Promise resolved / rejected
