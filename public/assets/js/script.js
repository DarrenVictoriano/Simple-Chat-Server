// Define API calls as an object for scalability
var socket = io();

var API = {
    getUser: function () {
        return $.ajax({
            url: "/api/messages",
            type: "GET"
        });
    },
    postUser: function (userData) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/messages",
            data: JSON.stringify(userData)
        });
    }
};

socket.on("message", function (res) {
    $("#message-div").append("<h4>" + res.name + "</h4><p>" + res.message + "</p>");
});

$("#send-btn").on("click", function (e) {
    e.preventDefault();

    var user = {
        name: $("#name-txt").val(),
        message: $("#message").val()
    };

    API.postUser(user).then(function (res) {
        console.log(res);
    })

});