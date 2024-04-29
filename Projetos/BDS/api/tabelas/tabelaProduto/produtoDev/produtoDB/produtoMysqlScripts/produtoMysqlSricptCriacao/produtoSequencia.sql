-- Your SQL statements with suggested changes:

CREATE DATABASE IF NOT EXISTS bds CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bds;

CREATE TABLE IF NOT EXISTS cor (
    idCor INT AUTO_INCREMENT PRIMARY KEY,
    nomeCor VARCHAR(50) NOT NULL,
    UNIQUE(nomeCor),
    FULLTEXT(nomeCor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS tamanho (
    idTamanho INT AUTO_INCREMENT PRIMARY KEY,
    nomeTamanho VARCHAR(20) NOT NULL,
    descricaoTamanho TEXT,
    UNIQUE(nomeTamanho),
    FULLTEXT(nomeTamanho, descricaoTamanho)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Marcas (
    idMarca INT AUTO_INCREMENT PRIMARY KEY,
    nomeMarca VARCHAR(255) NOT NULL,
    descricaoMarca TEXT,
    UNIQUE(nomeMarca),
    FULLTEXT(nomeMarca, descricaoMarca)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Categoria (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nomeCategoria VARCHAR(255) NOT NULL,
    descricaoCategoria TEXT,
    UNIQUE(nomeCategoria),
    FULLTEXT(nomeCategoria, descricaoCategoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Subcategoria (
    idSubcategoria INT AUTO_INCREMENT PRIMARY KEY,
    nomeSubcategoria VARCHAR(255) NOT NULL,
    descricaoSubcategoria TEXT,
    categoriaId INT,
    FOREIGN KEY (categoriaId) REFERENCES Categoria(idCategoria),
    FULLTEXT(nomeSubcategoria, descricaoSubcategoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Clientes (
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nomeCliente VARCHAR(255) NOT NULL,
    emailCliente VARCHAR(255) NOT NULL,
    telefoneCliente VARCHAR(20),
    UNIQUE(emailCliente),
    FULLTEXT(nomeCliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Produto (
    idProduto INT AUTO_INCREMENT PRIMARY KEY,
    nomeProduto VARCHAR(255) NOT NULL,
    descricaoProduto TEXT,
    categoriaId INT,
    subcategoriaId INT,
    marcaId INT,
    tamanhoId INT,    
    corId INT,
    precoProduto DECIMAL(10,2) NOT NULL,
    pesoProduto DECIMAL(10,2),    
    bustoProduto DECIMAL(10,2),
    cinturaProduto DECIMAL(10,2),
    quadrilProduto DECIMAL(10,2),
    quantidadeProduto INT NOT NULL DEFAULT 0,
    disponivelProduto BOOLEAN NOT NULL DEFAULT TRUE,
    promocaoProduto BOOLEAN NOT NULL DEFAULT FALSE,
    dataDeCadastroProduto TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dataDaUltimaAtualizacaoProduto TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoriaId) REFERENCES Categoria(idCategoria),
    FOREIGN KEY (subcategoriaId) REFERENCES Subcategoria(idSubcategoria),
    FOREIGN KEY (marcaId) REFERENCES Marcas(idMarca),
    FOREIGN KEY (tamanhoId) REFERENCES Tamanho(idTamanho),
    FOREIGN KEY (corId) REFERENCES Cor(idCor),
    FULLTEXT(nomeProduto, descricaoProduto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Avaliacao (
    idAvaliacao INT AUTO_INCREMENT PRIMARY KEY,
    notaAvaliacao DECIMAL(3,2) NOT NULL,
    comentarioAvaliacao TEXT,
    produtoId INT,
    clienteId INT,
    FOREIGN KEY (produtoId) REFERENCES Produto(idProduto),
    FOREIGN KEY (clienteId) REFERENCES Clientes(idCliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Imagem (
    idImagem INT AUTO_INCREMENT PRIMARY KEY,
    urlImagem VARCHAR(255) NOT NULL,
    produtoId INT,
    FOREIGN KEY (produtoId) REFERENCES Produto(idProduto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Comentario (
    idComentario INT AUTO_INCREMENT PRIMARY KEY,
    conteudoComentario TEXT NOT NULL,
    avaliacaoId INT,
    FOREIGN KEY (avaliacaoId) REFERENCES Avaliacao(idAvaliacao)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Resposta (
    idResposta INT AUTO_INCREMENT PRIMARY KEY,
    conteudoResposta TEXT NOT NULL,
    comentarioId INT,
    FOREIGN KEY (comentarioId) REFERENCES Comentario(idComentario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS Promocao (
    idPromocao INT AUTO_INCREMENT PRIMARY KEY,
    descricaoPromocao TEXT NOT NULL,
    descontoPromocao DECIMAL(5,2) NOT NULL,
    dataInicioPromocao DATE NOT NULL,
    dataFimPromocao DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ProdutoPromocao (
    produtoId INT,
    promocaoId INT,
    PRIMARY KEY (produtoId, promocaoId),
    FOREIGN KEY (produtoId) REFERENCES Produto(idProduto),
    FOREIGN KEY (promocaoId) REFERENCES Promocao(idPromocao)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
