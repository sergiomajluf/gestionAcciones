 Session.setDefault("filtroResponsables", "todos");
 Session.setDefault("editable", true)

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

 UI.registerHelper('ifRouteIs', function(routeName, options) {
     if (Meteor.Router.page() === routeName) {
         return options.fn(this);
     }
     return options.inverse(this);
 });