<?php
// TabelaProtecaoEntrada.php

class ProtecaoDeEntrada
{
    public static function validarTexto($texto)
    {
        // Sanitizar contra perigos
        $textoSanitizado = self::sanitizarTexto($texto);

        // Proteção contra XSS e injeção de HTML
        $textoSeguro = self::protegerContraXSS($textoSanitizado);

        // Proteção contra injeção de código HTML
        $textoSeguro = self::protegerContraInjecaoDeCodigoHTML($textoSeguro);

        return $textoSeguro;
    }

    public static function sanitizarTexto($texto)
    {
        // Utilizando preg_replace com a flag e (PCRE_UTF8_MODIFIER) para lidar com texto UTF-8
        // Remover espaços em branco duplicados
        $texto = preg_replace('/\s+/', ' ', $texto);
        // Remover caracteres especiais exceto letras, números e espaços
        return preg_replace('/[^a-zA-Z0-9\s]/u', '', $texto);
    }

    public static function protegerContraXSS($texto)
    {
        // Implementar proteção contra XSS e injeção de HTML removendo tags HTML
        // Utilizando strip_tags para remover todas as tags HTML
        return strip_tags($texto);
    }

    public static function protegerContraInjecaoDeCodigoHTML($texto)
    {
        // Implementar proteção contra injeção de código HTML, substituindo caracteres especiais
        // Utilizando htmlentities para converter caracteres especiais em entidades HTML
        return htmlentities($texto, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}