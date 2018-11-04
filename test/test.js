// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateNoOfSeats function with several sets of inputs', function (assert) {
    assert.equal(App.calculatedSeats(3, 4), 12, 'Calculated and tested with two (3,4) small Positive Numbers');
    assert.equal(App.calculatedSeats(-3, -4), 0, 'calculated and Tested with two (-3,-4) negative numbers. Any arguments less than 1 will be set to 1.');
    assert.equal(App.calculatedSeats(0, 0), 0, 'Calculated and tested with two zeros(0,0)');
    assert.equal(App.calculatedSeats(1234567, 9876543), 0, 'Calculated and tested with two(1234567,9876543) big numbers. Any arguments greater than max value will be set to 0 ');
    assert.equal(App.calculatedSeats('', ''), 0, 'Calculated and Tested with two empty values.');
    assert.equal(App.calculatedSeats('dfg', 'ert'), 0, 'Calculated and Tested with Strings. Any arguments with strings will be set as a 0.');
    assert.equal(App.calculatedSeats('2.6', '0.0'), 0, 'Calculated and Tested with two double values,Any arguments apart from int values can be set as a 0');
    //assert.throws(function () { App.calculatedSeats('a', 'b'); }, 'The given argument is not a number', 'Passing in a string correctly raises an Error');
});


