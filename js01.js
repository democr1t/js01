//1 part
// console.clear();
// var Cat = {};
// Cat.name = "Shady";
// Cat.longBreedName = "Maine coon"
// Cat.name = "Bastin";
// delete(Cat.name);
// console.log(Cat)
//2 part
function IsObjectEmpty(_object)
{
    if(typeof(_object) === "object")
    {
        var keys = Array.from(Object.keys(_object))

        if(keys.length == 0)
            return true;
        else
            return false;
    }
    else
    {
        return null;
    }
}
const team = {}
console.log(IsObjectEmpty(team)) // true

team["Nomistor"] = "Dmitry"
console.log(IsObjectEmpty(team)) // false
