import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';



const Main = () => {
    const steps = [
        'Instance Location',
        'Instance Type',
        'Instance Plan',
        'Authentication',
        'Finalize',
    ];

// const stepperHandle=()=>{
//     switch (currentStep) {
//         case 0:
//             axios("https://855b3ea4-1afc-42b3-9811-a8d3d4430561.mock.pstmn.io/locations")
//                 .then((res) => setDataList(res.data.locations))
//                 .catch((error) => console.log(error))
//             return 
//         case 1:
//             axios("https://855b3ea4-1afc-42b3-9811-a8d3d4430561.mock.pstmn.io/types")
//                 .then((res) => setDataList(res.data.types))
//                 .catch((error) => console.log(error))
//             break;

//         default:
//             break;
//     }
// }

    const [currentStep, setCurrentStep] = useState(0);
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
       
    }, [currentStep])




    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            {/* Pagination */}
            <section style={{ display: 'flex', marginBottom: '30px', justifyContent: 'space-between', alignItems: 'center' }}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => setCurrentStep(index)}>
                            <FaCircle size={15} color={index === currentStep ? 'yellow' : 'blue'} />
                            <div style={{ fontSize: '14px', marginTop: '10px', color: index === currentStep ? 'yellow' : 'blue' }}>{step}</div>
                        </div>
                        {index < steps.length - 1 && <div style={{ flexGrow: '1', borderBottom: '1px solid blue', height: '1px' }} />}
                    </React.Fragment>
                ))}
            </section>
            {/* Content */}
            <h3>{steps[currentStep]}</h3>


            {/* Buttons */}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                {currentStep > 0 ? (
                    <Button className="Main-button" onClick={handlePrev}>
                        Prev Step
                    </Button>
                ) : (
                    <div style={{ visibility: 'hidden' }}>
                        <Button className="Main-button">
                            Prev Step
                        </Button>
                    </div>
                )}
                {currentStep < steps.length - 1 ? (
                    <Button className="Main-button" onClick={handleNext}>
                        Next Step
                    </Button>
                ) : (
                    <div style={{ visibility: 'hidden' }}>
                        <Button className="Main-button">
                            Next Step
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Main;
