const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
Mock.mock('/home',{
    ac:'@ctitle(3, 9)',
    slides:[
        {alt:'@color',src:Random.image('200x100')},
        {alt:'@color',src:Random.image('200x100')},
        {alt:'@color',src:Random.image('200x100')},
    ],
    latestUpdate:[
        {
            id:1,
            title:"从小白到数据分析达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:2,
            title:"从小白到数据分析达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:3,
            title:"从小白到数据分析达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:4,
            title:"从小白到数据分析达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:5,
            title:"从小白到数据分析达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:6,
            title:"从小白到数据分析达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
    ],
    recommend:[
        {
            id:1,
            title:"从小白到AI人工智能达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:2,
            title:"从小白到AI人工智能达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:3,
            title:"从小白到AI人工智能达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:4,
            title:"从小白到AI人工智能达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:5,
            title:"从小白到AI人工智能达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
        {
            id:6,
            title:"从小白到AI人工智能达人",
            authors:["Edward Zaccaro","Daniel Zaccaro"],
            img_url:"http://placehold.it/420x420",
        },
    ],
});