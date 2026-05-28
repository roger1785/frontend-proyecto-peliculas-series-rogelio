import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <Header />
      <main className="admin-page">
        <div className="container">
          <div className="admin-header">
            <h1>Panel Administración</h1>
            <p>Gestiona el contenido del catalogo</p>
          </div>

          <nav className="admin-nav">
            <Link to="/admin/movies">Peliculas</Link>
            <Link to="/movies">Ver sitio publico</Link>
          </nav>

          <Outlet />
        </div>
      </main>
      <Footer />  
    </>
  );
}

export default AdminLayout;
