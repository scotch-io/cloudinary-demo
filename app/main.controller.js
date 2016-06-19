angular
  .module('main.app', [])
  .controller('MainController', ['Upload', 'cloudinary', MainController]);

function MainController($upload, cloudinary) {
  var main         = this;
  main.uploadFiles = uploadFiles;
  main.photos      = [];

  /**
   * Upload the file
   */
  function uploadFiles(files) {

    angular.forEach(files, function(file) {
      // do the upload
      $upload.upload({
        url: "https://api.cloudinary.com/v1_1/scotch/image/upload",
        data: {
          upload_preset: 'bfmqzpxv',
          tags: 'photos',
          file: file      
        }
      }).progress(function (e) {
        files.progress = Math.round((e.loaded * 100.0) / e.total);
        files.status = "Your upload is " + files.progress + "% complete";
      }).success(function (data, status, headers, config) {
        main.photos = main.photos || [];
        main.photos.push(data);
        console.log(main.photos);
      }).error(function (data, status, headers, config) {
        file.result = data;
      });
    });

  }
}
