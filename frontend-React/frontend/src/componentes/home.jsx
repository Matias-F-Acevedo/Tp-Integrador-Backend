import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <button>
              <Link to="/alquiler">Alquiler</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/comprar">Comprar</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
