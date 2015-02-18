
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