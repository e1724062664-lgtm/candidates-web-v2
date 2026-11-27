import { Link } from "react-router";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <h2 className="not-found-page-title">Página no encontrada</h2>
      <Link to="/candidates" className="not-found-page-link">Ir a la lista de candidatos</Link>
    </section>
  );
};
