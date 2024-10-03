import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import VideoGallery from "./VideoGallery";
import ProgressBar from "./ProgressBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0); // Estado para controlar o progresso da barra
  const [message, setMessage] = useState(""); // Estado para controlar a mensagem quando a barra atingir 100%

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const increaseProgress = () => {
    // Incrementa o progresso em 10% até o máximo de 100%
    setProgress((prevProgress) => {
      const newProgress = prevProgress >= 100 ? 100 : prevProgress + 12.5;
      if (newProgress === 100) {
        setMessage("Parabéns, você assistiu todos os detalhes dos filmes!"); // Define a nova mensagem quando a barra atinge 100%
      }
      return newProgress;
    });
  };

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <main>
          <section className="hero">
            <h1>Bem-vindo ao Mundo do Cinema</h1>
            <p>Explore os melhores filmes e trailers</p>
          </section>

          {/* Barra de Progresso Interativa */}
          <ProgressBar progress={progress} />
          <button onClick={increaseProgress} className="btn btn-primary mt-3">
            Aumentar Progresso
          </button>

          {/* Exibe a mensagem quando a barra atinge 100% */}
          {message && <div className="alert alert-success mt-3">{message}</div>}

          <Gallery />
          <VideoGallery />
        </main>
        <footer>
          <p>&copy; 2024 Cinema. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
