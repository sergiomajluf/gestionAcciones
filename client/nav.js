Template.nav.events({
    'click input[name="toggleEditable"]': function() {
        Session.set('editable', !Session.get('editable'));
    },
    'click .deleteButton': function() {
        var confirmation = prompt("Escribe BORRAR para confirmar", "");
        if (confirmation != null) {
            if (confirmation == "BORRAR") {
                Mejoras.remove(this._id);
                //console.log("Borré este id")
                Router.go('/');

            } else {
                console.log("No borré nada")
            }
        }
    },
    'click .filterMenu': function(event) {
        //console.log(event.target.dataset.id)
        Session.set("filtroResponsables", event.target.dataset.id);
    },
    'click .returnHome': function() {
        Session.set('returnHome', true);
    },
    'click #filterMenuHorizontal li a': function(event) {
        //console.log(event.target)
        $("#filterMenuHorizontal li a").removeClass('selected')
        $(event.target).addClass('selected')
        $("#filterMenuHorizontal").collapse('hide')
    }
});


Template.nav.helpers({
    'isEditable': function() {
        return Session.get("editable");
    },
    'ruta': function() {
        var routeName = Router.current().route.getName()
        return routeName;
    }

});