angular
	.module('app', [
	  'main.app',
	  'ngFileUpload',
	  'cloudinary'
	])
	.config(['cloudinaryProvider', function (cloudinaryProvider) {
	  cloudinaryProvider
	      .set("cloud_name", "scotch") 		// Cloudinary cloud name found in dashboard settings 
	      .set("upload_preset", "bfmqzpxv"); // Cloudinary preset found in dashboard settings
	}]);