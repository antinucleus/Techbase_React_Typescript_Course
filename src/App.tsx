import { useState } from 'react';
import './App.css';

// Don't use enums but use union types istead

type CheckoutStep = "Details" | "Shipping" | "Payment"

// enum CheckoutStep {
//   Details = "Details",
//   Shipping = "Shipping",
//   Payment = "Payment"
// }

function App() {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details")
  // const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(CheckoutStep.Details)

  return (
    <>
      {/* {checkoutStep === CheckoutStep.Details && */}
      {checkoutStep === "Details" &&
        <>
          <h1>Details</h1>
          <button type='button' onClick={() => setCheckoutStep("Shipping")} >Next</button>
          {/* <button type='button' onClick={() => setCheckoutStep(CheckoutStep.Shipping)} >Next</button> */}

        </>
      }

      {/* {checkoutStep === CheckoutStep.Shipping && */}
      {checkoutStep === "Shipping" &&
        <>
          <h1>Shipping</h1>
          <button type='button' onClick={() => setCheckoutStep("Payment")} >Next </button>
          {/* <button type='button' onClick={() => setCheckoutStep(CheckoutStep.Payment)} >Next </button> */}
        </>
      }

      {/* {checkoutStep === CheckoutStep.Payment && */}
      {checkoutStep === "Payment" &&
        <>
          <h1>Payment</h1>
        </>
      }
    </>
  );
}

export default App;
