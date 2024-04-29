import "./../../styles/styles.css";
import React, { Component} from "react";
import ReactDOM from "react-dom";
import loader from "./loader";
import $ from "jquery";
import logo from "./../../styles/ima/logo.png"

class Rotate extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    let isPaused = false;
    // повторить с интервалом 2 секунды
    //let timerId = setInterval(() => alert("tick"), 2000);

    let timerId2 = setInterval(function () {
      if (!isPaused) {
        /* Выполняемый код... */

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d"); /* Error in getContext("2d") */
        let img = document.getElementById("logos");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 50, 44); //100,88

        // Matrix transformation
        ctx.translate(100, 88); //141.5,83
        ctx.rotate(Math.PI / 2);
        ctx.translate(-100, -88);
        //ctx.fill();
      }
      /* Выполняемый код... */
    }, 50);
    //alert(timerId2);
    // остановить вывод через 5 секунд
    setTimeout(() => {
      clearInterval(timerId2);
      setInterval(function () {
        if (!isPaused) {
          /* Выполняемый код... */

          let canvas = document.getElementById("canvas");
          let ctx = canvas.getContext("2d"); /* Error in getContext("2d") */
          let img = document.getElementById("logos");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 50, 44);

          // Matrix transformation
          //   ctx.translate(141.5, 83);
          //   ctx.rotate(Math.PI / 2);
          //   ctx.translate(-141.5, -83);
          // ctx.fill();
        }
        /* Выполняемый код... */
      }, 500);
    }, 3000);
    setTimeout(() => {
      let g = 1;
    });

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d"); /* Error in getContext("2d") */
    let img = document.getElementById("logos");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 50, 44);
}
  render() {
    return (
    <div className="col-12 col-md-2 col-xl-2" style={{width: 80 + "px",}}>
      <canvas id="canvas" className="canvas">
        <img id="logos" className="img-rotate" src={logo} alt="" />
      </canvas>
    </div>
    )
  }
}
 
export default Rotate;