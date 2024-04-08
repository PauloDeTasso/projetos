-- Inserir algumas categorias de exemplo
INSERT INTO Categoria (nomeCategoria, descricaoCategoria) VALUES
('Camisetas', 'Camisetas masculinas e femininas'),
('Calças', 'Calças jeans e sociais'),
('Vestidos', 'Vestidos curtos e longos');

-- Inserir algumas marcas de exemplo
INSERT INTO Marca (nomeMarca, descricaoMarca) VALUES
('Nike', 'Marca de roupas esportivas'),
('Adidas', 'Marca de roupas esportivas'),
('Levi\'s', 'Marca de jeans');

-- Inserir alguns tamanhos de exemplo
INSERT INTO Tamanho (nomeTamanho, descricaoTamanho) VALUES
('P', 'Pequeno'),
('M', 'Médio'),
('G', 'Grande');

-- Inserir algumas cores de exemplo
INSERT INTO Cor (nomeCor) VALUES
('Preto'),
('Branco'),
('Azul'),
('Vermelho');

-- Inserir alguns produtos de exemplo
INSERT INTO Produto (produtoNome, produtoDescricao, categoriaId, marcaId, produtoTamanhoId, produtoBusto, produtoCintura, produtoQuadril, corId, produtoPreco, produtoPeso, produtoQuantidade, produtoDisponivel, produtoEmPromocao)
VALUES
('Camiseta Nike Masculina', 'Camiseta de algodão', 1, 1, 1, 100, 80, 90, 1, 29.99, 0.2, 50, TRUE, FALSE),
('Calça Jeans Levi\'s Feminina', 'Calça jeans skinny', 2, 3, 2, 0, 70, 90, 3, 59.99, 0.4, 30, TRUE, TRUE),
('Vestido Floral', 'Vestido curto estampado', 3, 2, 3, 90, 70, 100, 4, 39.99, 0.3, 20, TRUE, FALSE);

-- Inserir algumas fotos de exemplo
INSERT INTO Foto (urlFoto, produtoId) VALUES
('url_da_foto1.jpg', 1),
('url_da_foto2.jpg', 2),
('url_da_foto3.jpg', 3);

-- Inserir algumas avaliações de exemplo
INSERT INTO Avaliacao (nota, comentario, produtoId) VALUES
(4.5, 'Ótima qualidade!', 1),
(3.8, 'Gostei, mas poderia ser mais confortável', 2),
(5.0, 'Perfeito!', 3);

-- Inserir algumas respostas de exemplo
INSERT INTO Resposta (conteudoResposta, avaliacaoId) VALUES
('Obrigado pelo feedback!', 1),
('Vamos melhorar!', 2),
('Que bom que gostou!', 3);

-- Inserir algumas promoções de exemplo
INSERT INTO Promocao (descricaoPromocao, desconto, dataInicio, dataFim, produtoId) VALUES
('Desconto de 10%', 10.00, '2024-04-01', '2024-04-10', 1),
('Liquidação de Verão', 20.00, '2024-03-15', '2024-03-31', 3);
