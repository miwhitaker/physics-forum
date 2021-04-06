import React from "react";

export default function NewQ(props) {
    if(props.show){
        return(
            <form method = "POST">
                <Modal show = {props.show} onHide = {close}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Post a new question
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Body text
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick = {close}>Close</button>
                        <button onClick = {close}>Save</button>
                    </Modal.Footer>
                </Modal>
            </form>
        )}

    else {return null}
}

// const close = () => setShow(false);
// const open = () => setShow(true);