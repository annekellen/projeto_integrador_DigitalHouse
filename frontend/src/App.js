import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';
import { ProductProvider } from './components/Context/index';
import './App.css';
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Header />
        <Routes />
        <Footer />
      </ProductProvider>
    </div>
  );
}
export default App;
