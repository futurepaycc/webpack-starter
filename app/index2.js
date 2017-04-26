let users = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 },
    { 'name': 'pebbles', 'age': 18 }
];

async function computeNames() {
    let _ = await import('lodash')
    let names = _.chain(users).map((item) => {
        return item.name
    }).join(',').value()
    return names
}

// let names = await computeNames()
(async function () {
    let names = await computeNames()

    let element = document.createElement('div')
    element.innerHTML = names

    document.body.appendChild(element)
})()