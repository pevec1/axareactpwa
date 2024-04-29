import ProjectTwo from "../components/project-two/ProjectTwo";
import Project from "../components/project/Project";
import { reacts } from "../helpers/reactsLists";

const Reacts = () => {
  return (
    <main>
      <section className="slider2">
        <div className="container-slider">
          <div className="row justify-content-center">
            <div className="carousel-indicators">
              ВСЕ МОИ РАБОТЫ ON REACT
              <div className="wrapper">
                {reacts.map((project, index) => {
                  return (
                    <ProjectTwo
                      key={index}
                      title={project.title}
                      img={project.img}
                      link={project.link}
                    />
                  );
                })}
              </div>
              {/* <div className="carousel-inner">
                {reacts.map((project, index) => {
                  return (
                    <Project
                      key={index}
                      title={project.title}
                      img={project.img}
                      link={project.link}
                    />
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="work-as work">
        <div className="container">
          <h2>Заинтересованы в работе со мной ? ?</h2>
          <p>Отправьте письмо здесь и ждите ответа.</p>
          <div>
            <a
              href="mailto:a@harenkon.ru?subject=вопрос"
              rel="nofollow"
              className="btn-black"
            >
              Напишите мне
            </a>
          </div>
        </div>
      </section>
      <section className="our-blog">
        <div className="container">
          <div>
            <div className="about-blog">
              <h2>Мое портфолио</h2>
              Проекты, сделанные
              <br />
              в Нетологии:
              <br />
              защитил диплом{" "}
              <a href="https://pevec1.github.io/js-cp-diploma-edited/">
                заказ билетов
              </a>
              <br />
              сделал календарь{" "}
              <a href="https://react.axacode.ru/">на React.js (development)</a>
              <br />
              сделал верстку{" "}
              <a href="https://pevec1.github.io/mq-diplom-netology/">ссылка</a>
              <br />
              переделал целиком этот сайт axacode.ru
              <br />
              учебный проект биржа{" "}
              <a href="http://netcoin.axacode.ru/">Неткоин</a>
              <br />
              игра{" "}
              <a href="https://pevec1.github.io/js1-diplom/">крестики-нолики</a>
              <br />
              еще мелочи <a href="https://github.com/pevec1">github</a>
              <br />
              <br />
              мой первый сайт в соавторстве со splincode{" "}
              <a href="http://aharenkov.ru/">pevec1</a>
              <br />
              <br />
              Проекты, сделанные в <br />
              Профессионале:
              <br />
              калькулятор{" "}
              <a href="https://calc.axacode.ru/"> на реакт (production)</a>
              <br />
              диплом полностью моя разработка этот сайт <br />
              (в первоначальном виде не сохранился)
              <br />
              еще мелочи <a href="https://github.com/pevec1">github</a>
              <br />
              <br />
              Иностранные языки
              <br />
              Английский: технический перевод;
              <br />
              сложные тексты: перевод со словарем.
              <br />
              <br />
              Компьютер
              <br />
              Знание следующего программного обеспечения:
              <br />
              • мой стек технологий:
              <br />
              JavaScript, React (частично),node.js, redux, git, api,
              <br />
              php, C#, 1C 7.7, HTML, CSS, ООП, bootstrap,
              <br />
              linux, mvc, ajax, jquery
              <br />
              <br />
              Создал много сайтов с нуля, много дорабатывал, участвую в проекте
              <br />
              Знание 1С версии 7.7, составление программирование отчетов,
              документов и обработок
              <br />
              PHP JavaScript MySQL jQuery ООП CSS HTML5 PHP5
              <br />
              Знаком с 1с8.3
              <br />
              • Язык программирования PASCAL
              <br />
              • настройка сетей TCP/IP, роутера
              <br />
              Разбираюсь в сотовых телефонах, планшетах.
              <br />
              Хорошее знание компьютерной периферии (принтер, сканер, МФУ,
              веб-камера, беспроводные
              <br />
              устройства).
              <br />
              Имею сертификат Retratech №159021 как специалист в области
              «технической поддержки
              <br />
              персональных компьютеров».
              <br />В AXA Code блоге я расскажу как я черпаю идеи из фильмов.
            </div>
            <br />
            <a
              className="btn-disabled"
              href="https://www.aharenkov.ru/my-creative"
            >
              Смотреть идеи
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reacts;
