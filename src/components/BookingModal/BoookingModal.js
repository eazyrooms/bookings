import React, { useState, useRef, useEffect } from 'react';

import { Modal } from "react-bootstrap";
import historyObject from '../HistoryRouterObject';
import './BookingModal.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { toast } from "react-toastify"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import dayjs from 'dayjs';




export const BookingModal = (props) => {
    console.log(props)
    // const { roomName } = props.params.details

    const [open, setOpen] = React.useState(false);

    const [step, setStep] = useState(0)
    const [countryCode, setCountryCode] = useState()
    const [phone, setPhone] = useState();
    const [valuecheck, setValuecheck] = useState('female');
    const [count, setCount] = useState(0)
    const [childcount, setChildCount] = useState(0)
    const [validated, setValidated] = useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const [checkin, setCheckin] = useState(null);
    const [checkout, setCheckout] = useState(null);
    const [children, setChildren] = useState()
    const [adultsBooking, setAdultsBooking] = useState()




    // Guest Counter
    const onIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };
    const onDecrement = () => {
        if (count <= 0) {
            setCount(0)
        } else {

            setCount(count => count - 1);
        }
    };
    const onChildIncrement = () => {
        setChildCount(prevChildCount => prevChildCount + 1);
    };
    const onChildDecrement = () => {

        if (childcount <= 0) {
            setChildCount(0)
        } else {

            setChildCount(childcount => childcount - 1);
        }
    };



    // react poper

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    // date checkin checkout

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const disablePastDateFromCheckin = (value) => {
        const today = new Date(value);
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        // setStep(step + 1);
    };
    // console.log(handleSubmit(),"button")

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // date checkin9 checkout


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
        },
        {
            type: "Yoga"
        },
        {
            type: "Spa"
        },
        {
            type: "Gym"
        },
    ]

    function dateValidate() {
        // if (checkin && checkout && count) {
        //     setStep(step + 1);

        // } else {
        //     setStep(0);
        //     toast.error("Please select all the details", {
        //         position: "bottom-left"
        //     })
            

        // }
        setStep(step + 1);

    }

    function iconFun() {
        props.onHide()
        historyObject.push('/thankyou')
    }

    switch (step) {
        case 1: {
            return (
                <>
                    <Modal {...props} backdrop={true} tabindex="-1" className="custom-delete-modal "
                        keyboard={false} contentClassName="modal-height" dialogClassName="my-modal " scrollable={true}>
                        <Modal.Header className="border-0 px-4 bg-warning bg-transparent close-modal" >
                            <h4 className='fw-bold pt-3 text-center'>Personal Details</h4>
                        </Modal.Header>
                        <hr className='my-rule' />
                        <Modal.Body className=" model-content example" bsPrefix="p-0 " >
                            <div className='container'>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3  p-3">
                                        <Form.Group as={Col} md="12" sm="12" controlId="validationCustom01">
                                            <Form.Label className='my-form-label'>Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"

                                            />
                                        </Form.Group>
                                        <Form.Group className='mt-4' as={Col} md="12" sm="12" controlId="validationCustomUsername">
                                            <Form.Label className='my-form-label'>Email</Form.Label>
                                            <InputGroup hasValidation>
                                                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                                <Form.Control
                                                    type="text"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className='mt-4' as={Col} md="12" sm="12" controlId="validationCustom02">
                                            <Form.Label className='my-form-label'>Gender</Form.Label>
                                            <InputGroup hasValidation >
                                                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}

                                                <Form.Select aria-label="Default select example">
                                                    <option>
                                                        Select Gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                    <option value="3">Prefer not to say</option>
                                                </Form.Select>
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group as={Col} md="12" sm="12" className='mt-4' controlId="validationCustom03">
                                            <Form.Label className='my-form-label'>Location</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"

                                            />
                                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>

                                        <Form.Group as={Col} md="12" sm="12" className='mt-4' controlId="validationCustom02">
                                            <Form.Label>Phone</Form.Label>
                                            <PhoneInput
                                                    className="forPhone "
                                                    inputClass='w-100'
                                                    country={'in'}
                                                    onChange={(countryCode,phone)=>{setPhone(phone); setCountryCode(countryCode)}}
                                                />
                                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>

                                        <Form.Group as={Col} className='mt-4' md="12" sm="12" controlId="validationCustom01">
                                            <Form.Label className='my-form-label'>Zipcode</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"

                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className='mt-4' md="12" sm="12" controlId="validationCustom01">
                                            <Form.Label className='my-form-label'>Address</Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"

                                            />
                                        </Form.Group>
                                    </Row>

                                </Form>
                            </div>
                        </Modal.Body>
                        <div className="rounded fixed bottom  custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                            <div className="more d-flex  ">
                                <button type="button" className="btn btn-warning " onClick={() => setStep(step - 1)}>Back</button>
                            </div>
                            <Button type="submit " className='bg-dark' onClick={() => setStep(step + 1)}>Next</Button>
                        </div>

                    </Modal>
                </>
            )
        }

        case 2: {
            return (
                <>
                    <Modal {...props} backdrop={true} tabindex="-1" className="custom-delete-modal "
                        keyboard={false} contentClassName="modal-height" dialogClassName="my-modal " scrollable={true}>
                        <h4 className='fw-bold p-3 mt-3'>Summary</h4>
                        <Modal.Body className=" model-content example" bsPrefix="p-0 " >
                            <div className=''>
                                <hr />
                                <div className='px-5 '>
                                    <div className=''>
                                        <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1667472428/istockphoto-843823656-612x612_vximnj.jpg" alt='img' className=" my-img mb-4 rounded" />
                                    </div>


                                    {/* for empty space below div */}
                                    {/* <div className='' style={{ height: "260px" }}></div> */}
                                </div>
                                <div className='pt-3 px-5'>
                                    <p className='mb-0'>Roomtype:<span className='px-2'> Premier Suite Room</span></p>
                                    <p className='mb-0 pt-3'>Checkin:<span className='px-2'> 12-11-2022</span></p>
                                    <p className='mb-0 pt-3'>Checkout:<span className='px-2'> 14-11-2022</span></p>
                                    <p className='mb-0 pt-3'>Total Count:<span className='px-2'> 3</span></p>
                                    <p className='mb-0 pt-3'>Amount:<span className='px-2'>$ 250</span></p>
                                    <p className='mb-0 pt-3'>Discount:<span className='px-2'>$ 50</span></p>
                                    <p className='mb-0 pt-3'>Total:<span className='px-2'>$ 200</span></p>
                                </div>
                            </div>
                        </Modal.Body>
                        <div className="rounded fixed-botoom  custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                            <div className="more d-flex  ">
                                <button type="button" className="btn btn-warning " onClick={() => setStep(step - 1)}>Back</button>
                            </div>
                            {

                            }
                            <button type="button" className="btn btn-dark " onClick={() => setStep(step + 1)}>Confirm</button>

                        </div>
                    </Modal>
                </>
            )
        }
        case 3: {
            return (
                <>
                    <Modal {...props} backdrop={true} tabindex="-1" className="custom-delete-modal "
                        keyboard={false} contentClassName="modal-height" dialogClassName="my-modal " scrollable={true}>
                        <h4 className='fw-bold p-3 mt-3'>Choose Payment</h4>
                        <Modal.Body className=" model-content example" bsPrefix="p-0 " >
                            <div className=''>
                                <hr />
                                <div className='px-5 '>
                                    <FormControl>
                                        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="female" sx={{ pt: 5 }} control={<Radio />} label="Pay Online" />
                                            <FormControlLabel value="male" sx={{ pt: 5 }} control={<Radio />} label="Pay at Reception" />
                                            <FormControlLabel value="checout" sx={{ pt: 5 }} control={<Radio color='warning' className='Button-my' />} label="Pay at checkout" />
                                        </RadioGroup>
                                    </FormControl>

                                    {/* for empty space below div */}
                                    <div className='' style={{ height: "260px" }}></div>
                                </div>
                            </div>
                        </Modal.Body>
                        <div className="rounded fixed-botoom  custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                            <div className="more d-flex  ">
                                <button type="button" className="btn btn-warning " onClick={() => setStep(step - 1)}>Edit</button>
                            </div>
                            {

                            }
                            <button type="button" className="btn btn-dark " onClick={() => iconFun()}> Confirm</button>

                        </div>
                    </Modal>
                </>
            )
        }
        default:
            return (
                <>
                    <Modal {...props} backdrop={true} tabindex="-1" className="custom-delete-modal "
                        keyboard={false} contentClassName="modal-height" dialogClassName="my-modal " scrollable={true}>
                        <p className="back_arrow" onClick={() => iconFun()}><KeyboardBackspaceIcon /></p>
                        <Modal.Body className=" model-content example" bsPrefix="p-0 " >
                            <div className=''>
                                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1667472428/istockphoto-843823656-612x612_vximnj.jpg" alt='img' className=" my-img mb-4" />
                            </div>
                            <h4 className='px-2 mx-2'>Premier Suite Room </h4>

                            {/* <h4 className='px-2 mx-2'>{props.roomName} </h4> */}
                            <div className='row d-flex justify-content-between p-3 mt-4'>
                                <div className="col-lg-4 col-md-4 col-sm-12 " >
                                    <small className='my-input-font'>Check In </small>
                                    <input className='form-control w-100 mt-2'
                                        value={checkin}
                                        type='date'
                                        onChange={(e) => setCheckin(e.target.value)}
                                        min={disablePastDate()}


                                    />
                                </div>
                                <div className="col-lg-4  col-md-4 col-sm-12">
                                    <small className='my-input-font'>Check Out</small>
                                    <input className="form-control w-100 mt-2" type="date" value={checkout}
                                        onChange={(e) => setCheckout(e.target.value)}
                                        min={disablePastDateFromCheckin(checkin)}
                                    />
                                </div>
                                <div className="col-lg-4 col-sm-0 col-md-0 col-md-5 col-sm-12">

                                    <small className='my-input-font'>Guests</small>

                                    <div className='ps-2 mt-2'>
                                        <PersonIcon sx={{ fontSize: 30, mt: 0, color: '#b8b8b8' }} />
                                        <span>{count + childcount}</span>

                                        <BorderColorIcon onClick={handleClick} sx={{ fontSize: 25, mt: 0, ml: 3, color: '#b8b8b8' }} />
                                    </div>
                                    <div ref={ref}>
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom"
                                            container={ref}
                                            containerPadding={20}
                                            className="w-50"
                                            style={{ marginTop: "10px" }}
                                        >
                                            <Popover id="popover-contained">
                                                <Popover.Body className="my-pop-over ">
                                                    <div className='w-100% d-flex justify-content-between'>
                                                        <h6 className='pt-2'>  Adults :</h6>
                                                        <div>
                                                            <Button className='bg-dark border-0' onClick={() => onDecrement()}>-</Button><span style={{ padding: "13px" }} className='fw-bold'>{count}</span><Button className='bg-warning text-dark border-0' onClick={() => onIncrement()}>+</Button>
                                                        </div>
                                                    </div>
                                                    <div className='w-100% pt-5 d-flex justify-content-between'>
                                                        <h6 className='pt-2'>   Child :</h6>
                                                        <div>
                                                            <Button className='bg-dark border-0' onClick={() => onChildDecrement()}>-</Button><span style={{ padding: "13px" }} className=' fw-bold'>{childcount}</span><Button className='bg-warning text-dark border-0' onClick={() => onChildIncrement()}>+</Button>
                                                        </div>
                                                    </div>
                                                    <div className='pt-3  pb-2 w-100'>
                                                        <div class="d-grid gap-2 pt-3">
                                                            <button className="btn btn-primary bg-warning text-dark border-0 " type="button" onClick={handleClick} >Apply</button>
                                                        </div>

                                                    </div>

                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </div>

                                </div>

                            </div>
                            <div className='p-3'>
                                <div className='p-2   my-bg d-flex justify-content-between'>
                                    <div className='p-3 '>
                                        <h5 className='fw-bold'>Description</h5>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i</li>
                                    </div>
                                    <div className='p-4'>
                                        <p className='fw-bold'>₹5000</p>
                                        <a className='text-dark'>View Details</a>
                                    </div>
                                </div>
                            </div>
                            <hr />
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
                        </Modal.Body>
                        <div className="rounded   custom-btn-warning d-flex align-items-center justify-content-between p-3 text-dark mb-3 mb-md-0 md-lg-0">
                            <div className="more d-flex  ">
                                <button className=" btn btn-warning ">$ 300 </button> <br />
                                {/* <p className='px-3 mb-0 bg-warning p-2 bordered-2'>
                                    <span className='' style={{ fontWeight: "bolder" }} >$ 300</span>
                                </p> */}

                            </div>

                            <button type="button" className="btn btn-dark " onClick={() => dateValidate()}>Book Now</button>

                        </div>

                    </Modal>



                </>
            )

    }

};