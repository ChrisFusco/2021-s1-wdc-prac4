function updateLastViewed() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != '') {
            document.getElementById("paragraph").innerHTML = "This page was last viewed " + this.responseText;
        }
    };

    xhttp.open("GET", "/last.txt", true);
    xhttp.send();
}

function updateColors() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("h").innerHTML = this.responseText;
            document.getElementById("h").style.color = this.responseText;
        }
    };

    x.open("GET", "/color.txt", true);
    x.send();
}