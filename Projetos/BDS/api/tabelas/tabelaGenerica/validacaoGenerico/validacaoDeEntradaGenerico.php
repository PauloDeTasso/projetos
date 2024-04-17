<?php
class ValidacaoDeEntrada
{

    // Método para validar um nome
    public static function validarNome($nome)
    {
        // Aceita letras (maiúsculas e minúsculas), números e caracteres especiais do alfabeto brasileiro, incluindo "Ã", "Ç", "É", etc.
        return preg_match('/^[\p{L}\p{N}çÇãÃáÁàÀâÂéÉêÊíÍóÓõÕôÔúÚüÜ\s]+$/u', $nome);
    }


    // Método para validar um CPF
    public static function validarCPF($cpf)
    {
        // Verifica se o CPF possui 11 dígitos e se atende ao algoritmo de validação
        if (strlen($cpf) != 11)
        {
            return false;
        }

        for ($i = 0; $i < 10; $i++)
        {
            if (substr_count($cpf, $i) == 11)
            {
                return false;
            }
        }

        $cpf = str_split($cpf);
        $v1 = 0;
        $v2 = 0;

        for ($i = 0, $p = 10; $i < 9; $i++, $p--)
        {
            $v1 += $cpf[$i] * $p;
        }

        for ($i = 0, $p = 11; $i < 10; $i++, $p--)
        {
            $v2 += $cpf[$i] * $p;
        }

        $digito1 = (($v1 % 11) < 2) ? 0 : 11 - ($v1 % 11);
        $digito2 = (($v2 % 11) < 2) ? 0 : 11 - ($v2 % 11);

        return (($cpf[9] == $digito1) && ($cpf[10] == $digito2));
    }

    // Método para validar um CNPJ
    public static function validarCNPJ($cnpj)
    {
        // Verifica se o CNPJ possui 14 dígitos e se atende ao algoritmo de validação
        if (strlen($cnpj) != 14)
        {
            return false;
        }

        for ($i = 0; $i < 10; $i++)
        {
            if (substr_count($cnpj, $i) == 14)
            {
                return false;
            }
        }

        $cnpj = str_split($cnpj);
        $soma = 0;
        $multiplicador = 5;

        for ($i = 0; $i < 12; $i++)
        {
            $soma += $cnpj[$i] * $multiplicador;
            $multiplicador = ($multiplicador == 2) ? 9 : $multiplicador - 1;
        }

        $digito = (($soma % 11) < 2) ? 0 : 11 - ($soma % 11);

        return ($cnpj[12] == $digito);
    }

