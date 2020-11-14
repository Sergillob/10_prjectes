sap.ui.define([
  "com/te/teProjects/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.te.teProjects.controller.covid.List", {

    dataPath: "https://api.rootnet.in/covid19-in/stats/latest",

    onInit: function () {

      var dataModel = new JSONModel(this.dataPath);
      this.getView().setModel(dataModel, "Latest");

    }

  });
});
