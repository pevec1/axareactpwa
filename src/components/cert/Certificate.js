/* eslint-disable jsx-a11y/iframe-has-title */
import "./../../styles/styles.css";

const Certificate = ({ key, title, img, skills, link }) => {
  return (
    <div>
         <h5 className="header-title">{title}</h5>
      <iframe
        src="https://drive.google.com/file/d/1_vVkocHCGIJXnm0eiFkLq9qQp5zZnq9f/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
      <br />
      </div>
  );
};

export default Certificate;
