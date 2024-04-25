sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";
  
    return Controller.extend("com.conferancebookingapp.controller.register", {
        
        
        onInit: function() {
            
        },

        onRegisterPress: function() {
            var view = this.getView();
            var inputUsername = view.byId("input-username");
            var inputPassword = view.byId("input-password");
            var inputFirstname = view.byId("input-firstname");
            var inputLastname = view.byId("input-lastname");

            var username = inputUsername.getValue();
            var password = inputPassword.getValue();
            var firstname = inputFirstname.getValue();
            var lastname = inputLastname.getValue();

            var message = "Registered User:\n" +
                          "Username: " + username + "\n" +
                          "Password: " + password + "\n" +
                          "First Name: " + firstname + "\n" +
                          "Last Name: " + lastname;

            MessageToast.show(message);
        },
        onBack : function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.getOwnerComponent().getRouter().navTo("login",{});
		}
    });
});
