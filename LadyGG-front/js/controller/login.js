angular.module("myApp").controller('loginCtrl',
    function ($state, $timeout, userRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        /***********
         **登陆请求**
         ***********/
        vm.login = function () {
            let data = {
                accountName: vm.username,
                password: vm.password
            };
            userRes.login(data).then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        alert("登陆成功");
                        vm.userData = JSON.stringify(res.data.data);
                        sessionStorage.setItem('userData', vm.userData)
                        $state.go('backstage.welcome')

                    } else if (res.data.code === -7011) {
                        vm.show = true;
                        vm.message = "账号错误";
                        $timeout(function () {
                            vm.show = false;
                        }, 2000);
                    } else if (res.data.code === -7006) {
                        vm.show = true;
                        vm.message = "密码错误"
                        $timeout(function () {;
                            vm.show = false;
                        }, 2000);
                    }
                })
                .catch(err => {
                    console.log("登陆请求发送失败，请检查错误原因再重试");
                    console.log(err);
                })
        }
    }
);