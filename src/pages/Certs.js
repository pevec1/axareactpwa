import Certificate from "../components/cert/Certificate";
//import Project from "../components/project/Project";
import { certs } from "../helpers/certsLists";

const Certs = () => {
  return (
    <main>
      <div className="wrapper3">
      <h2>Все Мои Дипломы и Сертификаты</h2>
      {certs.map((project, index) => {
                  return (
                    <Certificate
                      id={index}
                      title={project.title}
                      img={project.img}
                      skills={project.skills}
                      link={project.link}
                    />
                  );
                })}

      </div>
    </main>
  );
};

export default Certs;
