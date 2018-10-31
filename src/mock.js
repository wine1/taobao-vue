var Mock = require('mockjs');

// Mock.mock('/api/users', {
//     'users|10': [{
//       'id|': '@id()',
//       'username': '@cname()',
//       'password': '@string("number",6)',
//       'address': '@province()@city()@county()',
//       'image': Mock.Random.image('200x100', '#4A7BF7', 'Hello'),
//       'telephone': /[1][0-9]{10}/
//     }]
//   }),

  Mock.mock('/api/swiper', {
    'swiper|6': [{
      'id': '@id()',
      'image': Mock.Random.image('200x100', '#ccc', '#FFF', 'png', 'hahaha')
    }]
  }),

//   Mock.mock('/api/shops', {
//     'shop|6': [{
//       'id|': '@id()',
//       'shopname': '@name()',
//       'image': Mock.Random.image('#4A7BF7', 'shop'),
//       'good|1-5': [{
//         'id|': '@id()',
//         'goodname': '@name()',
//         'image': Mock.Random.image('200x100', '#ccc', '#FFF', 'png', 'hahaha'),
//         'price|100-200': 1,
//         'count|1-10': 1,
//       }]
//     }]
//   }),

  Mock.setup({
    timeout: '200 - 400'
  })
