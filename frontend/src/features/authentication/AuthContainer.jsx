import { useState } from "react";
import SendOTPForm from "../authentication/SendOTPForm";
import CheckOTPForm from "../authentication/CheckOTPForm";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber}/>;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
