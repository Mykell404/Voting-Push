'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'votingapp-secret',

  TWITTER_ID:       '1pdsubZvKmBHFJ6gbbbYVLDiL',
  TWITTER_SECRET:   'Vct9q6Ki9IWJII374GZ1pNCUKIxFLsJbVlMBddzkWIJLbZ4qDw',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
