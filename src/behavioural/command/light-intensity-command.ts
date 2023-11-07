import { SmartHouseLight } from "./smart-house-light";
import { SmartHouseCommand } from "./command";

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute() {
    const intensity = this.light.increaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
  undo() {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
}