    // Método para validar um email
    public static function validarEmail($email)
    {
        // Utiliza a função filter_var do PHP para validar o formato do email
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    // Método para validar um telefone
    public static function validarTelefone($telefone)
    {
        // Verifica se o telefone possui exatamente 10 dígitos
        return preg_match('/^\d{10}$/', $telefone);
    }

    // Método para validar um celular
    public static function validarCelular($celular)
    {
        // Verifica se o celular possui exatamente 11 dígitos
        return preg_match('/^\d{11}$/', $celular);
    }
    // Método para validar um RG
    public static function validarRG($rg)
    {
        // Verifica se o RG possui de 8 a 9 dígitos
        return preg_match('/^\d{8,9}$/', $rg);
    }

    // Método para validar um CEP
    public static function validarCEP($cep)
    {
        // Verifica se o CEP possui exatamente 8 dígitos
        return preg_match('/^\d{8}$/', $cep);
    }

    // Método para validar um título de eleitor
    public static function validarTituloEleitor($titulo)
    {
        // Verifica se o título de eleitor possui 12 dígitos
        return preg_match('/^\d{12}$/', $titulo);
    }

    // Método para validar uma data no formato dd/mm/aaaa
    public static function validarData($data)
    {
        // Verifica se a data está no formato dd/mm/aaaa
        if (!preg_match('/^\d{2}\/\d{2}\/\d{4}$/', $data))
        {
            return false;
        }

        // Verifica se a data é válida usando a função strtotime
        $partes = explode('/', $data);
        $dia = intval($partes[0]);
        $mes = intval($partes[1]);
        $ano = intval($partes[2]);

        return checkdate($mes, $dia, $ano);
    }

    // Método para validar um número de registro profissional (ex: CRM, OAB)
    public static function validarRegistroProfissional($registro)
    {
        // Verifica se o registro possui de 4 a 20 caracteres alfanuméricos
        return preg_match('/^[a-zA-Z0-9]{4,20}$/', $registro);
    }
    // Método para validar PIS/PASEP/NIT
    public static function validarPISPASEPNIT($pis)
    {
        // Verifica se o PIS/PASEP/NIT possui 11 dígitos
        return preg_match('/^\d{11}$/', $pis);
    }

    // Método para validar um número de CNH
    public static function validarCNH($cnh)
    {
        // Verifica se a CNH possui 11 caracteres
        return preg_match('/^\w{11}$/', $cnh);
    }

    // Método para validar um número de cartão de crédito
    public static function validarCartaoCredito($cartao)
    {
        // Verifica se o cartão de crédito possui 16 dígitos
        return preg_match('/^\d{16}$/', $cartao);
    }

    // Método para validar CPF/CNPJ com formatação
    public static function validarCPFCNPJFormatado($documento)
    {
        // Verifica se o CPF ou CNPJ possui o formato correto
        return preg_match('/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/', $documento);
    }
    // Método para validar número de conta bancária
    public static function validarContaBancaria($conta)
    {
        // Verifica se a conta bancária possui até 12 dígitos
        return preg_match('/^\d{1,12}$/', $conta);
    }

    // Método para validar número de agência bancária
    public static function validarAgenciaBancaria($agencia)
    {
        // Verifica se a agência bancária possui até 6 dígitos
        return preg_match('/^\d{1,6}$/', $agencia);
    }

    // Método para validar código de barras
    public static function validarCodigoBarras($codigo)
    {
        // Verifica se o código de barras possui 44 dígitos
        return preg_match('/^\d{44}$/', $codigo);
    }

    // Método para validar nome completo
    public static function validarNomeCompleto($nome)
    {
        // Verifica se o nome possui apenas letras e espaços
        return preg_match('/^[a-zA-ZÀ-ÿ\s]+$/', $nome);
    }
    // Método para validar uma senha
    public static function validarSenha($senha)
    {
        // Verifica se a senha possui entre 6 e 20 caracteres
        // e pelo menos uma letra maiúscula, uma letra minúscula e um número
        return preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/', $senha);
    }

    // Método para validar número de RG com formatação
    public static function validarRGFormatado($rg)
    {
        // Verifica se o RG possui o formato correto (ex: 12.345.678-9)
        return preg_match('/^\d{2}\.\d{3}\.\d{3}-\d{1}$/', $rg);
    }

    // Método para validar CNPJ com pontuação
    public static function validarCNPJComPontuacao($cnpj)
    {
        // Verifica se o CNPJ possui o formato correto (ex: 12.345.678/0001-90)
        return preg_match('/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/', $cnpj);
    }
    // Método para validar um número de PIS/PASEP/NIT com formatação
    public static function validarPISPASEPNITFormatado($pis)
    {
        // Verifica se o PIS/PASEP/NIT possui o formato correto (ex: 123.4567.890-1)
        return preg_match('/^\d{3}\.\d{4}\.\d{3}-\d{1}$/', $pis);
    }

    // Método para validar um número de CNH com formatação
    public static function validarCNHFormatada($cnh)
    {
        // Verifica se a CNH possui o formato correto (ex: X1234567890)
        return preg_match('/^[a-zA-Z]\d{9}$/', $cnh);
    }

    // Método para validar um número de cartão de crédito com formatação
    public static function validarCartaoCreditoFormatado($cartao)
    {
        // Verifica se o cartão de crédito possui o formato correto (ex: 1234 5678 9012 3456)
        return preg_match('/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/', $cartao);
    }

    // Método para validar um número de CPF com formatação
    public static function validarCPFFormatado($cpf)
    {
        // Verifica se o CPF possui o formato correto (ex: 123.456.789-01)
        return preg_match('/^\d{3}\.\d{3}\.\d{3}-\d{2}$/', $cpf);
    }

    // Método para validar um número de CNPJ com formatação
    public static function validarCNPJFormatado($cnpj)
    {
        // Verifica se o CNPJ possui o formato correto (ex: 12.345.678/0001-90)
        return preg_match('/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/', $cnpj);
    }

    // Método para validar um número de título de eleitor com formatação
    public static function validarTituloEleitorFormatado($titulo)
    {
        // Verifica se o título de eleitor possui o formato correto (ex: 1234 5678 9012)
        return preg_match('/^\d{4}\s\d{4}\s\d{4}$/', $titulo);
    }

    // Método para validar um número de registro profissional (ex: CRM, OAB) com formatação
    public static function validarRegistroProfissionalFormatado($registro)
    {
        // Verifica se o registro profissional possui o formato correto (ex: CRM 123456)
        return preg_match('/^[a-zA-Z]+\s\d{6}$/', $registro);
    }

    // Método para validar uma senha forte
    public static function validarSenhaForte($senha)
    {
        // Verifica se a senha possui pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais
        return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $senha);
    }

