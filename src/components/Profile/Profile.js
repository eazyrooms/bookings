import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';




export const Profile = (props) => {
 



    return (
        <>
            <Modal {...props} backdrop="static" tabindex="-1" className="custom-delete-modal mt-1 h-100 pt-5" keyboard={false} scrollable={true} contentClassName="modal-height">
                <Modal.Header className="border-0 px-4 bg-transparent close-modal " closeButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left text-white" viewBox="0 0 16 16" aria-label='close' >
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Modal.Header>
                <Modal.Body className="pt-0" style={{ padding: "30px" }}>
                   
                </Modal.Body>
                <div class="rounded   custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                    <div class="more d-flex  ">
                        <button className=" btn btn-warning ">Cancel</button> <br/>
                        <p>
                            Total
                        </p> <br/>
                        <p> $ 150</p>
                    </div>
                    <button type="button" className="btn btn-success " >Confirm</button>
                </div>
            </Modal>


          
        </>
    );
};