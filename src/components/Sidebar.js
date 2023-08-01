import React from 'react';
import { AiOutlineHome, AiOutlineCloud, AiOutlineCamera, AiOutlineKey, AiOutlineHdd, AiOutlineWifi, AiOutlineFileText, AiOutlineDollarCircle, AiOutlineCustomerService, AiOutlineQuestionCircle } from 'react-icons/ai';

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
                        <AiOutlineCloud style={{ marginRight: '10px' }} />
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
                        <AiOutlineKey style={{ marginRight: '10px' }} />
                        SSH Keys
                    </a>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <a href="/volume" style={{ color: '#D8D9DA', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }}>
                        <AiOutlineHdd style={{ marginRight: '10px' }} />
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
                <button style={{ marginBottom: '15px', width: '100%', height: '40px', backgroundColor: 'white', color: '#213555', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '5px' }}>
                    <AiOutlineDollarCircle style={{ marginRight: '10px' }} />
                    Billing
                </button>
                <button style={{ marginBottom: '15px', width: '100%', height: '40px', backgroundColor: 'white', color: '#213555', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '5px' }}>
                    <AiOutlineCustomerService style={{ marginRight: '10px' }} />
                    Support
                </button>
                <button style={{ marginBottom: '15px', width: '100%', height: '40px', backgroundColor: 'white', color: '#213555', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '5px' }}>
                    <AiOutlineQuestionCircle style={{ marginRight: '10px' }} />
                    Help
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
