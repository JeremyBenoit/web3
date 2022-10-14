import './App.css';
import React, {useState, useEffect} from "react";
import Button from "components/Button/Button";
import Person from "components/Person/Person";
import FormInput from "components/FormInput/FormInput";
import personsService  from "services/persons"

function App() {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        personsService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const addNumber = (e) => {
        e.preventDefault()

        const personFound = persons.find(p => p.name===newName)
        if (personFound !== undefined) {
            const confirmed = window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)
            if(confirmed){
                const person = {
                    name:newName,
                    number: newNumber
                }
                personsService
                    .update(personFound.id, person)
                    .then(numberAdded => {
                        persons[persons.indexOf(personFound)] = person
                        setPersons(persons)
                        setNewName('')
                        setNewNumber('')
                    })
            }
        } else {
            const person = {
                name:newName,
                number: newNumber
            }
            personsService
                .add(person)
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
                .remove(person.id)
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
