//Aplicando React Router 6 e Lazy Loading
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

// Realizando importações das rotas através da função Lazy
const Home = lazy(() => import('./Pages/Home/index'));
const About = lazy(() => import('./Pages/About/index'));
const Favorites = lazy(() => import('./Pages/Favorites/index'));
const NotFound = lazy(() => import('./Pages/Home/index'));

// Utilizando suspense para passar um Spinner enquanto aguarda a requisição das rotas.
export default function App() {
  return (
    <div>
      <Suspense fallback={<h1>Rendering...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}





