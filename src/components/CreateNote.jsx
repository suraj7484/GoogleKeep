import {React , useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';

const MyButtonStyle = makeStyles({
    button:{
        '&:hover':{
            backgroundColor: "orange",
            color:"white"
        },
        position:"absolute",
        backgroundColor: " white",
        color:" orange",
        borderRadius:"50%",
        height:60,
        marginLeft:240,
        marginTop:120,
        boxShadow: '5px 5px 12px grey'
    },
    icon:{
        fontSize:50
    }
})

const CreateNote = (props) => {
    const classes = MyButtonStyle()

    const [expand , setExpand] = useState(false)

    const [note , setNote] = useState({
        title:"",
        content:""
    })

    const InputEvent = (event) => {

        const {value , name} = event.target

        setNote((prevdata) =>{
            return {
                ...prevdata,
                [name] :value
            }
        })
    }
    const handleClick = () => {
        props.passNote(note)
        setNote({
            title:"",
            content:""
        })    
    }
    const showForm = () => {
        setExpand((prev) => {
            return !prev
        })
    }

    return (
        <>
            <div className="main_note">
                <form>
                    {expand ? 
                        <>
                        <input
                        type="text"
                        name = "title"
                        value = {note.title}
                        placeholder="Title"
                        autoComplete="off"
                        onChange = {InputEvent}/>
                        <br/>
                        </>
                    : null}
                    <textarea
                        rows=""
                        column=""
                        name = "content"
                        onChange = {InputEvent}
                        value = {note.content}
                        placeholder="Write Your Note..."
                        onClick = {showForm}
                        
                    >
                    </textarea>
                    {expand ? 
                    <Button 
                    className = {classes.button}
                    onClick = {handleClick}>
                        <AddIcon className = {classes.icon} />
                    </Button>
                    : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote