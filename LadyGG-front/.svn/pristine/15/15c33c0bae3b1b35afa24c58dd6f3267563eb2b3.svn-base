angular.module("myApp").controller('userDetailCtrl',
    function ($state, userRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        let id = vm.params.id;
        /***************
         **获取用户详情**
         ***************/
        function getDetail() {
            userRes.userDetail(id).then(res => {
                    // console.log(res);
                    if (res.data.code === 0) {
                        vm.userDetail = res.data.data;
                    } else {
                        console.log(res.data.message);
                    }
                })
                .catch(err => {
                    console.log("请求服务器失败，请检查原因后重试")
                })
        }
        getDetail()
    })