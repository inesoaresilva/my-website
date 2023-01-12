import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr title;
  @attr('date') date;
  @attr category;
  @attr description;
  @attr image;
  @attr comments;
  @attr content;
  @attr html;
  @attr header;
}
