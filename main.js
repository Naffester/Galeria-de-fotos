$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $(`
            <li style="display: none;">
                <img src="${enderecoDaNovaImagem}" alt="Nova imagem" />
                <div class="overlay-imagem-link">
                    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
                </div>
            </li>
        `);
        novoItem.appendTo('ul').fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
});