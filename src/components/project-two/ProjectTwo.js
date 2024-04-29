import "./../../styles/styles.css";

const ProjectTwo = ({title, img, skills, link}) => {
    return (
      // <div className="carousel-item">
      //   <br/>
      //   {title}<br/>
      //   <img src={img} className="image-w-90" alt="..." />
      //   <br/>
      //   <a target="_blank" href={link} rel="noreferrer">{link}</a>
      //   <br/><br/>
      // </div>
      <div className="card2">
        <div className="poster">
          <img src={img} alt="wallpaper img" />
        </div>
        <div className="details">
          <h1>{title}</h1>
          <h2></h2>
          {/* <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span></span>
            </div> */}
          {/* <div className="tags">
              <span className="tag"></span>
              <span className="tag"></span>
              <span className="tag"></span>
            </div> */}
          <p className="desc">
            {(skills=="") ? ("здесь скоро будет описание сайта") : (skills)} 
                      </p>
          <div className="cast">
            <a target="_blank" href={link} rel="noreferrer">
              {link}
            </a>
            {/* <h3></h3>
              <ul>
                <li>
                  <img
                    src=""
                    alt="Marco Andrews"
                    title="Marco Andrews"
                  />
                </li>
                <li>
                  <img
                    src=""
                    alt="Rebecca Floyd"
                    title="Rebecca Floyd"
                  />
                </li>
                <li>
                  <img
                    src=""
                    alt="Antonio Herrera"
                    title="Antonio Herrera"
                  />
                </li>
              </ul> */}
          </div>
        </div>
      </div>
    );
}
 
export default ProjectTwo;