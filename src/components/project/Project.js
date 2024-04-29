import "./../../styles/styles.css";

const Project = ({title, img, link}) => {
    return (
      <div className="carousel-item">
        <br/>
        {title}<br/>
        <img src={img} className="image-w-90" alt="..." />
        <br/>
        <a target="_blank" href={link} rel="noreferrer">{link}</a>
        <br/><br/>
      </div>
    );
}
 
export default Project;