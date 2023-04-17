import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial= [
        {
          "_id": "643ce9fc9ba39414efa7e708",
          "user": "643ce86c9ba39414efa7e706",
          "title": "notes 1",
          "description": "Description must be atleast 5 characters",
          "tag": "General",
          "date": "2023-04-17T06:41:00.289Z",
          "__v": 0
        },
        {
          "_id": "643cea0c9ba39414efa7e70a",
          "user": "643ce86c9ba39414efa7e706",
          "title": "notes 2",
          "description": "Desccmkenridjbcjption must be atleast 5 characters",
          "tag": "General",
          "date": "2023-04-17T06:41:16.933Z",
          "__v": 0
        },{
            "_id": "643ce9fc9ba39414efa7e708",
            "user": "643ce86c9ba39414efa7e706",
            "title": "notes 1",
            "description": "Description must be atleast 5 characters",
            "tag": "General",
            "date": "2023-04-17T06:41:00.289Z",
            "__v": 0
          },
          {
            "_id": "643cea0c9ba39414efa7e70a",
            "user": "643ce86c9ba39414efa7e706",
            "title": "notes 2",
            "description": "Desccmkenridjbcjption must be atleast 5 characters",
            "tag": "General",
            "date": "2023-04-17T06:41:16.933Z",
            "__v": 0
          }
      ]

    const [notes, setNotes] = useState(notesInitial)

      
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;