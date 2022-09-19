export default class Person {
    public constructor(private name:string, private age:number) {
    }
    public getName():string {
        return this.name;
    }

    public getAge():number {
        return this.age;
    }
}