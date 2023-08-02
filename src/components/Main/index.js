import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';
import TypeCard from '../Types/TypeCard';
import Stepper from './Stepper';



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
        <>
            {/* Pagination */}
            <section style={{ display: 'flex', marginBottom: '30px', justifyContent: 'space-between', alignItems: 'center' }}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => setCurrentStep(index)}>


                            <FaCircle
                                size={25}
                                style={{
                                    border: index === currentStep ? '5px solid yellow' : '5px solid #bcdfeb',
                                    backgroundColor: index === currentStep ? 'white' : '#00FFCA',
                                    padding: '5px',
                                    borderRadius: '50%',

                                }}
                                color={index === currentStep ? 'white' : '#00FFCA'}
                            />


                            <div style={{ fontSize: '14px', marginTop: '10px', color: index === currentStep ? 'black' : 'gray', fontWeight: 'bold' }}>{step}</div>
                        </div>
                        {index < steps.length - 1 && <div style={{ flexGrow: '1', borderBottom: '1px solid blue', height: '1px' }} />}
                    </React.Fragment>
                ))}
            </section>
            {/* Content */}
            <h3>{steps[currentStep]}</h3>
            <Stepper currentStep={currentStep} />

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
