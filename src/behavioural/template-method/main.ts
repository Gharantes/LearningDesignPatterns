import { resolve } from "path";
import { CustomerDataParserTxt } from "./customer-data-parser-txt";
import { CustomerDataParserJson } from "./customer-data-parser-json";

async function run() {
  const filePathTXT = resolve(__dirname, "files", "customer.txt");
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTXT);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  const filePathJson = resolve(__dirname, "files", "customer.json");
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}
run();
