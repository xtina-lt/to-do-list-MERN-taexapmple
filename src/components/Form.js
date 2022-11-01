import React, {useState} from 'react'

const Form = ({list, setList}) => {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setList([...list,
            // get the input
            // default complete is false
            {content: input, complete : false}
        ])
    }

    return (
        <div>
            <h2>
                Add Item:
            </h2>
            <form onSubmit = {handleSubmit}>
                {/* use state to get the value */}
                <input type="text" value={input} onChange={  e => setInput(e.target.value) }/>
                <input type="Submit" value="Do"/>
            </form>
            {input}
        </div>
    )
}

export default Form