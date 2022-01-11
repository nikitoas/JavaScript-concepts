//Замыкание - момент когда функция имеет доступ до переменных из вышестоящего Scope
//function sayHelloTo (name){
//const message = 'Hello'+ name

//return function (){
//console.log(message)
//    }
//}
//const helloToElena = sayHelloTo('Elena')
//const helloToIgor = sayHelloTo('Igor')
//console.log(helloToElena)
//helloToElena()
//helloToIgor()

//function  createframeworkManadger () {
//const  fw = ['Angular', 'React']

//return {
//print:function (){
//console.log(fw.join(''))
// },
//add:function (framework) {
//fw.push(framework)
//        }
//    }
///}
//const manager = createframeworkManadger()
//console.log(manager)
//manager.print()
//manager.add ('VueJs')
//manager.print()

//setTimeout

//const fib = [1,2,3,5,8,13]

//for(var i =0; i<fib.length; i++) {
//    (function (j) {
//setTimeout(function(){
//console.log(`fib[${j}]= ${fib[j]}`)
//        },1500)
//})(i)
//}