import './App.css';
import React, {useState} from 'react'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const arr = [
    {content: 'conquer world', complete : false},
    {content: 'be amazing', complete: false}];
  const [list, setList] = useState(arr);

  return (
    <>
      <header>
        To Do List
      </header>

      <main>
        <Form list={list} setList={setList} />
        <Display list={list} setList={setList}/>
      </main>
    </>
  );
}

export default App;
