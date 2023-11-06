import { DeviceImplementation } from "./device-implementation";

export class Television implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = "TV";

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  getName(): string {
    return this.name;
  }
  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
