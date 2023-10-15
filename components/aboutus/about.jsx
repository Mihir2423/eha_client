import Image from 'next/image'
import React from 'react'
import ContactImage from '../../assets/png/contact-image.png'
import AboutImg from '../../assets/svg/About.svg'
import { nova_thai } from '@/utilities/font';

export default function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center overflow-y-hidden md:px-2 px-4">
            {/* Your SVG background */}
            <span className='md:absolute md:-bottom-[68px] md:right-0 md:z-5 md:block hidden'>
                <svg width="600" height="271" viewBox="0 0 1440 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1772.36 125.392C1788.34 195.105 1648.37 246.878 1104.37 371.574C560.374 496.271 -4.02025 369.772 -20 300.06C382.654 261.293 479.5 249.5 1012.5 73C1628.98 -85.8742 1756.38 55.6789 1772.36 125.392Z" fill="#E1E1E1"/>
                </svg>
            </span>
            {/* Image (hidden on mobile) */}
            
            {/* Text content */}
            <div className='mt-8 text-center md:text-left md:w-[795px]'>
            <div className='md:mt-8 md:w-[150px] md:-ml-4 md:text-none flex items-center justify-center'>
                <Image src={AboutImg} alt="about image" width={150} height={280} className='-ml-4 mt-5 mb-2' />
            </div>
                <h1 className={`${nova_thai.className} font-black text-3xl mb-4`}>EHA SHIVAM 
                <br/>
                TECHNOLOGIES</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui vivamus arcu. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Sem integer vitae justo eget magna fermentum iaculis. Est sit amet facilisis magna etiam tempor orci. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Non arcu risus quis varius quam quisque id. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Et odio pellentesque diam volutpat commodo sed. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Varius duis at consectetur lorem donec. In nulla posuere sollicitudin aliquam. Mollis nunc sed id semper risus in hendrerit gravida. Metus vulputate eu scelerisque felis imperdiet. Egestas congue quisque egestas diam in arcu cursus euismod quis. Tellus in hac habitasse platea dictumst vestibulum. In nisl nisi scelerisque eu ultrices. Turpis egestas sed tempus urna et pharetra. Leo a diam sollicitudin tempor. Lobortis elementum nibh tellus molestie nunc non blandit. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Blandit aliquam etiam erat velit scelerisque in dictum non. Sapien eget mi proin sed libero enim sed faucibus. Convallis convallis tellus id interdum velit. Congue eu consequat ac felis donec et odio pellentesque. Egestas dui id ornare arcu odio ut sem. Felis bibendum ut tristique et egestas quis ipsum. Purus in massa tempor nec feugiat nisl pretium fusce id. Convallis convallis tellus id interdum. Consequat semper viverra nam libero. Ultrices dui sapien eget mi proin sed libero enim sed.
                    </p>
                    </div>
                    {/* Contact Image (hidden on mobile) */}
                    <div className="md:image">
                        <Image src={ContactImage} alt="contactus" width={500} height={680} className='object-fill' />
                    </div>
                </div>
    );
}
