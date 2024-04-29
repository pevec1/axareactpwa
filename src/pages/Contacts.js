import whatsapp from "./../components/header/whatsapp.png";
import telegram from "./../components/header/telegram.png";

const Contacts = () => {
  return (
    <main>
      {" "}
      <section className="work-as work">
        <div className="container">
          <h2>Заинтересованы в работе со мной ? ?</h2>
          <div className="row">
            <a href="tel:+79652758777" rel="nofollow" className="btn">
              позвоните мне
            </a>
            <a
              className="btn"
              target="_blank"
              href="https://wa.me/+79652758777"
            >
              <img src={whatsapp} />
            </a>
            <a className="btn" target="_blank" href="https://t.me/luksik1">
              <img src={telegram} />
            </a>
          </div>
<br />
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
            <a className="btn-disabled" href="/creative">
              Смотреть идеи
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
