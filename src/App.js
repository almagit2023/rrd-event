import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import Contact from './pages/Contact';
import OldProducts from './pages/OldProducts';
import NewProducts from './pages/NewProducts';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="home" />
        <Route element={<About />} path="about" />
        <Route element={<Contact />} path="contacts" />
        <Route element={<Products />} path="products">
          <Route path='/products' element={<OldProducts />} />
          <Route path='oldproducts' element={<OldProducts />} />
          <Route path='newproducts' element={<NewProducts />} />
        </Route>
        <Route element={<Gallery />} path="gallery" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
