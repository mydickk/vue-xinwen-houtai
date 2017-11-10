'use strict';

module.exports = {
  
  'GET /voluntary': function (req, res) { //教师志愿列表
      setTimeout(function () { res.json({
            "count": "100",
            "list": [{
                "id": "2",
                "name": "小二",
                "middle_score": "300",
                "c_time": "1970-01-01 01:00:00",
                "status": "未分配",
                "source":'赵晨希',
                "comment_lead":"赵晨希",
                "iscomment":"已评价",
                "isok":'',
                },{
                "id": "3",
                "name": "小三",
                "middle_score": "320",
                "c_time": "1970-01-01 01:00:00",
                "status": "未分配",
                "source":'赵晨希',
                "comment_lead":"赵晨希",
                "iscomment":"已评价",
                "isok":'已确认',
                },{
                "id": "4",
                "name": "小四",
                "middle_score": "400",
                "c_time": "1970-01-01 01:00:00",
                "status": "未分配",
                "source":'赵晨希',
                "comment_lead":"赵晨希",
                "iscomment":"已评价",
                "isok":'已确认',
                },{
                "id": "5",
                "name": "小五",
                "middle_score": "5000",
                "c_time": "1970-01-01 01:00:00",
                "status": "未分配",
                "source":'赵晨希',
                "comment_lead":"赵晨希",
                "iscomment":"已评价",
                "isok":'已确认',
                },]
            }); }, 500);
  },
  
  'POST /addError': function (req, res) { //添加异常志愿
      setTimeout(function () { res.json({code:1,msg:'添加異常志願成功'}); }, 500);
  },

  'GET /get_voluninfo': function (req, res) { //个人志愿信息
      setTimeout(function () { res.json([
          {name:'独立批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'600'}]},
          {name:'指标批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'500'},{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'500'}]},
          {name:'提前批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'400'},{volun:'第二志愿',school:'华南师范大学附属中学',islive:'否',precode:'700'},{volun:'第三志愿',school:'华南师范大学附属中学',islive:'否',precode:'600'}]},
          {name:'第一批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'是',precode:'440'}]},
          {name:'第二提前批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'550'}]},
          {name:'第二批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'770'}]},
          {name:'第三批',city:'广州',volunteer:[{volun:'第一志愿',school:'华南师范大学附属中学',islive:'否',precode:'880'}]},
        ]); }, 500);
    },

  'GET /get_classlist': function (req, res) { //班级列表信息
      setTimeout(function () { res.json([
            {"classname":"周一晚上尖子班","classid":"1"},
            {"classname":"周二晚上尖子班","classid":"2"},
            {"classname":"周三晚上尖子班","classid":"3"},
            {"classname":"周四晚上尖子班","classid":"4"},
            {"classname":"周五晚上尖子班","classid":"5"},
            {"classname":"周六晚上尖子班","classid":"6"},
            {"classname":"周七晚上尖子班","classid":"7"},
            {"classname":"周八晚上尖子班","classid":"8"},
            {"classname":"周九晚上尖子班","classid":"9"},
        ]); }, 500);
    },
  'GET /get_volunlist': function (req, res) { //班级志愿列表
      setTimeout(function () { res.json(
            {
                "classname":"周五晚上尖子班",
                "classid":1,
                "count":40,
                "list":[
                    {
                        "name":"王晓",
                        "id":"1",
                        "status":"未参加"
                    },{
                        "name":"忘2",
                        "id":"2",
                        "status":"已提交"
                    },{
                        "name":"第三",
                        "id":"3",
                        "status":"已评价"
                    },{
                        "name":"老四",
                        "id":"4",
                        "status":"已确认"
                    },
                ]
            }); }, 500);
  },
  'GET /searchTea': function (req, res) { //教师搜索
      setTimeout(function () { res.json(['王老师','李老师','天哥','么么哒','啦啦他']); }, 500);
  },
  'POST /toBackVolun': function (req, res) { //异常志愿返回
    setTimeout(function () {
      res.json({ code : 1, msg: "志愿返回成功", }); }, 500);
  },

  'POST /distrVolun': function (req, res) { //志愿分配
    setTimeout(function () {
      res.json({ code : 1, msg: "志愿分配成功", }); }, 500);
  },

  'GET /getwords': function (req, res) { //话术获取
      setTimeout(function () { res.json([
    {
      name:'总体评价',id:'1',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'志愿定位',id:'2',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'独立批',id:'3',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'指标批',id:'4',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'提前批',id:'5',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
      folder:[]
    },{
      name:'第一批',id:'6',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'第二提前批',id:'7',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'第二批',id:'8',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    },{
      name:'第三批',id:'9',
      words:['不错','有希望','继续努力','加油，加油加油','你真是够咯','你好咯喔'],
    }
  ]); }, 500);
    },
};