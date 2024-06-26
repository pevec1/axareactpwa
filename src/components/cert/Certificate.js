import "./../../styles/styles.css";

const Certificate = ({ id, title, img, skills, link }) => {
  return (
    <div key={id}>
         <h3 className="header-title">{title}</h3>
        <img src={img} className="card3" alt="..." />
      <br />
      </div>
  );
};

export default Certificate;
