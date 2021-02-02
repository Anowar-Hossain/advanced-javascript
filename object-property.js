const students = [
    {id: 21, name:'anwar'},
    {id: 31, name:'sohan'},
    {id: 41, name:'showrab'},
    {id: 51, name:'sohag'}
];

// const output = [];
// for(let i = 0; i < students.length; i++){
//     const element = (s.name, s.id);
//     const names = [s.name];
//     output.push(names);
// }

const names = students.map(s=> s.name);
 const ids = students.map(s => s.id);
 const bigger = students.filter( s=> s.id > 40);
 const bigger1 = students.find( s=> s.id > 40);
console.log(bigger1);