<?php

class UsuarioModelo
{
    private $id;
    private $nome;
    private $email;
    private $ip;
    private $dataDeCriacao;
    private $dataDeAtualizacao;
    private $ativo;

    // Construtor
    public function __construct(
        $id,
        $nome,
        $email,
        $ip,
        $dataDeCriacao,
        $dataDeAtualizacao,
        $ativo
    )
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->email = $email;
        $this->ip = $ip;
        $this->dataDeCriacao = $dataDeCriacao;
        $this->dataDeAtualizacao = $dataDeAtualizacao;
        $this->ativo = $ativo;
    }

    // Métodos Getter e Setter
    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getIp()
    {
        return $this->ip;
    }

    public function setIp($ip)
    {
        $this->ip = $ip;
    }

    public function getDataDeCriacao()
    {
        return $this->dataDeCriacao;
    }

    public function setDataDeCriacao($dataDeCriacao)
    {
        $this->dataDeCriacao = $dataDeCriacao;
    }

    public function getDataDeAtualizacao()
    {
        return $this->dataDeAtualizacao;
    }

    public function setDataDeAtualizacao($dataDeAtualizacao)
    {
        $this->dataDeAtualizacao = $dataDeAtualizacao;
    }

    public function getAtivo()
    {
        return $this->ativo;
    }

    public function setAtivo($ativo)
    {
        $this->ativo = $ativo;
    }
}