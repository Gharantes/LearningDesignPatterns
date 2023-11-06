import validator from "validator";
import isEmail = validator.isEmail;

import { EmailValidatorProtocol } from "./email-validator-protocol";

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
