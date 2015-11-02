var user = require('../../app/controllers/user.server.controller');
var article = require('../../app/controllers/article.server.controller');

module.exports = function(app){
  app.route('/api/articles')
    .get(article.list)
    .post(user.requiresLogin,article.create);
  app.route('/api/articles/:articleId')
    .get(article.read)
    .put(user.requiresLogin,article.hasAuthorization,article.update)
    .delete(user.requiresLogin,article.hasAuthorization,article.delete);
  app.param('articleId',article.articleById);  
};
