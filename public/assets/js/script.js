// Define API calls as an object for scalability
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

$("#send-btn").on("click", function (e) {
    e.preventDefault();

    var user = {
        name: $("#name-txt").val(),
        message: $("#message").val()
    };

    console.log(user);

    API.postUser(user).then(function () {
        location.replace("/");
    })

});