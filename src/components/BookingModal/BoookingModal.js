import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Checkin from '../CheckIn/Checkin';
import './BookingModal.css'
import { Profile } from '../Profile/Profile';




export const BookingModal = (props) => {
    // const { roomName } = props.params.details
    const [profiledetails, setProfiledetails] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: ""
    })


    // date checkin checkout


    const amenities = [
        {
            type: "Pool view"
        },
        {
            type: "Park view"
        },
        {
            type: "Dense view"
        },
        {
            type: "Sea view"
        }
    ]
    return (
        <>
            <Modal {...props} backdrop={true} tabindex="-1" className="custom-delete-modal modal-h"
                keyboard={false} contentClassName="modal-height" dialogClassName="my-modal ">
                {/* <Modal.Header className="border-0 px-4 bg-transparent close-modal " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left text-white" viewBox="0 0 16 16" aria-label='close' >
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Modal.Header> */}
                <Modal.Body className=" model-content modal-h" bsPrefix="p-0 " style={{
                    maxHeight: '85vh',
                    overflowY: 'auto',


                }}>
                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" alt='img' height={60} className=" img-fluid mb-4" />

                    <div>
                        <Checkin />
                    </div>

                    <div >

                        <div className='p-3'>
                            <div className='p-2   my-bg d-flex justify-content-between'>
                                <div className='p-3 '>
                                    <h5 className='fw-bold'>Premium suite</h5>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i</li>
                                </div>
                                <div className='p-4'>
                                    <p className='fw-bold'>₹5000</p>
                                    <a className='text-dark'>View Details</a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className='p-4'>
                                <div className='mt-3'>
                                    <h5 className='fw-bold '>Amenities</h5>
                                    <div className='row' >
                                        {amenities.map(item =>
                                            <div className='col-lg-6 col-md-6 col-sm-12 p-2'>
                                                <li> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-car-front-fill me-2" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z" />
                                                </svg></span>{item.type}</li>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <div class="rounded   custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                    <div class="more d-flex  ">
                        {/* <button className=" btn btn-dark ">visa </button> <br /> */}
                        <p className='px-3 mb-0 bg-warning p-2 bordered-2'>
                            <span className='' style={{ fontWeight: "bolder" }}> $ 1500</span>
                        </p>
                        <p ></p>
                    </div>
                    <button type="button" className="btn btn-dark  " onClick={() => setProfiledetails({ modal: true, details: ""})}>Book Now</button>
                </div>

            </Modal>



            {profiledetails ? <Profile
                    setBookingModel={(my) => setProfiledetails(my)}
                    show={profiledetails.modal}
                    onHide={() =>
                        setProfiledetails({ modal: false, modalType: "", type: "", details: {} })
                    }
                    params={profiledetails}
                    
                /> : null}





            {/* old code of offcanvas */}

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