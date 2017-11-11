var connMongo = require("../conn/mongodb");

var index = {
	getSideBarMenu:function (fn) {
		connMongo.find({
			collection:'sidebar',
			where:{},
			callback:function (result) {
				fn(result);
			}
		});
	}
};

module.exports = index;