const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeUndefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
// toStrictEqual to test that objects have the same types as well as structure

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toStrictEqual
test('User should be Fyunka Finka object', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Fyunka',
    lastName: 'Finka'
  });
});

// Less than and greater than || toBeLessThanOrEqual
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be un usernames', () => {
  usernames = ['john', 'sara'];
  expect(usernames).toContain('admin');
});
