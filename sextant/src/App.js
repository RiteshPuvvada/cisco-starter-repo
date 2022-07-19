import './App.css';
import Banner from './components/Banner/banner.js'
import Footer from './components/Footer/footer.js';
import AddressDisplay from './components/data/data.js'

function App() {
  return (
    <div className="App">
      <Banner title={'Sextant'} />
      <AddressDisplay url='https://api.ipify.org?format=json' />
      <Footer />
    </div>
  );
}

export default App;
