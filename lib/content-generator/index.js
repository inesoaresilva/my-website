/* eslint-disable node/no-extraneous-require */
'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const BroccoliMergeTrees = require('broccoli-merge-trees');

const postsTree = new StaticSiteJson('data/post', {
  type: 'post',
  contentFolder: 'data/posts',
  attributes: [
    'title',
    'date',
    'category',
    'image',
    'description',
    'comments',
    'header',
  ],
  collate: true,
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return new BroccoliMergeTrees([postsTree]);
  },
};
