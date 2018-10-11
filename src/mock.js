var Mock = require('mockjs');

Mock.mock('/api/users', {
    'users|10': [{
      'id|': '@id()',
      'username': '@cname()',
      'password': '@string("number",6)',
      'address':'@province()@city()@county()',
      'islogin|1-2':false,
      'image':Mock.Random.image('200x100', '#4A7BF7', 'Hello'),
      'telephone':/[1][0-9]{10}/
    }]
  }),

Mock.mock('/api/swiper', {
  'swiper|6': [{
    'id': '@id()',
    'image':Mock.Random.image('200x100', '#ccc', '#FFF', 'png', 'hahaha')
  }]
}),

Mock.mock('/api/login', {
  'user|10':[{
    'id|+1':0,

  }]
}),

Mock.setup({
  timeout: '200 - 400'
})
