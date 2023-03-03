import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ReactionComponent extends Component {
  @tracked clicks = 0;
  @tracked fakeVotes;

  constructor() {
    super(...arguments);
    if (localStorage.getItem(`${this.args.id}-clicks`)) {
      this.clicks = parseInt(localStorage.getItem(`${this.args.id}-clicks`));
    }
    if (localStorage.getItem(`${this.args.id}-fakeVotes`)) {
      this.fakeVotes = parseInt(
        localStorage.getItem(`${this.args.id}-fakeVotes`)
      );
    } else {
      this.fakeVotes = Math.floor(Math.random() * 20);
      localStorage.setItem(`${this.args.id}-fakeVotes`, this.fakeVotes);
    }
  }

  @action
  onClick() {
    if (this.clicks > 5) return;
    this.clicks++;
    localStorage.setItem(`${this.args.id}-clicks`, this.clicks);
  }

  get fillHeight() {
    if (this.clicks > 5) return 0;
    return 78 - this.clicks * 13;
  }

  get votes() {
    return this.fakeVotes + this.clicks;
  }

  get sunFull() {
    if (this.clicks == 6) return true;
    else return false;
  }

  get sunNotFull() {
    if (this.clicks < 6) return true;
    else return false;
  }
}
