import './App.css';
import UserInput from './components/UserInput/UserInput';
import PromoCode from './components/PromoCode/PromoCode';

function App() {
  return (
    <div className="App">
      {/* <UserInput /> */}

      <p className='WelcomeText' data-testid="sample">Hello, Welcome to testing KT session</p>

      
      <PromoCode promo={''}></PromoCode> 
    </div>
  );
}

export default App;
