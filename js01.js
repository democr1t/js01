//1 part
// console.clear();
// var Cat = {};
// Cat.name = "Shady";
// Cat.longBreedName = "Maine coon"
// Cat.name = "Bastin";
// delete(Cat.name);
// console.log(Cat)
//2 part
// function IsObjectEmpty(_object)
// {
//     if(typeof(_object) === "object")
//     {
//         var keys = Array.from(Object.keys(_object))

//         if(keys.length == 0)
//             return true;
//         else
//             return false;
//     }
//     else
//     {
//         return null;
//     }
// }
// const team = {}
// console.log(IsObjectEmpty(team)) // true

// team["Nomistor"] = "Dmitry"
// console.log(IsObjectEmpty(team)) // false
//part 3
const employee = {
    salary: 100,
    age: 200
}

// function SumSalaries(employee)
// {
//     var keys = Array.from(Object.keys(employee))
//     var numberKeys = new Array();
//     var result; 

//     keys.forEach((element) => {
//         if(typeof(employee[element]) == "number")
//         {
//            numberKeys.push(element); 
//         }
        
//         result = 0;

//         numberKeys.forEach((element) => {
            
//             result += employee[element];
//         })  

//        return result;
//     });
// }
// var result = SumSalaries(employee)
// console.log(result);

////    this#1
const calculator = 
{
    x: 0,
    y: 0,
    Read: function(x) {
        this.x = x;   
    },
    Add: function(y) {
        return Number(this.x) + Number(y);
    },
    Mul: function(y) {
        this.x *= y
    },
    Sub: function(y) {
        this.x -= y;
    },
    Div: function(y){
        this.x /= y;
    },
    Show: function(y){
        alert(x);
    }
}

calculator.Read(2).Add(11).Div(3).Show().Read(2).Sub(1).Show()
// Calculator.Read()
// var result = Calculator.Add();
// console.log("result: " + result)

// result = Calculator.Mul();
// console.log("result: " + result)