    // Método para validar um número de telefone com formatação (ex: (12) 3456-7890)
    public static function validarTelefoneFormatado($telefone)
    {
        // Verifica se o telefone possui o formato correto
        return preg_match('/^\(\d{2}\)\s\d{4}-\d{4}$/', $telefone);
    }

    // Método para validar um número de celular com formatação (ex: (12) 98765-4321)
    public static function validarCelularFormatado($celular)
    {
        // Verifica se o celular possui o formato correto
        return preg_match('/^\(\d{2}\)\s\d{5}-\d{4}$/', $celular);
    }
    // Método para validar um endereço de IP
    public static function validarEnderecoIP($ip)
    {
        // Utiliza a função filter_var do PHP para validar o formato do endereço IP
        return filter_var($ip, FILTER_VALIDATE_IP);
    }

    // Método para validar uma URL
    public static function validarURL($url)
    {
        // Utiliza a função filter_var do PHP para validar o formato da URL
        return filter_var($url, FILTER_VALIDATE_URL);
    }

    // Método para validar um código postal
    public static function validarCodigoPostal($codigoPostal)
    {
        // Verifica se o código postal possui o formato adequado para o país específico
        // Aqui você pode adicionar validações específicas para diferentes países
        return true; // Implemente a validação adequada de acordo com os padrões do país
    }
    // Método para validar um número de cartão de débito
    public static function validarCartaoDebito($cartao)
    {
        // Verifica se o cartão de débito possui o formato correto (ex: 1234 5678 9012 3456)
        return preg_match('/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/', $cartao);
    }

    // Método para validar um número de passaporte
    public static function validarPassaporte($passaporte)
    {
        // Verifica se o passaporte possui o formato correto (ex: A1234567)
        return preg_match('/^[A-Z]\d{7}$/', $passaporte);
    }

    // Método para validar um número de seguro social (SSN)
    public static function validarSSN($ssn)
    {
        // Verifica se o SSN possui o formato correto (ex: 123-45-6789)
        return preg_match('/^\d{3}-\d{2}-\d{4}$/', $ssn);
    }

    // Método para validar um número de identificação fiscal (NIF)
    public static function validarNIF($nif)
    {
        // Verifica se o NIF possui o formato correto (ex: 123456789)
        return preg_match('/^\d{9}$/', $nif);
    }

    // Método para validar um número de identificação de estrangeiro (NIE)
    public static function validarNIE($nie)
    {
        // Verifica se o NIE possui o formato correto (ex: X1234567A)
        return preg_match('/^[XYZ]\d{7}[A-Z]$/', $nie);
    }

    // Método para validar um código de verificação (CVV) de cartão
    public static function validarCVV($cvv)
    {
        // Verifica se o CVV possui 3 ou 4 dígitos
        return preg_match('/^\d{3,4}$/', $cvv);
    }

    // Método para validar uma data no formato aaaa-mm-dd
    public static function validarDataISO($data)
    {
        // Verifica se a data está no formato aaaa-mm-dd
        return preg_match('/^\d{4}-\d{2}-\d{2}$/', $data);
    }

