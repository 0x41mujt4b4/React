import React, {useState, useRef, useEffect} from 'react'
import Word from './Word'
import './Text.css'
import Input from './Input'

const Text = ({text}) => {
    const [wordIndex, setWordIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [input, setInput] = useState('')
    const [words, setWords] = useState(
        text.split(' ').map((word, index) => {
        const style = index === wordIndex ? 'word active' : 'word'
        return <Word word={word} index={index} key={index} className={style} input={input}/>
    }))
    const inputRef = useRef()

    const keyPressHandler = (event) => {
        setInput(event.target.value)
        console.log(input)
        // if (!(event.key === ' ' && letterIndex === 0)){
            // if (event.key === ' '){
            //     event.target.value = ''
            //     setWordIndex(index => index += 1)
            //     setLetterIndex(0)
            // }
            // setWords(words => {
            //     const style = 'word active'
            //     const activeWord = <Word word={words[wordIndex].props.word}
            //                             index={wordIndex}
            //                             key={wordIndex}
            //                             className={style}
            //                             input={event.key}/>
            //     return [...words.slice(0, wordIndex), activeWord, ...words.slice(wordIndex + 1, words.length)]
            // })
            // setLetterIndex(index => index += 1)
    }
    useEffect(() => {
        setWords(text.split(' ').map((word, index) => {
            const style = index === wordIndex ? 'word active' : 'word'
            return <Word word={word} index={index} key={index} className={style} input={input}/>
        }))
        // return () => setWords(words)
    }, [input, text, wordIndex])


    // const keyPressHandler = (event) => {
    //     // const equal = (child) => x===
    //     lettersRefs.current[0].childNodes.forEach((child, index) => {
    //         child.className = 'letter correct'
    //     })
    //     // const word = Array.from(lettersRefs.current[0].children)
    //     // const index = event.target.value.length - 1
    //     // // if (index >= word.length){
            
    //     // // }
    //     //     if (event.target.value[index] === " "){
    //     //         console.log('space!')
    //     //         event.target.value = ''
    //     //     }
    //     //     else if (word[index].textContent === event.target.value[index]){
    //     //         word[index].className = 'letter correct'
    //     //     }
    //     //     else if (word[index].textContent !== event.target.value[index]){
    //     //         // console.log(word.textContent)
    //     //         // console.log(event.target)
    //     //         word[index].className = 'letter wrong'
    //     //     }
    //         // if (words[0].length === event.target.value.length){
    //         //     console.log(event.target.value)
    //         // }
    //     }
        // if (event.key) === words[wordIndex]{

        // }
        // console.log(words)
    return(
        <div className="textInput">
            <Input ref={inputRef} onChange={keyPressHandler}/>
            <div className='text' onClick={() => inputRef.current.focus()}>
                {words}
            </div>
        </div>
    )
}

export default Text