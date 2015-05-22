Template.Home.helpers({
    mejora: function() {
        //return Mejoras.find( {} , { sort: { ndebilidad: 1, naccion: 1 } });
        var filtroResponsables = Session.get("filtroResponsables");
        var ordenDescendente = {
            sort: {
                nactividad: 1
            }
        }

        switch (filtroResponsables) {
            case "Decano":
                Session.set("filterResults", Mejoras.find({"responsables.Decano": true}).count());
                return Mejoras.find({
                    "responsables.Decano": true
                }, ordenDescendente)
                break;

            case "Vice Decano":
                Session.set("filterResults", Mejoras.find({"responsables.Vice Decano": true}).count());
                return Mejoras.find({
                    "responsables.Vice Decano": true
                }, ordenDescendente)
                break;

            case "Director de Pregrado CCP":
                Session.set("filterResults", Mejoras.find({"responsables.Director de Pregrado CCP": true}).count());
                return Mejoras.find({
                    "responsables.Director de Pregrado CCP": true
                }, ordenDescendente)
                break;


            case "Directora Plan Común SCL":
                Session.set("filterResults", Mejoras.find({"responsables.Directora Plan Común SCL": true}).count());
                return Mejoras.find({
                    "responsables.Directora Plan Común SCL": true
                }, ordenDescendente)
                break;

            case "Director Ambientes y Objetos SCL":
                Session.set("filterResults", Mejoras.find({"responsables.Director Ambientes y Objetos SCL": true}).count());
                return Mejoras.find({
                    "responsables.Director Ambientes y Objetos SCL": true
                }, ordenDescendente)
                break;

            case "Director Diseño Digital":
                Session.set("filterResults", Mejoras.find({"responsables.Director Diseño Digital": true}).count());
                return Mejoras.find({
                    "responsables.Director Diseño Digital": true
                }, ordenDescendente)
                break;

            case "Directora Diseño Gráfico SCL":
                Session.set("filterResults", Mejoras.find({"responsables.Directora Diseño Gráfico SCL": true}).count());
                return Mejoras.find({
                    "responsables.Directora Diseño Gráfico SCL": true
                }, ordenDescendente)
                break;

            case "Directora de Extensión y Educación Continua":
                Session.set("filterResults", Mejoras.find({"responsables.Directora de Extensión y Educación Continua": true}).count());
                return Mejoras.find({
                    "responsables.Directora de Extensión y Educación Continua": true
                }, ordenDescendente)
                break;


            case "SubDirector de Extensión":
                Session.set("filterResults", Mejoras.find({"responsables.SubDirector de Extensión": true}).count());
                return Mejoras.find({
                    "responsables.SubDirector de Extensión": true
                }, ordenDescendente)
                break;

            case "Coordinador de Extensión CCP":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinador de Extensión CCP": true}).count());
                return Mejoras.find({
                    "responsables.Coordinador de Extensión CCP": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Extensión SCL":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora de Extensión SCL": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora de Extensión SCL": true
                }, ordenDescendente)
                break;

            case "Coordinador Académico CCP":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinador Académico CCP": true}).count());
                return Mejoras.find({
                    "responsables.Coordinador Académico CCP": true
                }, ordenDescendente)
                break;

            case "Coordinadora Académica SCL - Plan Común":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora Académica SCL - Plan Común": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora Académica SCL - Plan Común": true
                }, ordenDescendente)
                break;

            case "Coordinadora Académica SCL - Ambientes y Objetos":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora Académica SCL - Ambientes y Objetos": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora Académica SCL - Ambientes y Objetos": true
                }, ordenDescendente)
                break;


            case "Coordinador Académico SCL - Digital":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinador Académico SCL - Digital": true}).count());
                return Mejoras.find({
                    "responsables.Coordinador Académico SCL - Digital": true
                }, ordenDescendente)
                break;

            case "Coordinadora Académica SCL - Gráfico":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora Académica SCL - Gráfico": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora Académica SCL - Gráfico": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Admision CCP":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora de Admision CCP": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora de Admision CCP": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Admision SCL":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora de Admision SCL": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora de Admision SCL": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Planificación y Desarrollo":
                Session.set("filterResults", Mejoras.find({"responsables.Coordinadora de Planificación y Desarrollo": true}).count());
                return Mejoras.find({
                    "responsables.Coordinadora de Planificación y Desarrollo": true
                }, ordenDescendente)
                break;

            case "Investigadores":
                Session.set("filterResults", Mejoras.find({"responsables.Investigadores": true}).count());
                return Mejoras.find({
                    "responsables.Investigadores": true
                }, ordenDescendente)
                break;

            case "rojo":
                Session.set("filterResults", Mejoras.find({"estado": "rojo"}).count());
                return Mejoras.find({
                    "estado": "rojo"
                }, ordenDescendente)
                break;

            case "amarillo":
                Session.set("filterResults", Mejoras.find({"estado": "amarillo"}).count());
                return Mejoras.find({
                    "estado": "amarillo"
                }, ordenDescendente)
                break;

            case "verde":
                Session.set("filterResults", Mejoras.find({"estado": "verde"}).count());
                return Mejoras.find({
                    "estado": "verde"
                }, ordenDescendente)
                break;


            default:
                Session.set("filterResults", Mejoras.find().count());
                return Mejoras.find({}, ordenDescendente)

        }
        //return Mejoras.find({ "responsables.decano":true}).fetch()
    },
    responsableActual: function() {
        return Session.get("filtroResponsables")
    },
    resultados: function(){
        return Session.get("filterResults")
    },
    usuarioConocido: function(){
        var adminEmail = Meteor.user().emails[0].address;
        if( adminEmail === "smajluf@udd.cl" || adminEmail === "vpichara@udd.cl" || adminEmail === "disenoudd@udd.cl"){
        return true;
        } else {
        return false;
        //add some logic for displaying error template.
        }
    }
});

Template.Home.rendered = function() {
    // CSS modification from http://kilianvalkhof.com/uploads/listfilter
    jQuery.expr[':'].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    // JQuery search from http://jsfiddle.net/tXNQd/122/
    // and http://stackoverflow.com/questions/17074687/filtering-table-rows-using-jquery

    $("#searchInput").keyup(function() {
        var rows = $("#mejoras").find(" #fbody tr").hide();
        if (this.value.length) {
            var data = this.value.split(" ");
            $.each(data, function(i, v) {
                rows.filter(":Contains('" + v + "')").show();
            });
        } else rows.show();
    });
};

Template.Home.events({
    'click .filterMenu': function(event) {
        //console.log(event.target.dataset.id)
        Session.set("filtroResponsables", event.target.dataset.id);
        $(".filterMenu").removeClass('selected');
        $(event.target).addClass('selected');
        $("#mejoras input").val("");
    }
})