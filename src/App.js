import logo from './logo.svg';
import './App.css';

// creation over consumption

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          let your life shine, make friends along the way
        </p>
        <p>
          - mobile app coming soon -
        </p>
        <a style={{color: '#FEA700', fontSize: 14, textDecoration: 'none' }} href="https://discord.com/invite/zEM3skDU4r">join for updates!</a>
      </header>
    </div>
  );
}

export default App;
