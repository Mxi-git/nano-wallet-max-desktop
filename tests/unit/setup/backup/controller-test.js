import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('controller:setup/backup', 'Unit | Controller | setup/backup',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let controller = this.subject();
      expect(controller).to.be.ok;
    });
  }
);
