angular
  .module('main.app', [])
  .controller('MainController', ['Upload', MainController]);

function MainController($upload) {
  var main = this;
  main.uploadFiles = uploadFiles;

  main.message = 'bladslasdlkfjasdlkfjs';

  /**
   * Upload files
   */
  function uploadFiles(file) {
    // do the upload
    $upload.upload({
      url: "https://api.cloudinary.com/v1_1/scotch/image/upload",
      data: {
        upload_preset: 'bfmqzpxv',
        file: file
      }
    }).progress(function (e) {
      file.progress = Math.round((e.loaded * 100.0) / e.total);
      file.status = "Uploading... " + file.progress + "%";
    }).success(function (data, status, headers, config) {
      $rootScope.photos = $rootScope.photos || [];
      data.context = {custom: {photo: $scope.title}};
      file.result = data;
      $rootScope.photos.push(data);
    }).error(function (data, status, headers, config) {
      file.result = data;
    });
  }
}
