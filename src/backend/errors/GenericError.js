module.exports = class GenericError extends Error {
  constructor(error) {
    super(error);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
};
