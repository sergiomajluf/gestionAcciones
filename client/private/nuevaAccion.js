  Template.nuevaAccion.events({
      'submit form': function(event) {
          event.preventDefault();

          var _id = this._id;
          var _ndebilidad = event.target.v_ndebilidad.value;
          var _naccion = event.target.v_naccion.value;
          var _estado = event.target.v_estado.value;
          var _descripcion = event.target.v_descripcion.value;
          var _objetivos = event.target.v_objetivos.value;
          var _accion = event.target.v_accion.value;
          var _indicador = event.target.v_indicador.value;
          var _meta = event.target.v_meta.value;
          var _plazo = event.target.v_plazo.value;
          var _presupuesto = event.target.v_presupuesto.value;
          var _responsable = document.getElementsByName("v_responsable[]");
          var _avance = event.target.v_avance.value;

          var _responsables = {}

          for (k = 0; k < _responsable.length; k++) {
              _responsables[_responsable[k].value] = _responsable[k].checked;
          }

          var newData = {
              ndebilidad: _ndebilidad,
              naccion: _naccion,
              estado: _estado,
              descripcion: _descripcion,
              objetivos: _objetivos,
              accion: _accion,
              indicador: _indicador,
              meta: _meta,
              plazo: _plazo,
              presupuesto: _presupuesto,
              responsables: _responsables,
              avance: _avance,
              revision: new Date()

          }

          if (_id == undefined) {
              //console.log("new entry, therefor insert");
              Meteor.call("crearAccion", newData);
          } else {
              //console.log("Existing entry, therefor update");
              Meteor.call("actualizarAccion", _id, newData);
          }
      }
  });

  Meteor.methods({
      guardarAccion: function(mejoraId, newData) {
          Mejoras.update(mejoraId, {
              $set: newData
          });
          Router.go('/');
      },
      crearAccion: function() {
          Mejoras.insert(newData);
          Router.go('/');
      }
  });