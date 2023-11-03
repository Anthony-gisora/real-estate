import AppLayout from "./layouts/AppLayout"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import PgNotFound from "./components/pgNotFound";
import Houses from "./pages/houses";

function App() {
  return (
    <Routes>

      {/* Root URL */}
      <Route path="/" element={
        <AppLayout>
          <NavBar />
          <Home />
          <Footer />
        </AppLayout>
      } />

    <Route path="/houses" element={
        <AppLayout>
          <NavBar />
          <Houses />
          {/* <Footer /> */}
        </AppLayout>
      } />

      {/* Page Not found */}
      <Route path="*" element={
        <AppLayout>
          <NavBar />
          <PgNotFound />
        </AppLayout>
      } />
    </Routes>
  );
}

export default App;
