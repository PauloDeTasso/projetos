use bds;

CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(255),
    email_usuario VARCHAR(255) UNIQUE,
    ip_usuario VARCHAR(45) NOT NULL,
    data_de_criacao_usuario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_de_atualizacao_usuario TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ativo_usuario TINYINT(1) NOT NULL DEFAULT 1
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*FAZER A LOGICA FUTURA PARA A TABELA VISISTA E RELACIONAMENTO COM O USUARIO*/
CREATE TABLE IF NOT EXISTS Visita (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT UNSIGNED,  -- Assuming user ID is positive
  ultimo_navegador VARCHAR(255),
  ultimo_metodo VARCHAR(10),
  ultima_uri VARCHAR(255),
  nome_script VARCHAR(255),
  cidade_ip VARCHAR(80),  -- City names are unlikely to be longer than 80 characters
  regiao_ip VARCHAR(80),  -- Same for region
  pais_ip VARCHAR(2),       -- Standard ISO 3166-1 alpha-2 country code
  latitude_ip DECIMAL(9, 6),  -- Adjust precision for most realistic coordinates
  longitude_ip DECIMAL(9, 6),
  provedor_ip VARCHAR(255),
  codigo_postal_ip VARCHAR(20), -- Postal codes typically less than 20 characters
  fuso_horario_ip VARCHAR(50),  -- Zone identifiers can vary in length
  cabecalhos_http TEXT,
  data_de_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  data_de_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  data_hora_ultima_visita DATETIME DEFAULT CURRENT_TIMESTAMP,
  tempo_ultima_sessao INT UNSIGNED,  -- Enforce non-negative duration
  tempo_total INT UNSIGNED           -- Enforce non-negative duration
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


