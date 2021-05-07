import Axios from 'axios';

Axios({
  url: '/data',
  method: 'get',
  baseURL: 'https://example.com',
  transformRequest: [
    function (data, headers) {
      // Do whatever you want to transform the data

      return data;
    },
  ],
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data

      return data;
    },
  ],
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  data: {
    name: 'Some Name',
  },
});
