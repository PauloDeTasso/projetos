<?php

class ProdutoModelo {
    private $idProduto;
    private $nomeProduto;
    private $descricaoProduto;
    private $categoriaId;
    private $marcaId;
    private $produtoTamanhoId;
    private $bustoProduto;
    private $cinturaProduto;
    private $quadrilProduto;
    private $corId;
    private $precoProduto;
    private $pesoProduto;
    private $quantidadeProduto;
    private $disponivelProduto;
    private $promocaoProduto;
    private $dataDeCadastroProduto;
    private $dataDaUltimaAtualizacaoProduto;
    
    // Construtor
    public function __construct(
        $nomeProduto,
        $descricaoProduto,
        $categoriaId,
        $marcaId,
        $produtoTamanhoId,
        $bustoProduto,
        $cinturaProduto,
        $quadrilProduto,
        $corId,
        $precoProduto,
        $pesoProduto,
        $quantidadeProduto,
        $disponivelProduto,
        $promocaoProduto,
        $dataDeCadastroProduto,
        $dataDaUltimaAtualizacaoProduto,
        $idProduto = null
    ) {
        $this->idProduto = $idProduto;
        $this->nomeProduto = $nomeProduto;
        $this->descricaoProduto = $descricaoProduto;
        $this->categoriaId = $categoriaId;
        $this->marcaId = $marcaId;
        $this->produtoTamanhoId = $produtoTamanhoId;
        $this->bustoProduto = $bustoProduto;
        $this->cinturaProduto = $cinturaProduto;
        $this->quadrilProduto = $quadrilProduto;
        $this->corId = $corId;
        $this->precoProduto = $precoProduto;
        $this->pesoProduto = $pesoProduto;
        $this->quantidadeProduto = $quantidadeProduto;
        $this->disponivelProduto = $disponivelProduto;
        $this->promocaoProduto = $promocaoProduto;
        $this->dataDeCadastroProduto = $dataDeCadastroProduto;
        $this->dataDaUltimaAtualizacaoProduto = $dataDaUltimaAtualizacaoProduto;
    }

    // Métodos Getter e Setter
    // Métodos Getters
    public function getIdProduto() {
        return $this->idProduto;
    }

    public function getNomeProduto() {
        return $this->nomeProduto;
    }

    public function getDescricaoProduto() {
        return $this->descricaoProduto;
    }

    public function getCategoriaId() {
        return $this->categoriaId;
    }

    public function getMarcaId() {
        return $this->marcaId;
    }

    public function getProdutoTamanhoId() {
        return $this->produtoTamanhoId;
    }

    public function getBustoProduto() {
        return $this->bustoProduto;
    }

    public function getCinturaProduto() {
        return $this->cinturaProduto;
    }

    public function getQuadrilProduto() {
        return $this->quadrilProduto;
    }

    public function getCorId() {
        return $this->corId;
    }

    public function getPrecoProduto() {
        return $this->precoProduto;
    }

    public function getPesoProduto() {
        return $this->pesoProduto;
    }

    public function getQuantidadeProduto() {
        return $this->quantidadeProduto;
    }

    public function isDisponivelProduto() {
        return $this->disponivelProduto;
    }

    public function isPromocaoProduto() {
        return $this->promocaoProduto;
    }

    public function getDataDeCadastroProduto() {
        return $this->dataDeCadastroProduto;
    }

    public function getDataDaUltimaAtualizacaoProduto() {
        return $this->dataDaUltimaAtualizacaoProduto;
    }

    // Métodos Setters
    public function setIdProduto($idProduto) {
        $this->idProduto = $idProduto;
    }

    public function setNomeProduto($nomeProduto) {
        $this->nomeProduto = $nomeProduto;
    }

    public function setDescricaoProduto($descricaoProduto) {
        $this->descricaoProduto = $descricaoProduto;
    }

    public function setCategoriaId($categoriaId) {
        $this->categoriaId = $categoriaId;
    }

    public function setMarcaId($marcaId) {
        $this->marcaId = $marcaId;
    }

    public function setProdutoTamanhoId($produtoTamanhoId) {
        $this->produtoTamanhoId = $produtoTamanhoId;
    }

    public function setBustoProduto($bustoProduto) {
        $this->bustoProduto = $bustoProduto;
    }

    public function setCinturaProduto($cinturaProduto) {
        $this->cinturaProduto = $cinturaProduto;
    }

    public function setQuadrilProduto($quadrilProduto) {
        $this->quadrilProduto = $quadrilProduto;
    }

    public function setCorId($corId) {
        $this->corId = $corId;
    }

    public function setPrecoProduto($precoProduto) {
        $this->precoProduto = $precoProduto;
    }

    public function setPesoProduto($pesoProduto) {
        $this->pesoProduto = $pesoProduto;
    }

    public function setQuantidadeProduto($quantidadeProduto) {
        $this->quantidadeProduto = $quantidadeProduto;
    }

    public function setDisponivelProduto($disponivelProduto) {
        $this->disponivelProduto = $disponivelProduto;
    }

    public function setPromocaoProduto($promocaoProduto) {
        $this->promocaoProduto = $promocaoProduto;
    }

    public function setDataDeCadastroProduto($dataDeCadastroProduto) {
        $this->dataDeCadastroProduto = $dataDeCadastroProduto;
    }

    public function setDataDaUltimaAtualizacaoProduto($dataDaUltimaAtualizacaoProduto) {
        $this->dataDaUltimaAtualizacaoProduto = $dataDaUltimaAtualizacaoProduto;
    }
}

?>