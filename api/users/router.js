module.exports = function(app){
  app.get('/api/users/:action',function(req,res){
        res.send(' in router / users / action = '+ req.params.action);
  });
};