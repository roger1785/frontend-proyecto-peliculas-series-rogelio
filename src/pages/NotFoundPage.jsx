import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main>
      <section className="catalog-section">
        <div className="container">
          <h1>Página no encontrada</h1>
          <p>La pagina que esta buscando no existe</p>

          <Link to="/movies">
            <p>Volver a la página de movies</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
