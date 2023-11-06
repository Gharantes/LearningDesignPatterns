import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";
import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("Email é válido");
  } else {
    console.log("Email é inválido");
  }
}
function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log("Email é válido");
  } else {
    console.log("Email é inválido");
  }
}
validaEmailClass(new EmailValidatorClassAdapter(), "luix@gmail.com");
validaEmailFn(emailValidatorFnAdapter, "Luiza@gmailom");
