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
    read: function(x) {
        this.x = x;
        return this   
    },
    add: function(y) {
        this.x += Number(y);
        return this
    },
    mul: function(y) {
        this.x *= y
        return this
    },
    sub: function(y) {
        this.x -= y;
        return this
    },
    div: function(y){
        this.x /= y;
        return this
    },
    show: function(){
        alert(this.x);
        return this
    }
}

calculator.read(2) // 2
calculator.mul(100) // 200
calculator.sub(3) // 197
calculator.show() // выводит текущий результат
calculator.read(0) // 0
calculator.add(1) // 0
calculator.add(112.345) // 112.345
calculator.show() // ...

calculator.read(2).add(11).div(3).show().read(2).sub(1).show()