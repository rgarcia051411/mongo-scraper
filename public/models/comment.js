var mongoose = require('mongoose');

	var Comment = mongoose.model('Comment',{
		title:{
			type: String,
			require: true,
			minlength: 1,
			trim: true
		},
		comment:{
			type: String,
			require: true,
			minlength: 1,
			trim: true
		}
	});

module.exports = {Comment};