import Route from '@ember/routing/route';

export default class AboutMeRoute extends Route {
  model() {
    return ['Junior Software Engineer 👩‍💻', 'Traveller 🌎'];
  }
}
