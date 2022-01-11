///context определяет  как функция была вызвана и он постоянно указывает на this

//const person = {
//    surname: 'Старк',
//    knows: function (what,name) {
//    console.log(`Ты ${what},знаешь, ${name} ${this.surname}`)
//    }
//}
//const  jonh = {surname: 'Сноу'}
//person.knows('все', 'Бран')
//person.knows.call (jonh, 'ничего не','Джон')
//person.knows.apply(jonh, ['ничего не','Джон'])
//person.knows.bind(jonh, 'ничего не','Джон') ()


//function Person(name,age) {
//    this.name = name
//    this.age = age
//    console.log(this)
//}
//const elena = new Person('Elena',20)

// =========
//function logThis() {
//    console.log(this)
//}
//const obj = {num:42}
//logThis.apply(obj)
//logThis.call(obj)
//logThis.bind(obj) ()

//=======
//const animal = {
//legs:4,
//logThis:function (){
//        console.log(this)
//    }
//}
//animal.logThis()

//function Cat (color) {
//    this.color = color
//    console.log('This' , this)
//    ; ( () => console.log('Arrow this',this) ) ()
//}
//new Cat ('red')