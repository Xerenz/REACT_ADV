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

===========

JavaScript in typescript
md tsexamples
cd tsexamples
npm init --y

npm i lodash

============

Solution 1)
index.html
<script src="_//lodash"></script>

myCode.ts

declare var random:any;

function doTask():void {
	console.log(random(1,100));
}

Solution 2)
npm i lodash typescript
tsc --init
==> generates tsconfig.json

using typings.d.ts

declare module "lodash" {
    export function random(min:number, max:number)
}

sample.ts
import {random} from 'lodash';

function doTask():void {
	console.log(random(1,100));
}

doTask();
$ tsc

DefinitelyTyped:

https://github.com/DefinitelyTyped/DefinitelyTyped

"fs", "http", "cluster" ===> are all js node modules

npm i -D @types/node

--

npm i react
this installs react js library

if i need to use it in TS

npm i -D @types/react

Solution 3)

npm i -D @types/lodash
comment typings.d.ts

tsconfig.js
 "module": "ES2015",

Module system:

1) CommonJS

let lodash = require('lodash');

2) ES2015

import lodash from 'lodash';

==

import { random } from "lodash";


function doTask():void {
	console.log(random(1,100));
}

doTask();

================================

JS Automation tools:
Grunt, Gulp, Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. It uses a command-line interface to run custom tasks defined in a file

Webpack ==> react / angular / ...

tsc --init [ tsconfig.json]

npm i typescript webpack webpack-cli ts-loader html-webpack-plugin webpack-dev-server -D

// babel-loader

ES2015 module system:
export class Person {
    
}

CommonJS:
class Person {

}
module.exports = {
	Person
}

===

export class Person {
    private name:string;
    private age:number;
    public constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

can be written as :

export class Person {
    public constructor(private name:string, private age:number) {
    }
}

import {Person} from './Person';

---


JS private

class ClassWithPrivateField {
  #privateField;
}

===

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 

bundle.Fsdf44232323.js

<script src="bundle.Fsdf44232323.js"></script>

bundle.hdse434gsr.js
<script src="bundle.hdse434gsr.js"></script>

====


 "experimentalDecorators": true,

 TS Decorators ==> Decorator pattern

 Angular ==> TS ==> Decorator pattern

 // Component is a Decorator

 @Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
	//state and behaviour
}

@Component({
  selector: 'app-customer',
  template: '<div></div>',
  styles: ['<style></style>']
})
export class CustomerComponent {
	//state and behaviour
}

<app-product></app-product>
<app-customer></app-customer>

=================

Types of Decorators:

1) class Decorator


@Component ()
export class AppComponent { 

2) PropertyDecorator

function Input(target:object, propertyKey:string) {}


export class AppComponent {  
	@Input()
    name: string = "Angular 2" 

3) Method decorator

function Valid(target:object, methodName:string, descriptor: PropertyDescriptor) {}


  @Valid()
   addProduct(p:Product) {}

4) Parameter Decorator


function @Min(target:object, methodName:string, index: number) {}

	addProduct(id:number, @Min(value=3, "msg": "title has to be min 3 characters") title:string) {

	}

========

Day 2:
TypeScript Utility

1 — Partial
This can make all properties optional in a type where properties originally should be required.

type Worker = {
  name: string;
  profession: string;
}

// Not defining 'profession' is allowed
const worker: Partial<Worker> = {
  name: 'Kim' 
}

---
2 — Required
The opposite one of Partial is Required, instead of making properties optional, it makes them required.

type Worker = {
  name?: string;
  profession?: string;
}
// You should defining 'name' and 'profession'
const worker: Required<Worker> = {
  name: 'Kim',
  profession: 'Developer',
}

---

3 — Readonly
With Readonly, you prevent that properties are going to be re-assigned.

type Worker = {
  name: string;
  profession: string;
}
const worker: Readonly<Worker> = {
  name: 'Kim',
  profession: 'Developer',
}
worker.name = 'Larry'; // Not allowed

-----

4 — Pick
can be used to include only a few properties.

type Worker = {
  name: string;
  profession: string;
  isWorking: boolean;
}
// Only 'name' and 'isWorking' are included
const worker: Pick<Worker, "name" | "isWorking"> = {
  name: 'Kim',
  isWorking: true,
}

5 — Omit
The opposite way of the Pick type is called Omit

6 - Extract
Extract<T, U>. is a utility for pulling out values that are shared between the two type arguments it receives.

interface UserBase {
  email: string
  image: string | null
  username: string,
  password:string
}

interface UserProfile {
  id: string
  email: string
  image: string | null
  isAdmin: boolean
  username: string
  reviews: string[]
}

type SharedUserKeys = Extract<keyof UserBase, keyof UserProfile>
// 'email' | 'image' | 'username'

Convert our union string back into an object type with the shared properties and their corresponding value types.
 

type SharedUserData = {
  [K in SharedUserKeys]: UserProfile[K]
}

const user1: SharedUserData = {
  email: 'test@example.com',
  image: null,
  username: 'sampleuser',
}

===================

Day 2

React Typescript

* React.createElement()
* Functional Component
* Class component


npx create-react-app shopapp --template typescript

cd shopapp

npm i bootstrap styled-components react-router-dom
npm i -D @types/styled-components 

* creates a scaffolding code for react application with typescript enabled

Option1:
npm init --y
npm install webpack webpack-cli html-webpack-plugin webpack-dev-server typescript
npm i react react-dom jest

tsc --init // tsconfig.json
npm i -D @types/node @types/react @types/react-dom @types/jest


Option 2:
npx create-react-app shopapp // creates scafoolding code for "react with js" 
npm i typescript
npm i -D @types/node @types/react @types/react-dom @types/jest
index.js ==> index.tsx

https://codepen.io/
Settings
* Behaviour => AutoSave and Auto Preview ==> disable
* JS ==> 
	1) Preprocessor ==> typescript
    2) CDN ==> react , react-dom
    https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
    https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

React.createElement("div", null, "<h1>Hello World</h1>")
* Functional Component

https://github.com/chentsulin/awesome-react-renderer

ReactNode
	* string
	* number
	* null
	* ReactElement
	* Array of ReactElement

```
// JSX
function Welcome({msg}: {msg?:string}) :React.ReactElement {
  return <div>
      <h1>{msg}</h1>
    </div>
}

// console.log(Welcome());

ReactDOM.render(<Welcome msg="Good Day"/>, document.getElementById("root")) 

```


Children:

```
// JSX
function Welcome({msg}: {msg?:string}) :React.ReactElement {
  return <div>
      <h1>{msg}</h1>
    </div>
}

// console.log(Welcome());

function Parent({children}: {children:React.ReactNode}): React.ReactElement {
  return <div>
        <h1>Parent</h1>
        {children}
    </div>
}
ReactDOM.render(<Parent><Welcome msg="Good Day"/></Parent>, document.getElementById("root")) 

```

Class Component:
 state, behaviour, life-cycle methods


```
interface UserProps {
  name: string,
  age: number
}
class UserComponent extends React.Component<UserProps,{}> {
  constructor(props:UserProps) {
    super(props);
  }
  render() {
    return <>
       <h1> User Component </h1>
       Hello, {this.props.name} {this.props.age}
     </>
  }
}
ReactDOM.render(<UserComponent name="smith" age="24" />, document.getElementById("root")) 
```

