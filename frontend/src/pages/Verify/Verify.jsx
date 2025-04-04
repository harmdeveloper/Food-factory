/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchparams, setSearchParams] = useSearchParams();
    const success = searchparams.get("success")
    const orderId = searchparams.get("orderId")
    //get backend url from context api
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        //call api
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate("/myorders");
        }
        else {
            navigate("/")
        }
    }


    useEffect(()=>{
        verifyPayment();
    },[])


    return (
        <div className='verify'>
            <div className="spinner1"></div>
            <div className="spinner">
                <div className="piggy-wrapper">
                    <div className="piggy-wrap">
                        <div className="piggy">
                            <div className="nose"></div>
                            <div className="mouth"></div>
                            <div className="ear"></div>
                            <div className="tail">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="eye"></div>
                            <div className="hole"></div>
                        </div>
                    </div>
                    <div className="coin-wrap">
                        <div className="coin">$</div>
                    </div>
                    <div className="legs"></div>
                    <div className="legs back"></div>
                </div>
            </div>
        </div>
    )
}

export default Verify
