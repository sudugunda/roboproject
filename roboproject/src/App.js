import './App.css';
import Card from './Card';
import CardList from './CardList';
import { data as persons } from './data';

function App() {
  return (
    <>
    <h1>RoboProject...</h1>
    <CardList persons={persons}/>
    </>
  );
}

export default App;
