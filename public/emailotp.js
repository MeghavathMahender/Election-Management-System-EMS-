function sendOTP() {
   const email = document.getElementById('email');
   const otpverify = document.getElementsByClassName('otpverify')[0];

   let otp_val = Math.floor(Math.random() * 10000);
   console.log(otp_val);
   let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
   Email.send({
   SecureToken : "bee42de2-71e7-4221-b865-9afe8ad36348",
   To : email.value,
   From : "chouhan.anjali21b@iiitg.ac.in",
   Subject : "Email OTP using JavaScript",
   Body : emailbody,
})
}
