/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 101.50000000000006,
        y: 108.75000140734778,
      }),
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("mood", "./Sprite4/costumes/mood.svg", { x: 144.5, y: 87.5 }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite4/sounds/pop.wav"),
      new Sound(
        "youtube_4TvnkHeJh60_audio",
        "./Sprite4/sounds/youtube_4TvnkHeJh60_audio.mp3"
      ),
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars.monies, this.stage.vars.priceForCpsSpeedd) >
        0 ||
      this.compare(
        this.stage.vars.monies,
        this.stage.vars.priceForCpsSpeedd
      ) === 0
    ) {
      this.stage.vars.priceForCpsSpeedd += 1.5;
      this.stage.vars.cpsSpied -= 0.05;
      this.stage.vars.monies +=
        this.toNumber(this.stage.vars.priceForCpsSpeedd) -
        this.toNumber(this.stage.vars.priceForCpsSpeedd) * 2;
    } else {
      yield* this.playSoundUntilDone("youtube_4TvnkHeJh60_audio");
    }
  }
}
