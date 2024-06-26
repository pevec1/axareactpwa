import "./../../styles/styles.css";
import { Link } from "react-router-dom";
import axacode from "./../../styles/img/axacode.png";

const Navbar = () => {
  return (
    <ul className="logos">
      <li>
        <Link to="/">
          <p className="logo">
            <img src={axacode} alt="AXAcode"></img>
          </p>
        </Link>
      </li>
      <li>
        <Link to={"/aboutus"}>Обо мне</Link>
      </li>
      {/* <li>
        <Link to={"/reacts"}>Проекты React</Link>
      </li> */}
      <li>
        <Link to={"/works"}>Проекты</Link>
      </li>
      <li>
        <Link to={"https://www.aharenkov.ru/my-creative"}>Идеи</Link>
      </li>
      <li>
        <Link to={"/contacts"}>Контакты</Link>
      </li>
      <li>
        <Link to={"/certs"}>Дипломы</Link>
      </li>
      <li style={{ marginTop: 20 + "px" }}></li>
      <li>
        <Link to={"https://www.aharenkov.ru/auth"} className="btn lk">
          Личный кабинет
        </Link>
        <Link to="/" className="btn logout">
          Выход
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
