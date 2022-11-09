// createDialogForm
// Requiere for show/hide dialog
require([
    "dijit/registry",
    "dojo/parser",
    "dijit/Dialog",
    "dijit/form/Button",
    "dojo/domReady!"],
    function(registry, parser){
        // Show the dialog
        window.showDialog = function() {
            registry.byId("modal-poi").show();
            //console.log(registry.byId("modal-poi"))
        }
        // Hide the dialog
        window.hideDialog = function() {
            registry.byId("modal-poi").hide();
        }
        parser.parse();
});
