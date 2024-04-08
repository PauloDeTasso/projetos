CREATE DATABASE IF NOT EXISTS bds CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE bds;

-- Tabela para armazenar as categorias dos produtos
CREATE TABLE IF NOT EXISTS Categoria (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nomeCategoria VARCHAR(255) NOT NULL, -- Nome da categoria
    descricaoCategoria TEXT, -- Descrição da categoria
    UNIQUE(nomeCategoria) -- Garante que o nome da categoria seja único
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar as marcas dos produtos
CREATE TABLE IF NOT EXISTS Marca (
    idMarca INT AUTO_INCREMENT PRIMARY KEY,
    nomeMarca VARCHAR(255) NOT NULL, -- Nome da marca
    descricaoMarca TEXT, -- Descrição da marca
    UNIQUE(nomeMarca) -- Garante que o nome da marca seja único
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar os tamanhos dos produtos
CREATE TABLE IF NOT EXISTS Tamanho (
    idTamanho INT AUTO_INCREMENT PRIMARY KEY,
    nomeTamanho VARCHAR(20) NOT NULL, -- Nome do tamanho
    descricaoTamanho VARCHAR(255), -- Descrição do tamanho
    UNIQUE(nomeTamanho) -- Garante que o nome do tamanho seja único
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar as cores dos produtos
CREATE TABLE IF NOT EXISTS Cor (
    idCor INT AUTO_INCREMENT PRIMARY KEY,
    nomeCor VARCHAR(50) NOT NULL, -- Nome da cor
    UNIQUE(nomeCor) -- Garante que o nome da cor seja único
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar os produtos
CREATE TABLE IF NOT EXISTS Produto (
    idProduto INT AUTO_INCREMENT PRIMARY KEY,
    nomeProduto VARCHAR(255) NOT NULL, -- Nome do produto
    descricaoProduto TEXT, -- Descrição do produto
    categoriaId INT, -- Chave estrangeira para a tabela de categorias
    marcaId INT, -- Chave estrangeira para a tabela de marcas
    produtoTamanhoId INT, -- Chave estrangeira para a tabela de tamanhos
    bustoProduto DECIMAL(10,2), -- Medidas do produto
    cinturaProduto DECIMAL(10,2),
    quadrilProduto DECIMAL(10,2),
    corId INT, -- Chave estrangeira para a tabela de cores
    precoProduto DECIMAL(10,2) NOT NULL, -- Preço do produto
    pesoProduto DECIMAL(10,2), -- Peso do produto
    quantidadeProduto INT NOT NULL DEFAULT 0, -- Quantidade disponível do produto
    disponivelProduto BOOLEAN NOT NULL DEFAULT TRUE, -- Indica se o produto está disponível
    promocaoProduto BOOLEAN NOT NULL DEFAULT FALSE, -- Indica se o produto está em promoção
    dataDeCadastroProduto TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de cadastro do produto
    dataDaUltimaAtualizacaoProduto TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data da última atualização do produto
    FOREIGN KEY (categoriaId) REFERENCES Categoria(idCategoria), -- Define a relação com a tabela de categorias
    FOREIGN KEY (marcaId) REFERENCES Marca(idMarca), -- Define a relação com a tabela de marcas
    FOREIGN KEY (produtoTamanhoId) REFERENCES Tamanho(idTamanho), -- Define a relação com a tabela de tamanhos
    FOREIGN KEY (corId) REFERENCES Cor(idCor) -- Define a relação com a tabela de cores
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar as imagens dos produtos
CREATE TABLE IF NOT EXISTS Foto (
    idFoto INT AUTO_INCREMENT PRIMARY KEY,
    urlFoto TEXT NOT NULL, -- URL da foto do produto
    produtoId INT, -- Chave estrangeira para a tabela de produtos
    FOREIGN KEY (produtoId) REFERENCES Produto(idProduto) -- Define a relação com a tabela de produtos
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar as avaliações dos produtos
CREATE TABLE IF NOT EXISTS Avaliacao (
    idAvaliacao INT AUTO_INCREMENT PRIMARY KEY,
    notaAvaliacao DECIMAL(3,2) NOT NULL, -- Nota da avaliação
    comentarioAvaliacao TEXT, -- Comentário da avaliação
    produtoId INT, -- Chave estrangeira para a tabela de produtos
    clienteId INT, -- Chave estrangeira para a tabela de clientes
    FOREIGN KEY (produtoId) REFERENCES Produto(idProduto) -- Define a relação com a tabela de produtos
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar as respostas aos comentários dos produtos
CREATE TABLE IF NOT EXISTS Resposta (
    idResposta INT AUTO_INCREMENT PRIMARY KEY,
    conteudoResposta TEXT NOT NULL, -- Conteúdo da resposta
    avaliacaoId INT, -- Chave estrangeira para a tabela de avaliações
    FOREIGN KEY (avaliacaoId) REFERENCES Avaliacao(idAvaliacao) -- Define a relação com a tabela de avaliações
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela para armazenar as promoções dos produtos
CREATE TABLE IF NOT EXISTS Promocao (
    idPromocao INT AUTO_INCREMENT PRIMARY KEY,
    descricaoPromocao TEXT NOT NULL, -- Descrição da promoção
    descontoPromocao DECIMAL(5,2) NOT NULL, -- Valor do desconto
    dataInicioPromocao DATE NOT NULL, -- Data de início da promoção
    dataFimPromocao DATE NOT NULL, -- Data de término da promoção
    produtoId INT, -- Chave estrangeira para a tabela de produtos
    FOREIGN KEY (produtoId) REFERENCES Produto(idProduto) -- Define a relação com a tabela de produtos
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
