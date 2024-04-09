imgBox = document.querySelector("#imgBox");
qrImage = document.querySelector("#qrImage");
qrText = document.querySelector("#qrText");

// let btn = document.querySelector("#btn")
// body = document.querySelector("body");
function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", generateQR);

qrText.addEventListener("click", () => {
    qrText.classList.add("place");
  if (qrText.value.length != 0) {
    qrText.classList.add("place");
    qrText.classList.add("placeAfter");
  }
  if (qrText.value.length = 0) {
    qrText.classList.remove("place");
    qrText.classList.remove("placeAfter");
  }
});

// body.
