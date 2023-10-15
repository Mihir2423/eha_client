import Image from 'next/image';
import React from 'react';
import SuccessImage from '../../assets/svg/Success.svg';
import { nova_thai } from '@/utilities/font';
import Router from 'next/router';

export default function OrderSuccess() {
  return (
    <div className={`flex justify-center md:flex ${nova_thai.className}`}>
      <div className="text-center">
        <Image src={SuccessImage} alt="Order Success" className=' object-cover' width={"645px"} height={"645px"}/>
    </div>
    <div className='m-8 mt-[120px] p-2'>
        <div className="text-green-600 text-4xl font-extrabold mt-6 mr-3 -pl-2 ">Order Placed Successfully!</div>
        <div className="mt-6">
          <div className="text-cyan-700 text-3xl font-bold">Thank you for shopping!</div>

          <div className="mt-4 text-neutral-600 text-base font-normal">
            Your order is placed successfully, and a confirmation is sent to your Mail Id.
          </div>
          <div className="mt-2 text-black text-base font-normal">Order Id: 0000000000000000</div>
        </div>

        <button className="mt-8 px-4 py-2 bg-red-600 rounded-lg text-white text-2xl font-normal" onClick={()=>{Router.push("/")}}>
          Continue Shopping
        </button>
      </div>
      </div>
  );
}
