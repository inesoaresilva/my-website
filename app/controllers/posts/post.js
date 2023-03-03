import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class PostsPostController extends Controller {
  @service fastboot;

  get notFastboot() {
    return !this.fastboot.isFastBoot;
  }
}
