const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const HOST = 'https://www.demo.com/api';
Mock.mock(HOST+'/home',{
    ac:'@ctitle(3, 50)',
    slides:[
        {alt:'@color',src:Random.image('750x300',Random.color())},
        {alt:'@color',src:Random.image('750x300',Random.color())},
        {alt:'@color',src:Random.image('750x300',Random.color())},
    ],
    latestUpdate:[
        {
            id:1,
            title:"@ctitle(3, 9)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:2,
            title:"@ctitle(3, 9)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:3,
            title:"@ctitle(3, 9)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:4,
            title:"@ctitle(3, 9)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:5,
            title:"@ctitle(3, 9)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:6,
            title:"@ctitle(3, 9)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
    ],
    recommend:[
        {
            id:1,
            title:"@ctitle(3, 19)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:2,
            title:"@ctitle(3, 19)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:3,
            title:"@ctitle(3, 19)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:4,
            title:"@ctitle(3, 19)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:5,
            title:"@ctitle(3, 19)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
        {
            id:6,
            title:"@ctitle(3, 19)",
            'authors|1-3':["Edward"],
            img_url:Random.image('400x400',Random.color()),
        },
    ],
});