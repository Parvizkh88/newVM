import React from 'react';
import { FiBell } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../../assets/images/AbrnocLogo.JPG"

const Navbar = () => {
    return (
        <div style={{ width: '100%', height: '60px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '15%', paddingLeft: '10px' }}>
                <img src={logo} alt="logo" />
            </div>
            <div style={{ width: '85%', display: 'flex', justifyContent: 'flex-end', paddingRight: '10px' }}>
                <FiBell size={24} />
                <img src="skype.jpg" alt="profile" style={{ borderRadius: '50%', height: '40px', margin: '0 10px' }} />
                <span>User</span>
                <AiOutlineDown size={24} style={{ marginLeft: '10px' }} />
            </div>
        </div >
    );
};

export default Navbar;
