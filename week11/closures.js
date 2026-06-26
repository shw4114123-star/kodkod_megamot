// // 1.
// function createLogger() {
//   const sey = "hello";
//   function seyHello() {
//     return sey
//   }
//   return seyHello
// }
// const sey = createLogger()
// console.log(sey())
// console.log(sey())
// console.log(sey())


// // 2.
// function createGreeting(name) {
//   let printName = "hello" + " " + name
//   function print() {
//     return printName
//   }
//     return print
// }
// const name = createGreeting("shlomo")
// const name2 = createGreeting("nehoray")
// console.log(name())
// console.log(name())
// console.log(name2())
// console.log(name2())


// // 3.
function createCounter() {
    let count = 0;
    function add() {
        count++;
        return count;
    }
    return add;
}
const co = createCounter()
console.log(co())
console.log(co())
console.log(co())
console.log(co())
console.log(co())
console.log(co())
console.log(co())


// // 4.
// function outer() {
//   let x = 10;
//   return function () {
//     console.log(x);
//   };
// }
// const fn = outer();
// fn();


// // 5.
// function createMultiplier(x) {
//   let mul = x * 2;
//   return function () {
//     console.log(mul)
//   }
// }
// const double = createMultiplier(54);
// double()


// // 6.
// function createAdder(num) {
//   return function (num2) {
//     console.log(num + num2)
//   }
// }
// const add5 = createAdder(5);
// add5(3)


// // 7.
// function createSecret() {
//   let secret = "blabla";
//     function getSecret () {return secret}
//     function setSecret(newSecret) {
//       secret = newSecret;
//       return "change succecfuly"
//     }
//     return {getSecret: getSecret, setSecret:setSecret}
//   }
// const secretMenag = createSecret()
// console.log(secretMenag.getSecret())
// console.log(secretMenag.setSecret("shlomo"))
// console.log(secretMenag.getSecret())


// // // 8.
// const add = a => a + a;
// function once(fn) {
//   let run = false
//   function iner(a) {
//     if (!run) {
//       run = true
//       return fn(a)
//     } else return "allready run"
//   }
//   return iner
// }
// const runFu = once(add)
// console.log(runFu(32))
// console.log(runFu(32))












