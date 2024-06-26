import "./../../styles/styles.css";

const Certificate = ({ title, img, skills, link }) => {
  return (
    <div>
         <h3 className="header-title">{title}</h3>
        <img src={img} className="card3" alt="..." />
      <br />
      </div>
  );
};

export default Certificate;
