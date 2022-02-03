import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Dropdown extends Component {
  @tracked open = false;

  @action
  dropdown() {
    this.open = !this.open;
  }
}
