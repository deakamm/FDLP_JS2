function calcular() {
    let xA1 = parseFloat(document.getElementById("xA1").value);
    let yA1 = parseFloat(document.getElementById("yA1").value);

    // let xB1 = parseFloat(document.getElementById("xB1").value);
    // let yB1 = parseFloat(document.getElementById("yB1").value);

    let puntoA1 = new Punt(xA1, yA1); // Crear un objeto Punt con los valores
    let circulo1 = new Circulo(puntoA1, 5);

    // let xA2 = parseFloat(document.getElementById("xA2").value);
    // let yA2 = parseFloat(document.getElementById("yA2").value);

    let xB2 = parseFloat(document.getElementById("xB2").value);
    let yB2 = parseFloat(document.getElementById("yB2").value);

    let puntoB2 = new Punt(xB2, yB2); // Crear un objeto Punt con los valores
    let circulo2 = new Circulo(puntoB2, 3);

    document.getElementById("resultado1").innerHTML = circulo1.toString();
    document.getElementById("distanciaCentres").innerHTML = circulo1.distanciaCentres(circulo2);
    document.getElementById("equals").innerHTML = circulo1.equals(circulo2) ? "Sí" : "No";
    document.getElementById("sonConcentrics").innerHTML = circulo1.sonConcentrics(circulo2) ? "Sí" : "No";
    document.getElementById("tenenIgualRadi").innerHTML = circulo2.tenenIgualRadi(circulo1) ? "Sí" : "No";

    document.getElementById("resultado2").innerHTML = circulo2.toString();
    document.getElementById("sonTangents").innerHTML = circulo2.sonTangents(circulo1) ? "Sí" : "No";
    document.getElementById("sonSecants").innerHTML = circulo2.sonSecants(circulo1) ? "Sí" : "No";
    document.getElementById("noEsToquen").innerHTML = circulo2.noEsToquen(circulo1) ? "Sí" : "No";
}
