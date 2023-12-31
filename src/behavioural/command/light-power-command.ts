import { SmartHouseLight } from "./smart-house-light";
import { SmartHouseCommand } from "./command";

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute() {
    this.light.on();
  }
  undo() {
    this.light.off();
  }
}
