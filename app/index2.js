let users = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 },
    { 'name': 'pebbles', 'age': 18 }
];

async function computeNames() {
    let _ = await import('lodash') //引入lodash库
    let names = _.chain(users).map((item) => {
        return item.name
    }).join(',').value()
    return names
}

// let names = await computeNames() 这种代码不行，异步需要一入口就是异步
(async function () {
    let names = await computeNames()

    let element = document.createElement('div')
    element.innerHTML = names

    document.body.appendChild(element)


    let jquery = await import('jquery') //引入jquery库
    let div = jquery('div')
    console.log(div.text())
})()