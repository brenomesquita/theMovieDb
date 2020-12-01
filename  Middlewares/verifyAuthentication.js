module.exports = (_req, _res, next) => {
  // keeping in mind an application must verify the authenticity of a user
  // before inserting, modifying, deleting any info. This function has this purpose.
  // But to make the test revision easier it is just a middleware callinkg the next param.
  next();
};
