sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";
		
	return Controller.extend("com.conferancebookingapp.controller.sideNav", {
		
		
		onCollapseExpandPress() {
			const oSideNavigation = this.byId("sideNavigation"),
				bExpanded = oSideNavigation.getExpanded();

			oSideNavigation.setExpanded(!bExpanded);
		},

		onHideShowWalkedPress() {
			const oNavListItem = this.byId("walked");
			oNavListItem.setVisible(!oNavListItem.getVisible());
		},
		onNavItemPress: function(event) {
            var key = event.getSource().getKey();
            this.getOwnerComponent().getRouter().navTo(key);
        },

		onNavigationItemSelect: function(oEvent) {
            var selectedItem = oEvent.getParameter("item");
            var selectedText = selectedItem.getText();
            MessageToast.show("Selected Item: " + selectedText);
			oRouter.navTo("V", {itemId: sItemId});
		
        }
	});
});