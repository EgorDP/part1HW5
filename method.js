export {buttonListeners}; 

function HTTPRequest(type) {
    if(type != 'GET') {
        console.log(`Init ${type} request`); 
        let request = new XMLHttpRequest();
        request.addEventListener('load', getResponse);
        request.open(type , `https://httpbin.org/${type.toLowerCase()}`);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let id = document.querySelector('#id').value;
        let name = document.querySelector('#name').value;
        let body = document.querySelector('#body').value;
        request.send(`id=${id}&name=${name}&body=${body}`);
    } else {
        console.log('init get request'); 
        var request = new XMLHttpRequest();
        request.addEventListener('load', getResponse);
        request.open('GET', 'https://httpbin.org/get');
        request.send();
    }
}

function postRequest() {
    HTTPRequest('POST');
}
function getRequest() {
    HTTPRequest('GET'); 
}
function putRequest() {
    HTTPRequest('PUT'); 
}
function deleteRequest() {
    HTTPRequest('DELETE');
    console.log('delete request'); 
}
function getResponse(r) {
    console.log(r); 
    let output = document.querySelector('#response');
    let JSONr = JSON.parse(r.currentTarget.response);
    JSONr = JSON.stringify(JSONr, null, '  ');
    JSON.strin
    output.textContent = JSONr;
    console.log(JSONr);
}

function buttonListeners() {
    let postBtn = document.querySelector('form > button:nth-child(5)');
    let getBtn = document.querySelector('form > button:nth-child(6)');
    let putBtn = document.querySelector('form > button:nth-child(7)');
    let deleteBtn = document.querySelector('form > button:nth-child(8)');
    postBtn.addEventListener('click', postRequest, false);
    getBtn.addEventListener('click', getRequest, false);
    putBtn.addEventListener('click', putRequest, false);
    deleteBtn.addEventListener('click', deleteRequest, false);
}

