function cipher (text, shift){
  const encrypt = text.split("").map(char=>{
    const charCode = char.charCodeAt() - 65;
    const encryptedChar = String.fromCharCode((charCode+shift)%65 + 65);
    return encryptedChar;
  }).join("")
  return encrypt;
}

module.exports = {cipher}