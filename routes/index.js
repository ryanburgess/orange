exports.index = function(req, res){
  res.render('index', { 
    title: 'Orange is the New Black API',
    description: 'An API for the characters on the Netflix original show Orange is the New Black',
    image: '/img/orange.png',
    github: 'https://github.com/ryanburgess/orange',
    api: [
      {
        'get': 'Show all',
        'example': '',
        'link': '/all',
        'exampleLink': '/all'
      },
      {
        'get': 'Character name',
        'example': 'crazy-eyes',
        'link': '/name/:name',
        'exampleLink': '/name/crazy-eyes'
      },
      {
        'get': 'Category',
        'example': 'inmate, staff, guard, civilian',
        'link': '/category/:category',
        'exampleLink': '/category/inmate'
      },
      {
        'get': 'Season',
        'example': 'S1, S2, S3',
        'link': '/season/:season',
        'exampleLink': '/season/s1'
      },
      {
        'get': 'Gender',
        'example': 'female or male',
        'link': '/gender/:gender',
        'exampleLink': '/gender/female'
      },
      {
        'get': 'Status',
        'example': 'alive or deceased',
        'link': '/status/:status',
        'exampleLink': '/status/alive'
      }
    ]
  });
};