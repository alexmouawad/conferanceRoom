sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/base/Log",
    "sap/ui/model/Filter",
    "sap/m/Dialog",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem"
], function (MessageToast, Controller, Device, Log, Filter, Popover, List, StandardListItem) {

    "use strict";
    var sStoredUrl = "";
    var oCarsModel ;
    
    return Controller.extend("com.conferancebookingapp.controller.C", {

        onInit: function () {

            this.getSplitAppObj().setHomeIcon({
                'phone': 'phone-icon.png',
                'tablet': 'tablet-icon.png',
                'icon': 'desktop.ico'
                           
            });

            Device.orientation.attachHandler(this.onOrientationChange, this);
         this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

         
        },
        onObjectMatched: function(oEvent) {
            var sItemId = oEvent.getParameter("arguments").itemId;
        
        },

        onMainItemPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oSubList = oItem.getContent()[0].getItems()[1]; 
            oSubList.setVisible(!oSubList.getVisible()); 
        },

        onSubItemClick: function(oEvent) {
            var oSelectedSubItem = oEvent.getSource();

        },
        onback: function() {

          this.oRouter.navTo("login");
      },
	
        onSearch: function (oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getParameter("newValue"); 
            
            if (sQuery) {
                MessageToast.show("Searching..."); 
                var oFilter = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery);
                aFilters.push(oFilter);
            }
        
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
            
        },

        onExit: function () {
            Device.orientation.detachHandler(this.onOrientationChange, this);
        },

        onOrientationChange: function (mParams) {
            var sMsg = "Orientation now is: " + (mParams.landscape ? "Landscape" : "Portrait");
            MessageToast.show(sMsg, { duration: 5000 });
        },

        onPressNavToDetail: function () {
            this.getSplitAppObj().to(this.createId("detailDetail"));
        },

        onPressDetailBack: function () {
            this.getSplitAppObj().backDetail();
        },

        onPressMasterBack: function () {
            this.getSplitAppObj().backMaster();
        },

        onPressGoToMaster: function () {
            this.getSplitAppObj().toMaster(this.createId("master2"));
        },       onPressGoToBooking: function () {
            this.getSplitAppObj().toMaster(this.createId("Booking"));
        },

        onListItemPress: function (oEvent) {
            var page2 = oEvent.getParameter("listItem").getCustomData()[0].getValue();
            this.getSplitAppObj().toDetail(this.createId(page2));
        },
        onDetailItemPress: function (oEvent) {
            var detailViewId = "sap.m.sample.SplitApp.views.Detail1";
            
            this.getSplitAppObj().toDetail(this.createId(detailViewId));
            MessageToast.show("pressed")
        },      

        onPressGodetail: function (oEvent) {
            var detail1 = oEvent.getParameter("listItem").getCustomData()[0].getValue();
            var oDetailPage = this.getView().byId(detail1);
            this.getSplitAppObj().toDetail(oDetailPage);
       
        },

        onPressModeBtn: function (oEvent) {
            var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

            this.getSplitAppObj().setMode(sSplitAppMode);
            MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
        },

        getSplitAppObj: function () {
            var result = this.byId("SplitAppDemo");
            if (!result) {
                Log.info("SplitApp object can't be found");
            }
            return result;
        },		onAvatarPressed: function () {
			MessageToast.show("Avatar pressed!");
		},
        onPress: function(oEvent) {

            var fullTileId = oEvent.getSource().getId(); 
            var tileIdParts = fullTileId.split("--"); 
            var tileId = tileIdParts[tileIdParts.length - 1]; 
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo(tileId); 
            MessageToast.show(tileId);
            
        },
        
        onObjectMatched: function(oEvent) {
            var sSelectedItem = oEvent.getParameter("arguments").selectedItem;
         
        },        
    
    });
});
