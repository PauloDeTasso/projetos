USE bds;

-- Inserindo dados na tabela Categoria
INSERT INTO Categoria (nomeCategoria, descricaoCategoria) VALUES
('Blusas', 'Blusas femininas variadas'),
('Calças', 'Calças femininas variadas'),
('Vestidos', 'Vestidos femininos variados'),
('Saias', 'Saias femininas variadas'),
('Casacos', 'Casacos femininos variados');

-- Inserindo dados na tabela Marca
INSERT INTO Marca (nomeMarca, descricaoMarca) VALUES
('Marca A', 'Descrição da Marca A'),
('Marca B', 'Descrição da Marca B'),
('Marca C', 'Descrição da Marca C'),
('Marca D', 'Descrição da Marca D'),
('Marca E', 'Descrição da Marca E');

-- Inserindo dados na tabela Tamanho
INSERT INTO Tamanho (nomeTamanho, descricaoTamanho) VALUES
('P', 'Pequeno'),
('M', 'Médio'),
('G', 'Grande'),
('GG', 'Extra Grande'),
('36', 'Número 36'),
('38', 'Número 38');

-- Inserindo dados na tabela Cor
INSERT INTO Cor (nomeCor) VALUES
('Preto'),
('Branco'),
('Azul'),
('Vermelho'),
('Verde'),
('Rosa');

-- Inserindo dados na tabela Produto
INSERT INTO Produto (nomeProduto, descricaoProduto, categoriaId, marcaId, produtoTamanhoId, bustoProduto, cinturaProduto, quadrilProduto, corId, precoProduto, pesoProduto, quantidadeProduto, disponivelProduto, promocaoProduto)
VALUES
('Blusa Floral', 'Blusa com estampa floral', 1, 1, 1, 80.5, 60.0, 90.0, 1, 39.99, 0.2, 20, TRUE, FALSE),
('Calça Jeans Skinny', 'Calça jeans modelagem skinny', 2, 2, 2, NULL, 70.0, 95.0, 3, 59.99, 0.3, 15, TRUE, TRUE),
('Vestido Midi', 'Vestido midi com detalhes em renda', 3, 3, 3, 85.0, 68.0, 95.0, 5, 79.99, 0.4, 10, TRUE, FALSE),
('Saia Plissada', 'Saia plissada com estampa xadrez', 4, 4, 4, NULL, NULL, NULL, 2, 29.99, 0.25, 25, TRUE, FALSE),
('Casaco de Lã', 'Casaco de lã com capuz', 5, 5, 5, NULL, NULL, NULL, 4, 89.99, 0.5, 8, TRUE, FALSE);

-- Inserindo dados na tabela Foto
INSERT INTO Foto (urlFoto, produtoId) VALUES
('url_da_foto_1.jpg', 1),
('url_da_foto_2.jpg', 2),
('url_da_foto_3.jpg', 3),
('url_da_foto_4.jpg', 4),
('url_da_foto_5.jpg', 5);

-- Inserindo dados na tabela Avaliacao
INSERT INTO Avaliacao (notaAvaliacao, comentarioAvaliacao, produtoId, clienteId) VALUES
(4.5, 'Adorei o produto, ótima qualidade!', 1, 1),
(3.8, 'Bonita peça, mas esperava mais.', 2, 2),
(5.0, 'Superou minhas expectativas, recomendo!', 3, 3),
(4.0, 'Produto de acordo com o esperado.', 4, 4),
(4.2, 'Gostei bastante, entrega rápida.', 5, 5);

-- Inserindo dados na tabela Resposta
INSERT INTO Resposta (conteudoResposta, avaliacaoId) VALUES
('Obrigado pelo feedback!', 1),
('Vamos trabalhar para melhorar!', 2),
('Ficamos felizes que tenha gostado!', 3),
('Estamos à disposição!', 4),
('Esperamos vê-lo novamente em breve!', 5);

-- Inserindo dados na tabela Promocao
INSERT INTO Promocao (descricaoPromocao, descontoPromocao, dataInicioPromocao, dataFimPromocao, produtoId) VALUES
('Desconto de Primavera', 10.00, '2024-04-01', '2024-04-15', 1),
('Oferta Especial', 20.00, '2024-04-01', '2024-04-10', 3),
('Queima de Estoque', 15.00, '2024-04-01', '2024-04-30', 5);
