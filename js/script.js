const $ = jQuery;

function loadText(){
    // const request = new XMLHttpRequest();
    // request.open("GET", '/src/load-this.txt');
    // request.onload = function(){
    //     let text = this.response;
    //     document.getElementById("text-wrapper").innerHTML = text;
    // };

    // request.send();
    fetch('/src/load-this.txt')
    .then(res => res.text())
    .then(text => text.html(text))
};
const LoadText = $("#load-text");
LoadText.on("click", loadText);

function loadUsers() {
    const request = new XMLHttpRequest();
    request.open("GET", '/src/my-users.json');
    request.onload = function() {
        let users = this.response;
        const userData = JSON.parse(users);

        $("#users-wrapper").html("")
        userData.map(el => {
            $("#users-wrapper").append(`<li id="user-${el.id}" class="${el.role}">${el.name}</li>`)
        })
    }
    request.send();
}

const LoadUser = $("#load-users");
LoadUser.on("click", loadUsers);

