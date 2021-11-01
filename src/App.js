import logo from './logo.svg';
import './App.css';
import MortgageCalculatorContainer from './containers/MortgageCalculatorContainer';

function App() {
  // <img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Mortgage Calculator.
        </h1>
      </header>

      <MortgageCalculatorContainer />
    </div>
  );
}

export default App;
