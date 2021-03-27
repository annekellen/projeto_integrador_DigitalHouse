import Card from '../../components/Card';

import './style.css';
const Sobre = () => {
  return (
    <>
      <div className="sobre-container">
        <div className="sobre-img"></div>
        <div className="sobre-text">
          <h2 className="descricao__titulo sobre-titulo">Sobre a Overlook</h2>

          <p className="sobre-text-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions.
          </p>
        </div>
      </div>

      <div className="itens-relacionados">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default Sobre;