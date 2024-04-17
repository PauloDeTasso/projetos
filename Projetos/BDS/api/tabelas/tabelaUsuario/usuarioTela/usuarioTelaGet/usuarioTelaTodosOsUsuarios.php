<div class="secaoConteudoPrincipalTodosOsUsuarios">
    <?php
    // Decodifica os usuários em um array associativo
    $usuarios = json_decode($usuarios_json, true);

    // Verifica se há usuários
    if ($usuarios)
    {
        // Loop através de cada usuário
        foreach ($usuarios as $usuario)
        {
            // Verifica se o usuário está online
            $status = ($usuario['ativo_usuario'] == 1) ? 'Online' : 'Offline';

            // Exibe os detalhes do usuário
            echo "<div class='usuario'>";
            echo "<p><strong>ID:</strong> {$usuario['id_usuario']}</p>";
            echo "<p><strong>Nome:</strong> {$usuario['nome_usuario']}</p>";
            echo "<p><strong>Email:</strong> {$usuario['email_usuario']}</p>";
            echo "<p><strong>IP:</strong> {$usuario['ip_usuario']}</p>";
            echo "<p><strong>Status:</strong> {$status}</p>";
            echo "<p><strong>Data de Criação:</strong> {$usuario['data_de_criacao_usuario']}</p>";
            echo "<p><strong>Data de Atualização:</strong> {$usuario['data_de_atualizacao_usuario']}</p>";
            echo "</div>";
        }
    }
    else
    {
        // Se não houver usuários, exibe uma mensagem
        echo "<p>Nenhum usuário encontrado.</p>";
    }
    ?>
</div>