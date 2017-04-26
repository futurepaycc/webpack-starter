import _ from 'lodash'

const TOOL_NAME = "WEBPACK"

function component(){
    let element = document.createElement('div')
    element.innerHTML = _.join(['你好',TOOL_NAME],'怎么了')
    return element
}

document.body.appendChild(component())