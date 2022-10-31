import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './BookingModal.css'
import { Profile } from '../Profile/Profile';




export const BookingModal = (props) => {
    // const { roomName } = props.params.details
    // const [profiledetails, setProfiledetails] = useState({
    //     modal: false,
    //     type: "",
    //     action: "",
    //     modalType: ""
    // })


    const amenities = [
        {
            type: "pool view"
        },
        {
            type: "Park view"
        },
        {
            type: "Dense view"
        }
    ]
    return (
        <>
            <Modal {...props} backdrop="static" tabindex="-1" className="custom-delete-modal mt-1 h-100 pt-5" keyboard={false} scrollable={true} contentClassName="modal-height">
                <Modal.Header className="border-0 px-4 bg-transparent close-modal " closeButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left text-white" viewBox="0 0 16 16" aria-label='close' >
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Modal.Header>
                <Modal.Body className="pt-0" style={{ padding: "30px" }}>
                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="canvas-img img-fluid mb-4 " />

                    {/* <div className='container'>
                    

                        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>


                        </div>



                    </div> */}


                
                    <div className="d-flex justify-content-between">
                    </div>

                    <div className='p-2   my-bg'>
                        <div className='p-3'>
                            <h6>Premium suite</h6>
                            <li>deluxe facility</li>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-3'>
                        <h6>Amenities</h6>
                        <div className='row' >
                            {amenities.map(item =>
                                <div className='col-lg-6 col-md-6 col-sm-12 p-2'>
                                    <li> {item.type}</li>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal.Body>
                <div class="rounded   custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                    <div class="more d-flex  ">
                        <button className=" btn btn-dark ">visa </button> <br/>
                        <p className='px-3 mb-0 pt-3'>
                            Total <span> $ 150</span>
                        </p> 
                        <p ></p>
                    </div>
                    <button type="button" className="btn btn-dark  ">Book Now</button>
                </div>
            </Modal>



            {/* {profiledetails ? <Profile
                    setBookingModel={(my) => setProfiledetails(my)}
                    show={profiledetails.modal}
                    onHide={() =>
                        setProfiledetails({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={profiledetails}
                    
                /> : null} */}

            {/* <Offcanvas  {...props} placement="start" scroll>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>

                <Offcanvas.Body>
                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="canvas-img img-fluid mb-4" />
                    <div className="d-flex justify-content-between">


                    </div>

                    <div className='p-2   my-bg'>
                        <div className='p-3'>
                            <h6>Premium suite</h6>
                            <li>deluxe facility</li>
                        </div>


                    </div>
                    <hr />
                    <div className='mt-3'>
                        <h6>Amenities</h6>
                        <ul className='my-ul'>
                            <li>Balcony view</li>
                            <li>Balcony view</li>

                            <li>Balcony view</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
                <div class="rounded shadow bg-warning custom-btn-warning d-flex align-items-center p-3 text-dark mb-3 mb-md-0 md-lg-0">
                    <div class="more flex  justify-content-between">
                        <p class="m-0" >₹0 </p>
                    </div>
                    <div className="ml-auto">
                        <p className="m-0 text-right" >Checkout <i className="icofont-simple-right"></i></p>

                    </div>
                    <button type="button" className="btn btn-warning " >Book Now</button>

                </div>
            </Offcanvas> */}
        </>
    );
};