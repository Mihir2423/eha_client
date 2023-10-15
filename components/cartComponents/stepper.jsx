import React, { useState } from 'react';
import { Stepper } from 'react-form-stepper';
import Cartdetails from './cartdetails';
import AddressForm from './addressForm';
import StepWizard from "react-step-wizard";
import { nova } from '../../utilities/font';
import OrderSuccess from './orderSuccess';

const Confirmation = () => <h1>Confirmation</h1>;

const steps = [
  {
    label: 'CART',
  },
  {
    label: 'ADDRESS',
  },
  {
    label: 'PAYMENT',
  },
];

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  function getSectionComponent() {
    if (activeStep === 1) {
      return <AddressForm nextStep={nextStep} prevStep={prevStep} />;
    } else if (activeStep === 0) {
      return <Cartdetails nextStep={nextStep} prevStep={prevStep} />;
    } else if (activeStep === 2) {
      return <OrderSuccess />;
    } else {
      return null;
    }
  }

  return (
    <div className='pt-6'>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        styleConfig={{
          activeBgColor: '#ed1d24',
          activeTextColor: '#ffffff',
          completedBgColor: '#4caf50',
          completedTextColor: '#ffffff',
          inactiveBgColor: '#ed1d24',
          inactiveTextColor: '#ffffff',
          size: '2em',
          circleFontSize: '1rem',
          labelFontSize: '0.875rem',
          borderRadius: '50%',
        }}
        className={`text-black ${nova.className}`}
      />

      <div style={{ padding: '1px', color: 'black' }} className='md:relative justify-center items-center md:items-none md:space-none my-2 '>
        {getSectionComponent()}
      </div>
    </div>
  );
}

export default StepperForm;
