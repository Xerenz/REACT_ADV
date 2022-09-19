type Product = {
    id:number,
    name:string,
    price:number,
    category: string
}

// HOF
function forEach<T>(elems:T[], action: (elem:T) => void) : void {
    let i:number;
    for(i = 0; i < elems.length; i++) {
       action(elems[i]);
    }
}

function filter<T>(elems: T[], predicate: (elem:T) => boolean) : T[] {
    let res: T[] = [];
    forEach(elems, (elem) => {
        if(predicate(elem)) {
            res.push(elem)
        }
    });
    return res;
}

function map<T, R>(elems:T[], transformFn: (elem:T) => R) : R[] {
    let res: R[] = [];
    forEach(elems, (elem) => {
         res.push(transformFn(elem));
    });
    return res;
}

let nos:number[] = [5,6,3,1,19,23,80]

let names:string[] = ["Kim", "Peter", "George", "Brad"];

forEach(nos,  console.log);
forEach(names, console.log);

let evens = filter(nos, no => no % 2 === 0);
forEach(evens, console.log);


let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

let productNames:string[] = map(products, (p) => p.name);

let doubles:number[] = map(nos, no => no * 2);

forEach(productNames, console.log);
