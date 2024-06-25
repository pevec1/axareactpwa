/* eslint-disable jsx-a11y/iframe-has-title */
import "./../../styles/styles.css";

const Certificate = ({ key, title, img, skills, link }) => {
  return (
    <div key={key}>
         <h3 className="header-title">{title}</h3>
        <img src={img} className="card3" alt="..." />
      <br />
      </div>
  );
};

export default Certificate;
