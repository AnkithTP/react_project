import React from 'react'
import './Verify.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import { useContext,useEffect } from 'react';
import{StoreContext} from '../../Context/StoreContext'
import axios from 'axios';

const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get('success');
    const orderId=searchParams.get('order_Id');

    const{url}=useContext(StoreContext)

    const navigate=useNavigate()

    const VerifyPayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success)
            navigate("/myorders")
        else
            navigate("/")
    }
    useEffect(()=>{
        VerifyPayment()
    },[])
  return (
    <div className='verify'>
        <div className='spinner'>
            
        </div>
    </div>
  )
}

export default Verify