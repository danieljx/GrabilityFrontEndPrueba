/*
 * Module dependencies
 */

import notices from './notices';

export default {
  notices: {
    find: function(callback) {
      setTimeout(() => {
        callback(notices);
      }, 3000);
    }
  }
}