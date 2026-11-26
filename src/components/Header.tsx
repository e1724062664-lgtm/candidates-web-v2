import './Header.css';

// No recibe props: siempre muestra lo mismo.
export const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="header-brand">TalentHub</h1>
        <span className="header-subtitle">Candidatos</span>
      </div>
    </header>
  );
};
