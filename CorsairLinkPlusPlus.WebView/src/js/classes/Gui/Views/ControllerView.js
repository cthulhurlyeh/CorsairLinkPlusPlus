/**
 * CorsairLinkPlusPlus
 * Copyright (c) 2014, Mark Dietzer & Simon Schick, All rights reserved.
 *
 * CorsairLinkPlusPlus is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or (at your option) any later version.
 *
 * CorsairLinkPlusPlus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with CorsairLinkPlusPlus.
 */

"use strict";

var View = require("Gui/View");

var util = require("Util");

var Api = require("Api");

function ControllerView(controller) {
	this.controller = controller;
}

var p = inherit(ControllerView, View);

p.sendUpdate = function() {
	console.log("test");
	var api = Api.getInstance();
	for(var device of this.controller.getDevices())
		api.sendControllerUpdate(device, this.controller);
}

return ControllerView;