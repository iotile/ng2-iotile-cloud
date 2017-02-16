'use strict';

import { VarType } from '../../iotile/models/vartype';
import { Variable } from '../../iotile/models/variable';
import { Unit } from '../../iotile/models/unit';
import { Mdo } from '../../iotile/models/mdo';

const dummyVarType: VarType = new VarType({
    "name": "Liquid Volume",
    "available_input_units": [
        {
            "unit_full": "Gallons",
            "unit_short": "g",
            "m": 378,
            "d": 100,
            "o": 0.0
        },
        {
            "unit_full": "Liters",
            "unit_short": "l",
            "m": 1,
            "d": 1,
            "o": 0.0
        }
    ],
    "available_output_units": [
        {
            "unit_full": "Foo",
            "unit_short": "g",
            "m": 100,
            "d": 378,
            "o": 0.0
        },
        {
            "unit_full": "Bar",
            "unit_short": "l",
            "m": 1,
            "d": 1,
            "o": 0.0
        }
    ],
    "storage_units_full": "Liters",
    "storage_units_short": "l"
});

describe('VarTypeTest', () => {

  it('check basic varType', () => {
    let varType: VarType = dummyVarType;
    expect(varType.name).toEqual('Liquid Volume');
    expect(varType.unitFullName).toEqual('Liters');
    expect(varType.unitShortName).toEqual('l');
  });

  it('check available input in varType', () => {
    let varType: VarType = dummyVarType;
    expect(varType.availableInputUnits.length).toEqual(2);
    expect(varType.availableInputUnits[0].fullName).toEqual('Gallons');
    expect(varType.availableInputUnits[1].fullName).toEqual('Liters');
  });

  it('check available output in varType', () => {
    let varType: VarType = dummyVarType;
    expect(varType.availableOutputUnits.length).toEqual(2);
    expect(varType.availableOutputUnits[0].fullName).toEqual('Foo');
    expect(varType.availableOutputUnits[1].fullName).toEqual('Bar');
  });

});