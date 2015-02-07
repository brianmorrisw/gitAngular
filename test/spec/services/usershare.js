'use strict';

describe('Service: userShare', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var userShare;
  beforeEach(inject(function (_userShare_) {
    userShare = _userShare_;
  }));

  it('should do something', function () {
    expect(!!userShare).toBe(true);
  });

});
