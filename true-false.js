// --falsey--
// false
// 0
// ""
// undefined
// null

// --Truthy--
// '0' ' ' {} []
let name = {};
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}