import {useState, useEffect} from 'react';

const FizzBuzz = () => {

    const [inputNumber, setNumber] = useState(0);
    const [answer, setAnswer] = useState('');
    
    useEffect(()=> {
        if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
            setAnswer("fizzbuz")
          } else if (inputNumber % 3 === 0) {
            setAnswer("fizz")
          } else if (inputNumber % 5 === 0) {
            setAnswer("buzz")
          } else {
            setAnswer(inputNumber);
          }
    })

    const handleInc = () => {
        setNumber(inputNumber + 1);
    }

    return(
        <>
            <h2>{inputNumber}</h2>
            <h3>{answer}</h3>
            <button value={inputNumber} onClick={handleInc} >Add a number</button>
        </>
    )
}
export default FizzBuzz;