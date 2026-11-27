import { Navigate, Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { CandidatesPage } from "./pages/CandidatesPage";
import { CandidateDetailPage } from "./pages/CandidateDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// App solo ensambla: la cabecera y las rutas.
const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/candidates" replace />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/candidates/:id" element={<CandidateDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
