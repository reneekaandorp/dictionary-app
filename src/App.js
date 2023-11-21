import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <br />
      <footer>
        This project was coded by{" "}
        <a href="https://silly-llama-8d5577.netlify.app">Renee Kaandorp</a> and
        is{" "}
        <a href="https://app.netlify.com/sites/glistening-fudge-803a82/overview">
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}
