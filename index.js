/* eslint-env node */

'use strict';

const path = require('path');
const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;

module.exports = {
  name: '@ember-intl/intl-messageformat-parser',

  treeForAddon(tree) {
    let messageFormatParserPath = path.dirname(require.resolve('@ember-intl/intl-messageformat-parser'));
    let messageFormatParserTree = funnel(new UnwatchedDir(path.join(messageFormatParserPath, 'src')), {
      files: ['parser.js']
    });

    let addonTree = mergeTrees([messageFormatParserTree, tree], { overwrite: true });

    return this._super.treeForAddon.call(this, addonTree);
  }
};
