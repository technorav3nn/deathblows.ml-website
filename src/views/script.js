$(document).ready(function () {
    $("#discord-btn-copy").on("click", function () {
        $("#alert-btn").fadeIn(500);
        var text = "Death_Blows#8997";
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log("Copying to clipboard successful!");
            })
            .catch((err) => {
                console.log(err.message);
            });
    });
});
