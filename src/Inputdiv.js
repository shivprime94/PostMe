import React from "react"

function Inputdiv() {
    return(
        <div className="Inputdiv">
            <input type="text" className="input" placeholder="What Do You Want to Do..."/>
            <button className="add"><i className="fas fa-plus"></i></button>
            {/* <button type="button" className="btn btn-dark" onclick="dark()">Dark</button>
            <button type="button" className="btn btn-light" onclick="light()">Light</button> */}
        </div>
    )
}

export default Inputdiv;