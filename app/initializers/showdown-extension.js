import showdown from 'showdown';

export function initialize(/* application */) {
  showdown.extension('polaroid', () => {
    return [
      {
        type: 'lang',
        regex: /^!\[(.*)\]\((.*)(\..+)\)/gm,
        replace: function name(_, caption, src, extension) {
          const types = ['.webp', '.jpg'];
          const sizes = ['825', '550', '275'];

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
          return `<figure>
          <picture>
              ${sources}
              <img role='img' alt=${caption} src='${src}${extension}' >
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
