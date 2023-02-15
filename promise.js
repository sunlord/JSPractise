// 将div id改为box.
// 提供了promise请求加载图片的方法

const { log } = console;

var box = document.getElementById('box');

function loadImageAsync(url) {
  const promise = new Promise(function (resolve, reject) {
    //异步处理: 消耗时间的代码
    const image = new Image(); //创建image对象
    image.src = url;
    image.onload = function () {
      resolve(image);
    }
    image.onerror = function () {
      reject(new Error('Could not load image at' + url));
    }
  })

  return promise;
}

const promise = loadImageAsync('https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF');
promise.then(function (data) {
  //成功
  box.appendChild(data);
}, function (error) {
  //失败
  box.innerHTML = '图片加载失败';
  log(error);
})