Meteor.startup(function() {
    // code to run on server at startup
    console.log("Comenzamos!")
    //console.log(serverData)
	/*
	db.foo.find().toArray()
	db.foo.find().forEach(printjson)
	*/

    if (Mejoras.find().count() < 10) {
        console.log("Base de Datos Vacía");

        for (var i = 0; i < serverData.length; i++) {
            console.log(serverData[i]);
            Mejoras.insert(serverData[i]);
        };
    }
});




