import showdown from 'showdown';

export function initialize(/* application */) {
  showdown.extension('polaroid', () => {
    return [
      {
        type: 'lang',
        regex: /^!\[(.*)\]\((.*)(\.[^#]+)(#.*)?\)/gm,
        replace: function name(_, caption, src, extension, hashtag) {
          const types = ['.webp', '.jpg'];
          const sizes = ['1100', '825', '550', '275'];

          let figureClass = '';
          if (hashtag) {
            figureClass = hashtag.replace('#', '');
          }

          let sources = '';
          types.forEach((type) => {
            const srcset = [];

            sizes.forEach((size) => {
              srcset.push(`${src}${size}w${type} ${size}w`);
            });
            sources += `<source srcset="${srcset.join(', ')}" type="image/${
              type === '.webp' ? 'webp' : 'jpeg'
            }">`;
          });
          return `<figure class="${figureClass}">
          <picture>
              ${sources}
              <img role='img' alt='${caption}' src='${src}${extension}' >
            </picture>
            <figcaption> ${caption} </figcaption>
          </figure>`;
        },
      },
    ];
  });
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  initialize,
};
