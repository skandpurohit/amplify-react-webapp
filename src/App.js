import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is landing page for testing application deployed using Tanzu Components !
        </p>
        <a
          className="App-link"
          href="https://tanzu.vmware.com/tanzu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore VMware Tanzu
        </a>
      </header>
    </div>
  );
}

export default App;
