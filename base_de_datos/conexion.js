//conectar con la base de datos

var base_de_datos = "base_de_datos";

if(exist(base_de_datos)){
	console.log("La base de datos está presente");
}

exist(name){
	if(name == "base_de_datos"){
		console.log("La base de datos existe");
	}
}