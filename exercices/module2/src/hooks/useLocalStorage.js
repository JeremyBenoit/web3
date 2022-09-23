import {useState} from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValueDefault] = useState(parseInt(localStorage.getItem('counter')) || initialValue)

    const setValue = (newValue) =>{
        setValueDefault(newValue)
        localStorage.setItem('counter',JSON.stringify(newValue))
    }

    return [value, setValue]
}

export {useLocalStorage}