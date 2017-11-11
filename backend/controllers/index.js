var common = require("../api/index");

var commonControllers = {};

commonControllers.getSideBarMenu = function (fn) {
	common.getSideBarMenu(fn);
}


module.exports = commonControllers;