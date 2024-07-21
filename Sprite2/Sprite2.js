/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 93.80057925211085,
        y: 118.15278649354735,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite2/sounds/pop.wav"),
      new Sound(
        "youtube_4TvnkHeJh60_audio",
        "./Sprite2/sounds/youtube_4TvnkHeJh60_audio.wav"
      ),
      new Sound("aaaaaaaaaa", "./Sprite2/sounds/aaaaaaaaaa.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
    ];
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars.monies, this.stage.vars.priceForClicPowah) >
        0 ||
      this.compare(
        this.stage.vars.monies,
        this.stage.vars.priceForClicPowah
      ) === 0
    ) {
      this.stage.vars.priceForClicPowah += 1.5;
      this.stage.vars.monies +=
        this.toNumber(this.stage.vars.priceForClicPowah) -
        this.toNumber(this.stage.vars.priceForClicPowah) * 2;
      this.stage.vars.clicPowah++;
    } else {
      yield* this.playSoundUntilDone("youtube_4TvnkHeJh60_audio");
    }
  }

  *whenthisspriteclicked2() {
    if (
      this.compare(this.stage.vars.monies, this.stage.vars.priceForClicPowah) >
        0 ||
      this.compare(
        this.stage.vars.monies,
        this.stage.vars.priceForClicPowah
      ) === 0
    ) {
      this.stage.vars.priceForClicPowah += 1.5;
      this.stage.vars.monies +=
        this.toNumber(this.stage.vars.priceForClicPowah) -
        this.toNumber(this.stage.vars.priceForClicPowah) * 2;
      this.stage.vars.clicPowah += this.toNumber(this.stage.vars.multipliah);
    } else {
      yield* this.playSoundUntilDone("youtube_4TvnkHeJh60_audio");
    }
  }
}
