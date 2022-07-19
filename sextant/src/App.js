import './App.css';
import Banner from './components/Banner/banner.js'
import Footer from './components/Footer/footer.js';
import Data from './components/data/data.js'

function App() {
  return (
    <div className="App">
      <Banner title={'Sextant'} />
      <Data />
      <Footer />
    </div>
  );
}

export default App;
