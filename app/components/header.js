import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Dropdown extends Component {
  @tracked openSideMenu = false;

  @action
  showSideMenu() {
    this.openSideMenu = !this.openSideMenu;
  }
}
