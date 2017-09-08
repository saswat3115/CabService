angular.module('UploadCtrl', []).controller('UploadController', function ($scope, $location, Upload) {    

    var vm = this;
    
    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    }
    
    vm.upload = function (file) {
        Upload.upload({
            url: '/upload', //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                vm.uploadStatus = "Uploaded successfully!";
            } else {
                vm.uploadStatus = resp.data.error_desc;
            }
        }, function (resp) { //catch error
            vm.uploadStatus = resp.status;            
        }, function (evt) {             
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
});