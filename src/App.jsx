import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./views/Hero";
import Horarios from "./views/Horarios";
import Normativas from "./views/Normativas";
import Cursos from "./views/Cursos";
import Eventos from "./views/Eventos";
import Documentacion from "./views/Documentacion";
import Contacto from "./views/Contacto";

export default function App() {
  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }} className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Horarios />
      <Normativas />
      <Cursos />
      <Eventos />
      <Documentacion />
      <Contacto />
      <Footer />
    </div>
  );
}
