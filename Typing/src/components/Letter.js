import React, {useState, useEffect, useRef, useImperativeHandle} from 'react'

const Letter = React.forwardRef(({value, input, index}, ref) => {
    const [style, setStyle] = useState('letter')
    useEffect(() => {
        if (!input) setStyle('letter')
        else if (input === value) setStyle('letter correct')
        else if (input !== value) setStyle('letter wrong')
    }, [input])
    const keyRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            // correct: correct,
            // wrong: wrong
        }
    })
    return (
        <div className={style} key={index} ref={keyRef}>{value}</div>
    )
})

export default Letter