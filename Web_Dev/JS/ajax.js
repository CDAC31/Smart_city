let fbtn = document.getElementById('fetchbtn');
fbtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked fetchbtn');

    const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'Dj.txt', true);
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.setRequestHeader('content-type', 'application\JSON');

    xhr.onload = function() {
        console.log(this.responseText);
    }

    params = {
        "name": "morpheus",
        "job": "leader"
    };
    xhr.send(params);
}