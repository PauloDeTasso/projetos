<!-- Conteúdo do seletor de ordenação -->
<div id="containerOrdenacao" class="ordenacao-container">
    <select id="seletorOrdenacao">
        <option value="nomeAsc">Nome (A-Z)</option>
        <option value="nomeDesc">Nome (Z-A)</option>
        <option value="precoAsc">Menor Preço</option>
        <option value="precoDesc">Maior Preço</option>
        <option value="popularidade">Popularidade</option>
    </select>
</div>

<!-- Script para capturar a seleção do usuário e atualizar a URI -->
<script>
document.getElementById('seletorOrdenacao').addEventListener('change', function() {
    var selectedOption = this.value;
    var currentUrl = new URL(window.location.href);
    var params = new URLSearchParams(currentUrl.search);

    // Atualiza o parâmetro 'ordem' com a nova seleção
    params.set('ordem', selectedOption);

    // Atualiza a URI com os novos parâmetros
    currentUrl.search = params.toString();
    window.location.href = currentUrl.toString();

    // Atualiza o estado do seletor para refletir a seleção do usuário
    this.value = selectedOption;
});

// Recupera a opção selecionada do seletor ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = new URL(window.location.href);
    var params = new URLSearchParams(currentUrl.search);
    var selectedOption = params.get('ordem');

    if (selectedOption) {
        document.getElementById('seletorOrdenacao').value = selectedOption;
    }
});
</script>

<!-- Estilos -->
<style>
.ordenacao-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: 10px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 14px;
    background-color: #fff;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    outline: none;
    width: auto;
    font-weight: 600;
}

.ordenacao-container select {
    font-size: 14px;
    color: #333;
    background-color: #fff;
    font-weight: 600;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>