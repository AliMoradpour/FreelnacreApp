import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <form className="space-y-8">
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
