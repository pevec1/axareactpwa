const Footer = () => {
    return (
      <footer>
        <div id="head" className="container">
          <br />
          <h3>AXA React Code 2023</h3>
          <div>Контакты</div>

          <div className="buttons">
            <a
              className="btns btn-whatsapp"
              target="_blank"
              href="https://wa.me/+79652758777"
            >
              {" "}
            </a>
            <a className="btns btn-telegram" target="_blank" href="https://t.me/luksik1">
              {" "}
            </a>
            <a
              className="btns btn-vk"
              href="https://vk.com/harenkon"
              target="_self"
            >
              {" "}
            </a>
            {/* <a
              className="btns btn-fb"
              href="https://vk.com/harenkon"
              target="_self"
            >
              {" "}
            </a>
            <a
              className="btns btn-google"
              href="https://vk.com/harenkon"
              target="_self"
            >
              {" "}
            </a> */}
            <a
              className="btns btn-qr"
              href="#"
              target="_self"
            >
              {" "}
            </a>
            <a
              className="btns btn-more"
              href="#"
              target="_self"
            >
              {" "}
            </a>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;