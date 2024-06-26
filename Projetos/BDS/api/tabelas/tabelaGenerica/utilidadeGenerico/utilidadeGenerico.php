<?php
// TabelaUtilidades.php

class Utilidades
{
    // Função para calcular o preço com desconto
    public static function calcularPrecoComDesconto($preco, $desconto)
    {
        if ($desconto < 0 || $desconto > 100)
        {
            throw new InvalidArgumentException('O desconto deve estar entre 0 e 100.');
        }

        $precoComDesconto = $preco * (1 - ($desconto / 100));
        return $precoComDesconto;
    }

    // Função para formatar um número como moeda
    public static function formatarNumeroComoMoeda($numero)
    {
        return number_format($numero, 2, ',', '.');
    }

    // Função para gerar um código de cupom de desconto aleatório
    public static function gerarCodigoCupomDesconto($tamanho = 8)
    {
        $caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $codigo = '';
        for ($i = 0; $i < $tamanho; $i++)
        {
            $codigo .= $caracteres[rand(0, strlen($caracteres) - 1)];
        }
        return $codigo;
    }

    // Função para exibir um toast
    public static function exibirToast($titulo, $mensagem, $recomendacao)
    {
        $toastScript = "<script>exibirToast('$titulo', '$mensagem', '$recomendacao');</script>";
        echo $toastScript;
    }

    public static function incluirArquivos(...$arquivos)
    {
        if (empty($arquivos))
        {
            return;
        }

        foreach ($arquivos as $arquivo)
        {
            require_once $arquivo;
        }
    }
}