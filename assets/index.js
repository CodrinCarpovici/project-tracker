let dialog;


$ (function() {
    $("#dDate").datepicker();
})

dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Add a project": addProject,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
      allFields.removeClass( "ui-state-error" );
    }
  });


  function addProject(){

  };


  $("#add-project").button().on("click", function(){
    dialog.dialog("open");
  })