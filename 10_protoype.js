/// __proto__
///object.getPrototypeOf() пятый синтаксис

//function Cat(name,color) {
//    this.name = name
//    this.color = color
//}
//Cat.prototype.voice = function () {
//    console.log(`Cat $(this.name} says myay`)
//}
//const cat = new Cat ('Кот', 'white')
//console.log(Cat.prototype)
//console.log(cat)
//console.log(cat.__proto__ === Cat.prototype)
//console.log(cat.constructor)
//cat.voice()

///==========
//function Person () {}
//Person.prototype.legs = 2
//Person.prototype.skin = 'white'
//    const  person = new Person()
//    person.name = 'Mikita'
//    console.log('skin' in Person)
//    console.log(person.legs)
//    console.log(person.name)

//console.log(person.hasOwnProperty('name'))
//console.log(person.hasOwnProperty('skin'))

//Object.created()
//let proto = {year:2019}
//const  myYear = Object.create(proto)
//console.log(myYear.year)

//proto.year = 2200
//console.log(myYear.year)

//proto = {year:999}
//console.log(myYear.year)

//console.log(myYear.hasOwnProperty('year'))
//console.log(myYear.__proto__ === proto('year'))
