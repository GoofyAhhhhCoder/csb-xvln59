/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("yellow", "./Stage/costumes/yellow.svg", {
        x: 247.99999999999994,
        y: 248.00000000000009,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.monies = 0;
    this.vars.priceForClicPowah = 5;
    this.vars.clicPowah = 1;
    this.vars.clackPeuhSecund = 0;
    this.vars.cpsSpied = 1;
    this.vars.cpsPriece = 10;
    this.vars.priceForCpsSpeedd = 25;
    this.vars.rebornthPriec = 100000;
    this.vars.multipliah = 1;
    this.vars.reborh = 0;

    this.watchers.monies = new Watcher({
      label: "monies",
      style: "normal",
      visible: true,
      value: () => this.vars.monies,
      x: 245,
      y: 175,
    });
    this.watchers.priceForClicPowah = new Watcher({
      label: "price for clic powah!!!!",
      style: "large",
      visible: true,
      value: () => this.vars.priceForClicPowah,
      x: 282,
      y: -122,
    });
    this.watchers.clicPowah = new Watcher({
      label: "clic powah!!!!",
      style: "normal",
      visible: true,
      value: () => this.vars.clicPowah,
      x: 245,
      y: 147,
    });
    this.watchers.clackPeuhSecund = new Watcher({
      label: "clack peuh secund",
      style: "normal",
      visible: true,
      value: () => this.vars.clackPeuhSecund,
      x: 245,
      y: 119,
    });
    this.watchers.cpsSpied = new Watcher({
      label: "cps spied!!!!",
      style: "normal",
      visible: true,
      value: () => this.vars.cpsSpied,
      x: 245,
      y: 91,
    });
    this.watchers.cpsPriece = new Watcher({
      label: "cps priece!!!",
      style: "large",
      visible: true,
      value: () => this.vars.cpsPriece,
      x: 370,
      y: -129,
    });
    this.watchers.priceForCpsSpeedd = new Watcher({
      label: "price for cps speedd!!!",
      style: "large",
      visible: true,
      value: () => this.vars.priceForCpsSpeedd,
      x: 499,
      y: -108,
    });
    this.watchers.rebornthPriec = new Watcher({
      label: "rebornth priec",
      style: "large",
      visible: true,
      value: () => this.vars.rebornthPriec,
      x: 603,
      y: -99,
    });
    this.watchers.multipliah = new Watcher({
      label: "multipliah",
      style: "normal",
      visible: true,
      value: () => this.vars.multipliah,
      x: 245,
      y: 63,
    });
    this.watchers.reborh = new Watcher({
      label: "reborh",
      style: "normal",
      visible: true,
      value: () => this.vars.reborh,
      x: 603,
      y: 172,
    });
  }
}
