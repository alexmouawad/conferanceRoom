
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.conferancebookingapp.controller.genericTile1", {

        onback: function() {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter.navTo("V");
        },
    });
});
