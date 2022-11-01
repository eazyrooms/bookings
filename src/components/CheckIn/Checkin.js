import React, { useState } from 'react'







export default function Checkin() {




    const [checkin, setCheckin] = useState();
    const [checkout, setCheckout] = useState();
    const [children, setChildren] = useState()
    const [adultsBooking, setAdultsBooking] = useState()


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

    function InitialState() {

        setCheckin()
        setCheckout()

        setChildren()
        setAdultsBooking()

    }
    return (
        <>


            <div className=" ">
                <div className='row d-flex justify-content-between p-3'>
                    <div className='col-12'>
                        <div className='row d-flex align-items-center'>
                            <div className="col-lg-5 col-md-5 col-sm-12" >
                                <small>Check In</small>
                                <input className='form-control w-100' style={{ fontSize: '0.8rem' }} value={checkin} type='date' min={disablePastDate()} onChange={e => setCheckin(e.target.value)} />
                            </div>
                            <div className="col-lg-5  col-md-5 col-sm-12">
                                <small>Check Out</small>
                                <input className="form-control w-100" type="date" style={{ fontSize: '0.8rem' }} onChange={e => setCheckout(e.target.value)} min={disablePastDateFromCheckin(checkin)} value={checkout}  />
                            </div>
                            <div className="col-lg-2 col-sm-0 col-md-0 col-md-5 col-sm-12">
                                <small>Guests</small>
                                <input onChange={e => setCheckout(e.target.value)} className="form-control w-100" type="number" min="0" />
                            </div>
                        </div>




                    </div>
                    <div className='col-2'>

                    </div>

                </div>


            </div>
        </>
    )
}
