function setModalEntrar() {
  // Get the modal
  var modal = document.getElementById("modalEntrar");

  // Get the button that opens the modal
  var btn = document.getElementById("btnModalEntrar");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function setModalCadastro() {
  let modalEntrar = document.getElementById("modalEntrar");
  modalEntrar.style.display = "none";
  // Get the modal
  var modal = document.getElementById("modalCadastro");

  // Get the button that opens the modal
  var btn = document.getElementById("btnModalCadastro");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[1];

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
