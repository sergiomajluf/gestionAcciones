Mejoras = new Mongo.Collection('mejoras');

if (Meteor.isClient) {
  Session.setDefault("filtroResponsables", "nadie");
  Session.setDefault("editable", true)

  Template.Home.helpers({
    mejora: function() {
      //return Mejoras.find( {} , { sort: { ndebilidad: 1, naccion: 1 } });
      var filtroResponsables = Session.get("filtroResponsables");
      var ordenDescendente = {sort : { nactividad : 1 } }

      switch (filtroResponsables) {
        case "Decano":
          return Mejoras.find({
            "responsables.Decano": true
          }, ordenDescendente )
          break;

        case "Vice Decano":
          return Mejoras.find({
            "responsables.Vice Decano": true
          }, ordenDescendente )
          break;

        case "Director de Pregrado CCP":
          return Mejoras.find({
            "responsables.Director de Pregrado CCP": true
          }, ordenDescendente )
          break;


        case "Directora Plan Común SCL":
          return Mejoras.find({
            "responsables.Directora Plan Común SCL": true
          }, ordenDescendente )
          break;

        case "Director Ambientes y Objetos SCL":
          return Mejoras.find({
            "responsables.Director Ambientes y Objetos SCL": true
          }, ordenDescendente )
          break;

        case "Director Diseño Digital":
          return Mejoras.find({
            "responsables.Director Diseño Digital": true
          }, ordenDescendente )
          break;

        case "Directora Diseño Gráfico SCL":
          return Mejoras.find({
            "responsables.Directora Diseño Gráfico SCL": true
          }, ordenDescendente )
          break;

        case "Directora de Extensión y Educación Continua":
          return Mejoras.find({
            "responsables.Directora de Extensión y Educación Continua": true
          }, ordenDescendente )
          break;


        case "SubDirector de Extensión":
          return Mejoras.find({
            "responsables.SubDirector de Extensión": true
          }, ordenDescendente )
          break;

        case "Coordinador de Extensión CCP":
          return Mejoras.find({
            "responsables.Coordinador de Extensión CCP": true
          }, ordenDescendente )
          break;

        case "Coordinadora de Extensión SCL":
          return Mejoras.find({
            "responsables.Coordinadora de Extensión SCL": true
          }, ordenDescendente )
          break;

        case "Coordinador Académico CCP":
          return Mejoras.find({
            "responsables.Coordinador Académico CCP": true
          }, ordenDescendente )
          break;

        case "Coordinadora Académica SCL - Plan Común":
          return Mejoras.find({
            "responsables.Coordinadora Académica SCL - Plan Común": true
          }, ordenDescendente )
          break;

        case "Coordinadora Académica SCL - Ambientes y Objetos":
          return Mejoras.find({
            "responsables.Coordinadora Académica SCL - Ambientes y Objetos": true
          }, ordenDescendente )
          break;


        case "Coordinador Académico SCL - Digital":
          return Mejoras.find({
            "responsables.Coordinador Académico SCL - Digital": true
          }, ordenDescendente )
          break;

        case "Coordinadora Académica SCL - Gráfico":
          return Mejoras.find({
            "responsables.Coordinadora Académica SCL - Gráfico": true
          }, ordenDescendente )
          break;

        case "Coordinadora de Admision CCP":
          return Mejoras.find({
            "responsables.Coordinadora de Admision CCP": true
          }, ordenDescendente )
          break;

        case "Coordinadora de Admision SCL":
          return Mejoras.find({
            "responsables.Coordinadora de Admision SCL": true
          }, ordenDescendente )
          break;

        case "Coordinadora de Planificación y Desarrollo":
          return Mejoras.find({
            "responsables.Coordinadora de Planificación y Desarrollo": true
          }, ordenDescendente )
          break;

        case "Investigadores":
          return Mejoras.find({
            "responsables.Investigadores": true
          }, ordenDescendente )
          break;


        default:
          return Mejoras.find({}, ordenDescendente )

      }


      //return Mejoras.find({ "responsables.decano":true}).fetch()


    },
    responsableActual: function() {
      return Session.get("filtroResponsables")
    }
  });


  Template.mejoraShow.helpers({
    muestraResponsables: function() {
      var _mejora = Mejoras.fincOne(this._id);
      return _mejora;
    }
  });


  Router.route('/', function() {
    this.render('Home');
  });

  Router.route('/nueva', function() {
    this.render('Nueva');
  });

  Router.route('/mejora', function() {
    this.render('Nueva');
  });

  Router.route('/mejora/:_id', function() {
    this.render('Mejora', {
      data: function() {
        Session.set("editable", false);
        return Mejoras.findOne({
          _id: this.params._id
        });
      }
    });
  });

  Router.route('/edicion/:_id', function() {
    this.render('Edita', {
      data: function() {
        Session.set("editable", true);
        return Mejoras.findOne({
          _id: this.params._id
        });
      }
    });
  });

  Template.nav.events({
    'click input[name="toggleEditable"]': function(){
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
    'click .returnHome': function(){
      Session.set('returnHome', true);
    },
    'click #filterMenuHorizontal li a': function(event){
      console.log(event.target)
      $("#filterMenuHorizontal li a").removeClass('selected')
      $(event.target).addClass('selected')
    }
  });

  
  Template.nav.helpers({
    'isEditable': function(){
      return Session.get("editable");
    },
    'ruta' : function(){
        var routeName = Router.current().route.getName()
        return routeName;
     }

  });

  Template.mejoraForm.helpers({
    'editable': function(){
      if(!Session.get("editable")){
        return 'disabled';
      }
    }
  });

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

  Template.mejoraForm.events({
    'submit form': function(event) {
      console.log("Accion guardada")
      event.preventDefault();

      var _id = this._id;
      var _nactividad = event.target.v_actividad.value;
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
        revision: new Date()

      }


      var disableButton = function() {

        $('.saveButton').attr('disabled','disabled');
        $('.saveButton i').removeClass('glyphicon-floppy-disk').addClass('glyphicon-refresh glyphicon-spin');

        setTimeout ( function(){
          $('.saveButton').removeAttr("disabled");
          $('.saveButton i').removeClass('glyphicon-refresh glyphicon-spin').addClass('glyphicon-floppy-disk');
        }, 2000 );

      }
      
      if (_id == undefined) {
        console.log("New entry, therefore insert");
        Mejoras.insert(newData, function(err, newId) {
          Router.go('/edicion/' + newId);
        });
      } else {
        console.log("Existing entry, update", newData);
        $('.saveButton').attr('disabled','disabled');

        disableButton();
        Mejoras.update(_id, {
          $set: newData
        });
        if (Session.get('returnHome')){
          Session.set('returnHome', false)
          Router.go('/');
         }
        
      }

    }
  });


  

function submitme() {
    form={};

    $.each($('#formulario').serializeArray(), function() {
        form[this.name] = this.value;
    });

    //do validation on form={firstname:'first name', lastname: 'last name', email: 'email@email.com'}
    console.log(form)
    // MyCollection.insert(form, function(err) {
    //     if(!err) {
    //         alert("Submitted!");
    //         $('#myform')[0].reset();
    //     }
    //     else
    //     {
    //         alert("Something is wrong");
    //         console.log(err);
    //     }
    // });

}

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}

// Use UI.registerHelper.
var DateFormats = {
  short: "DD/MMMM/YYYY",
  long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper("formatDate", function(datetime, format) {
  if (moment) {
    f = DateFormats[format];
    return moment(datetime).format(f);
  } else {
    return datetime;
  }
});
UI.registerHelper('selected', function(key, value) {
  return key == value ? {
    selected: 'selected'
  } : '';
});
UI.registerHelper('checked', function(key, value) {
  return key == value ? {
    checked: 'checked'
  } : '';
});
UI.registerHelper('arrayify', function(obj) {
  result = [];
  for (var key in obj) result.push({
    name: key,
    value: obj[key]
  });
  return result;
});

UI.registerHelper('ifRouteIs', function (routeName, options) { 
  if (Meteor.Router.page() === routeName) {
    return options.fn(this);
  }
  return options.inverse(this);
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