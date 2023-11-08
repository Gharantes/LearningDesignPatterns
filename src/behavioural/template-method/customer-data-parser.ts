import { CustomerData } from "./customer-data";

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];
  constructor(protected filePath: string) {}

  readonly fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseData();
    this.hook();
    this.customerData = this.fixCpf();
  };

  protected hook(): void {}
  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ""),
    }));
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  protected abstract async parseData(): Promise<CustomerData[]>;
}
