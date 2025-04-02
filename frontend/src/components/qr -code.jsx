//this will handle the generation of the qr code
//now we will fetch qr link here and then generate the qr code and show it 

import axios from 'axios';
import {QrCode} from 'qrcode.react';

export default async  function QrCode(){
   const response = await axios.get("http://localhost:5000/generate-qr/:id")
    //and the get the 
}

//so maybe i actually need to sit down and think about this now because i will need to apply the react knowledge i have acquired so far 