import './App.css';
import CardList from './CardList';
import { data as persons } from './data';
import SearchInput from './SearchInput';

export default function App() {
  return (
    <div className='flex flex-column items-center'>
      <h1>RoboProject...</h1>
      <SearchInput/>
      <CardList className="flex" persons={persons}/>
    </div>
  );
}

