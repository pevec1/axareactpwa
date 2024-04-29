import "./../../styles/styles.css";

import React from "react";

import Group56 from "./../../styles/img/Group56.svg";
import logo from "./../../styles/ima/logo.png";
import analyse1 from "./../../styles/img/analyse1.png";
import whatsapp from "./whatsapp.png";
import telegram from "./telegram.png";
import Rotate from "./scripts_rotate";


const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint1 = 320;
  const breakpoint2 = 800;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint2) {
  return (
    <header>
      <section>
        <div className="container-offer">
          <div className="column">
            <h1>Кто я? Давайте знакомиться.</h1>
            <br />
            <p>
              Зовут меня Андрей
              <br />
              живу в Москве
              <br />
              Программирую на php, пишу также на js и react.
              <br />
              Делаю с нуля как небольшие, так и крупные сайты.
            </p>
            <br />
            <div className="business-offer col-12 col-md-5 col-xl-5">
              <h1>
                Я помогу сделать Ваш
                <span style={{ color: "#7bc0e3" }}> веб-сайт</span>
              </h1>
              <br />
            </div>
          </div>
          <Rotate />
          <div className="column" style={{ justifyContent: "flex-start" }}>
             <div className="row">
              <a
                href="https://docs.google.com/document/d/1xiDcd95pOp3mgW5OHKy7_e6yKXP-BdZROFhgWw11NUo/edit?usp=sharing"
                className="btn"
              >
                мое резюме
              </a>
              {/* <a className="btn" href="mailto:a@harenkon.ru?subject=вопрос">
                email
              </a> */}
              <a className="btn-disabled" href="#head">
                Контакты
              </a>

              <img className="circles" src={Group56} alt="" />
            </div>

            <div className="row">
              {/* <a className="btn" href="/reacts">
                  Портфолио React
                </a> */}
              <a className="btn" href="/works">
                Портфолио
              </a>
            </div>
          </div>
          <div className="business-offer col-12 col-md-5 col-xl-5">
            <img className="analyse" src={analyse1} alt="" />
          </div>
        </div>
      </section>
    </header>
    );
  } else if (width < breakpoint2) {
    return (
    <header>
      <section>
        <div className="container-offer">
          <div className="row">
            <h1>Кто я? Давайте знакомиться.</h1>
            <br />
            <p>
              Зовут меня Андрей
              <br />
              живу в Москве
              <br />
              Программирую на php, пишу также на js и react.
              <br />
              Делаю с нуля как небольшие, так и крупные сайты.
            </p>
            <br />
            <div className="business-offer col-12 col-md-5 col-xl-5">
              <h1>
                Я помогу сделать Ваш
                <span style={{ color: "#7bc0e3" }}> веб-сайт</span>
              </h1>
              <br />
          <Rotate />
            </div>
          </div>
          <div className="column" style={{ justifyContent: "flex-start" }}>
             <div className="row">
              <a
                href="https://docs.google.com/document/d/1xiDcd95pOp3mgW5OHKy7_e6yKXP-BdZROFhgWw11NUo/edit?usp=sharing"
                className="btn"
              >
                мое резюме
              </a>
              {/* <a className="btn" href="mailto:a@harenkon.ru?subject=вопрос">
                email
              </a> */}
              <a className="btn-disabled" href="#head">
                Контакты
              </a>

              <img className="circles" src={Group56} alt="" />
            </div>

            <div className="row">
              {/* <a className="btn" href="/reacts">
                  Портфолио React
                </a> */}
              <a className="btn" href="/works">
                Портфолио
              </a>
            </div>
          </div>
          <div className="business-offer col-12 col-md-5 col-xl-5">
            <img className="analyse" src={analyse1} alt="" />
          </div>
        </div>
      </section>
    </header>
  );
              }
};

export default Header;
