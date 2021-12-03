import React from 'react';
import Letter from './Letter'
import './Word.css'


const Word = ({word, index, input, className}) => {
    console.log(input)
    const enteredWords = input.split(' ')
    const wordLetters = word.split('')
    const letters = wordLetters.map((letter, letterIndex) => {
        if (index < enteredWords.length && letterIndex < enteredWords[index].length)
            return <Letter value={letter} index={letterIndex} key={letterIndex} input={enteredWords[index][letterIndex]}/>
        else {
            return <Letter value={letter} index={letterIndex} key={letterIndex} input=''/>
        }
            })
    return(
        <div className={className} key={index} >
            {letters}
        </div>
    )}
export default Word