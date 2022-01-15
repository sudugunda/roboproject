import './App.css';
import CardList from './CardList';
// import { data as persons } from './data';
import SearchInput from './SearchInput';
import { useState, useEffect } from 'react';

export default function App() {

  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState();

  useEffect(() => {
    // filterRobos();
    fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
      // .then( users =>{
        // console.log(users)
        // setFilteredPersons([users])
      // })
  }, [])

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  // const filterRobos = () => {
  //   const list = persons.filter(({name}) => {
  //     return name.toLowerCase().includes(search.toLowerCase());
  //   })
  //   setFilteredPersons(list);
  // }

  return (
    <div className='flex flex-column items-center'>
      <h1>RoboProject...</h1>
      <SearchInput onInputChange={onInputChange}/>
      <CardList className="flex" persons={filteredPersons}/>
    </div>
  );
}

