'use strict';

import { Project } from '../../src/models/project';
import { SensorGraph } from '../../src/models/sensorgraph';

describe('SensorGraphTest', () => {
  const dummySg1 = new SensorGraph({
    "id": 2,
    "name": "Water Meter",
    "slug": "water-meter-v0-1-0",
    "org": "arch-systems",
    "project_template": "water-meter-template-v0-0-0",
    "variable_templates": [
      {
        "id": 1,
        "label": "IO 1",
        "lid_hex": "5001",
        "derived_lid_hex": "",
        "var_type": "water-meter-volume",
        "m": 1,
        "d": 1,
        "o": 0.0,
        "app_only": false,
        "web_only": false
      },
      {
        "id": 2,
        "label": "IO 2",
        "lid_hex": "5002",
        "derived_lid_hex": "",
        "var_type": "water-meter-volume",
        "m": 1,
        "d": 1,
        "o": 0.0,
        "app_only": false,
        "web_only": false
      },
      {
        "id": 3,
        "label": "Pulse 1",
        "lid_hex": "100b",
        "derived_lid_hex": "",
        "var_type": "water-meter-volume",
        "m": 1,
        "d": 1,
        "o": 0.0,
        "app_only": true,
        "web_only": false
      },
      {
        "id": 4,
        "label": "Pulse 2",
        "lid_hex": "100c",
        "derived_lid_hex": "",
        "var_type": "water-meter-volume",
        "m": 1,
        "d": 1,
        "o": 0.0,
        "app_only": true,
        "web_only": false
      },
      {
        "id": 5,
        "label": "Odometer 1",
        "lid_hex": "100d",
        "derived_lid_hex": "",
        "var_type": "water-meter-volume",
        "m": 1,
        "d": 1,
        "o": 0.0,
        "app_only": true,
        "web_only": false
      },
      {
        "id": 6,
        "label": "Odometer 2",
        "lid_hex": "100e",
        "derived_lid_hex": "",
        "var_type": "water-meter-volume",
        "m": 1,
        "d": 1,
        "o": 0.0,
        "app_only": true,
        "web_only": false
      }
    ],
    "display_widget_templates": [
      {
        "id": 1,
        "label": "IO 1",
        "lid_hex": "5001",
        "type": "val",
        "args": {
          "options": {
            "showLastValueGauge": true
          }
        },
        "var_type": "water-meter-volume",
        "derived_unit_type": "",
        "show_in_app": false,
        "show_in_web": true
      },
      {
        "id": 2,
        "label": "IO 2",
        "lid_hex": "5002",
        "var_type": "water-meter-volume",
        "derived_unit_type": "",
        "show_in_app": true,
        "show_in_web": false
      },
      {
        "id": 3,
        "label": "IO 1",
        "lid_hex": "5001",
        "var_type": "water-meter-volume",
        "derived_unit_type": "rate",
        "show_in_app": true,
        "show_in_web": false
      },
      {
        "id": 4,
        "label": "IO 2",
        "lid_hex": "5002",
        "var_type": "water-meter-volume",
        "derived_unit_type": "rate",
        "show_in_app": true,
        "show_in_web": false
      }
    ],
    "ui_extra": {
      "mobile": {
        "template": "water-meter",
        "ioInfo": {
          "map": {
            "5002": {
              "label": "IO 2",
              "settingsController": "waterMeterSettingsCtrl",
              "derived": {
                "odometer": {
                  "lid": "100e",
                  "label": "Trip Computer"
                },
                "flow": {
                  "lid": "100c",
                  "label": "Flow"
                }
              },
              "settingsTemplate": "water-meter-settings"
            },
            "5001": {
              "label": "IO 1",
              "settingsController": "waterMeterSettingsCtrl",
              "derived": {
                "odometer": {
                  "lid": "100d",
                  "label": "Trip Computer"
                },
                "flow": {
                  "lid": "100b",
                  "label": "Flow"
                }
              },
              "settingsTemplate": "water-meter-settings"
            }
          },
          "order": [
            "5001",
            "5002"
          ]
        },
        "controller": "waterMeterCtrl",
        "other": {
          "flowMdo": {
            "d": 65536
          }
        }
      }
    },
    "major_version": 0,
    "minor_version": 1,
    "patch_version": 0,
    "created_on": "2017-03-10T04:16:03.061729Z"
  });
const dummySg2 = new SensorGraph({
    "id": 2,
    "name": "Water Meter",
    "slug": "water-meter-v0-1-0",
    "org": "arch-systems",
    "project_template": "water-meter-template-v0-0-0",
    "variable_templates": [],
    "display_widget_templates": [],
    "ui_extra": {
      "mobile": {
        "template": "water-meter",
        "settingsTemplate": "water-meter-settings",
        "settingsController": "waterMeterSettingsCtrl",
        "ioInfo": null,
        "controller": "waterMeterCtrl"
      }
    },
    "major_version": 0,
    "minor_version": 1,
    "patch_version": 0,
    "created_on": "2017-03-10T04:16:03.061729Z"
  });
  const dummySg3 = new SensorGraph({
    "id": 2,
    "name": "Water Meter",
    "slug": "water-meter-v0-1-0",
    "org": "arch-systems",
    "project_template": "water-meter-template-v0-0-0",
    "variable_templates": [],
    "display_widget_templates": [],
    "ui_extra": null,
    "major_version": 0,
    "minor_version": 1,
    "patch_version": 0,
    "created_on": "2017-03-10T04:16:03.061729Z"
  });
  const dummySg4 = new SensorGraph({
    "id": 2,
    "name": "Water Meter",
    "slug": "water-meter-v0-1-0",
    "org": "arch-systems",
    "project_template": "water-meter-template-v0-0-0",
    "variable_templates": [],
    "display_widget_templates": [],
    "ui_extra": {
      "mobile": { "a": 1 },
      "web": { "a": 2}
    },
    "major_version": 0,
    "minor_version": 1,
    "patch_version": 0,
    "created_on": "2017-03-10T04:16:03.061729Z"
  });

  it('check SensorGraph basics', () => {
    let sg: SensorGraph = dummySg1;
    expect(sg).toBeTruthy();
    expect(sg.name).toEqual('Water Meter');
    expect(sg.org).toEqual('arch-systems');
    expect(sg.getVersion()).toEqual('v0.1.0');
  });

  it('check SensorGraph uiExtra', () => {
    let sg: SensorGraph = dummySg1;
    expect(sg.uiExtra).toBeDefined();
    expect(sg.getUiExtra('mobile')).toBeDefined();
    expect(sg.getIoInfo('mobile')).toBeDefined();
  });

  it('check SensorGraph with available widgets', () => {
    let sg: SensorGraph = dummySg1;
    expect(sg.displayWidgetTemplates.length).toEqual(4);
    let widget0 = sg.displayWidgetTemplates[0];
    expect(widget0.showInApp).toEqual(false);
    expect(widget0.showInWeb).toEqual(true);
    expect(widget0.type).toEqual('val');
    expect(widget0.args.options.showLastValueGauge).toEqual(true);
    expect(widget0.label).toEqual('IO 1');
    let widget3 = sg.displayWidgetTemplates[3];
    expect(widget3.showInApp).toEqual(true);
    expect(widget3.showInWeb).toEqual(false);
  });
  it('check SensorGraph without available templates', () => {
    let sg2: SensorGraph = dummySg2;
    expect(sg2.displayWidgetTemplates.length).toEqual(0);
  });
  it('check SensorGraph.getUiExtra', () => {
    let sg4: SensorGraph = dummySg4;
    expect(sg4.getUiExtra('mobile').a).toEqual(1);
    expect(sg4.getUiExtra('web').a).toEqual(2);
  });

});
