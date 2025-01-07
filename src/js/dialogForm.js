// createDialogForm
// Requiere for show/hide dialog
require([
    "dijit/registry",
    "dojo/parser",
    "dijit/Dialog",
    "dojo/on",
    "dojo/query",
    "dojox/form/Manager",
    "dijit/form/Button",
    "dijit/form/Select",
    "dojo/domReady!"],
    function(registry, parser, on){
        // render page
        parser.parse();
  
        // Show the dialog
        window.showDialog = function() {
            registry.byId("modal-poi").show();
            //console.log(registry.byId("modal-poi"))
        }
        // Hide the dialog
        window.hideDialog = function() {
            registry.byId("modal-poi").hide();
        }
        // get the form widget
        var form1 = registry.byId("poi-form");
        window.formManager = form1;

        // Stop form from making requests
        form1.on("submit", function(event){
          // prevent form submission
          event.preventDefault();
          event.stopPropagation();
          console.log("preventing default")

          //validateCoords(v_nombre)
          
        });
});





/*

        addPOIFromForm(form1.coord, form1.nombre, form1.direccion, form1.telefono, form1.categoria);
        hideDialog();
       });
 
  		// Add POI
      addPOIFromForm = function(coords, nombre, direccion, telefono, categoria) {
        // validatate coord and add to map, or show warning
        console.log("Calling validateCoords");
        //validateCoords(coords);
        hideDialog();
      }
*/

let ab = 1;