<section class="main">

    <!-------------------------CARROSSEL---------------------------->
    <section class="secaoCarrossel">
        <div class="carousel">
            <button class="prev">&lt;</button>
            <div class="slides">
                <div class="slide"></div>
                <div class="slide"></div>
                <div class="slide"></div>
                <!-- Adicione mais slides conforme necessário -->
            </div>
            <button class="next">&gt;</button>
        </div>
    </section>

    <hr />

    <!-- Aviso de Cookies -->
    <?php
    // Verifique se os cookies foram aceitos antes de exibir o banner
    if (!isset($_COOKIE['cookies_aceitos']) || $_COOKIE['cookies_aceitos'] !== 'true') {
    ?>
    <div id="cookie-banner" class="cookie-banner">
        <p>Este site usa cookies para garantir que você obtenha a melhor experiência.</p>
        <a href="/politica-de-privacidade">Política de Privacidade</a>
        <button onclick="aceitarCookies()">Aceitar</button>
        <span onclick="fecharBanner()" class="fechar-banner">&times;</span>
    </div>
    <?php
    }
    ?>

</section>

<script src="<?php echo $urlJs2 ?>"></script>