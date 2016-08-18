// demo.html界面的路由控制
var ROUTE = angular.module('APP.route', ['ngRoute']);
ROUTE.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'CTRL'
        })
        .when('/index2', {
            templateUrl: 'views/index2.html',
            controller: 'CTRL'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


// 中心app 加载路由app依赖, 和ueditor依赖
var APP = angular.module('UeditorApp', ["ng.ueditor", 'APP.route']);
APP.controller("CTRL", function ($scope) {

    // 带配置的富文本框
    $scope._simpleConfig = {
        //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
        toolbars: [
            ['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'test']
        ],
        //focus时自动清空初始化时的内容
        autoClearinitialContent: true,
        //关闭字数统计
        wordCount: false,
        //关闭elementPath
        elementPathEnabled: false
    };

    // 设置初始化显示内容
    $scope.content1 = 'Ueditor 测试';
    $scope.content2 = 'ueditor 测试';
});