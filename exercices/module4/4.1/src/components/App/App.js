import './App.css';
import React, {useState, useEffect} from "react";
import Button from "components/Button/Button";
import Person from "components/Person/Person";
import FormInput from "components/FormInput/FormInput";
import personsService  from "services/persons"

function App({data}) {
    const [persons, setPersons] = useState(data)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNumber = (e) => {
        e.preventDefault()
        let alreadyExists = false
        for (const person of persons) {
            if (person.name === newName) {
                alreadyExists = true
                break;
            }
        }
        if (alreadyExists) alert(`${newName} is already added to phonebook`)
        else {
            const person = {
                name:newName,
                number: newNumber
            }
            personsService
                .addNumber(person)
                .then(numberAdded => {
                    setPersons(persons.concat(numberAdded))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }


    const deleteNumber = (person) => {
        const confirmed = window.confirm(`Delete ${person.name}`)
        if (confirmed) {
            personsService
                .deleteNumber(person.id)
                .then(numberDeleted => {
                    setPersons(persons.filter(p => p.id!==person.id))
                })
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNumber
            }>
                <FormInput value={newName} changeValue={(e) => setNewName(e.target.value)} label='name'/>
                <FormInput value={newNumber} changeValue={(e) => setNewNumber(e.target.value)} label='number'/>
                <Button text='add'/>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <Person person={person} onClickHandler={() => deleteNumber(person)}/>)}
            </div>
        </div>
    )
}

export default App;
