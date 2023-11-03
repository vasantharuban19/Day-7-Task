// 1st question
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie1 = new Movie("Leo","7screen");
const movie2 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie1.title,movie1.studio,movie1.rating);
console.log(movie2.title,movie2.studio,movie2.rating);

// 2nd question
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return`"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj = new Circle(1.0,"red");
console.log(obj.radiusCircle);
obj.radiusCircle = 3.5;
console.log(obj.radiusCircle);

console.log(obj.colorCircle);
obj.colorCircle = "Green"
console.log(obj.colorCircle);

console.log(obj.toString);

console.log(obj.areaCircle);

console.log(obj.circumferenceCircle);

// 3rd question
class Person{
    constructor(name,age,gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
}
const person1 = new Person("Vasanth",23,"Male","Neyveli");
const person2 = new Person("Pk",25,"Male","Madurai");
const person3 = new Person("Prince",25,"Male","chennai");
const person4 = new Person("Ritz",25,"Male","Madurai");
const person5 = new Person("Wolf",25,"Male","Chennai");

console.log(person1.name,person1.age,person1.gender,person1.city);
console.log(person2.name,person2.age,person2.gender,person2.city);
console.log(person3.name,person3.age,person3.gender,person3.city);
console.log(person4.name,person4.age,person4.gender,person4.city);
console.log(person5.name,person5.age,person5.gender,person5.city);

// 4th question
class Uberprice{
    constructor(kilometer,price=50){
        this.kilometer = kilometer;
        this.price = price;
    }
    get Price(){
       return this.kilometer*this.price
    }
}
var uber1 = new Uberprice(5);
var uber2 = new Uberprice(5,150);
console.log(uber1.Price);
console.log(uber2.Price);