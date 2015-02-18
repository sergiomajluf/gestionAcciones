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
                return Mejoras.find({
                    "responsables.Decano": true
                }, ordenDescendente)
                break;

            case "Vice Decano":
                return Mejoras.find({
                    "responsables.Vice Decano": true
                }, ordenDescendente)
                break;

            case "Director de Pregrado CCP":
                return Mejoras.find({
                    "responsables.Director de Pregrado CCP": true
                }, ordenDescendente)
                break;


            case "Directora Plan Común SCL":
                return Mejoras.find({
                    "responsables.Directora Plan Común SCL": true
                }, ordenDescendente)
                break;

            case "Director Ambientes y Objetos SCL":
                return Mejoras.find({
                    "responsables.Director Ambientes y Objetos SCL": true
                }, ordenDescendente)
                break;

            case "Director Diseño Digital":
                return Mejoras.find({
                    "responsables.Director Diseño Digital": true
                }, ordenDescendente)
                break;

            case "Directora Diseño Gráfico SCL":
                return Mejoras.find({
                    "responsables.Directora Diseño Gráfico SCL": true
                }, ordenDescendente)
                break;

            case "Directora de Extensión y Educación Continua":
                return Mejoras.find({
                    "responsables.Directora de Extensión y Educación Continua": true
                }, ordenDescendente)
                break;


            case "SubDirector de Extensión":
                return Mejoras.find({
                    "responsables.SubDirector de Extensión": true
                }, ordenDescendente)
                break;

            case "Coordinador de Extensión CCP":
                return Mejoras.find({
                    "responsables.Coordinador de Extensión CCP": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Extensión SCL":
                return Mejoras.find({
                    "responsables.Coordinadora de Extensión SCL": true
                }, ordenDescendente)
                break;

            case "Coordinador Académico CCP":
                return Mejoras.find({
                    "responsables.Coordinador Académico CCP": true
                }, ordenDescendente)
                break;

            case "Coordinadora Académica SCL - Plan Común":
                return Mejoras.find({
                    "responsables.Coordinadora Académica SCL - Plan Común": true
                }, ordenDescendente)
                break;

            case "Coordinadora Académica SCL - Ambientes y Objetos":
                return Mejoras.find({
                    "responsables.Coordinadora Académica SCL - Ambientes y Objetos": true
                }, ordenDescendente)
                break;


            case "Coordinador Académico SCL - Digital":
                return Mejoras.find({
                    "responsables.Coordinador Académico SCL - Digital": true
                }, ordenDescendente)
                break;

            case "Coordinadora Académica SCL - Gráfico":
                return Mejoras.find({
                    "responsables.Coordinadora Académica SCL - Gráfico": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Admision CCP":
                return Mejoras.find({
                    "responsables.Coordinadora de Admision CCP": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Admision SCL":
                return Mejoras.find({
                    "responsables.Coordinadora de Admision SCL": true
                }, ordenDescendente)
                break;

            case "Coordinadora de Planificación y Desarrollo":
                return Mejoras.find({
                    "responsables.Coordinadora de Planificación y Desarrollo": true
                }, ordenDescendente)
                break;

            case "Investigadores":
                return Mejoras.find({
                    "responsables.Investigadores": true
                }, ordenDescendente)
                break;

            case "rojo":
                return Mejoras.find({
                    "estado": "rojo"
                }, ordenDescendente)
                break;

            case "amarillo":
                return Mejoras.find({
                    "estado": "amarillo"
                }, ordenDescendente)
                break;

            case "verde":
                return Mejoras.find({
                    "estado": "verde"
                }, ordenDescendente)
                break;


            default:
                return Mejoras.find({}, ordenDescendente)

        }


        //return Mejoras.find({ "responsables.decano":true}).fetch()


    },
    responsableActual: function() {
        return Session.get("filtroResponsables")
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