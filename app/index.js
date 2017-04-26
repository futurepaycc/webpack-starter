import _ from "lodash"

let users = [
  { 'name': 'barney',  'age': 36 },
  { 'name': 'fred',    'age': 40 },
  { 'name': 'pebbles', 'age': 18 }
];

let names = _.chain(users).map((item)=>{
    return item.name
}).join(',').value()


function component(){
    let element = document.createElement('div')
    element.innerHTML = names
    return element
}

document.body.appendChild(component())
console.log('看看文件影响')