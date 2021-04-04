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

function updateLogs() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = "";
            var logs = JSON.parse(this.responseText);
            var ul = document.createElement("ul");
            var li;

            for (var i = 0; i < logs.length; i++) {
                li = document.createElement("li");
                li.appendChild(document.createTextNode(logs[i]));
                ul.appendChild(li);
            }
            document.getElementById("main").appendChild(ul);
        }
    };

    x.open("GET", "/log.json", true);
    x.send();
}

function update() {
    setInterval(function() {
        var x = new XMLHttpRequest();

        x.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("main").innerHTML = "";
                var logs = JSON.parse(this.responseText);
                var ul = document.createElement("ul");
                var li;

                for (var i = 0; i < logs.length; i++) {
                    li = document.createElement("li");
                    li.appendChild(document.createTextNode(logs[i]));
                    ul.appendChild(li);
                }
                document.getElementById("main").appendChild(ul);
            }
        };

        x.open("GET", "/log-ro.json", true);
        x.send();
    }, 10000);
}

function contactClick() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };

    x.open("GET", "/contact.ajax", true);
    x.send();
}

function searchClick() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };

    x.open("GET", "/search.ajax", true);
    x.send();
}

function aboutClick() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };

    x.open("GET", "/about.ajax", true);
    x.send();
}

function loadContent() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById("div").innerHTML = this.responseText;
            }
            else if (this.status == 403) {
                var button = document.createElement("button");
                var paragraph = document.createElement("p");
                paragraph.appendChild(document.createTextNode("Accept by clicking the button below."));
                button.innerHTML = "Accept";
                button.onclick = accept;
                
                document.getElementById("div").innerHTML = "";
                document.getElementById("div").appendChild(paragraph);
                document.getElementById("div").appendChild(button);
            }

        }
    };

    x.open("GET", "/content.ajax", true);
    x.send();
}

function accept() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadContent();
        }
    };

    x.open("GET", "/accept", true);
    x.send();
}