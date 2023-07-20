import ValidateNumber from "./validate_number"

test('Test validate false', () => {
  const validate = new ValidateNumber()
  expect(validate.isValid('1231412441')).toEqual(false);
})

test('Test validate true', () => {
  const validate = new ValidateNumber()
  expect(validate.isValid('3530111333300000')).toEqual(true);
})

test('Test validate system jcb', () => {
  const validate = new ValidateNumber()
  expect(validate.checkSystem('3530111333300000')).toEqual('jcb');
})

test('Test validate system jcb', () => {
  const validate = new ValidateNumber()
  expect(validate.validateNumber('3530111333300000')).toEqual('jcb');
})