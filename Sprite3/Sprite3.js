/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 89.5,
        y: 119.25,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite3/sounds/pop.wav"),
      new Sound(
        "youtube_4TvnkHeJh60_audio",
        "./Sprite3/sounds/youtube_4TvnkHeJh60_audio.wav"
      ),
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars.monies, this.stage.vars.cpsPriece) > 0 ||
      this.compare(this.stage.vars.monies, this.stage.vars.cpsPriece) === 0
    ) {
      this.stage.vars.cpsPriece += 1.5;
      this.stage.vars.monies +=
        this.toNumber(this.stage.vars.cpsPriece) -
        this.toNumber(this.stage.vars.cpsPriece) * 2;
      this.stage.vars.clackPeuhSecund++;
    } else {
      yield* this.playSoundUntilDone("youtube_4TvnkHeJh60_audio");
    }
    this.stage.vars.monies +=
      this.toNumber(this.stage.vars.cpsPriece) -
      this.toNumber(this.stage.vars.cpsPriece) * 2;
    this.stage.vars.clackPeuhSecund++;
  }
}
