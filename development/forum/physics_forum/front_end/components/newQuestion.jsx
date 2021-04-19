import React from "react";
import Modal from 'react-bootstrap/Modal'


function NewQuestion(props) {
    if(props.showQ) {
    return(
            <Modal className = 'modal' 
                    show = {true} 
                    size = "xl"
                    aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title id = "contained-modal-title-vcenter">Submit a New Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea rows = '2' 
                            type = 'text' 
                            id = "newQuestionText" 
                            placeholder = "Your question goes here"/>
                    <div className = "error-message">{props.error}</div>
                </Modal.Body>
                <Modal.Footer>
                    <button className = "btn btn-secondary" 
                            onClick = {() => props.closeQn(document.getElementById("newQuestionText").value='')}>
                        Cancel
                    </button>
                    <button className = "btn btn-primary" 
                            onClick = {() => props.submitQn(document.getElementById("newQuestionText").value)}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
    )}
    else if(props.showA) {
        console.log(props.data)
        return(
                <Modal className = 'modal' 
                        show = {true} 
                        size = "xl"
                        aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header>
                        <Modal.Title id = "contained-modal-title-vcenter">Submit a New Answer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className = "qtext">{props.data.questions[0].text}</div>
                        <textarea rows = '2'
                                type = 'text' 
                                id = "newAnswerText"
                                placeholder = "Your answer goes here"/>
                        <div className = "error-message">{props.error}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className = "btn btn-secondary" 
                                onClick = {() => props.closeQn(document.getElementById("newAnswerText").value='')}>
                            Cancel
                        </button>
                        <button className = "btn btn-primary" 
                                onClick = {() => props.submitAns(document.getElementById("newAnswerText").value)}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
        )}
    else {return null}
};

export default NewQuestion