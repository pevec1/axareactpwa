import "./../../styles/styles.css";

import axacode from "./../../styles/img/axacode.png";

const Navbar = () => {
  return (
    <ul className="logos">
      <li>
        <a href="/">
          <p className="logo">
            <img src={axacode} alt="AXAcode"></img>
          </p>
        </a>
      </li>
      <li>
        <a href="/aboutus">Обо мне</a>
      </li>
      {/* <li>
        <a href="/reacts">Проекты React</a>
      </li> */}
      <li>
        <a href="/works">Проекты</a>
      </li>
      <li>
        <a href="https://www.aharenkov.ru/my-creative">Идеи</a>
      </li>
      <li>
        <a href="/contacts">Контакты</a>
      </li>
      <li style={{ marginTop: 20 + "px" }}></li>
      <li>
        <a href="https://www.aharenkov.ru/auth" className="btn lk">
          Личный кабинет
        </a>
        <a href="/" className="btn logout">
          Выход
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
