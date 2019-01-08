//状态过滤
angular.module("myApp")
    //冻结Or上架
    .filter('freezestatus', function (freezestatus) {
        return function (index) {
            return freezestatus[index]
        }
    })
    //冻结or上架（BTN)
    .filter('Freezestatus', function (Freezestatus) {
        return function (index) {
            return Freezestatus[index]
        }
    })
    //年级分类
    .filter('grade', function (grade) {
        return function (index) {
            return grade[index]
        }
    })
    //分类过滤（video)
    .filter("classify", function (classify) {
        return function (index) {
            return classify[index]
        }
    })
    //分类过滤（article)
    .filter("classify_a", function (classify_a) {
        return function (index) {
            return classify_a[index]
        }
    })
    //科目过滤
    .filter("subject", function (subject) {
        return function (index) {
            return subject[index]
        }
    })
    //状态过滤（上下架）
    .filter('videoStatus', function (videoStatus) {
        return function (index) {
            return videoStatus[index]
        }
    })
    //状态过滤（上下架-BTN）
    .filter('VideoStatus', function (VideoStatus) {
        return function (index) {
            return VideoStatus[index]
        }
    })
    //超过字符换行
    .filter('lineFeed', function () {
        return function (val, len) {
            let str = new String(val);
            var bytesCount = 0;
            var s = "";
            for (let i = 0, n = str.length; i < n; i++) {
                var c = str.charCodeAt(i);
                c >= 0 && c <= 128 ? bytesCount += 1 : bytesCount += 2;
                s += str.charAt(i);
                if (bytesCount >= len) {
                    s = s + '<br />';
                    //重置
                    bytesCount = 0;
                }
            }
            return s;
        }
    })