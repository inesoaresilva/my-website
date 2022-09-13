import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const posts = await this.store.findAll('post');

    return posts
      .toArray()
      .sort((a, b) => b.date - a.date)
      .slice(0, 3);
  }
}
