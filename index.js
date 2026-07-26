let firstName = "Aeron";
let lastName = "Austria";
const imgSrc = "OIP.webp";

document.getElementById("content").innerHTML = `
<h1>My Profile</h1>
<p>My name is ${firstName} ${lastName} </p>
<img src="./${imgSrc}" alt="Profile Picture Goes Here" />
`;