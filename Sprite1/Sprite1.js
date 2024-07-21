/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271,
      }),
    ];

    this.sounds = [
      new Sound("6320032415744000", "./Sprite1/sounds/6320032415744000.wav"),
      new Sound("Meow", "./Sprite1/sounds/Meow.wav"),
      new Sound(
        "youtube_fpQHabt6e-w_audio",
        "./Sprite1/sounds/youtube_fpQHabt6e-w_audio.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.monies +=
      this.toNumber(this.stage.vars.clicPowah) *
      this.toNumber(this.stage.vars.multipliah);
    yield* this.playSoundUntilDone("youtube_fpQHabt6e-w_audio");
    yield* this.sayAndWait("s̶̟̪̣̝͉̝̤͈̗̓̓̈̇̔̎̈͌́̂̓̃̐̑͂̑̌́̕͝͝ͅk̷̢̡̡͙̜͎̬̟̹͍̘̲̦̘̯̺̙͚̜̭̗͎̘̜̦̻͒̇́́̓͂̀͛͊͌̎̌̍̇̔͐̔̀̇́͛̈́̊͋͗̒̄̄̀̎͛̆̍̓̾͂͘͘͝͝͝ì̸̢̡̡͉̠̳͇̜̱̦̼͍̹̫̼͛̋̓́͐̌̈̓̾͗̿̐͂̀̃̑̑̊̋̃͂̋͋̀̒̈̉̎̄̿̿̊͗̃̄̿͛̚͘͘͘͘͘͝͠͝ͅb̶̨̧̢̛̞͕͕͉̟̩̱̹͖̗͖͕͉̼͈͍̰̥̪̰̯̥͖̲̫͇̣̞̯͖̳̗͈̳̮̦̠͉̀̀̀̃̌̏͛̏̋̍͛͌̒̈͗̏̂̇͑̿͒̌͌̀̍͌̈́̌́͊̊̊̋̀̒̈̉̑̑͂̈̕̕̕͝͝͝i̸̛̛̪͇̬͛̈́͗̀͗̔́̅͂̊͑̍̀͂̌̀́̈́͌̐̈́̈̍̽̊̅̂͗̂̉̀͒͘͝͝͝͝d̸̨̨̨̢̛̞̝̹̲̳̯̙͔̜͈͚̩̝͓̼̱͕͉̹̫̲͖̤͈̭̞̰͇̩̬̳͍̯̃̔́͐̈̕ͅį̸̛̼͚̥̹̖̖̣̟̠̜̼̫̥́̄̌̑̒̚ ̷̢̡̡͈̜̮͚̘̻̳͖̮̟͍̜̲̞͖͕̹̰͍̘̩͎̫̪̯͐̍̋̔͐͗̒̔̾̒͒̽̎͐͋͐̆̈́̈́͂̿͊̇̈͘͘̚͝ͅͅb̶̛̛̛̯͖̲̣̞͚̗̖̝̩͂́́͆̑̔̅̍͌͊̽̄̑͂͑̈́̃̔͛̚͜͝͠͝͝ͅo̷̼̬̙̞̰̭̺̲̼̩͖̘̖̦͔̱͕̣̫̫͑͌̌̈̀͜͠͝p̵̧̢̧̢̰͔̦͖̲͓̤̰̗̤̰͖͓͔͕̫̜̟͙̗̣̥͔̯̪̱̟͎͈͚̪̮̈́̓̓̕ ̷̡̜͔͉͙̩̜̖̈́̇̓͜b̸̧̡̖͙̜̮̱͉̼̩̣͉̥̩͍͕͎̜̠̗͈̖͎͉̰͙̹̤͇̤͉͂̈́̋̃͆̈́͆̾̏̊͑͆̽͒̄́̕͝͝͝ͅͅo̴̢̘͍̜̺͙̱͕̯̖̳̞̹͎̳͍̩̥̻̤̘͓̭̻͓̠͖̦̦͑̏̌̆͛̉̏͒̿͋̈̍̓͗̂̏̈́ͅp̴̢̧̧̡̠̱̳͔͎̲̥͈̠̣͔̤̩̞̱͖͕͓͌̓͊̒̊̉̉̇̎͊͒̈́́͑͂̇̌͘͜͝͝ ̴̡̨̛̛̩͔̦̠̥̫̞͔̘͓̫̖̱̰͎̝̜̘̺̫͓̫̤̾̎̋͋̈́̐̀̊͒͊̈́̀̌̊̂̚͘b̵̢̧̧͈̹̯̺͕̥̖͓̣̲͕̠̘͍͉͉̠̯̳͈̤̍̑͠ö̴̧̡̢͇̮̥̰̞̹̟̖̥͚̯̭͇̳͖̪́̄̈͌̇͐̐̀̆̅̌͑̀͗͘̕͘p̷̧̧̢̛̗̯̠̖͕̺͙̠̥̭̲͍̠͕͙̯̝͚͍̘̩̪̪̰̳̝̩̌̎͂̊̅͋̓̾͌̀͒̌͘͘͜͝", 1);
  }

  *whenGreenFlagClicked() {
    this.stage.vars.reborh = 0;
    this.stage.vars.clackPeuhSecund = 0;
    this.stage.vars.clicPowah = 1;
    this.stage.vars.cpsPriece = 10;
    this.stage.vars.cpsSpied = 1;
    this.stage.vars.monies = 0;
    this.stage.vars.priceForClicPowah = 5;
    this.stage.vars.priceForCpsSpeedd = 25;
    this.stage.vars.rebornthPriec = 100000;
    this.stage.vars.multipliah = 1;
    while (true) {
      yield* this.playSoundUntilDone(6320032415744000);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.vars.monies +=
        this.toNumber(this.stage.vars.clackPeuhSecund) *
        this.toNumber(this.stage.vars.multipliah);
      yield* this.wait(this.toNumber(this.stage.vars.cpsSpied));
      yield;
    }
  }
}
