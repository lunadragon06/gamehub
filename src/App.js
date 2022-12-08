import './sass/style.scss';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Admin from "./components/pages/Admin"; 
import ContactForm from "./components/layout/ContactForm";
import GameList from "./components/games/GameList";
import GameDetail from "./components/games/GameDetail";
import LoginForm from "./components/layout/LoginForm";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Nav />
      <div className="container">
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/detail/:id" element={<GameDetail />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </div>
      <footer>© 2020-2022</footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
