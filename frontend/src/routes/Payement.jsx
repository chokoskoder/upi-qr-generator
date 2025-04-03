//payment route , now i have no idea how but learning how to implement a webhook here to confirm 
//payments will be i guess the most real world shi i will ever do 
import { useRecoilValue } from "recoil";
import { upiLinkSelector } from "../atoms.js";
import QRCode from "react-qr-code";

function QRCodeDisplay() {
    const upiLink = useRecoilValue(upiLinkSelector);
  
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <h2 className="text-lg font-semibold">Scan to Pay</h2>
        {upiLink ? (
          <QRCode value={upiLink} size={200} />
        ) : (
          <p>Select an item to generate the QR code.</p>
        )}
      </div>
    );
  }
  
  export default QRCodeDisplay;
