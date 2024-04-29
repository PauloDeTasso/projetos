<!-------------------------------------------------------------->
<!-------------------------FOOTER---------------------------->

<hr />

<section class="secaoFooter">
    <!-------------------------SERVIÇOS---------------------------->

    <section class="servicos">
        <div class="subServicos">
            <div class="cc"></div>
            <p>
                Parcele no<br />
                Cartão de Crédito!
            </p>
        </div>

        <div class="subServicos">
            <div class="pix"></div>
            <p>Pague com PIX!</p>
        </div>

        <div class="subServicos">
            <div class="entrega"></div>
            <p>Entrega em 24h Santa Terezinha-PE<br />Imaculada-PB</p>
        </div>
    </section>

    <hr />

    <!-------------------------CATEGORIAS---------------------------->

    <section class="categorias">
        <div class="tituloCategoria">
            <h2>COMPRE AGORA</h2>
        </div>

        <div class="itensCategorias">
            <div class="tshirts">
                <div class="imagemTshirt" onclick="enviarRequisicao('/produtos/?categoria=tshirts')"></div>
                <p>TSHIRT</p>
            </div>

            <div class="vestidos">
                <div class="imagemVestidos" onclick="enviarRequisicao('/produtos/?categoria=vestidos')"></div>
                <p>VESTIDOS</p>
            </div>

            <div class="saias">
                <div class="imagemSaias" onclick="enviarRequisicao('/produtos/?categoria=saias')"></div>
                <p>SAIAS</p>
            </div>

            <div class="calcas">
                <div class="imagemCalcas" onclick="enviarRequisicao('/produtos/?categoria=calcas')"></div>
                <p>CALÇAS</p>
            </div>

            <div class="conjuntos">
                <div class="imagemConjuntos" onclick="enviarRequisicao('/produtos/?categoria=conjuntos')"></div>
                <p>CONJUNTOS</p>
            </div>
        </div>

        <div class="verTudo" onclick="enviarRequisicao('/produtos?root=menu')">
            <h2>VER TUDO</h2>
        </div>
    </section>

    <hr />

    <!-------------------------PROPAGANDAS---------------------------->

    <section class="imagens">
        <div class="imagem-container">
            <div class="imagemBanner01"></div>
        </div>
        <div class="imagem-container">
            <div class="imagemBanner02"></div>
        </div>
    </section>

    <hr />

    <!-------------------------COMENTARIOS E AVALIAÇÕES---------------------------->

    <section class="avaliacoes">COMENTÁRIOS E AVALIAÇÕES</section>
</section>

<hr />

<!-------------------------CONTATO---------------------------->

<section class="contato">
    <h3>CONTATO:</h3>

    <div class="whatsapp">
        <div class="imagemWhatsapp"></div>
        <p>(87) 9.9845-4848</p>
    </div>

    <div class="instagram">
        <div class="imagemInstagram"></div>
        <p>@belladonnastore</p>
    </div>
</section>
<hr />

<!-------------------------MAIS INFORMAÇÕES---------------------------->

<section class="maisInformacoes">
    <div class="listaInformacoes">
        <h4>MAIS INFORMAÇÕES:</h4>
        <hr />
        <span>Minha conta</span>
        <hr />
        <span>Lista de Desejos</span>
        <hr />
        <span>Contato</span>
        <hr />
        <span>Política de troca</span>
        <hr />
        <span>Politica de devolução</span>
        <hr />
        <span>Sobre nós</span>
        <hr />
    </div>
    <hr />
    <!-------------------------FORMAS DE PAGAMENTO---------------------------->

    <div class="formasDePagamento">
        <span>FORMAS DE PAGAMENTO:</span>
        <div class="imagemFormasDePagamento"></div>
    </div>

    <!-------------------------SELO---------------------------->

    <div class="imagemSelo"></div>
</section>
<hr />

<!-------------------------MARCA---------------------------->

<footer>
    <div class="marca">
        <div class="imagemMarca"></div>
    </div>
</footer>

<!-------------------------BOTAO WHATSAPP---------------------------->

<div id="whatsapp-button">
    <div id="whatsapp-tooltip">CHAME PELO WHATSAPP</div>
</div>

<!-------------------------FINAL---------------------------->
<script src="<?php echo $urlJs ?>"></script>

</body>

</html>