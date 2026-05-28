import { Link } from "react-router-dom";
import { movies } from "../../data/movies";

function AdminMoviesPage() {
  return (
    <section className="catalog-section">
      <div className="admin-section-header">
        <div>
          <h2>Administracion de peliculas</h2>
          <p>Listado interno de peliculas</p>
        </div>
      </div>
      <Link to="#">Nueva Pelicula</Link>

      <div className="admin-list">
        {movies.map((movie) => (
          <article className="admin-list-item">
            <img src={movie.image} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
              <p>
                {movie.genre} • {movie.year}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p>Proximamente podremos crear, editar y eliminar peliculas</p>
    </section>
  );
}
export default AdminMoviesPage;
