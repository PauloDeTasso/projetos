<?php

class LocalizacaoUsuario
{
    public static function obterLocalizacaoUsuario($ip)
    {
        // URL da API ipinfo.io
        $url = "http://ipinfo.io/$ip/json";

        // Tenta fazer a requisição à API ipinfo.io
        $resposta = @file_get_contents($url);

        // Verifica se a resposta foi obtida com sucesso
        if ($resposta !== false)
        {
            // Converte a resposta JSON para um array associativo
            $dados = json_decode($resposta, true);

            // Verifica se a resposta contém dados de localização válidos
            if (!empty($dados['loc']))
            {
                // Retorna os dados de localização
                return array(
                    'cidade' => $dados['city'] ?? null,
                    'regiao' => $dados['region'] ?? null,
                    'pais' => $dados['country'] ?? null,
                    'latitude' => isset($dados['loc']) ? explode(',', $dados['loc'])[0] : null,
                    'longitude' => isset($dados['loc']) ? explode(',', $dados['loc'])[1] : null,
                    'provedor' => $dados['org'] ?? null,
                    'codigo_postal' => $dados['postal'] ?? null,
                    'fuso_horario' => $dados['timezone'] ?? null
                );
            }
        }

        // Se não foi possível obter os dados de localização, retorna um array vazio
        return array();
    }

    // Obtém o endereço IP do cliente
    public static function getClientIP()
    {
        $ipaddress = '';

        if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR'])
        {
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
        elseif (isset($_SERVER['HTTP_CLIENT_IP']) && $_SERVER['HTTP_CLIENT_IP'])
        {
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        }
        elseif (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'])
        {
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        }

        return $ipaddress;
    }
}