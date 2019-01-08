angular.module("myApp").controller('videoDetailCtrl',
    function ($state, $timeout, grade, subject, classify, contentRes, teacherRes, imageRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        //年级select
        vm.gradeSelect = grade;
        //科目select
        vm.subjectSelect = subject;
        //分类select
        vm.classifySelect = classify;
        //初始视频时长
        vm.videoTime = 0;
        //图片
        vm.u = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544383788319&di=8a2c1a6a4122de4384f9b5610d1dcd81&imgtype=0&src=http%3A%2F%2Fwww.corp001.com%2Ftemplates%2Fdefault%2Fshop%2Fimages%2Ferrors.jpg";
        vm.vvsrc = vm.u;
        /***************
         **查看编辑新增**
         ***************/
        if (vm.params.Cstatus === "1") {
            vm.videoTitle = "视频查看"
            vm.if = false;
            vm.disabled = true;
            vm.button = "返回";
            vm.con = "保存";
            getTeacherAll(getDetail);
        } else if (vm.params.Cstatus === "2") {
            vm.videoTitle = "视频编辑";
            vm.if = true;
            vm.disabled = false;
            vm.button = "取消";
            vm.con = "修改";
            getTeacherAll(getDetail);
        } else if (vm.params.Cstatus === "3") {
            vm.videoTitle = "视频新增";
            vm.if = true;
            vm.disabled = false;
            vm.button = "返回";
            vm.con = "保存";
            getTeacherAll();
        }
        //列表请求
        function getDetail() {
            contentRes.videoLook(vm.params.id).then(res => {
                // console.log(res)
                if (res.data.code === 0) {
                    vm.ov = true;
                    vm.Detail = res.data.data;
                    vm.grade = vm.Detail.grade.toString();
                    vm.subject = vm.Detail.subject.toString();
                    vm.title = vm.Detail.title;
                    vm.summary = vm.Detail.summary;
                    vm.classify = vm.Detail.classify.toString();
                    vm.vvsrc = vm.Detail.videoCoverUrl;
                    vm.vimgUrl = vm.Detail.videoCoverUrl
                    vm.videoUrl = vm.Detail.videoUrl;
                    vm.content = vm.Detail.content;
                    vm.teacherChange(vm.Detail.teacherId);
                } else {
                    console.log(res.data.message);
                }
            }).catch(err => {
                console.log("请求服务器失败，请检查原因后重试")
            });
        };
        //获取老师列表
        function getTeacherAll(fun) {
            teacherRes.teacherAll().then(res => {
                if (res.data.code === 0) {
                    if (fun) {
                        fun()
                    }
                    vm.teacherSelect = res.data.data;
                } else {
                    console.log(res.data.message);
                }
            }).catch(err => {
                console.log("请求服务器失败，请检查原因后重试")
            });
        }
        //老师头像(根据id变动换头像)
        vm.teacherChange = function (id) {
            if (id) {
                angular.forEach(vm.teacherSelect, i => {
                    if (i.id == id) {
                        vm.headPhotoUrl = i.headPhotoUrl
                    }
                })
            } else {
                vm.headPhotoUrl = "";
            }
        }
        /***************
         **添加删除老师**
         ***************/
        //打开模态框
        vm.add = function () {
            vm.modal = true;
        }
        //关闭模态框
        vm.close = function () {
            vm.modal = false;
        }
        //老师图片上传
        vm.load = function () {
            console.log(123)
            let modules = 'teacher';
            vm.pro = 60;
            vm.upload = "上传中"
            console.log(vm.file)
            imageRes.imgLoad(modules, vm.file).then(res => {
                if (res.data.code === 0) {
                    vm.pro = 100;
                    console.log("请求成功");
                    vm.upload = "上传成功";
                    vm.imgUrl = res.data.imgUrl;
                    vm.loaddisabled = true;
                } else {
                    vm.pro = 70;
                    vm.upload = "上传异常，请检查异常原因后再试"
                }
            }).catch(err => {
                console.log("上传失败");
                vm.pro = 0;
                vm.upload = "上传失败";
                alert("上传失败，请确认图片大小不能大于2MB，或者其他原因")
            })
        }
        //视频图片上传
        vm.vload = function () {
            console.log(234);
            let modules = 'video';
            vm.vpro = 60;
            vm.vupload = "上传中";
            console.log(vm.vfile);
            imageRes.imgLoad(modules, vm.vfile).then(res => {
                if (res.data.code === 0) {
                    vm.vpro = 100;
                    console.log("请求成功");
                    vm.vupload = "上传成功";
                    vm.vimgUrl = res.data.imgUrl;
                    vm.loaddisabled = true;
                } else {
                    vm.vpro = 70;
                    vm.vupload = "上传异常，请检查异常原因后再试"
                }
            }).catch(err => {
                console.log("上传失败");
                vm.vpro = 0;
                vm.vupload = "上传失败";
                alert("上传失败，请确认图片大小不能大于2MB，或者其他原因")
            })
        }
        vm.vdel = function () {
            vm.vname = "";
            vm.vsize = "";
            vm.vpro = undefined;
            vm.vimgUrl = "";
            vm.loaddisabled = true;
            vm.vupload = "请选择上传图片";
            vm.vvsrc = vm.u;
        }
        //图片删除
        vm.del = function () {
            vm.name = "";
            vm.size = "";
            vm.pro = undefined;
            vm.loaddisabled = true;
            vm.imgUrl = "";
            vm.upload = "请选择上传图片";
            vm.vsrc = vm.u
        }
        //保存（新增老师）
        vm.save = function () {
            let teacherData = {
                nickName: vm.nickName,
                headPhotoUrl: vm.imgUrl
            }
            teacherRes.teacherAdd(teacherData).then(res => {
                if (res.data.code === 0) {
                    console.log("请求成功")
                    alert("保存成功")
                    vm.modal = false;
                    $timeout(function () {
                        getTeacherAll();
                    }, 1000)
                } else {
                    console.log(res.data.message);
                }
            }).catch(err => {
                console.log("请求服务器失败，请检查原因后重试")
            });
        }
        //取消
        vm.off = function () {
            vm.del();
            vm.nickName = "";
            vm.modal = false;
        }
        //删除老师
        vm.delTeacher = function () {
            let delMessage = confirm("确定删除选中内容");
            if (delMessage === true) {
                teacherRes.teacherDel(vm.Detail.teacherId).then(res => {
                    if (res.data.code === 0) {
                        alert("删除成功")
                        getTeacherAll();
                    } else {
                        console.log(res.data.message);
                    }
                }).catch(err => {
                    console.log("请求服务器失败，请检查原因后重试")
                });
            }
        }
        /***********    
         **确定取消**
         ***********/
        //b编辑or新增
        vm.decide = function () {
            let videoData = {
                id: vm.params.id,
                grade: vm.grade,
                subject: vm.subject,
                teacherId: vm.Detail.teacherId,
                title: vm.title,
                classify: vm.classify,
                videoCoverUrl: vm.vimgUrl,
                summary: vm.summary,
                videoUrl: vm.videoUrl,
                videoTime: vm.videoTime,
                content: vm.content
            } //编辑
            if (vm.params.Cstatus === "2") {
                contentRes.videoPut(vm.params.id, videoData).then(res => {
                    if (res.data.code === 0) {
                        console.log("编辑成功")
                        alert("内容修改成功")
                        $state.go('backstage.videoList');
                    } else {
                        console.log(res.data.message);
                    }
                }).catch(err => {
                    console.log("请求服务器失败，请检查原因后重试")
                });
            } //新增
            else if (vm.params.Cstatus === "3") {
                contentRes.videoAdd(videoData).then(res => {
                    if (res.data.code === 0) {
                        alert("保存成功")
                        $state.go('backstage.videoList');
                    } else {
                        console.log(res.data.message);
                    }
                }).catch(err => {
                    console.log("请求服务器失败，请检查原因后重试")
                });
            }
        }
        //取消
        vm.gobay = function () {
            if (vm.params.Cstatus === "1") {
                $state.go('backstage.videoList');
            } else if (vm.params.Cstatus === "2") {
                let delMessage = confirm("确定取消编辑文章内容？");
                if (delMessage === true) {
                    $state.go('backstage.videoList');
                }
            } else if (vm.params.Cstatus === "3") {
                let delMessage = confirm("确定退出新增页面？");
                if (delMessage === true) {
                    $state.go('backstage.videoList');
                }
            }
        }
    })