import './App.scss';
import { Card } from './components/card/card';
import { Header } from './components/header/header';

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="App">
        <Card />
      </div>
    </>
  );
}

export default App;
