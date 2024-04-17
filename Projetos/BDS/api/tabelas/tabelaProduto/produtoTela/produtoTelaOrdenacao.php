 <select id="seletorOrdenacao">
     <option value="precoAsc">Menor Preço</option>
     <option value="precoDesc">Maior Preço</option>
     <option value="popularidade">Popularidade</option>
     <!-- Adicione mais opções de ordenação, se necessário -->
 </select>



 <script>
// Obtém o elemento select de ordenação
const seletorOrdenacao = document.getElementById('seletorOrdenacao');

// Adiciona um ouvinte de evento para detectar mudanças no seletor
seletorOrdenacao.addEventListener('change', function() {
        // Chama a função para ordenar os resultados com base na opção selecionada
        ordenarResultados(this.value);
    }

);

// Função para ordenar os resultados com base na opção selecionada
function ordenarResultados(opcao) {
    // Implemente a lógica de ordenação aqui
    // Por exemplo, você pode chamar uma função de classificação ou atualizar a consulta SQL, dependendo de como os resultados são obtidos
    console.log('Opção de ordenação selecionada:', opcao);
    // Aqui você pode atualizar os resultados na página com base na ordenação selecionada
}
 </script>

 <style>
/* Estilo para o seletor de ordenação */
#seletorOrdenacao {
    margin-top: 10px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 14px;
    background-color: #fff;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    outline: none;
    /* Remove a borda ao focar */
    width: 200px;
    /* Ajuste conforme necessário */
    font-weight: 600;
}

/* Estilize as opções do seletor de ordenação, se necessário */
#seletorOrdenacao option {
    font-size: 14px;
    color: #333;
    background-color: #fff;
    font-weight: 600;
}
 </style>