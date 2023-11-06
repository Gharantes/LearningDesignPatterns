import { RemoteControl } from "./remove-control/remote-control";
import { RemoteControlWithVolume } from "./remove-control/remote-control-with-volume";
import { Television } from "./device/television";
import { Radio } from "./device/radio";

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!("volumeUp" in abstraction)) return;
  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
}

const tv = new Television();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
