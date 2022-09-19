import Person from './Person'; 
console.log("Hello Webpack!!!");

let p:Person = new Person("Harry", 34);
console.log(p.getName(), p.getAge());

console.log(p["subject"]); // works fine

