
import  react  from './assets/react.png';
import  html  from './assets/html.png';
import  css  from './assets/css.png';
import  js  from './assets/js.png';
import  github  from './assets/github.png';
import  linkedin  from './assets/linkedin.png';
import  codepen  from './assets/codepen.png';
import memoria from './assets/memoria.svg';
import tabela from './assets/tabela.svg';
import relogio from './assets/relogio.svg';
import imc from './assets/imc.svg';
import menu from './assets/menu.svg';
import menuSocial from './assets/menuRedSocial.svg';
import barbearia from './assets/barbearia.svg';
import foto   from './assets/foto.jpg';

import { useState } from 'react';
import { Slider } from './components/carousel/Slider';
import { SwiperSlide } from 'swiper/react';
import './components/carousel/Slider.css';




export function App() {
  const [show, setShow] = useState(true)
  const settings = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true, },
  };

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
    });
  
   function Toggle() {
    var header = document.querySelector('header');
    header.classList.toggle("active");
   } 

  return (
    <>
      <header id="header">
        <a href="#" className="logo">
          Pedro.dev
        </a>
        <ul>
          <li>
            <a href="#home" onClick={Toggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={Toggle}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#tecnologias" onClick={Toggle}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#portifolio" onClick={Toggle}>
              Portifolio
            </a>
          </li>
          <li>
            <a href="#contato" onClick={Toggle}>
              Contato
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={Toggle}></div>
      </header>

      <section className="banner" id="home">
        <h2>Olá, me chamo</h2>
        <h3>Pedro Nunes</h3> <br />
        <p>
          Sou Desenvolvedor <span> Front-end</span>
        </p>
      </section>

      <section className="sec" id="sobre">
        <div className="content">
          <div className="mxw800p">
            <h3>Sobre mim</h3>
            {show ? (
            <><p>
                Sou desenvolvedor Front-end, estudo e atuo em projetos pessoais
                desde 2021.
                <br />
                Me interessei por desenvolver sites e aplicativos para a web, e
                por isso voltei meus estudo para Front-end.
                <br />
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na
                Estácio de Sá, e também estou cursando o curso de Desenvolvimento
                Web na{" "}
                <a href="https://www.alura.com.br/" target="_blanck">
                  Alura
                </a>
              </p><button className="btn" onClick={() => setShow(!show)}>
                  Ver mais
                </button></>
            ) : (
              <div className="saibaMais">
                <div className="saibaContent">
                  <div className="saibaContent-text">

                  <p>
                   Sou natural de Porto Alegre RS, mas moro em Florianópolis SC.
                    <br />
                    Sempre gostei muito de tecnologia, e jogos eletronicos.
                    <br />
                    porem ainda não tenho conhecimento de programação, e que isso era muito dificil para mim.
                    <br />
                    Mas com o nascimento de meu filho, eu comecei a estudar
                    programação. Queria dar um futuro ao meu filho, e mostrar que nunca é tarde para aprender.
                    <br />
                    Com o tempo eu consegui aprender mais sobre programação, e
                    também mais sobre tecnologia.
                    <br />
                    Hoje sou desenvolvedor Front-end e cada vez mais apaixonado por essa área.
                    <br />
                    Gosto muito de aprender coisas novas e a area de tecnologia é muito interessante o fato de estar em costante aprendizado.
                  </p>
                 
                  </div><img src={foto} alt="memoria" />
                </div>
                
                <button className="btn bt2" onClick={() => setShow(!show)}>
                  Ver menos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sec" id="tecnologias">
        <div className="content">
          <div className="mxw800p">
            <h3>Tecnologias que utilizo</h3>
            <p>Projetos realizados com as seguintes tecnologias:</p>
          </div>
          <div className="tec">
            <div className="box">
              <div className="iconBx">
                <img src={html} />
              </div>
              <div className="content">
                <h2>HTML</h2>
                <p>html é a linguagem de marcação de documentos web.</p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={css} />
              </div>
              <div className="content">
                <h2>CSS</h2>
                <p>
                  css é um linguagem de estilo de programação que define o
                  estilo e o comportamento de um documento HTML.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={js} />
              </div>
              <div className="content">
                <h2>Javascript</h2>
                <p>
                  JavaScript é um linguagem de programação que segue a linguagem
                  de programação ECMAScript.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="iconBx">
                <img src={react} />
              </div>
              <div className="content">
                <h2>React.js</h2>
                <p>
                  React é uma biblioteca de JavaScript que permite a criação de
                  interfaces de usuário através de componentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec stats" id="">
        <div className="content">
          <div className="mxw800p">
            <h3>Meus certificados</h3>
            <p>Certificados de formaçoes front-end</p>
          </div>
          <div className="statsBox">
            <div className="box">
              <h2>Alura</h2>
              <a
                href="https://cursos.alura.com.br/certificate/0e73e370-7b32-4af8-b7bb-31dadad065b3"
                target="_blanck"
              >
                <h4>
                  Lógica de programação I: crie programas com Javascript e HTML
                </h4>
              </a>
            </div>
            <div className="box">
              <h2>Alura</h2>
              <a
                href="https://cursos.alura.com.br/certificate/94358eb1-6d02-4b67-846a-12e9ca68835d"
                target="_blanck"
              >
                <h4>HTML e CSS</h4>
              </a>
            </div>
            <div className="box">
              <h2>Rocketseat</h2>
              <h4>Trilha Fundamentar</h4>
            </div>
            <div className="box">
              <h2>Alura</h2>
              <a
                href="https://cursos.alura.com.br/certificate/pedronunes95/graphql-construindo-api-apollo-server"
                target="_blanck"
              >
                <h4>GRAPHQL: CONSTRUINDO UMA API COM APOLLO SERVER</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec work" id="portifolio">
        <div className="content">
          <div className="mxw800p">
            <h3>Projetos recentes</h3>
            <p>Aqui são alguns dos meus projetos recentes.</p>
          </div>
          <div className="workBx">
            <div className="brand">
              <a
                href="https://jogo-da-memoria-472e673cq-pedronnsm.vercel.app/"
                target="_blanck"
              >
                <img src={memoria} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                  JavaScript
                  <br />
                </span>
                <h2>Jogo da Memória</h2>
              </a>
            </div>
            <div className="brand">
              <a
                href="https://codepen.io/pedro-nunes-the-lessful/pen/xxgEyJr"
                target="_blanck"
              >
                <img src={tabela} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                  JavaScript
                  <br />
                </span>
                <h2>Tabela de classificacão</h2>
              </a>
            </div>
            <div className="brand">
              <a
                href="https://codepen.io/pedro-nunes-the-lessful/pen/XWZOGbN"
                target="_blanck"
              >
                <img src={relogio} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                  JavaScript
                  <br />
                </span>
                <h2>Relógio digital</h2>
              </a>
            </div>

            <div className="brand">
              <a
                href="https://codepen.io/pedro-nunes-the-lessful/pen/ExExNVZ"
                target="_blanck"
              >
                <img src={imc} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                  JavaScript
                  <br />
                </span>
                <h2>Calculadora de IMC</h2>
              </a>
            </div>
            <div className="brand">
              <a
                href="https://codepen.io/pedro-nunes-the-lessful/pen/KKQbxQB"
                target="_blanck"
              >
                <img src={menu} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                  JavaScript
                  <br />
                </span>
                <h2>Menu</h2>
              </a>
            </div>
            <div className="brand">
              <a href="https://menu-social.vercel.app/" target="_blanck">
                <img src={menuSocial} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                </span>
                <h2>Menu Social</h2>
              </a>
            </div>
            <div className="brand">
              <a
                href="https://github.com/PedroNnsM/barbeariaALura"
                target="_blanck"
              >
                <img src={barbearia} />
                <span>
                  Tecnologias nesse projeto:
                  <br />
                  Html
                  <br />
                  Css
                  <br />
                </span>
                <h2>Barbearia Alura</h2>
              </a>
            </div>

            <Slider settings={settings}>
              <SwiperSlide>
                <a
                  href="https://jogo-da-memoria-472e673cq-pedronnsm.vercel.app/"
                  target="_blanck"
                >
                  <img src={memoria} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                    JavaScript
                    <br />
                  </span>
                  <h2>Jogo da Memória</h2>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/pen/xxgEyJr"
                  target="_blanck"
                >
                  <img src={tabela} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                    JavaScript
                    <br />
                  </span>
                  <h2>Tabela de classificacão</h2>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/pen/XWZOGbN"
                  target="_blanck"
                >
                  <img src={relogio} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                    JavaScript
                    <br />
                  </span>
                  <h2>Relógio digital</h2>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/pen/ExExNVZ"
                  target="_blanck"
                >
                  <img src={imc} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                    JavaScript
                    <br />
                  </span>
                  <h2>Calculadora de IMC</h2>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/pen/KKQbxQB"
                  target="_blanck"
                >
                  <img src={menu} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                    JavaScript
                    <br />
                  </span>
                  <h2>Menu</h2>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a href="https://menu-social.vercel.app/" target="_blanck">
                  <img src={menuSocial} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                  </span>
                  <h2>Menu Social</h2>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  href="https://github.com/PedroNnsM/barbeariaALura"
                  target="_blanck"
                >
                  <img src={barbearia} />
                  <span>
                    Tecnologias nesse projeto:
                    <br />
                    Html
                    <br />
                    Css
                    <br />
                  </span>
                  <h2>Barbearia Alura</h2>
                </a>
              </SwiperSlide>
            </Slider>
          </div>
        </div>
      </section>
      <section className="sec contact" id="contato">
        <div className="content">
          <div className="mxw800p">
            <h3>Entre em contato </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis
            </p>
          </div>
          <div className="contactForm">
            <form action="#">
              <div className="row100">
                <div className="inputBx50">
                  <input type="text" name="" placeholder="Nome completo" />
                </div>
                <div className="inputBx50">
                  <input type="text" name="" placeholder="Email" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <textarea name="" placeholder="Mensagem" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <input type="submit" name value="send" />
                </div>
              </div>
            </form>
          </div>
          <div className="sci">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/pedro-nunes-m/"
                  target="_blank"
                >
                  <img src={linkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/PedroNnsM" target="_blank">
                  <img src={github} />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/pedro-nunes-the-lessful/"
                  target="_blank"
                >
                  <img src={codepen} />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            Desenvolvido por <a href="#home">Pedro Nunes</a>
          </p>
        </div>
      </section>
    </>
  );  
}
