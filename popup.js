var request = new XMLHttpRequest();

request.open('GET', 'https://www.githubstatus.com/api/v2/status.json', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        document.getElementById("p1").innerHTML = data.status.description;
        console.log(data.status.description);
    } else {
        console.log('error');
    }
}

request.send();