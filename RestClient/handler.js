'use strict';
const restInvoker = require('/opt/nodejs/utils/restInvoker');

module.exports.invokeapi = async event => {
  return restInvoker.invoke(
    'post',
    'https://3vbkk0ouu9.execute-api.us-west-2.amazonaws.com/dev/oauth',
    event
  );
}