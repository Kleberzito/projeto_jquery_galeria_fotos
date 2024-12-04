$(document).ready(function () {
    $("#newImageButton").click(function () {
        $("form").slideDown();
    })

    $("#cancelButton").click(function () {
        $("form").slideUp();
    })

    $("form").on("submit", function (event) {
        event.preventDefault();
    });
});
