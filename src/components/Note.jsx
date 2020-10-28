import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note = (props) => {
    const handleclick = () => {
        props.delItem(props.id)
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick = {handleclick}>
                    <DeleteOutlineIcon />
                </button>
            </div>
        </>
    )
}

export default Note