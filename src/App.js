import logo from "./logo.svg";
import "./App.css";
import "./assets/css/main.css";
import { ItemTitle, Title } from "./components/elements/title";
import { Price } from "./components/elements/price";
import { Stock } from "./components/elements/stock";
import data from "./components/data/dummy.json";
import { Card } from "./components/card";

function App() {
  console.log(data);
  return (
    <div className='App'>
      <Title text={"Termurah"} />
      <div className='slide'>
        {data.map((item) => {
          console.log(item);
          return <Card className='slide--product' data={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
