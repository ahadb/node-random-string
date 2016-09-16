'use strict';

var expect = require('chai').expect;

var rs = require('../index');


describe('#randomString', function() {
    it('should return a string', function() {
        const result = rs.randomString(1);
        expect(result).to.a('string');
    })
})