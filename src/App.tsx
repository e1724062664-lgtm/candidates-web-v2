import { Header } from './components/Header';
import { CandidatesPage } from './pages/CandidatesPage';

// App solo ensambla: la cabecera y la página. No tiene datos ni lógica.
const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <CandidatesPage />
      </main>
    </div>
  );
};

export default App;
