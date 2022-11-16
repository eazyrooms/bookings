import React, { useState } from 'react'
import './RoomTypes.css'
import Carousel from 'react-bootstrap/Carousel';
import { BookingModal } from '../BookingModal/BoookingModal'

import Button from '@mui/material/Button';
import AOS from 'aos'



function RoomTypes() {
    const [bookingModel, setBookingModel] = useState({
        modal: false,
        type: "",
        action: "",
        modalType: ""
    })
    const roomData = [
        {
            id: 1,
            roomName: "Premier suite room",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",
            buttonText: "Book Now"

        },
        {
            id: 2,
            roomName: "Standard suite room",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },
        {
            id: 3,
            roomName: "Regular suite room",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },
        {
            id: 4,
            roomName: " VIP room",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },
        {
            id: 5,
            roomName: " Minimalist hotel rooms",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },
        {
            id: 6,
            roomName: " Deluxe hotel rooms",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },
        {
            id: 7,
            roomName: " Studio hotel rooms",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },
        {
            id: 8,
            roomName: " Presidential suites",
            roomData: "  lorem ipsu simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It",


        },

    ]
    return (

        <div className='container mt-5' id="test">
            <div className='container'>
                {roomData.map((item, index) =>

                (index % 2 === 0 ? <>
                    <div key={index} className='row mt-2  '>

                        

                    <div className='col-lg-6 col-xxl-6  col-md-6 col-sm-12' >
                        
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

                                    </div>
                                    <div className="carousel-inner my-carousel">
                                        <div className="carousel-item active">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1667472398/istockphoto-1297440376-170667a_kbfsma.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1667472410/images_wf9ozk.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div className='col-lg-6 col-xxl-6     col-md-6 col-sm-12 p-5'>
                                <div className=''>
                                    <h3 className='' onClick={() => setBookingModel({ modal: true, details: item })}>
                                        {item.roomName}
                                    </h3>
                                    <p>
                                        {item.roomData}
                                    </p>
                                </div>
                            </div>
                    </div>
                </> :
                    <div>
                        <div key={index} className='row  mt-5' >
                            <div data-aos="fade-right" className='col-lg-6 col-xxl-6     col-md-6 col-sm-12 p-5'>
                                <div className=''>
                                    <h3 className='' onClick={() => setBookingModel({ modal: true, details: item })}>
                                        {item.roomName}
                                    </h3>
                                    <p>
                                        {item.roomData}
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-xxl-6  col-md-6 col-sm-12' >
                                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

                                    </div>
                                    <div className="carousel-inner my-carousel">
                                        <div className="carousel-item active">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1667472398/istockphoto-1297440376-170667a_kbfsma.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1667472410/images_wf9ozk.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663151511/mac_gj3ybb.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                )
                )}
            </div>


            {bookingModel ? <BookingModal
                setBookingModel={(doc) => setBookingModel(doc)}
                show={bookingModel.modal}
                onHide={() =>
                    setBookingModel({ modal: false, modalType: "", type: "", details: "" })
                }
                params={bookingModel}

            /> : null}
        </div>


    )
}

export default RoomTypes