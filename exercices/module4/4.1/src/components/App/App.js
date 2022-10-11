import './App.css';
import {useState} from "react";
import Button from "components/Button/Button";
import Person from "components/Person/Person";
import FormInput from "../FormInput/FormInput";

function App() {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-1234567'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const formHandler = (e) => {
        e.preventDefault()
        let alreadyExists = false
        for (const person of persons) {
            if(person.name === newName) {
                alreadyExists = true
                break;
            }
        }
        if(alreadyExists) alert(`${newName} is already added to phonebook`)
        else setPersons([...persons, {name: newName, number: newNumber}])
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={formHandler}>
                <FormInput value={newName} changeValue={(e) => setNewName(e.target.value)} label='name'/>
                <FormInput value={newNumber} changeValue={(e) => setNewNumber(e.target.value)} label='number'/>
                <Button text='add'/>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <Person person={person}/>)}
            </div>
        </div>
    )
}

export default App;
