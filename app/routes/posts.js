import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  model() {
    console.log('enters in posts');
    return this.store.findAll('post');
  }
}
