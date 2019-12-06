import {useState, useEffect} from 'react';

export const useToggle = (initialValue) => {
    const myApp = document.querySelector('.App')
    const [mode, setMode] = useState(initialValue);
    useEffect(() => {
        mode ? document.body.classList.add('changeBackground') : document.body.classList.remove('changeBackground')
    })
    return [mode, setMode]

}