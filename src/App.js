import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetchInfo = () => {
    console.log("get info calling api");
    fetch("https://api.openbrewerydb.org/breweries?by_city=cleveland")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Test Eric</h1>
      <button onClick={fetchInfo} className="btn btn-primary btn-lg">
        fetch info
      </button>
    </div>
  );
}

export default App;
