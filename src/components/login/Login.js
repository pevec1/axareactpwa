import "./../../styles/styles.css";

const Login = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form className="form1" name="form1">
          <h6 className="header-title">login-form</h6>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                login-form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h3>AXA Code</h3>
                <p>Войдите, чтобы продолжить</p>
                <div className="error"></div>
                <input
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Введите логин, почту или телефон"
                />
                <br />
                <input type="password" name="passwd" id="passwd" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-login">
                Войти
              </button>
              <button type="button" className="btn btn-register">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
