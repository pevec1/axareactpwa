import { mains } from "../helpers/mainLists";
import ProjectTwo from "../components/project-two/ProjectTwo";
import Header from "../components/header/Header";
import slide1 from "./../styles/images/slide1.png";
import slide2 from "./../styles/images/slide2.png";
import slide3 from "./../styles/images/slide3.png";
import n1 from "./../styles/img/n1.svg";
import n2 from "./../styles/img/n2.svg";
import n3 from "./../styles/img/n3.svg";
import n4 from "./../styles/img/n4.svg";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="our-services">
          <div className="container">
            <h2>Мои услуги</h2>
            <p>Я делаю сайты под ключ. Среди них есть варианты:</p>
            <div className="row cardrow">
              <div className="card col-12 col-md-6 col-xl-4">
                <div className="web-site"></div>
                <h3>Интернет-магазин</h3>
                <p className="service">
                  Все просто: каталог, акции, заказ или покупка, личный кабинет
                </p>
              </div>
              <div className="card col-12 col-md-6 col-xl-4">
                <div className="web-site"></div>

                <h3>Лэндинг пейдж</h3>
                <p className="service">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="card col-12 col-md-6 col-xl-4">
                <div className="corp-site"></div>
                <h3>Корпоративный сайт</h3>
                <p className="service">
                  Обычно так называют сайт компании с описанием товаров и услуг,
                  информацией о компании, новостями и статьями.
                </p>
              </div>
              <div className="card col-12 col-md-6 col-xl-4">
                <div className="redesign"></div>

                <h3>Порталы</h3>
                <p className="service">
                  Подобрать и заказать жильё, сделать макет футболки с надписью,
                  сдать отчётность в налоговую, вести клиентов (CRM).
                </p>
              </div>
              <div className="card col-12 col-md-6 col-xl-4">
                <div className="services"></div>

                <h3>Сервисы</h3>
                <p className="service">
                  Сервисом обычно называют сайт, который позволяет пользователю
                  что-то сделать.
                </p>
              </div>
              <div className="card col-12 col-md-6 col-xl-4">
                <div className="promo-site"></div>

                <h3>Промо-сайт</h3>
                <p className="service">
                  Так называют сайт, представляющий один продукт, услугу или
                  событие.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="work-as work">
          <div className="container">
            <section className="slider2">
              <div className="container-slider">
                <div className="row justify-content-center">
                  <div className="carousel-indicators">
                    мои избранные работы
                    <div className="wrapper">
                      {mains.map((project, index) => {
                        return (
                          <ProjectTwo
                            key={index}
                            title={project.title}
                            img={project.img}
                            skills={project.skills}
                            link={project.link}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <br />
            мой стек технологий:
            <br />
            JavaScript, React (частично),node.js, redux, git, api,
            <br />
            php, mysql, C#, 1C 7.7, HTML, CSS, ООП, bootstrap,
            <br />
            linux, mvc, ajax, jquery
            <br />
            <br />
            создал много сайтов на php и javascript,
            <br />
            в том числе несколько интернет-магазинов
            <br />
            программирую на фреймворке react
            <br />
            <br />
            Веду проектную деятельность программистом на языках php и
            javascript, немного на C# и 1с7.7, занимаюсь двумя сайтами
            интернет-магазинами американских и китайских автозапчастей.
            <br />
            <br />
            Опыт работы учителем позволил развить во мне такие качества, как
            внимательность к деталям, стрессоустойчивость, ораторские навыки.
            Самостоятельная подготовка к занятиям в годы работы в школе очень
            помогает теперь мне в программировании. Буду полезен Вам тем, что
            знаю несколько языков и умею соединять бэкенд и фронтенд, а также
            разрабатывать сайты по модели Логика-База Данных-Интерфейс с помощью
            Объектно-Ориентированного Программирования.
            <br />
            <br />
            Изучил курс «Javascript-программирование для начинающих» в
            Нетологии. Теперь решил продолжить развитие карьеры в
            программировании на javascript в frontend стеке и php в backend
            стеке. Рассматриваю проекты в сфере IT, экономики и маркетинга, и
            изучении атома.
            <br />
          </div>
        </section>
        <section className="work-as work">
          <div className="container">
            <h2>Заинтересованы в работе со мной ?</h2>
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
                <h2>Мой блог</h2>
                <p>В AXA Code блоге я расскажу как я черпаю идеи из фильмов.</p>
              </div>
              <br />
              <a className="btn" href="/works">
                Портфолио
              </a>
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
    </>
  );
};

export default Home;
