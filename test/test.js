'use strict';

const expect = require('chai').expect;

const rs = require('../index');


describe('#randomString', function() {
    it('should return a string', function() {
        const result = rs.randomString(1);
        expect(result).to.a('string');
    })
})