var Crawler = require('crawler');
var url = require('url');
var fs = require('fs');

var testUrl = 'http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=123';

var c = new Crawler({
    retries: 100000,
    retryTimeout: 30000,
    maxConnections: 10,
    callback: function (error, result, $) {
        console.log($);
    }
});

c.queue(testUrl);