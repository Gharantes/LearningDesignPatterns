import validator from "validator";
import isEmail = validator.isEmail;

import { EmailValidatorFnProtocol } from "./email-validator-protocol";

// export class EmailValidatorFnAdapter implements EmailValidatorProtocol {
//   isEmail(value: string): boolean {
//     return isEmail(value);
//   }
// }

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string
): boolean => {
  return isEmail(value);
};
