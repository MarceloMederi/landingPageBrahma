$(document).ready(function() {
    $(".tab").click(function(e) {
        e.preventDefault();

        // Oculta todas as apresentações
        $(".apresentacao").hide();

        // Obtém o alvo da aba clicada
        var target = $(this).data("target");

        // Exibe a apresentação correspondente
        $("#" + target).show();
    });
});
