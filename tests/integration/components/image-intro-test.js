import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | image-intro', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ImageIntro />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ImageIntro>
        template block text
      </ImageIntro>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
