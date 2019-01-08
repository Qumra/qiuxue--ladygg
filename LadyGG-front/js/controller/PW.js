angular.module("myApp").controller('PWCtrl',
    function ($state, moduleRes) {
        //常用数据
        let vm = this;
        //保存
        vm.save = function () {
            //请求数据
            if (vm.newPass === vm.newPasst) {
                vm.show = false;
                let pwData = {
                    oldPassword: vm.oldPass,
                    password: vm.newPass
                }
                moduleRes.passPut(pwData).then(res => {
                    console.log(res)
                    if (res.data.code === 0) {
                        alert('密码修改成功');
                        alert("请退出诚信登陆")
                        $state.go('login')
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                vm.show = true;
            }
        }
    })