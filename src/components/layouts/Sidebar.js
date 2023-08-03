import React from 'react';

import { AiOutlineHome, AiOutlineCamera, AiOutlinePlusSquare, AiOutlineWifi, AiOutlineFileText, AiOutlineDollarCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdOutlineKey } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import { IoHelpBuoyOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div style={{ width: '15%', height: 'calc(100vh - 60px)', backgroundColor: 'white' }}>
            {/* First part */}
            <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/dashboard" style={{ color: '#213555', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <AiOutlineHome style={{ marginRight: '10px' }} />
                        Dashboard
                    </a>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/instances" style={{ color: '#213555', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <AiOutlinePlusSquare style={{ marginRight: '10px' }} />
                        Instances
                    </a>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/snapshots" style={{ color: '#213555', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <AiOutlineCamera style={{ marginRight: '10px' }} />
                        Snapshots
                    </a>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/sshkeys" style={{ color: '#213555', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <MdOutlineKey style={{ marginRight: '10px' }} />
                        SSH Keys
                    </a>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/volume" style={{ color: '#D8D9DA', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <FiHardDrive style={{ marginRight: '10px' }} />
                        Volume
                    </a>
                </div>
            </div>
            {/* Horizontal line */}
            <hr style={{ margin: '10px 0' }} />
            {/* Second part */}
            <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/networking" style={{ color: '#213555', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <AiOutlineWifi style={{ marginRight: '10px' }} />
                        Networking
                    </a>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/report" style={{ color: '#213555', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <AiOutlineFileText style={{ marginRight: '10px' }} />
                        Report
                    </a>
                </div>
            </div>
            {/* Third part */}
            <div style={{ padding: '20px' }}>
                <button className="sidebar-button" style={{ marginBottom: '15px', width: '100%', height: '40px', backgroundColor: 'white', color: '#213555', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', borderRadius: '5px' }}>
                    <AiOutlineDollarCircle style={{ marginRight: '10px' }} />
                    Billing
                </button>
                <button className="sidebar-button" style={{ marginBottom: '15px', width: '100%', height: '40px', backgroundColor: 'white', color: '#213555', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', borderRadius: '5px' }}>
                    <AiOutlineQuestionCircle style={{ marginRight: '10px' }} />
                    Support
                </button>
                <button className="sidebar-button" style={{ marginBottom: '15px', width: '100%', height: '40px', backgroundColor: 'white', color: '#213555', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', borderRadius: '5px' }}>
                    <IoHelpBuoyOutline style={{ marginRight: '10px' }} />
                    Help
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
