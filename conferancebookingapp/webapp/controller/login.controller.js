sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    function(BaseController, MessageToast) {
      "use strict";
  
      return BaseController.extend("com.conferancebookingapp.controller.login", {
        onInit: function() {
          this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        },     
        onLoginPress: function() {
          var view = this.getView();
          var inputUsername = view.byId("input-username");
          var inputPassword = view.byId("input-password");
          var username = inputUsername.getValue();
          var password = inputPassword.getValue();
          
          MessageToast.show("Username: " + username);
      },

      onRegisterPress: function() {
       
        this.oRouter.navTo("register");        
        MessageToast.show("pressed");
    },
    onPressGoToV: function() {
      this.oRouter.navTo("V");
  }
  
      

});
      });
  
  