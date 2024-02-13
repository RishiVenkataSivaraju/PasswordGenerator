
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const digits = "012345678901123456789";
const specialSymbols = "!@#$%&*?+=";
const characters = uppercase + lowercase + digits + specialSymbols;
const passwordGenerator = function (length) {
  let password = "";
  const charlength = characters.length;
  for (i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * charlength));
  }
  return password;
};
const inputt =document.querySelector("#input")
const div = document.querySelector(".divv");
const input = document.querySelector(".length");
const log = document.getElementById("values");
const button = document.querySelector(".btn");
const copyText = document.getElementById("myInput");
inputt.addEventListener("submit", function (e) {
  e.preventDefault()
  const lenght = parseInt(document.querySelector(".length").value);
  console.log(lenght);
  let passwordos = `${passwordGenerator(lenght)}`;
  copyText.innerHTML = passwordos;
});
function myFunction() {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
