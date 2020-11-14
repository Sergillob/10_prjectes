sap.ui.define([
  "com/te/teProjects/controller/BaseController",
  "sap/ui/model/json/JSONModel",
  'sap/viz/ui5/data/FlattenedDataset',
  'sap/viz/ui5/format/ChartFormatter',
  'sap/viz/ui5/api/env/Format',
], function (Controller, JSONModel, FlattenedDataset, ChartFormatter, Format) {
  "use strict";

  return Controller.extend("com.te.teProjects.controller.covid.Covid", {

    //dataPath: "../../model/data.json",
    dataPath: "https://api.rootnet.in/covid19-in/stats/history",
    oVizFrame: null,

    onInit: function () {

      Format.numericFormatter(ChartFormatter.getInstance());
      var formatPattern = ChartFormatter.DefaultPattern;


      var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
      oVizFrame.setVizProperties({
        plotArea: {
          dataLabel: {
            formatString: formatPattern.SHORTFLOAT_MFD2,
            visible: true
          }
        },
        valueAxis: {
          label: {
            formatString: formatPattern.SHORTFLOAT
          },
          title: {
            visible: false
          }
        },
        categoryAxis: {
          title: {
            visible: false
          }
        },
        title: {
          visible: false,
          text: 'Covid cases history'
        }
      });
      var dataModel = new JSONModel(this.dataPath);
      oVizFrame.setModel(dataModel);

      var oPopOver = this.getView().byId("idPopOver");
      oPopOver.connect(oVizFrame.getVizUid());
      oPopOver.setFormatString(formatPattern.STANDARDFLOAT);


    },

    onPressList: function () {

      this.getOwnerComponent().getRouter().navTo("second-list");
    },

    onPressGraph: function () {
      this.getOwnerComponent().getRouter().navTo("second-pie");
    }


  });
});
