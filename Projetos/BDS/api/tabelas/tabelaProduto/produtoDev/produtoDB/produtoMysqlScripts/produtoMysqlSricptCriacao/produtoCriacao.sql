CREATE TABLE IF NOT EXISTS PRODUTO (
    produtoId INT AUTO_INCREMENT PRIMARY KEY,
    produtoNome VARCHAR(255) NOT NULL,
    produtoDescricao TEXT NOT NULL,
    produtoTamanhos VARCHAR(100),
    produtoBusto DECIMAL(10,2),
    produtoCintura DECIMAL(10,2),
    produtoQuadril DECIMAL(10,2),
    produtoCor VARCHAR(50),
    produtoPreco DECIMAL(10,2) NOT NULL,
    produtoCategoria VARCHAR(100),
    produtoSubcategoria VARCHAR(100),
    produtoPeso DECIMAL(10,2),
    produtoQuantidade INT NOT NULL DEFAULT 0,
    produtoDisponivel BOOLEAN NOT NULL DEFAULT TRUE,
    produtoUrlFotos TEXT,
    produtoMarca VARCHAR(100),
    produtoAvaliacoes INT UNSIGNED NOT NULL DEFAULT 0,
    produtoComentarios INT UNSIGNED NOT NULL DEFAULT 0,
    produtoRespostas INT UNSIGNED NOT NULL DEFAULT 0,
    produtoEmPromocao BOOLEAN NOT NULL DEFAULT FALSE,
    produtoDataDeCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    produtoDataDaUltimaAtualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

////

-- Tabela para armazenar os produtos
CREATE TABLE IF NOT EXISTS Produto (
    produtoId INT AUTO_INCREMENT PRIMARY KEY,
    produtoNome VARCHAR(255) NOT NULL, -- Nome do produto
    produtoDescricao TEXT, -- Descrição do produto
    categoriaId INT, -- Chave estrangeira para a tabela de categorias
    marcaId INT, -- Chave estrangeira para a tabela de marcas
    produtoTamanhoId INT, -- Chave estrangeira para a tabela de tamanhos
    produtoBusto DECIMAL(10,2), -- Medidas do produto
    produtoCintura DECIMAL(10,2),
    produtoQuadril DECIMAL(10,2),
    corId INT, -- Chave estrangeira para a tabela de cores
    produtoPreco DECIMAL(10,2) NOT NULL, -- Preço do produto
    produtoPeso DECIMAL(10,2), -- Peso do produto
    produtoQuantidade INT NOT NULL DEFAULT 0, -- Quantidade disponível do produto
    produtoDisponivel BOOLEAN NOT NULL DEFAULT TRUE, -- Indica se o produto está disponível
    produtoEmPromocao BOOLEAN NOT NULL DEFAULT FALSE, -- Indica se o produto está em promoção
    produtoDataDeCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de cadastro do produto
    produtoDataDaUltimaAtualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data da última atualização do produto
    FOREIGN KEY (categoriaId) REFERENCES Categoria(categoriaId), -- Define a relação com a tabela de categorias
    FOREIGN KEY (marcaId) REFERENCES Marca(marcaId), -- Define a relação com a tabela de marcas
    FOREIGN KEY (produtoTamanhoId) REFERENCES Tamanho(tamanhoId), -- Define a relação com a tabela de tamanhos
    FOREIGN KEY (corId) REFERENCES Cor(corId) -- Define a relação com a tabela de cores
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;