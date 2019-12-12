angular
.module('App', [])
.controller('LoginConController', ['$scope',function($scope){
    $scope.done = '';
}])

.directive('loadingBtn', ['$timeout', function($timeout){
    return {
        link: function(scope, element, attrs){
            element.bind('click', function(){
                if(scope,loading== true|| scope.done=='done'){
                    return;
                }
                scope.loading = true;
                element.addClass('loading');
                timeoutId = $timeout(function(){
                    scope.loading = false;
                    element.removeClass('loading');
                    scope.done = 'done';
                },2000);
            });
        }
    };
}]);

function onLoad(){
    document.addEventListener("deviceready", onDeviceReady, false);
    if(localStorage.userName !=null){
        document.getElementById("user").value = localStorage.userName;
    }
    if(localStorage.userPassword != null){
        document.getElementById("passwd").value = localStorage.userPassword;
    }
}

function onDeviceReady(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError,{
        timeout: 30000
    });
}

function login(){
    var id = document.getElementById("user").value;
    var passwd = document.getElementById("passwd").value;
    $.ajax({
        datatype: "JSON",
        type: "POST",
        url:"http://210.70.80.21~s107021006/login.php",
        data: "userName="+id +"&userPassword=" + passwd,
        crossDomain: true,
        cache: false,
        success: function(data){
            var obj = JSON.parse(data);
            if(obj.status =="success"){
                localStorage.userName = id;
                localStorage.userPassword = passwd;
                localStorage.loginType = 0;
                document.location.href="MainPage.html";
            }else if(obj.status == "noAccount"){
                alert("Wrong ID or Password!!");
            }else if(obj.status =="fail"){
                alert("Can't connect to DB!");
            }
        },
        error: function(data){
            alert("Error:" + data);
        }
    });
}