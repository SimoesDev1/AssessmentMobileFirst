import React, { useState } from "react";
import Button from "./Button";
import MovieDetails from "./MovieDetails";
import "./Gallery.css";

const movies = [
  {
    id: 1,
    title: "Meu malvado favorito 4",
    image: "https://www.claquete.com.br/fotos/filmes/poster/15797_grande.jpg",
    sinopse:
      "Gru dá as boas-vindas a um novo membro da família, Gru Jr., que pretende atormentar seu pai. No entanto, sua existência pacífica logo desmorona quando um mentor do crime escapa da prisão e jura vingança contra Gru.",
  },
  {
    id: 2,
    title: "Divertida Mente 2",
    image:
      "https://ingresso-a.akamaihd.net/prd/img/movie/divertida-mente-2/61ac248d-e3e6-4e33-9515-8ce0621a32fa.webp",
    sinopse:
      "Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle também está passando por uma adaptação para dar lugar a algo totalmente inesperado: novas emoções. As já conhecidas, Alegria, Raiva, Medo, Nojinho e Tristeza não têm certeza de como se sentir quando novos inquilinos chegam ao local.",
  },
  {
    id: 3,
    title: "Doutor Estranho no Multiverso da Loucura",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/0/08/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpeg/250px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpeg",
    sinopse:
      "O aguardado filme trata da jornada do Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público.",
  },
  {
    id: 4,
    title: "Deadpool & Wolverine",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjczNolZouaWspf5EXFY45Cbl1IFJ1TBixo3yfRLSsBpxWzBETxnqrzim1l37KYUHznJyuZ7U5qv4fFBRuR-d2N-PLuRB1Vluows8mElOyTIZD0sZEw-1_JQvlWvuCZWp2E1Y2T3yJpFS8eSaqCCjZVlcStLeU55N7d2i7V3Meiviwi-Anl2qI/s1600/IMG_1089.jpeg",
    sinopse:
      "Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.",
  },
  {
    id: 5,
    title: "Super Mario Bros",
    image:
      "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/208807923/poster-super-mario-bros-o-filme-i-f04111d3.jpg",
    sinopse:
      "Mario e seu irmão Luigi são encanadores do Brooklyn, em Nova York. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach. O local é ameaçado por Bowser, rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares.",
  },
  {
    id: 6,
    title: "Top Gun Maverick",
    image:
      "https://i5.walmartimages.com/seo/Top-Gun-Maverick-Movie-Poster-Quality-Glossy-Print-Photo-Wall-Art-Tom-Cruise-Jennifer-Connelly-Size-24x36_bbb92289-b359-423e-a8fe-6142b188f677.4da7e4af2871002298f4804afb44b955.jpeg",
    sinopse:
      "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Maverick Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.",
  },
  {
    id: 7,
    title: "Kung Fu Panda 4",
    image: "https://br.web.img3.acsta.net/pictures/23/12/13/18/13/4592801.jpg",
    sinopse:
      "Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.",
  },
  {
    id: 8,
    title: "Os Fantasmas Ainda Se Divertem",
    image:
      "https://a-static.mlcdn.com.br/450x450/poster-cartaz-os-fantasmas-ainda-se-divertem-beetlejuice-beetlejuice-pop-arte-poster/poparteskins2/pos-03755-30x45cm/74ec30641379e24910c935f071473950.jpeg",
    sinopse:
      "Retornamos à casa em Winter River, onde três gerações da família Deetz se unem após uma tragédia familiar inesperada. Lydia Deetz já é adulta e mãe da adolescente Astrid, que repentinamente descobre a misteriosa maquete da cidade no sótão e abre, sem querer, o portal para a vida após a morte.",
  },
];

const Gallery = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleButtonClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="media-gallery">
      <h2>Galeria de Filmes</h2>
      <div className="grid-container">
        {movies.map((movie) => (
          <div className="grid-item" key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <Button
              primary
              size="medium"
              onClick={() => handleButtonClick(movie)}
            >
              Ver Detalhes
            </Button>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} />
      )}
    </section>
  );
};

export default Gallery;
