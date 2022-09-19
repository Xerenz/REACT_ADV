interface Product {
	name:string,
	price:number
}

// function prototype
type fetchData  = (id:number)  => Promise<Product>

// function defiition

function fetchData(id:number) {
    return new Promise<Product>((resolve, reject) => {
        setTimeout(() => {
            resolve({"name": "iPhone", "price": 89000.00})
        }, 1000);
    })
}


fetchData(23).then(
    data => console.log(data),
    error => console.log(error));

console.log("End"); // executed before Promise resolved / rejected