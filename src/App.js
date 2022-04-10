import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import phrasel from "./phrasel.png"
import calculator from "./calculator.png"
import article from "./article.png"
import geography from "./geography.png"
import conway from "./conway.png"
import office from "./office.png"


function App() {

const projects = [
  {
    id: 1,
    title: "Conway",
    link: "https://conways-sequence.herokuapp.com/",
    description: "Conway test description",
    icon: conway
  },
  {
    id: 2,
    title: "Phrasle",
    link: "https://phrasle.herokuapp.com/",
    description: "Phrasle test description",
    icon: phrasel
  },  {
    id: 3,
    title: "Geography",
    link: "https://geography-game-demo.herokuapp.com/",
    description: "Geography test description",
    icon: geography
  }, {
    id: 4,
    title: "The Office Quotes",
    link: "https://office-quotes-demo.herokuapp.com/",
    description: "The Office Quotes test description",
    icon: office
  }, 
  {
    id: 5,
    title: "Calculator",
    link: "https://apple-calculator-copy.herokuapp.com/",
    description: "Calculator test description",
    icon: calculator
  }, {
    id: 6,
    title: "Article Cards",
    link: "https://article-cards.herokuapp.com/",
    description: "Article Cards test description",
    icon: article
  }
  // {
  //   id: 7,  
  //   title: "Unscrambler",
  //   link: "https://unscrambler-demo.herokuapp.com/",
  //   description: "Unscrambler test description"
  // },
]

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home

              />
            }
          />
          <Route
            path="/about"
            element={
              <About

              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                projects={projects}
              />
            }
          />
             <Route
            path="/contact"
            element={
              <Contact
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
