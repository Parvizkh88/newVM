import React, { useState } from 'react';
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

    const [currentStep, setCurrentStep] = useState(0);

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
        <div style={{ backgroundColor: '#ACCEF7', width: '85%', padding: '20px', height: 'calc(100vh - 60px)' }}>
            {/* Pagination */}
            <div style={{ display: 'flex', marginBottom: '30px', justifyContent: 'space-between', alignItems: 'center' }}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => setCurrentStep(index)}>
                            <FaCircle size={15} color={index === currentStep ? 'yellow' : 'blue'} />
                            <div style={{ fontSize: '14px', marginTop: '10px', color: index === currentStep ? 'yellow' : 'blue' }}>{step}</div>
                        </div>
                        {index < steps.length - 1 && <div style={{ flexGrow: '1', borderBottom: '1px solid blue', height: '1px' }} />}
                    </React.Fragment>
                ))}
            </div>
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
        </div>
    );
};

export default Main;
