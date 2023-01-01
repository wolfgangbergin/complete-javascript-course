//'use strict';

//__________________________________________________________________________________
// const oneWord = function(str){
   
// return str.replace(/ /g, '').toLowerCase();
// };



// const upperFirstWord = function(str){
//     const [first, ...rest] = str.split(' ');
    
//     return [first.replaceAll(first[0], first[0].toUpperCase()), ...rest].join(' ')
 
// };

// const transformer = function(str, fn){
//    l(str)
//    l(` transformed screen: ${ fn(str)}`)
//    l(` transformed by: ${ fn.name}`)
   

// }



// transformer('javaScript is the best!', upperFirstWord) 
// transformer('javaScript is the best!', oneWord) 
//__________________________________________________________________________________

// const toUpperCase = (param)=>{
  
//     let [emoji, Letter ]= param.split(' ')
   
//     return `${emoji}  ${Letter.toUpperCase()}`;
// }
//__________________________________________________________________________________


// const high5 = (param, func)=>{
    
//    return func(`🏃 ${param}`);
// }


//__________________________________________________________________________________

// const tempArr = ['a', 'b', 'c', 'd']
// let kimFunc = function(value){

// return value.forEach(  function (element){
//     return  high5(element, toUpperCase)
     
// });

// }

// l(kimFunc(tempArr))
//__________________________________________________________________________________

// const toUpperCase = (param)=>{
 
//    return param.toUpperCase()
// }
//__________________________________________________________________________________
// const tempArr = ['a', 'b', 'c', 'd']
// let kimFunc = function(value){
//     const newArr = []
   
//     value.forEach(element => {
//         toUpperCase(element)
//         newArr.push(`🏃 ${ toUpperCase(element)}`)
       
//     });

// return (function(param1){

//  return `${param1}  💇`
// })(newArr)
     
// };



// l(kimFunc(tempArr))
//__________________________________________________________________________________

//__________________________________________________________________________________
// let fName = 'wolfman'

// const greet = (function(param1){
//     const tempStr = `Hellow ${param1}!`
// return ((param1)=>{
//     l('kimFunc')
//     l(param1)
// })(tempStr)
// })(fName);

// greet

//__________________________________________________________________________________

// const greet = (greeting) => name => Punctuation => l(`${greeting} ${name} ${Punctuation}`);



// const greeterHey = greet('Hay');

// greeterHey('wolfman')
// greeterHey('kim')

// greet('Hi ')('jym')('!!!!')
//__________________________________________________________________________________
//__________________________________________________________________________________
//With event listeners
//__________________________________________________________________________________
const wolfMan = {fName: 'wolfgang'}
Lufthansa.plains = 300
Lufthansa.buyPlain = function(param1 = 5){
 l(this);
 
    this.plains += param1
    l(`Lufthansa fleet of airplanes: ${this.plains}`)


}

//Lufthansa.buyPlain()

let wolfFunc11 = function(Obj, func, num){
    //l(this)
 //Obj.buyPlain(num)
 func.bind(Obj)(num)
};
const buyPlainButton = document.querySelector('.buy')

buyPlainButton.addEventListener('click', ()=>wolfFunc11(Lufthansa, Lufthansa.buyPlain, 99) )
//__________________________________________________________________________________
//Node.js
//__________________________________________________________________________________
const wolfObj = { count: 0 };

wolfObj.wolfMeth2 = function (param1) {
  this.count += param1;
  l(this.count)
};

const wolfFunc1 = function (func, Obj) {

     (function(){
   
    func.call(Obj, 100)
    })();

    (()=>func.call(Obj, 100))()
    

  
     func.bind(wolfObj)(10)
    Obj.wolfMeth2(10)

};

wolfFunc1(wolfObj.wolfMeth2, wolfObj);
wolfFunc1(wolfObj.wolfMeth2, wolfObj);


'use strict';

//__________________________________________________________________________________

const Lufthansa = {
  Airline: 'Lufthansa',
  Code: 'LH',
  bookings: [],
  book: function (flightNum = 777, name = 'badGuy') {
    l(
      `${name} Booked a seat on ${this.Airline} flight ${this.Code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.Code}${flightNum}`, name });
  },
};

// Lufthansa.book('1235', 'wolfman')
// Lufthansa.book('999', 'kim')
// l(Lufthansa.bookings[0], Lufthansa.bookings[0] )

let book = Lufthansa.book;

//__________________________________________________________________________________

const Eurowings = {
  Airline: 'Eurowings',
  Code: 'EW',
  bookings: [],
};

// book.call(Eurowings, '1235', 'wolfman')
// book.apply(Eurowings, ['777', 'kim'])
// book.bind(Lufthansa, '999', 'mick')()
// l(Eurowings.bookings[0], Eurowings.bookings[1], Lufthansa.bookings[0] )

//__________________________________________________________________________________
const CALL = function (param1, param2, param3) {
  this(param1, param2, param3);
};
const BIND = function (param1, param2, param3) {
  this(param1, param2, param3);
};

Object.prototype.CALL = CALL;
Object.prototype.BIND = BIND;
//__________________________________________________________________________________
const swiss = {
  Airline: 'swiss',
  Code: 'SS',
  bookings: [],
};

