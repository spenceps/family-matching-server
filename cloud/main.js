
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.beforeSave("GameResult", function(request, response)  {

	var query = new Parse.Query("GameResult");
	query.equalTo("person",request.object.get("person"));
	query.equalTo("game",request.object.get("game"));
	query.limit(1000);
	console.log("about to make query");
	query.find().then(function(previousResults) {
		request.object.set("gameCount",previousResults.length + 1);
		response.success();
	}, function(error) {
		response.success();
	});
});