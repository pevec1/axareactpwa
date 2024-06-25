/* eslint-disable jsx-a11y/iframe-has-title */
//import Certificate from "../components/cert/Certificate";
//import Project from "../components/project/Project";
//import { certs } from "../helpers/certsLists";

const Reacts = () => {
  return (
    <main>
      <h1>Все Мои Дипломы и Сертификаты</h1>
      <div className="wrapper3">
        <h5>Диплом МИФИ</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/1_vVkocHCGIJXnm0eiFkLq9qQp5zZnq9f/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
        <h5>Диплом JavaScript Нетология</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/1PrDtPn2DxJUjT5N-FIZhhg30xBeLjynk/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
        <h5>Диплом РЭУ Плеханова</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/1lSES0TDwVt9W30acgnT6hy0149puetXN/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
        <h5>certificate GIT Netology</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/1zdQyJhYHu3sXncAIVXgCi3nxBvPffmJr/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
        <h5>certificate JS-cp-2 Netology</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/1czDAjOfXbJO4R9TyH8ZhBxlSk_8-d6wf/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
        <h5>certificate React.js Netology 2</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/1QhQJ9Vxb1ARXls6Do5g29ESkmmYDKvbc/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
        <h5>certificate React.js Netology</h5>
        <div className="card3">
          <iframe
            src="https://drive.google.com/file/d/16Dh1NCcC-VkajVtkWYbX6nNrpujUxMMo/preview"
            width="320"
            height="240"
            allow="autoplay"
          ></iframe>
          <br />
        </div>
      </div>

      {/* {certs.map((project, index) => {
                  return (
                    <Certificate
                      key={index}
                      title={project.title}
                      img={project.img}
                      skills={project.skills}
                      link={project.link}
                    />
                  );
                })} */}
    </main>
  );
};

export default Reacts;
