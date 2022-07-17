import React from 'react'
import './banner.css';


const Banner = ({ title }) => {
    return (
        <div className='Wrapper'>
            <div className='title'>
                {title}
            </div>
            <div>
                <a href='https://www.cisco.com/c/en_in/index.html'>
                    <img src="https://cyberity.net/wp-content/uploads/2021/03/cisco-banner.jpg" className='CiscoLogo' alt='cisco' />
                </a>
            </div>
        </div>
    )
}
export default Banner

