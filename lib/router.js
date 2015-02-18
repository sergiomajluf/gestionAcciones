Router.route('/', function() {
    this.render('Home');
});

Router.route('/nueva', function() {
    this.render('mejoraFormContainer');
});

Router.route('/edicion/:_id', function() {
    this.render('mejoraFormContainer', {
        data: function() {
            Session.set("editable", true);
            return Mejoras.findOne({
                _id: this.params._id
            });
        }
    });
});

Router.route('/mejora', function() {
    Router.go('/nueva');
});

Router.route('/mejora/:_id', function() {
    this.render('mejoraFormContainer', {
        data: function() {
            Session.set("editable", false);
            return Mejoras.findOne({
                _id: this.params._id
            });
        }
    });
});