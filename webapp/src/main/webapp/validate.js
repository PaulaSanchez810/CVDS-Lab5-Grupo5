function validateForm() {
  var x = document.forms["numero"]["identificador"].value;
  if (isNaN(parseFloat(x))) {
    alert("Dato no valido ingrese un número");
    println("false");
  }
  println("True");
}