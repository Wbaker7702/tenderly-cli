function matchesType(value, type) {
  if (type === "array") {
    return Array.isArray(value);
  }
  if (type === "integer") {
    return Number.isInteger(value);
  }
  if (type === "null") {
    return value === null;
  }
  if (type === "date") {
    return value instanceof Date;
  }
  if (type === "object") {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }
  return typeof value === type;
}

function validate(instance, schema) {
  const errors = [];
  if (schema && schema.type) {
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    const isValid = types.some((type) => matchesType(instance, type));
    if (!isValid) {
      errors.push({
        property: "",
        message: "instance does not match schema type"
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

validate.validate = validate;
validate.checkPropertyChange = function checkPropertyChange(value, schema) {
  return validate(value, schema);
};
validate._validate = validate;
validate.Integer = { type: "integer" };

module.exports = validate;
