/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 116.57829712785122,
        y: 201.9264210461427,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars.monies, this.stage.vars.rebornthPriec) > 0 ||
      this.compare(this.stage.vars.monies, this.stage.vars.rebornthPriec) === 0
    ) {
      this.stage.vars.reborh++;
      this.stage.vars.monies = 0;
      this.stage.vars.clackPeuhSecund = 0;
      this.stage.vars.clicPowah = 1;
      this.stage.vars.cpsPriece = 1;
      this.stage.vars.clackPeuhSecund = 0;
      this.stage.vars.clackPeuhSecund += 0;
      this.stage.vars.monies +=
        this.toNumber(this.stage.vars.rebornthPriec) -
        this.toNumber(this.stage.vars.rebornthPriec) * 2;
      this.stage.vars.multipliah += 1.5;
    } else {
      yield* this.playSoundUntilDone("youtube_4TvnkHeJh60_audio");
    }
  }
}
