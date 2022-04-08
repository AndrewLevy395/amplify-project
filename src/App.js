import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing out AWS Amplify... Did it work?</p>
        <a
          className="App-link"
          href="https://github.com/AndrewLevy395/amplify-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to github Repo
        </a>
      </header>
    </div>
  );
}

export default App;
