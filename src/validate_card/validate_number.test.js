import ValidateNumber from "./validate_number";

test("validate false", () => {
  const validate = new ValidateNumber();
  expect(validate.isValid("1231412441")).toEqual(false);
});

test("validate true", () => {
  const validate = new ValidateNumber();
  expect(validate.isValid("3530111333300000")).toEqual(true);
});

test("validate system jcb", () => {
  const validate = new ValidateNumber();
  expect(validate.checkSystem("3530111333300000")).toEqual("jcb");
});

test("validate number jcb", () => {
  const validate = new ValidateNumber();
  expect(validate.validateNumber("3530111333300000")).toEqual("jcb");
});
