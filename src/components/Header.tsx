import { Link, NavLink } from "react-router";
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/candidates" className="header-brand">TalentHub</Link>
        <nav>
          <NavLink
            to="/candidates"
            className={({ isActive }) => (isActive ? "header-link header-link-active" : "header-link")}
          >
            Candidatos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
