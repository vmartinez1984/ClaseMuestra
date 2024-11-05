function cargarElFooter() {
    fetch("./pages/templates/footer.html")
        .then((response) => response.text())
        .then((data) => document.getElementById('footer').innerHTML = data)
}

function cargarPlantillas(){
    cargarElFooter()
}