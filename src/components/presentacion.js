import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link desde React Router
import './presentacion.css';

const Presentacion = () => {
  return (
    <div className="ensayo-view">
      <div className="ensayo-content">
        <p>
          ¡Bienvenido al sitio web interactivo que aborda el conflicto armado en Colombia a través de dos lentes contrastantes! En este espacio, se busca desentrañar cómo los medios de comunicación pueden oscurecer la verdad y desenfocar la realidad, y a la vez, proporcionar una inmersión profunda en la complejidad del conflicto armado colombiano.
        </p>
        <p>
          Cuando pulse comenzar se le mostrará la página que ofrece una experiencia única e interactiva que dura 20 segundos. Esta representación audiovisual es una ilustración de cómo los medios de comunicación pueden trivializar y distorsionar la realidad del conflicto armado, solo proporcionando fragmentos selectivos y convenientes de la verdad, a menudo oscurecidos por distracciones como el entretenimiento. En esta parte deberá mover rápidamente el mouse para ver la representación.
        </p>
        <p>
          Después de esta experiencia, será redireccionado automáticamente a un ensayo que explora la naturaleza del conflicto armado en Colombia. En esta segunda parte de nuestro sitio, nos sumergimos en una discusión detallada de cómo los medios de comunicación pueden hacer que nos olvidemos de la realidad de la violencia, el desplazamiento y el sufrimiento que han marcado la historia reciente de Colombia.
        </p>
      </div>
      <Link to="/representacion"> {/* Utiliza el componente Link para crear el enlace */}
        <button className="comenzar-button">Comenzar</button>
      </Link>
    </div>
  );
};

export default Presentacion;
