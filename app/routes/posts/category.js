import Route from '@ember/routing/route';

export default class PostsCategoryRoute extends Route {
  async model(params) {
    const posts = await this.store.findAll('post');
    return posts.filter((item) => {
      return item.category === params.category;
    });
  }
}
