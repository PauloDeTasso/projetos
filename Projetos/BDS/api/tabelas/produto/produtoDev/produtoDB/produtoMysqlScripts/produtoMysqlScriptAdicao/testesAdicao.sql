-- Adicionando valores de exemplo para a tabela Categoria
INSERT INTO Categoria (nomeCategoria, descricaoCategoria) VALUES
('Vestidos', 'Vestidos femininos para diversas ocasiões'),
('Blusas', 'Blusas femininas de diferentes estilos'),
('Calças', 'Calças femininas para o dia a dia'),
('Saias', 'Saias femininas em diversos modelos'),
('Casacos', 'Casacos femininos para o inverno');

-- Adicionando valores de exemplo para a tabela Marca
INSERT INTO Marca (nomeMarca, descricaoMarca) VALUES
('Marca A', 'Marca A de roupas femininas'),
('Marca B', 'Marca B de roupas femininas'),
('Marca C', 'Marca C de roupas femininas'),
('Marca D', 'Marca D de roupas femininas'),
('Marca E', 'Marca E de roupas femininas');

-- Adicionando valores de exemplo para a tabela Tamanho
INSERT INTO Tamanho (nomeTamanho, descricaoTamanho) VALUES
('PP', 'Extra pequeno'),
('P', 'Pequeno'),
('M', 'Médio'),
('G', 'Grande'),
('GG', 'Extra grande');

-- Adicionando valores de exemplo para a tabela Cor
INSERT INTO Cor (nomeCor) VALUES
('Preto'),
('Branco'),
('Vermelho'),
('Azul'),
('Verde');

-- Adicionando valores de exemplo para a tabela Produto
INSERT INTO Produto (nomeProduto, descricaoProduto, categoriaId, marcaId, produtoTamanhoId, bustoProduto, cinturaProduto, quadrilProduto, corId, precoProduto, pesoProduto, quantidadeProduto, disponivelProduto, promocaoProduto) VALUES
('Vestido Floral', 'Vestido floral estampado, ideal para o verão', 1, 1, 3, 90.50, 70.25, 95.75, 1, 129.99, 0.3, 20, TRUE, FALSE),
('Blusa Básica', 'Blusa básica em algodão, ótima para o dia a dia', 2, 2, 2, NULL, NULL, NULL, 2, 49.99, 0.2, 30, TRUE, FALSE),
('Calça Jeans Skinny', 'Calça jeans skinny, perfeita para diversas ocasiões', 3, 3, 4, NULL, 75.00, 98.50, 4, 89.99, 0.4, 25, TRUE, TRUE),
('Saia Midi Plissada', 'Saia midi plissada elegante para eventos formais', 4, 4, 5, NULL, NULL, NULL, 3, 79.99, 0.3, 15, TRUE, FALSE),
('Casaco de Lã', 'Casaco de lã quente para o inverno', 5, 5, NULL, NULL, NULL, NULL, 1, 199.99, 0.8, 10, TRUE, FALSE);

-- Adicionando valores de exemplo para a tabela Foto
INSERT INTO Foto (urlFoto, produtoId) VALUES
('url_da_foto_1.jpg', 1),
('url_da_foto_2.jpg', 2),
('url_da_foto_3.jpg', 3),
('url_da_foto_4.jpg', 4),
('url_da_foto_5.jpg', 5);

-- Adicionando valores de exemplo para a tabela Avaliacao
INSERT INTO Avaliacao (notaAvaliacao, comentarioAvaliacao, produtoId, clienteId) VALUES
(4.5, 'Adorei o vestido, ótima qualidade!', 1, 1),
(5.0, 'Blusa confortável e bonita', 2, 1),
(4.0, 'A calça jeans ficou perfeita em mim', 3, 2),
(4.2, 'Saia elegante, gostei muito!', 4, 2),
(3.8, 'O casaco é bonito, mas um pouco caro', 5, 3);

-- Adicionando valores de exemplo para a tabela Resposta
INSERT INTO Resposta (conteudoResposta, avaliacaoId) VALUES
('Ficamos felizes que tenha gostado!', 1),
('Obrigado pelo feedback positivo!', 2),
('Que bom que gostou da calça!', 3),
('Agradecemos pelo comentário!', 4),
('Lamentamos que ache o preço alto, mas estamos sempre trabalhando para oferecer o melhor preço possível.', 5);

-- Adicionando valores de exemplo para a tabela Promocao
INSERT INTO Promocao (descricaoPromocao, descontoPromocao, dataInicioPromocao, dataFimPromocao, produtoId) VALUES
('Promoção de Verão - 20% de desconto', 20.00, '2024-06-01', '2024-07-01', 1),
('Oferta Especial - 10% de desconto', 10.00, '2024-04-15', '2024-04-30', 3);
