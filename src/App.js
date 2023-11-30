import './App.css';
import Header from './components/Page1';
import Spaceagency from './components/spacenames';
import Community from './components/education';
import Footer from './components/Footer';
import Cards from './components/cards';



function App() {
  return (
    <div>
     
      <Header/>
    <Spaceagency/>
    <Community/>
    <Footer/>
    <Cards/>
    </div>
  );
}

export default App;
