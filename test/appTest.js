const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
// const app = require('../app');

describe('App', function () {
    it('function sayHello should return hello.', function () {
        let result = sayHello();
        assert.equal(result, 'hello');
    });
    it('function sayHello should return type string.', function () {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

});