<div class="secaoConteudoPrincipalTodosOsUsuarios">
    <div id="user-list">
        <?php
        $usuarios = json_decode($usuarios_json);

        echo "<div class='usuarios'>";
        foreach ($usuarios as $usuario)
        {
            echo "<div class='usuario'>";
            echo "<p><strong>Nome:</strong> {$usuario->nome}</p>";
            echo "<p><strong>Email:</strong> {$usuario->email}</p>";
            echo "<p><strong>IP:</strong> {$usuario->ip}</p>";
            echo "<p><strong>Data de Criação:</strong> {$usuario->data_de_criacao}</p>";
            echo "<p><strong>Data de Atualização:</strong> {$usuario->data_de_atualizacao}</p>";
            echo "</div>";
        }
        echo "</div>";
        ?>
    </div>
</div>