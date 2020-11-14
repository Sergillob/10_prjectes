sap.ui.define([
  "com/te/teProjects/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.te.teProjects.controller.Tiles", {
    onInit: function () {
      let myTilesModel = new JSONModel("../model/tiles.json");

      this.getView().setModel(myTilesModel, "tiles");

    },

    press: function (oRoute) {
      this.getOwnerComponent().getRouter().navTo(oRoute);
    }

  });
});
