'use strict';
// import moment from 'moment';

import { DataFilterArgs } from '../../iotile/models/datafilterargs';

describe('DataFilterArgsTest', () => {

  it('check buildFilterString() for dates', () => {
    let args: DataFilterArgs = new DataFilterArgs();
    expect(args).toBeTruthy();
    expect(args.buildFilterString()).toEqual('');
    args.startDate = new Date("2016-09-13T20:29:13.825000Z");
    expect(args.buildFilterString()).toEqual("?start=2016-09-13T20:29:13.825Z");
    args = new DataFilterArgs();
    args.endDate = new Date("2016-10-13T20:29:13.825000Z");
    expect(args.buildFilterString()).toEqual("?end=2016-10-13T20:29:13.825Z");
    args.startDate = new Date("2016-09-13T20:29:13.825000Z");
    expect(args.buildFilterString()).toEqual("?start=2016-09-13T20:29:13.825Z&end=2016-10-13T20:29:13.825Z");
    args.page = 2;
    expect(args.buildFilterString()).toEqual("?start=2016-09-13T20:29:13.825Z&end=2016-10-13T20:29:13.825Z&page=2");
  });

  describe('check buildFilterString()', () => {
    let streamSlugMock = 's--0000-0000--0000-0000-0000--5001';

    it ('should build filter', () => {
      let args = new DataFilterArgs();
      args.filter = streamSlugMock;
      expect(args.buildFilterString()).toEqual(`?filter=${streamSlugMock}`);
    });

    it('should build startStreamerId', () => {
      let args = new DataFilterArgs();
      args.filter = streamSlugMock;
      args.startStreamerId = 2412;
      expect(args.buildFilterString()).toEqual(`?filter=${streamSlugMock}&streamer_id_0=${args.startStreamerId}`);
    });

    it('should build endStreamerId', () => {
      let args = new DataFilterArgs();
      args.filter = streamSlugMock;
      args.endStreamerId = 3793;
      expect(args.buildFilterString()).toEqual(`?filter=${streamSlugMock}&streamer_id_1=${args.endStreamerId}`);
    });
  });

  it('check buildFilterString() for endStreamerId', () => {
    let args: DataFilterArgs = new DataFilterArgs();

  });

  it('check buildFilterLabel() or dates', () => {
    let args: DataFilterArgs = new DataFilterArgs();
    expect(args).toBeTruthy();
    expect(args.buildFilterLabel()).toEqual(null);
    args.startDate = new Date("2016-09-13T20:29:13.825000Z");
    expect(args.buildFilterLabel()).toEqual(" from 9/13/2016");
    args = new DataFilterArgs();
    args.endDate = new Date("2016-10-13T20:29:13.825000Z");
    expect(args.buildFilterLabel()).toEqual(" to 10/13/2016");
    args.startDate = new Date("2016-09-13T20:29:13.825000Z");
    expect(args.buildFilterLabel()).toEqual(" from 9/13/2016 to 10/13/2016");
  });

  it('check lastN', () => {
    let args: DataFilterArgs = new DataFilterArgs();
    expect(args).toBeTruthy();
    args.lastN = 10;
    expect(args.buildFilterString()).toEqual("?lastn=10");
    expect(args.buildFilterLabel()).toEqual(" last 10 entries");
  });
});
