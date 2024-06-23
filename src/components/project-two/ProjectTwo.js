import "./../../styles/styles.css";

const ProjectTwo = ({key,title, img, skills, link}) => {
    return (      <div key={key} className="card2">
        <div className="poster">
          <img src={img} alt="wallpaper img" />
        </div>
        <div className="details">
          <h1>{title}</h1>
          
  
          <p className="desc">
            {(skills==="") ? ("здесь скоро будет описание сайта") : (skills)} 
                      </p>
          <div className="cast">
            <a target="_blank" href={link} rel="noreferrer">
              {link}
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default ProjectTwo;