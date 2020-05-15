

function encrypt() {
   var text = "";
   var encryptedText ="";
   var asciiArray = [];
   text = document.getElementById("encryption").value;

   for (let i = 0; i < text.length; i++) {
       asciiArray.push(text.charCodeAt(i));  
   }
   var shiftNumber = document.getElementById("shift").value;
   for (let i = 0; i < asciiArray.length; i++){
       asciiArray[i] = Number(asciiArray[i]) + Number(shiftNumber);
   }
   for (let i = 0; i < asciiArray.length; i++){
        encryptedText = encryptedText + String.fromCharCode(asciiArray[i]);
   } 
   document.getElementById("decryption").value = encryptedText;
}
function decrypt() {
   var text = "";
   var decryptedText ="";
   var asciiArray = [];
   text = document.getElementById("decryption").value;
   for (let i = 0; i < text.length; i++) {
        asciiArray.push(text.charCodeAt(i));  
   }
   var shiftNumber = document.getElementById("shift").value;
   for (let i = 0; i < asciiArray.length; i++){
        asciiArray[i] = Number(asciiArray[i]) - Number(shiftNumber);
   }
   for (let i = 0; i < asciiArray.length; i++){
        decryptedText = decryptedText + String.fromCharCode(asciiArray[i]);
   } 
   document.getElementById("encryption").value = decryptedText;
}
