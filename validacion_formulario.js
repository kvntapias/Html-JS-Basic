function validar(){
	var mascota = document.getElementById("nom_masc").value;
    var tipo = document.getElementById("tipo").value;
	var edad = document.getElementById("edad").value;
	var raza = document.getElementById("raz_masc").value;
	var dueño = document.getElementById("propietario").value;

	if (mascota == 0) {
		alert("Ingrese nombre de Mascota");
        document.getElementById("nom_masc").focus();
        return false;
	}
    
    if(tipo == 0){
        alert("Selecciona el tipo de Mascota");
        document.getElementById("tipo").focus();
        return false;
    }
    
     if(edad >50 ){
       alert("Limite");
        return false;
       }
    
    if(edad == 0){
        alert("Ingresa edad de tu mascota");
    }
    
    
    if (raza == 0){
        alert("Ingresa la Raza");
        document.getElementById("raza").focus();
        return false;
    }
    
   
    
    if(dueño == 0){
       alert("Ingresa el propietario");
        document.getElementById("propietario").focus();
        return false;
       }
    
    alert("Reserva Exitosa");
    
}



