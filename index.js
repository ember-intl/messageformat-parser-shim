/* jshint node: true */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

const messageFormatParserPath = path.dirname(require.resolve('intl-messageformat-parser'));

module.exports = {
  name: 'intl-messageformat-parser',

  treeForAddon(tree) {
    let messageFormatParserTree = new Funnel(new UnwatchedDir(path.join(messageFormatParserPath, 'src')), {
      files: ['parser.js']
    });

    let addonTree = mergeTrees([messageFormatParserTree, tree]);

    return this._super.treeForAddon.call(this, addonTree);
  }
};
