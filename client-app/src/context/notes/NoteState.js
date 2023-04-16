import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notes=[
        
    ]
    return(
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;