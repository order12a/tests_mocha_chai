const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');


//Results
sayHelloResult = app.sayHello();
addPositiveNumbersResult = app.addNumbers(6, 4);
addNegativeNumbersResult = app.addNumbers(-6, -4);
addPositiveAndNegativeNumbersResult = app.addNumbers(6, -4);

describe('App', function () {
    describe('sayhello()', function () {
        it('function sayHello should return hello.', function () {
            assert.equal(sayHelloResult, 'hello');
        });
        it('function sayHello should return type string.', function () {
            assert.typeOf(sayHelloResult, 'string');
    });
    describe('addNumbers()', function () {
        it('Function addNumbers should correctly add positive numbers', function () {
            assert.equal(addPositiveNumbersResult, 10);
        });
        it('Function addNumbers should correctly add negative numbers', function () {
            assert.equal(addNegativeNumbersResult, -10);
        });
        it('Function addNumbers should correctly add positive and negative numbers', function () {
            assert.equal(addPositiveAndNegativeNumbersResult, 2);
        });
        it('Function addNumbers should be above 5', function () {
            assert.isAbove(addPositiveNumbersResult, 5);
        });
        it('Function addNumbers should return type number', function () {
            assert.typeOf(addPositiveNumbersResult, 'number');
        });
    })

})});





