import { Provider } from 'react-redux';
import { store } from './components/store';
import Header from './components/Header';
import Products from './components/Products';
import Services from './components/Services';
import FeaturedPost from './components/FeaturedPost';
import About from './components/About';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Products />
      <Services />
      <FeaturedPost />
      <About />
      <Footer />
    </Provider>
  );
}

export default App;
