$(document).ready(function () {
    $("#newImageButton").click(function () {
        if ($(this).hasClass("cancelButton")) {
            $("form").slideUp();
            $(this).removeClass("cancelButton").text("Nova imagem +");
        } else {
            $("form").slideDown();
            $(this).addClass("cancelButton").text("Cancelar");
        }
    });

    $("form").on("submit", function (event) {
        event.preventDefault();

        const urlImagem = $("#url-img").val();
        const novoItem = $("<li style=\"display: none\"></li>");
        $(`<img src="${urlImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link"><a href="${urlImagem}" target="_blank" title="ver imagem">ver imagem</a><button class="remove-button" type="button">X</button></div>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(1000);
        $("#url-img").val("");
    });

    $(document).on("click", ".remove-button", function () {
        $(this).closest("li").fadeOut(500, function () {
            $(this).remove();
        });
    });
});


