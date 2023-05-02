const pickedColor = document.querySelector(".picked-color");
const notSupported = document.querySelector(".not-supported");
const button = document.querySelector(".pick-color");

const pickcolor = async () => {
  if (!window.EyeDropper) {
    notSupported.innerText =
      "Your browser does not support the EyeDropper API 😔";
    return;
  } else {
    notSupported.innerText = "I am supported by EyeDropper";
    const eyeDropper = new window.EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    pickedColor.innerText = sRGBHex;
    console.log(sRGBHex);
  }
};
button.addEventListener("click", pickcolor);