// const FlightData = ['777', 'kim']
// book.call(Eurowings, '1235', 'wolfman')
// book.call(swiss, ...FlightData)
// book.bind(Lufthansa, '999', 'mick')
// l(Eurowings.bookings[0], swiss.bookings[0], Lufthansa.bookings[0] )

//__________________________________________________________________________________
// const flightNum = '99'
// const bookEW999 = book.bind(Eurowings,  )
// bookEW999('999', 'wolf')
// bookEW999(undefined, 'kim')
// bookEW999('999', 'jojo')
// book.bind(Eurowings )('999', 'goodGuy')
// book.bind(Eurowings )('999', )

//__________________________________________________________________________________
//With event listeners
//__________________________________________________________________________________
const wolfMan = { fName: 'wolfgang' };
Lufthansa.plains = 300;
Lufthansa.buyPlain = function (num = 1, ReviewedBy) {
  l(this);

  this.plains += num;
  l(
    `Lufthansa fleet of airplanes: ${this.plains} Purchased reviewed by ${ReviewedBy}!`
  );
};

//Lufthansa.buyPlain()

// let wolfFunc11 = function(Obj, func, num){
//     //l(this)
//  //Obj.buyPlain(num)
//  func.bind(Obj)(num)
// };
const buyPlainButton = document.querySelector('.buy');

buyPlainButton.addEventListener('click', () =>
  Lufthansa.buyPlain.bind(Lufthansa, undefined)('wolfMan')
);

//__________________________________________________________________________________

const wolfFunc7 = rate => value => value + value * rate;

const tenTax = wolfFunc7(0.2);

l(tenTax(200));
l(tenTax(300));
l(tenTax(400));


'use strict';
Object.prototype.l = console.log;
Object.prototype.d = console.dir;

// const wolfObj = { count: 0 };

// wolfObj.wolfMeth2 = function (param1) {
//   this.count += param1;
//   l(this.count)
// };

// const wolfFunc1 = function (func, Obj) {

//      (function(){
   
//     func.call(Obj, 100)
//     })();

//     (()=>func.call(Obj, 100))()
    

  
//      func.bind(wolfObj)(10)
//     Obj.wolfMeth2(10)

// };

// wolfFunc1(wolfObj.wolfMeth2, wolfObj);
// wolfFunc1(wolfObj.wolfMeth2, wolfObj);
//__________________________________________________________________________________

// const wolfFunc3 = (param1, param2)=>{
// l(`${param1} ${param2}`)
// };
// const plusPuckUP = wolfFunc3.bind(null, `wolfgang`)

// plusPuckUP('Chevy Silverado')
//__________________________________________________________________________________


// const wolfObj = { count: 0 };
// const wolfFunc4 = function(){
//     l('wolf')
//     this.count++
//     l(this.count)
// };

// wolfObj.wolfFunc4 = wolfFunc4

// const wolfFunc5 = function(){
//     wolfFunc4.bind(wolfObj)()
//     wolfFunc4.bind(wolfObj)()
//     wolfFunc4.bind(wolfObj)()
//     wolfFunc4.bind(wolfObj)()
//     wolfFunc4.bind(wolfObj)()
//     wolfFunc4.bind(wolfObj)()
   
    
// };
//__________________________________________________________________________________


const wolfFunc7 = (rate, value) => value + value * rate

//l(wolfFunc7(.1, 200))
const tenTax = wolfFunc7.bind(null, .1)

l(tenTax(200));
l(tenTax(300));
l(tenTax(400));


//__________________________________________________________________________________
//__________________________________________________________________________________
const testArr1 = [5, 2, 3];
const testArr2 = [1, 5, 3, 9, 6, 1];
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswer(param1) {
    const inputNum = Number(
      prompt(
        `${(param1 && `${param1}  \n`) || ''} ${
          this.question
        } \n ${this.options.join('\n')} \n(Write option number) \n`
      )
    );
    typeof inputNum === 'number' && inputNum < this.answers.length
      ? this.answers[inputNum]++
      : this.registerNewAnswer(`${inputNum} not a valed answer! try plz agan`);

    this.displayResults(this.answers.join(', '), 'string' );
    this.displayResults(this.answers);
  },
  displayResults(amswers1, type = 'array' ) {
    type === 'array'? l(amswers1) : l(`Poll results are ${amswers1}.`);
  },
};

const pollButton = document.querySelector('.poll');
pollButton.addEventListener('click', function(){this.registerNewAnswer()}.bind(poll) );

let wolfResults = poll.displayResults.bind(null);

wolfResults(testArr2.join(', ') , 'string' );
wolfResults(testArr1);
//__________________________________________________________________________________
//__________________________________________________________________________________



// // let temp1 = (function(param1){
// //     var isPrivare = 23
// //     return param1
// //     }.call(null, 'test313'));

// // /////////////////////////////////////////////////////////////////////////////////////////

// // const temp2 = (param1 =>param1)('test414')

// // /////////////////////////////////////////////////////////////////////////////////////////
// // l(temp1);
// // l(temp2);
// /////////////////////////////////////////////////////////////////////////////////////////

// {
//   let count = 0;
//   count++
//   count++
//   count++
//   l(count);

// }
// /////////////////////////////////////////////////////////////////////////////////////////