    // Método para validar um número de telefone internacional
    public static function validarTelefoneInternacional($telefone)
    {
        // Verifica se o telefone possui o formato correto para um número internacional
        // Por exemplo: +1234567890 ou 011234567890
        return preg_match('/^\+\d{1,3}\d{5,15}$/', $telefone);
    }

    // Método para validar um número de celular internacional
    public static function validarCelularInternacional($celular)
    {
        // Verifica se o celular possui o formato correto para um número internacional
        // Por exemplo: +1234567890 ou 011234567890
        return preg_match('/^\+\d{1,3}\d{5,15}$/', $celular);
    }

    // Método para validar um número de telefone fixo com formatação (ex: +1 (123) 456-7890)
    public static function validarTelefoneFixoFormatadoInternacional($telefone)
    {
        // Verifica se o telefone possui o formato correto para um número internacional
        // Por exemplo: +1 (123) 456-7890
        return preg_match('/^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/', $telefone);
    }

    // Método para validar um número de celular com formatação internacional (ex: +1 (123) 456-7890)
    public static function validarCelularFormatadoInternacional($celular)
    {
        // Verifica se o celular possui o formato correto para um número internacional
        // Por exemplo: +1 (123) 456-7890
        return preg_match('/^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/', $celular);
    }

    // Método para validar um número de telefone fixo com formatação para o Brasil (ex: (12) 3456-7890)
    public static function validarTelefoneFixoFormatadoBrasil($telefone)
    {
        // Verifica se o telefone possui o formato correto para o Brasil
        // Por exemplo: (12) 3456-7890
        return preg_match('/^\(\d{2}\)\s\d{4}-\d{4}$/', $telefone);
    }

    // Método para validar um número de celular com formatação para o Brasil (ex: (12) 98765-4321)
    public static function validarCelularFormatadoBrasil($celular)
    {
        // Verifica se o celular possui o formato correto para o Brasil
        // Por exemplo: (12) 98765-4321
        return preg_match('/^\(\d{2}\)\s9\d{4}-\d{4}$/', $celular);
    }

    // Método para validar um número de telefone fixo com formatação para Portugal (ex: (21) 123 4567)
    public static function validarTelefoneFixoFormatadoPortugal($telefone)
    {
        // Verifica se o telefone possui o formato correto para Portugal
        // Por exemplo: (21) 123 4567
        return preg_match('/^\(\d{2}\)\s\d{3}\s\d{4}$/', $telefone);
    }

    // Método para validar um número de celular com formatação para Portugal (ex: (91) 123 4567)
    public static function validarCelularFormatadoPortugal($celular)
    {
        // Verifica se o celular possui o formato correto para Portugal
        // Por exemplo: (91) 123 4567
        return preg_match('/^\(\d{2}\)\s\d{3}\s\d{4}$/', $celular);
    }

    // Método para validar um número de telefone fixo com formatação para Espanha (ex: 123 456 789)
    public static function validarTelefoneFixoFormatadoEspanha($telefone)
    {
        // Verifica se o telefone possui o formato correto para a Espanha
        // Por exemplo: 123 456 789
        return preg_match('/^\d{3}\s\d{3}\s\d{3}$/', $telefone);
    }

    // Método para validar um número de celular com formatação para Espanha (ex: 612 345 678)
    public static function validarCelularFormatadoEspanha($celular)
    {
        // Verifica se o celular possui o formato correto para a Espanha
        // Por exemplo: 612 345 678
        return preg_match('/^\d{3}\s\d{3}\s\d{3}$/', $celular);
    }

    // Método para validar um número de telefone fixo com formatação para Itália (ex: 02 1234 5678)
    public static function validarTelefoneFixoFormatadoItalia($telefone)
    {
        // Verifica se o telefone possui o formato correto para a Itália
        // Por exemplo: 02 1234 5678
        return preg_match('/^\d{2}\s\d{4}\s\d{4}$/', $telefone);
    }

    // Método para validar um número de celular com formatação para Itália (ex: 312 345 6789)
    public static function validarCelularFormatadoItalia($celular)
    {
        // Verifica se o celular possui o formato correto para a Itália
        // Por exemplo: 312 345 6789
        return preg_match('/^\d{3}\s\d{3}\s\d{4}$/', $celular);
    }
}