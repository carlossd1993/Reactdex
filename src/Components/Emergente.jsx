import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Emergente({onClose}){
    return (
        <div
            className="modal show"
            style={{display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Emergente