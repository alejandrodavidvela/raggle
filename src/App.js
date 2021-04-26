import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Logo from './components/Logo'
import RaggleItems from './components/RaggleItems';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <RaggleItems />
      <Footer />
    </div>
  );
}

export default App;
