'use strict';

module.exports = {
  'PUT /addAssessor': function (req, res) {
    setTimeout(function () {
      res.json({ code : 1, msg: "审核员添加成功", }); }, 500);
  },

  'DELETE /cancelAssessor': function (req, res) {
    setTimeout(function () {
      res.json({ code : 1, msg: "已取消该审核员", }); }, 500);
  },

  'GET /getAssessor': function (req, res) {
    setTimeout(function () {
      res.json({count:100,list:[
            	{
      		  id: '1',
      		  name: '刘德华',
      		  amount: '333',
            grade:'初一',
            subject:'数学'
      		},{
      		  id: '2',
      		  name: '王小',
      		  amount: '444',
            grade:'初一',
            subject:'数学'
      		},{
      		  id: '3',
      		  name: '周杰伦',
      		  amount: '555',
            grade:'初一',
            subject:'数学'
      		},{
      		  id: '4',
      		  name: '炎亚纶',
      		  amount: '666',
            grade:'初一',
            subject:'数学'
      		}
      
            ]}); }, 500);
  },
  'GET /statistics': function (req, res) {
    setTimeout(function () {
      res.json({
        count:500,
        newly:50,
        uncomment:300,
        curMonthAdd:[
          {day: '1', amount: 100},
              {day: '2', amount: 120},
              {day: '3', amount: 130},
              {day: '4', amount: 140},
              {day: '5', amount: 150},
              {day: '6', amount: 160},
              {day: '7', amount: 166},
              {day: '8', amount: 188},
              {day: '9', amount: 250},
              {day: '10', amount: 200},
              {day: '11', amount: 200},
              {day: '12', amount: 100},
              {day: '13', amount: 100},
              {day: '14', amount: 120},
              {day: '15', amount: 130},
              {day: '16', amount: 140},
              {day: '17', amount: 150},
              {day: '18', amount: 160},
              {day: '19', amount: 166},
              {day: '20', amount: 188},
              {day: '21', amount: 250},
              {day: '22', amount: 300},
              {day: '23', amount: 100},
              {day: '24', amount: 200},
              {day: '25', amount: 100},
              {day: '26', amount: 120},
              {day: '27', amount: 130},
              {day: '28', amount: 140},
              {day: '29', amount: 150},
              {day: '30', amount: 160},
              {day: '31', amount: 166},
        ],
        curTotal:[
          {month: '一月', amount: 100},
          {month: '二月', amount: 120},
          {month: '三月', amount: 130},
          {month: '四月', amount: 140},
          {month: '五月', amount: 150},
          {month: '六月', amount: 160},
          {month: '七月', amount: 166},
          {month: '八月', amount: 188},
          {month: '九月', amount: 250},
          {month: '十月', amount: 300},
          {month: '十一月', amount: 400},
          {month: '十二月', amount: 500}
        ]
      }); }, 500);
  },
};
