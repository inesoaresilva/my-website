'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const fs = require('fs');
let posts = fs.readdirSync('data/post').map((file) => {
  return `posts/${file.replace(/\.md$/, '')}`;
});

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      extensions: ['js', 'css', 'map'],
    },
    prember: {
      urls: ['/', '/about-me', '/contact', '/posts', ...posts],
    },
    'responsive-image': {
      fingerprint: false,
      images: [
        {
          include: 'assets/images/posts/**/*',
          widths: [825, 550, 275],
          removeSource: false,
        },
      ],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
