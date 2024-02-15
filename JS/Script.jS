function konversi() {
    var fahRenheit = 1.8 * document.getElementById("input").value + 32;
        document.getElementById("result").innerHTML = fahRenheit.toFixed(2) + "°F";
        document.getElementById("rumus").innerHTML = "°C" + " X" + " 1.8" + " +" + " 32" + " =" + fahRenheit.toFixed(2) + "°F" ;
}
  function reverse() {
    var fahrenheit = document.getElementById("result").value;
    var celsius = (fahrenheit - 32) * 5/ 9;
    document.getElementById("input").innerHTML = celsius.toFixed(2) + "°C";
    document.getElementById("rumus").innerHTML = "°F" + " -" + " 32" + " X" + " 9/5" + " =" + celsius.toFixed(2) + "°C" ;
}
function eraseText() {
     document.getElementById("input").value = "";
     document.getElementById("result").value = "";
     document.getElementById("rumus").value = "";
}
