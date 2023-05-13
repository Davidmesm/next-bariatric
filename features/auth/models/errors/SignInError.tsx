class SignInError extends Error {
    errorCode: string;
    errorMessage: string;

    constructor(errorCode: string, errorMessage: string) {
      super(errorMessage);
      this.name = "SignInError";
      this.errorCode = errorCode
      this.errorMessage = errorMessage
    }
  }

export default SignInError