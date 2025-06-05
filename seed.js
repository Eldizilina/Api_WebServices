const sequelize = require('./config/database');
const PontoTuristico = require('./models/pontoTuristico');

const pontosTuristicos = [
  {
    nome: "Lagoa Azul",
    distrito: "Lobata",
    localizacao: "Entre Guadalupe e Plancas I",
    descricao: "Local ideal para mergulho e snorkeling com águas cristalinas azul-turquesa.",
    cidade: "Lobata",
    pontos_proximos: ["Neves", "Praia dos Tamarindos"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Lagoa_azul.webp"
  },
  {
    nome: "Pico Cão Grande",
    distrito: "Caué",
    localizacao: "Parque Natural Ôbo",
    descricao: "Formação vulcânica imponente com mais de 600 metros de altura.",
    cidade: "São João dos Angolares",
    pontos_proximos: ["Agripalma", "Ribeira Peixe"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Pico_c%C3%A3o_grande.jpg"
  },
  {
    nome: "Praia Piscina",
    distrito: "Caué",
    localizacao: "Sul da Ilha de São Tomé",
    descricao: "Praia de beleza única, águas cristalinas e ideal para relaxar.",
    cidade: "São João dos Angolares",
    pontos_proximos: ["Praia Jalé", "Praia Inhame"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-piscina-sao-tome.jpg"
  },
  {
    nome: "Praia Micondó",
    distrito: "Cantagalo",
    localizacao: "Litoral de Cantagalo",
    descricao: "Praia tranquila com areal dourado e vegetação abundante.",
    cidade: "",
    pontos_proximos: [" "],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-micondo.jpg"
  },
  {
    nome: "Marco do Equador",
    distrito: "Caué",
    localizacao: "Ilhéu das Rolas",
    descricao: "Ponto geográfico emblemático que marca a linha do Equador.",
    cidade: "Ilhéu das Rolas",
    pontos_proximos: ["Praia Café"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Padr%C3%A3o_dos_descobrimentos%202.jpg"
  },
  {
    nome: "Cascata São Nicolau",
    distrito: "Mé-Zóchi",
    localizacao: "Entre Nova Moca e São Nicolau",
    descricao: "Cascata de fácil acesso rodeada por vegetação luxuriante.",
    cidade: "Trindade",
    pontos_proximos: ["Roça Monte Café"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Cascata_S%C3%A3o_Nicolau.jpg"
  },
  {
    nome: "Forte de São Sebastião",
    distrito: "Água Grande",
    localizacao: "Avenida Marginal 12 de julho",
    descricao: "Fortaleza do século XVI que abriga o Museu Nacional.",
    cidade: "São Tomé",
    pontos_proximos: ["Parque Popular", "Sé Catedral"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Fortede_S%C3%A3o_sebasti%C3%A3o.jpg"
  },
  {
    nome: "Roça Sundy",
    distrito: "RAP",
    localizacao: "Ilha do Príncipe",
    descricao: "Histórico local onde foi comprovada a Teoria da Relatividade.",
    cidade: "Santo António",
    pontos_proximos: ["Roça Belo Monte", "Praia Banana"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Ro%C3%A7a_Sundy.jpg"
  },
  {
    nome: "Praia Banana",
    distrito: "RAP",
    localizacao: "Ilha do Príncipe",
    descricao: "Praia paradisíaca com águas azul-turquesa e areia dourada.",
    cidade: "Santo António",
    pontos_proximos: ["Roça Belo Monte"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia_banana.jpg"
  },
  {
    nome: "Roça Belo Monte",
    distrito: "RAP",
    localizacao: "Ilha do Príncipe",
    descricao: "Antiga plantação transformada em hotel boutique com vista privilegiada.",
    cidade: "Santo António",
    pontos_proximos: ["Praia Banana"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Belo_monte.jpg"
  },
  {
    nome: "Parque Natural Ôbo",
    distrito: "Abrange Caué,Mé-Zochi e Lembá",
    localizacao: "Sul da Ilha de São Tomé",
    descricao: "Área protegida com rica biodiversidade e trilhas na floresta tropical.",
    cidade: "A entrada situa-se em Mé-Zochi",
    pontos_proximos: ["Pico Cão Grande", "Cascata de São Nicolau"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Parque_natural_Ob%C3%B4.jpg"
  },
  {
    nome: "Boca do Inferno",
    distrito: "Cantagalo",
    localizacao: "Litoral sul de São Tomé",
    descricao: "Formação rochosa onde o mar entra com força, criando um espetáculo natural.",
    cidade: "Agua Izé",
    pontos_proximos: ["Praia das Sete Ondas"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/boca_de_inferno.jpg"
  },
  {
    nome: "Roça Agostinho Neto",
    distrito: "Lobata",
    localizacao: "Próximo a Guadalupe",
    descricao: "Antiga plantação de cacau com arquitetura colonial preservada.",
    cidade: "Guadalupe",
    pontos_proximos: ["Lagoa Azul"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Agostinho_Neto.jpg"
  },
  {
    nome: "Roça Monte Café",
    distrito: "Mé-Zóchi",
    localizacao: "Interior da Ilha de São Tomé",
    descricao: "Plantação histórica de café com museu e degustações.",
    cidade: "Monte Café",
    pontos_proximos: ["Cascata de São Nicolau"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Monte_caf%C3%A9.jpg"
  },
  {
    nome: "Praia Jalé",
    distrito: "Caué",
    localizacao: "Extremo sul da Ilha de São Tomé",
    descricao: "Praia isolada conhecida pela desova de tartarugas marinhas.",
    cidade: "Porto Alegre",
    pontos_proximos: ["Praia Inhame"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-jale-comments-are.jpg"
  },
  {
    nome: "Praia Inhame",
    distrito: "Caué",
    localizacao: "Sul da Ilha de São Tomé",
    descricao: "Praia tranquila com águas calmas e ecolodge próximo.",
    cidade: "Porto Alegre",
    pontos_proximos: ["Praia Jalé"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-inhame-eco-resort-gallerydsc_39352.jpg"
  },
  {
    nome: "Roça São João dos Angolares",
    distrito: "Caué",
    localizacao: "São João dos Angolares",
    descricao: "Roça transformada em espaço cultural e gastronômico.",
    cidade: "São João dos Angolares",
    pontos_proximos: ["Pico Cão Grande"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/ro%C3%A7a-angolares-34-1600.jpg"
  },
  {
    nome: "Roça Diogo Vaz",
    distrito: "Lembá",
    localizacao: "Costa oeste de São Tomé",
    descricao: "Roça histórica com produção de chocolate artesanal.",
    cidade: "Diogo Vaz",
    pontos_proximos: ["Túnel de Santa Catarina"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Diogo_Vaz_Chocolat.jpg"
  },
  {
    nome: "Túnel de Santa Catarina",
    distrito: "Lembá",
    localizacao: "Estrada costeira oeste de São Tomé",
    descricao: "Túnel escavado na rocha com vista panorâmica do oceano.",
    cidade: "Santa Catarina",
    pontos_proximos: ["Roça Diogo Vaz"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/tunel-de-santa-catarina-sao-tome-principe-1024x681.webp"
  },
  {
    nome: "Sé Catedral",
    distrito: "Água Grande",
    localizacao: "Centro de São Tomé",
    descricao: "Catedral histórica com arquitetura colonial portuguesa.",
    cidade: "São Tomé",
    pontos_proximos: ["Forte de São Sebastião"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/S%C3%A9_catedral.jpg"
  },
 {
    nome: "Padrão dos Descobrimentos",
    distrito: "Lembá",
    localizacao: "Ananbó",
    descricao: "Monumento que marca o local de chegada dos navegadores portugueses em 1470.",
    cidade: "",
    pontos_proximos: [" ", ""],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Padr%C3%A3o_dos_descobrimentos%202.jpg"
  },
  {
    nome: "Reserva da Biosfera da Ilha do Príncipe",
    distrito: "Pagué",
    localizacao: "Ilha do Príncipe",
    descricao: "Área protegida reconhecida pela UNESCO, rica em biodiversidade e endemismo.",
    cidade: "Santo António",
    pontos_proximos: ["Pico do Papagaio", "Roça Sundy"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Reserva_mundial_biosfera_UNESCO.jpg"
  },
  {
    nome: "Pico Papagaio",
    distrito: "Pagué",
    localizacao: "Parque Natural do Príncipe",
    descricao: "Pico vulcânico de aproximadamente 700 metros, acessível por trilhas na floresta.",
    cidade: "Santo António",
    pontos_proximos: ["Reserva da Biosfera", "Roça Sundy"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Pico_papagaio.jpg"
  },
  {
    nome: "Baía das Agulhas",
    distrito: "Pagué",
    localizacao: "Costa oeste da Ilha do Príncipe",
    descricao: "Baía espetacular com torres de pedra e praias desertas, acessível por barco.",
    cidade: "",
    pontos_proximos: ["Praia Banana", "Roça Belo Monte"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Baia_das_Agulhas.webp"
  },
  {
    nome: "Miradouro da Nova Estrela",
    distrito: "Pagué",
    localizacao: "Sul da Ilha do Príncipe",
    descricao: "Ponto de observação com vista para o Boné de Jóquei e floresta tropical.",
    cidade: "",
    pontos_proximos: ["Roça São Joaquim", "Praia Grande"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Miradouro_Nova_estrela.jpg"
  },
  {
    nome: "Praia Grande",
    distrito: "Caué",
    localizacao: "São tomé",
    descricao: "Maior praia da ilha, deserta e ideal para observar o desovar das tartarugas.",
    cidade: "",
    pontos_proximos: [" ", ""],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Praia_grande.webp"
  },
  {
    nome: "Roça Paciência",
    distrito: "Pagué",
    localizacao: "Ilha do Príncipe",
    descricao: "Plantação de cacau, baunilha e café, com visita guiada e degustações.",
    cidade: "Santo António",
    pontos_proximos: ["Roça Sundy", "Roça Belo Monte"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Ro%C3%A7a_paci%C3%AAncia.webp"
  },
  {
    nome: "Fábrica de Chocolate Cláudio Corallo",
    distrito: "Água Grande",
    localizacao: "São Tomé",
    descricao: "Fábrica artesanal de chocolate com visitas guiadas e degustações.",
    cidade: "São Tomé",
    pontos_proximos: [""],
    imagem_url: "https://example.com/fabrica_chocolate_corallo.jpg"
  },
  {
    nome: "CACAU - Casa das Artes, Criação, Ambiente e Utopias",
    distrito: "Água Grande",
    localizacao: "São Tomé",
    descricao: "Centro cultural com exposições, eventos e atividades artísticas.",
    cidade: "São Tomé",
    pontos_proximos: ["Forte de São Gerónimo", "Parque Popular"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/CACAU.jpg"
  },
  
  {
    nome: "Estátua do Rei Amador",
    distrito: "Água Grande",
    localizacao: "São Tomé",
    descricao: "Estátua em homenagem ao líder da resistência contra o domínio colonial.",
    cidade: "São Tomé",
    pontos_proximos: ["Arquivo Histórico ", "Biblioteca Nacional "],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Estatua_Rei_Amador.avif"
  },
  {
    nome: "Praia das Sete Ondas",
    distrito: "Cantagalo",
    localizacao: "Litoral leste de São Tomé",
    descricao: "Praia conhecida pelas suas sete ondas consecutivas, ideal para surfistas.",
    cidade: "",
    pontos_proximos: [ "Boca do Inferno"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-Sete-Ondas.webp"
  },
  {
    nome: "Praia do Governador",
    distrito: "Lobata",
    localizacao: "Fernão Dias",
    descricao: "Praia isolada com águas calmas e paisagem exuberante.",
    cidade: "",
    pontos_proximos: ["Conde", "Micoló"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-dos-gobernadores.avif"
  },
  {
    nome: "Praia Café",
    distrito: "Caué",
    localizacao: "Ilhéu das Rolas",
    descricao: "Praia paradisíaca com águas cristalinas e areia branca.",
    cidade: "Ilhéu das Rolas",
    pontos_proximos: ["Marco do Equador"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/praia-cafe-ilheu-rolas.webp"
  },
  {
    nome: "Furna do Ilhéu das Rolas",
    distrito: "Caué",
    localizacao: "Ilhéu das Rolas",
    descricao: "Caverna natural formada pela erosão marinha, acessível por trilha.",
    cidade: "Ilhéu das Rolas",
    pontos_proximos: ["Praia Café", "Marco do Equador"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Furna_do_Ilheu_Rolas.jpg"
  },
  {
    nome: "Roça Ribeira Peixe",
    distrito: "Caué",
    localizacao: "Sul de São Tomé",
    descricao: "Antiga plantação com vestígios históricos e paisagem envolvente.",
    cidade: "Porto Alegre",
    pontos_proximos: ["Praia Inhame", "Praia Jalé"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Ribeira_peixe.jpg"
  },
  {
    nome: "Roça Água Izé",
    distrito: "Cantagalo",
    localizacao: "Leste de São Tomé",
    descricao: "Uma das maiores roças do país, com hospital, escola e igreja.",
    cidade: "Água Izé",
    pontos_proximos: ["Praia Micondó", "Praia 7 Ondas"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Ro%C3%A7a_Agua_Iz%C3%A9.jpg"
  },
  {
    nome: "Roça Uba Budo",
    distrito: "Cantagalo",
    localizacao: "Interior de São Tomé",
    descricao: "Roça histórica com arquitetura colonial e plantações de cacau.",
    cidade: "Uba Budo",
    pontos_proximos: ["Roça Água Izé"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Ro%C3%A7a%20Uba%20budu.jpg"
  },
  {
    nome: "Roça Bombaim",
    distrito: "Mé-Zóchi",
    localizacao: "Interior de São Tomé",
    descricao: "Roça transformada em alojamento turístico, rodeada por floresta.",
    cidade: "Bombaim",
    pontos_proximos: ["Roça Monte Café", "Cascata São Nicolau"],
    imagem_url: "https://raw.githubusercontent.com/Eldizilina/pontos-turisticos-imagens/main/imagens/Imagens%20API/Ro%C3%A7a_Bombaim.jpg"
  }
];


async function seedDatabase() {
  try {
   await sequelize.sync({ force: true });
    console.log('Tabelas criadas com sucesso.');

    for (const ponto of pontosTuristicos) {
      await PontoTuristico.create(ponto);
      console.log(`Ponto turístico ${ponto.nome} criado.`);
    }

    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
