 Template.mejoraForm.helpers({
     'editable': function() {
         if (!Session.get("editable")) {
             return 'disabled';
         }
     }
 });

 Template.mejoraForm.events({
     'submit form': function(event) {
         console.log("Accion guardada")
         event.preventDefault();

         var _id = this._id;
         var _nactividad = Number(event.target.v_actividad.value);
         var _estado = event.target.v_estado.value;
         var _lineamiento = event.target.v_lineamiento.value;
         var _area = event.target.v_area.value;

         var _accion = event.target.v_accion.value;
         var _objetivoGeneral = event.target.v_objetivoGeneral.value;
         var _objetivoEspecifico = event.target.v_objetivoEspecifico.value;

         var _indicador = event.target.v_indicador.value;
         var _meta = event.target.v_meta.value;
         var _plazo = event.target.v_plazo.value;
         var _responsable = document.getElementsByName("v_responsable[]");
         var _avance = event.target.v_avance.value;

         var _responsables = {}

         for (k = 0; k < _responsable.length; k++) {
             _responsables[_responsable[k].value] = _responsable[k].checked;
         }

         var currentUserId = Meteor.userId();

         var newData = {
             nactividad: _nactividad,
             estado: _estado,
             lineamiento: _lineamiento,
             area: _area,
             accion: _accion,
             objetivoGeneral: _objetivoGeneral,
             objetivoEspecifico: _objetivoEspecifico,
             indicador: _indicador,
             meta: _meta,
             plazo: _plazo,
             responsables: _responsables,
             avance: _avance,
             revision: new Date(),
             creadoPor: currentUserId

         }


         var disableButton = function() {

             $('.saveButton').attr('disabled', 'disabled');
             $('.saveButton i').removeClass('glyphicon-floppy-disk').addClass('glyphicon-refresh glyphicon-spin');

             setTimeout(function() {
                 $('.saveButton').removeAttr("disabled");
                 $('.saveButton i').removeClass('glyphicon-refresh glyphicon-spin').addClass('glyphicon-floppy-disk');
             }, 2000);

         }

         if (_id == undefined) {
             console.log("New entry, therefore insert");
             Mejoras.insert(newData, function(err, newId) {
                 Router.go('/edicion/' + newId);
             });
         } else {
             console.log("Existing entry, update", newData);
             $('.saveButton').attr('disabled', 'disabled');

             disableButton();
             Mejoras.update(_id, {
                 $set: newData
             });
             if (Session.get('returnHome')) {
                 Session.set('returnHome', false)
                 Router.go('/');
             }

         }

     }
 });

Template.mejoraForm.rendered = function(){
    $( "<br/><h6>Directores de Pregrado</h6>" ).insertBefore( $("[id='directorPregradoCcp']" ));
    $( "<br/><h6>Extensión y Vinculación con el Medio</h6>" ).insertBefore( $("[id='directorExtension']" ));
    $( "<br/><h6>Coordinadores</h6>" ).insertBefore( $("[id='coordinadorAcademicoCcp']" ));
    $( "<br/><h6>Investigación</h6>" ).insertBefore( $("[id='investigador']" ));
};




