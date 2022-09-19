# REACT_ADV
Typescript and React, Redux Toolkit, Mobx, MST

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT_ADV

Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ] ==> 16+ LTS
nvm manage versions

node --version

==============================

JS engine ==> interpret JS / JIT JS

V8, SpiderMonkey, JavaScriptVM, Chakra, ..

[TypeScript, DART, CoffeeScript, LiveScript] ==> transpile ==> JS

tsc a.ts ==> a.js
coffee a.coffee ==> a.js
lsc a.ls ==> a.js

* TS provides optional type system for JS
* Better for compiler to catch errors than things fail at runtime
* enhance code quality and understandability and documentation

Basic types: number, string, boolean

let data:number = 10; ==> tsc ==> var data = 10;

data = "test"; // tsc error

Complex types: enum , object, array

enum Priority {
	LOW = 1,
	MED = 2,
	HIGH = 3
}


let p:Priority = Priority.MED;

---

Object type

1) 
let product : {
	name:string,
	price:number
} = {
	name : "iPhone 14",
	price : 128000.00
};


2) type

type Product = {
	name:string,
	price:number
}

let p:Product = {
	name : "iPhone 14",
	price : 128000.00
};

3) interface
3.1) interface for shape of object

interface Product {
	name:string,
	price:number
}

let p:Product = {
	name : "iPhone 14",
	price : 128000.00
};

3.2) interface for Realization relationship

interface Renderer {
	render(): void;
}

class ReactDOMRender implements  Renderer {
	//
	render():void {

	}
}

class ReactTvRender implements  Renderer {
	//
	render() {

	}
}

3.3) extends [ IS A]

interface Mobile extends Product {
	camera:string,
	connectivity:string
}

let p:Mobile = {
	name : "iPhone 14",
	price : 128000.00,
	camera: "84px",
	connectivity : "4G"
};

======================
Array:
let products:Product[];

=====================================

"any" type

let myData:any = 0;

myData = "test";

myData = true;

--

"unknown" type

let myData:unknown = 0;

myData = "test";

myData = true;

function doTask(callback:any) {
	callback();
}

doTask(100); // "any" won't trigger type errors; we get errors during runtime

--


function doTask(callback:unknown) {
	callback();
}
doTask(100);  // TSC errors ==> perform typechecking before using

Solution:
function doTask(callback:unknown) {
	if(callback === 'function') {
		callback();
	} else {
		console.log(callback);
	}

}
doTask(100);  // works

===============

"as" type

interface Product {
	name:string,
	price:number
}
// assume getProduct() is JS library code
let p = getProduct() as Product;
p.name = "Samsung";
p.price = 180000.00;

---

(getProducts() as Product[]).map(p => {...});


---

<button id="btn">Add</button>

const btn = document.getElementById("btn") as HTMLButtonElement;


===

Union type

let course:string | number;

course = "React";
course = 120; 

====

function doTask(x:string | null) :void {
    console.log("Hello ", x.toUpperCase()) ; // error OBject is possibly null.
}

Solution 1:
 if( x != null)

Solution 2:
  console.log("Hello ", x?.toUpperCase())

Solution 3:
    console.log("Hello ", x!.toUpperCase()) ; // skip null check; can get error at runtime


===============================


npm i -g typescript

by default "tsc" uses "dom" library [ console, setInterval, setTimeout] 

tsc --lib dom,es2015 first.ts

node first.js

=====================

md tsexamples
cd tsexamples
npm init --y

=========

Function Generics / HOF

HOF:
* functions which accepts functions as arguments
* functions which return a function

=============

tsc hof.ts
node hof.js

===

ts-node

npx ts-node hof.ts
