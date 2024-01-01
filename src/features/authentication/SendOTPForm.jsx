import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOtpHandler = (e)=>{
    e.preventDefault();
    
  }

  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
