const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const HOST = 'https://www.demo.com/api';

let slides=[],latestUpdate=[],recommend=[];
for (let i = 0; i < 3; i++) {
    slides.push({alt:'@color',src:Random.image('750x300',Random.color())})
}
for (let i = 0; i < 6; i++) {
    latestUpdate.push({
        id:i,
        title:"@ctitle(3, 9)",
        'authors|1-3':["Edward"],
        img_url:Random.image('400x400',Random.color()),
    })
}
for (let i = 0; i < 6; i++) {
    recommend.push({
        id:i,
        title:"@ctitle(3, 19)",
        'authors|1-3':["Edward"],
        img_url:Random.image('400x400',Random.color()),
    })
}
Mock.mock(HOST+'/home',{
    ac:'@ctitle(3, 50)',
    slides:slides,
    latestUpdate:latestUpdate,
    recommend:recommend,
});

let sides=[],bookNames=[];
for (let i = 0; i < 15; i++) {
    sides.push('@ctitle(2, 4)')
}
for (let i = 0; i < 15; i++) {
    bookNames.push('@ctitle(5, 30)')
}
Mock.mock(HOST+'/cate',{
    sides:sides,
    bookNames,
});