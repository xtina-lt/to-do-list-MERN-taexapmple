import React, {useState} from 'react'

const Display = ({list, setList}) => {

    const changeMe = (item) => {
        // change value isong !
        item.complete = !item.complete;
        // change list state to updated list
        setList([...list]);
    }


    // if button is clicked
    // use filter to remove item from the list
    const deleteMe = val => {
        //                                () does not need return
        setList( list.filter( item => (item.content !== val) ) );
    }

    return (
        <div>
            <h2>
                To Do List:
            </h2>
            <ul>
                {/* get every object in the list */}
                {list.map( (item, index) =>
                    <li>
                        {/* show client as checkbox */}
                        <input type="checkbox" onChange={ e => changeMe(item) } />
                        {/* cross out if it is marked complete
                            by using a function 
                            to change the className
                        */}
                        <span className={ (item.complete) ? "complete" : null }>
                                        {/* if ("complete" : true)
                                        className="complete" ===> text-decoration: line-through */}
                            {item.content}
                        </span>
                        {/* delete button */}
                        <button className='smallBtn' onClick={ e => deleteMe(item.content) }>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Display