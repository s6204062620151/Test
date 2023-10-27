import './App.css';
import Sticker from './Sticker';
import data from './Package1People.json';
import LabelPrinter from './LabelPrinter';
import { useRef } from 'react';
function App() {
  const labelRef = useRef(null);
  return (
    <div className="App">
      <div ref={labelRef}>
      {data.package1People.map((person) => (
        person.lists.map((list) => (
          <Sticker
            key={list.code}
            number={person.number}
            name={person.name}
            nameOfList={list['name of list']}
            codeOfList={list['code of list']}
          />
        ))
      ))}
      </div>
      <LabelPrinter labelRef={labelRef} />
    </div>
  );
}

export default App;
