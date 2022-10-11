import './App.css';
import {useState} from "react";
import Button from "components/Button/Button";
import Person from "components/Person/Person";
import FormInput from "../FormInput/FormInput";

function App() {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <FormInput value={newName} changeValue={(e) => setNewName(e.target.value)} label='name'/>
                <Button addPerson={() => setPersons([...persons, {name: newName}])} text='add'/>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <Person name={person.name}/>)}
            </div>
        </div>
    )
}

export default App;
