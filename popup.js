var request = new XMLHttpRequest();

request.open('GET', 'https://status.github.com/api/last-message.json', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        document.getElementById("p1").innerHTML = data.body;
        console.log(data.body);
    } else {
        console.log('error');
    }
}

request.send();