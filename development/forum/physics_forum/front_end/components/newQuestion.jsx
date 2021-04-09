import React from "react";
import Modal from 'react-bootstrap/Modal'
//import CSRFToken from "./csrftoken"

function NewQuestion(props) {
    if(props.show) {
    return(
            <Modal className = 'modal' 
                    show = {true} 
                    size = "xl"
                    aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title id = "contained-modal-title-vcenter">Submit a new Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type = 'text' 
                            id = "newQuestionText" 
                            placeholder = "Your question goes here"/>
                    <div className = "error-message">{props.error}</div>
                </Modal.Body>
                <Modal.Footer>
                    <button variant = "secondary" 
                            onClick = {() => props.closeQn(document.getElementById("newQuestionText").value='')}>
                        Cancel
                    </button>
                    <button variant = "primary" 
                            onClick = {() => props.submitQn(document.getElementById("newQuestionText").value)}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
    )}
    else {return null}
};

// <CSRFToken />
// 
export default NewQuestion