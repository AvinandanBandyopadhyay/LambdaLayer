const axios = require('axios');

const invoke = async (method, url, data ) => {
  try {
      const response = await axios (
      {
        method,
        url,
        data
      }
    );
    return {
      statusCode: response.status,
      body: response.data
    };
  }
  catch(err) {
    if(err.response) {
      console.log("Error status: ",err.response.status)
      return {
        statusCode: err.response.status,
        body: err.response.data
      }
    }
    return {
      statusCode:400,
      body: 'Unknown Error'
    }
  }
}

module.exports = {
     invoke
}