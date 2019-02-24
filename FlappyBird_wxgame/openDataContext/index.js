var assets = {
  box: "openDataContext/assets/box.png",
  panel: "openDataContext/assets/panel.png",
  button_l: "openDataContext/assets/button_l.png",
  button_r: "openDataContext/assets/button_r.png",
  title: "openDataContext/assets/rankingtitle.png"
};

let canvasWidth;
let canvasHeight;
var context = sharedCanvas.getContext("2d");
context.globalCompositeOperation = "source-over";
context.fillStyle = "#000000"
let totalGroup = [{
  key: 1,
  name: "1111111111",
  url: assets.icon,
  scroes: 10000
}
];

/**
 * 创建排行榜
 */
function drawRankPanel() {

  console.log("drawRankPanel1");
  //绘制背景

  context.drawImage(assets.panel, offsetX_rankToBorder, offsetY_rankToBorder, RankWidth, RankHeight);
  console.log("drawRankPanel2");
  //绘制标题

  let title = assets.title;

  //根据title的宽高计算一下位置;

  let titleX = offsetX_rankToBorder + (RankWidth - title.width) / 2;

  let titleY = offsetY_rankToBorder + title.height + 20;

  context.drawImage(title, titleX, titleY);
  console.log("drawRankPane3");
  //获取当前要渲染的数据组

  let start = perPageMaxNum * page;

  currentGroup = totalGroup.slice(start, start + perPageMaxNum);

  //创建头像Bar

  drawRankByGroup(currentGroup);
  console.log("drawRankPanel4");
  //创建按钮

  drawButton()

}

/**

 * 根据屏幕大小初始化所有绘制数据

 */

function init() {

  //排行榜绘制数据初始化
  RankWidth = stageWidth * 4 / 5;
  RankHeight = stageHeight * 4 / 5;
  barWidth = RankWidth * 98 / 100;
  barHeight = RankWidth / perPageMaxNum;
  offsetX_rankToBorder = (stageWidth - RankWidth) / 2;
  offsetY_rankToBorder = (stageHeight - RankHeight) / 2;
  preOffsetY = (RankHeight - barHeight) / (perPageMaxNum + 1);
  startX = offsetX_rankToBorder + RankWidth * 2 / 100;
  startY = offsetY_rankToBorder + preOffsetY;
  avatarSize = barHeight - 10;
  intervalX = barWidth / 20;
  textOffsetY = (barHeight + fontSize) / 2;
  textMaxSize = 250;

  indexWidth = context.measureText("99").width;



  //按钮绘制数据初始化

  buttonWidth = barWidth / 3;

  buttonHeight = barHeight / 2;

  buttonOffset = RankWidth / 3;

  lastButtonX = offsetX_rankToBorder + buttonOffset - buttonWidth;

  nextButtonX = offsetX_rankToBorder + 2 * buttonOffset;

  nextButtonY = lastButtonY = offsetY_rankToBorder + RankHeight - 50 - buttonHeight;

  let data = wx.getSystemInfoSync();

  canvasWidth = data.windowWidth;

  canvasHeight = data.windowHeight;

}



/**

 * 创建两个点击按钮

 */

function drawButton() {

  context.drawImage(assets.button_r, nextButtonX, nextButtonY, buttonWidth, buttonHeight);

  context.drawImage(assets.button_l, lastButtonX, lastButtonY, buttonWidth, buttonHeight);

}





/**

 * 根据当前绘制组绘制排行榜

 */

function drawRankByGroup(currentGroup) {

  for (let i = 0; i < currentGroup.length; i++) {

    let data = currentGroup[i];

    drawByData(data, i);

  }

}



/**

 * 根据绘制信息以及当前i绘制元素

 */

function drawByData(data, i) {

  let x = startX;

  //绘制底框

  // context.drawImage(assets.box, startX, startY + i * preOffsetY, barWidth, barHeight);

  x += 10;

  //设置字体

  context.font = fontSize + "px Arial";

  //绘制序号

  context.fillText(data.key + "", x, startY + i * preOffsetY + textOffsetY, textMaxSize);

  x += indexWidth + intervalX;

  //绘制头像
  var image = wx.createImage();
  image.src = data.url
  image.onload=function(){
    renderDirty=true;
  }
  context.drawImage(image, x, startY + i * preOffsetY + (barHeight - avatarSize) / 2, avatarSize, avatarSize);

  x += avatarSize + intervalX;

  //绘制名称

  context.fillText(data.name + "", x, startY + i * preOffsetY + textOffsetY, textMaxSize);

  x += textMaxSize + intervalX;

  //绘制分数
  if (x + 130 >= startX + barWidth) {
    x = startX + barWidth - 130;
  }

  context.fillText(data.scroes + "", x, startY + i * preOffsetY + textOffsetY, textMaxSize);

  renderDirty=true;

}



/**

 * 点击处理

 */

function onTouchEnd(event) {

  let x = event.clientX * sharedCanvas.width / canvasWidth;

  let y = event.clientY * sharedCanvas.height / canvasHeight;

  if (x > lastButtonX && x < lastButtonX + buttonWidth &&

    y > lastButtonY && y < lastButtonY + buttonHeight) {

    //在last按钮的范围内

    if (page > 0) {

      buttonClick(0);



    }

  }

  if (x > nextButtonX && x < nextButtonX + buttonWidth &&

    y > nextButtonY && y < nextButtonY + buttonHeight) {

    //在next按钮的范围内

    if ((page + 1) * perPageMaxNum < totalGroup.length) {

      buttonClick(1);

    }

  }



}

/**

 * 根据传入的buttonKey 执行点击处理

 * 0 为上一页按钮

 * 1 为下一页按钮

 */

function buttonClick(buttonKey) {

  let old_buttonY;

  if (buttonKey == 0) {

    //上一页按钮

    old_buttonY = lastButtonY;

    lastButtonY += 10;

    page--;

    renderDirty = true;

    console.log('上一页' + page);

    setTimeout(() => {

      lastButtonY = old_buttonY;

      //重新渲染必须标脏

      renderDirty = true;

    }, 100);

  } else if (buttonKey == 1) {

    //下一页按钮

    old_buttonY = nextButtonY;

    nextButtonY += 10;

    page++;

    renderDirty = true;

    console.log('下一页' + page);

    setTimeout(() => {

      nextButtonY = old_buttonY;

      //重新渲染必须标脏

      renderDirty = true;

    }, 100);

  }



}



/////////////////////////////////////////////////////////////////// 相关缓存数据



/**********************数据相关***************************/



/**

 * 渲染标脏量

 * 会在被标脏（true）后重新渲染

 */

let renderDirty = true;



/**

 * 当前绘制组

 */

let currentGroup = [];

/**

 * 每页最多显示个数

 * 建议大于等于4个

 */

let perPageMaxNum = 5;

/**

 * 当前页数,默认0为第一页

 */

let page = 0;

/***********************绘制相关*************************/

/**

 * 舞台大小

 */

let stageWidth;

let stageHeight;

/**

 * 排行榜大小

 */

let RankWidth;

let RankHeight;



/**

 * 每个头像条目的大小

 */

let barWidth;

let barHeight;

/**

 * 条目与排行榜边界的水平距离

 */

let offsetX_barToRank

/**

 * 绘制排行榜起始点X

 */

let startX;

/**

 * 绘制排行榜起始点Y

 */

let startY;

/**

 * 每行Y轴间隔offsetY

 */

let preOffsetY;

/**

 * 按钮大小

 */

let buttonWidth;

let buttonHeight;

/**

 * 上一页按钮X坐标

 */

let lastButtonX;

/**

 * 下一页按钮x坐标

 */

let nextButtonX;

/**

 * 上一页按钮y坐标

 */

let lastButtonY;

/**

 * 下一页按钮y坐标

 */

let nextButtonY;

/**

 * 两个按钮的间距

 */

let buttonOffset;



/**

 * 字体大小

 */

let fontSize = 35;

/**

 * 文本文字Y轴偏移量

 * 可以使文本相对于图片大小居中

 */

let textOffsetY;

/**

 * 头像大小

 */

let avatarSize;

/**

 * 名字文本最大宽度，名称会根据

 */

let textMaxSize;

/**

 * 绘制元素之间的间隔量

 */

let intervalX;

/**

 * 排行榜与舞台边界的水平距离

 */

let offsetX_rankToBorder;

/**

 * 排行榜与舞台边界的竖直距离

 */

let offsetY_rankToBorder;

/**

 * 绘制排名的最大宽度

 */

let indexWidth;



//////////////////////////////////////////////////////////

/**

 * 监听点击

 */

wx.onTouchEnd((event) => {

  var l = event.changedTouches.length;

  for (var i = 0; i < l; i++) {

    onTouchEnd(event.changedTouches[i]);

  }

});



addOpenDataContextListener();

/**

 * 资源加载

 */

function preloadAssets() {

  var preloaded = 0;

  var count = 0;

  for (var asset in assets) {

    count++;

    var img = wx.createImage();

    img.onload = function () {

      preloaded++;

      if (preloaded == count) {

        console.log("数据域加载完成");

      }

    }

    img.src = assets[asset];

    assets[asset] = img;

  }

}



//记录requestAnimationFrame的ID

let requestAnimationFrameID;

let hasCreateScene;

/**

 * 绘制屏幕

 * 这个函数会在加载完所有资源之后被调用

 */

function createScene() {

  if (sharedCanvas.width && sharedCanvas.height) {

    console.log('初始化完成')

    stageWidth = sharedCanvas.width;

    stageHeight = sharedCanvas.height;

    init();

  } else {

    console.log(`sharedCanvas.width:${sharedCanvas.width}    sharedCanvas.height：${sharedCanvas.height}`)

  }

}

/**

 * 增加来自主域的监听函数

 */

function addOpenDataContextListener() {

  console.log('增加监听函数')

  wx.onMessage((data) => {

    console.log(data);

    if (data.command == 'open') {

      if (!hasCreateScene) {
        createScene();
        hasCreateScene = true;
      }
      totalGroup=[];
      page=0;
      renderDirty=true;
      //创建并初始化
      if (data.type =="friend")
      {
        setFirendList();
      }
      else if(data.type=="group")
      {
        setGroupList(data.groupid);
      }
      
      requestAnimationFrameID = requestAnimationFrame(loop);
      // }

    }
    else if(data.command=='load')
    {
      preloadAssets();
    }else if (data.command == 'close' && requestAnimationFrameID) {


      cancelAnimationFrame(requestAnimationFrameID);

      requestAnimationFrameID = null

    }

  });

}
function setGroupList(groupid){
  wx.getGroupCloudStorage({
    shareTicket: groupid,
    keyList: ["score"],
    success: res => {
      console.log("getFriendCloudStorage", res);
      if (!res.data) { return; }
      console.log("qqq", 1);
      kvlist2totogroup(res.data);

    },
    fail: err => {
      console.log(err);
    },
    complete: () => {
    }
  });
}
function setFirendList() {
  wx.getFriendCloudStorage({
    keyList: ["score"],
    success: res => {
      console.log("getFriendCloudStorage", res);
      if (!res.data) { return; }
      console.log("qqq", 1);
      kvlist2totogroup(res.data);

    },
    fail: err => {
      console.log(err);
    },
    complete: () => {
    }
  });
}


//把微信的数据转化成我们的数据
function kvlist2totogroup(reslist) {
  let dataList = [];
  reslist.forEach((data) => {
    if (data.KVDataList.length > 0) {
      dataList.push(data);
    }
  });
  if (dataList.length === 0) {
    return;
  }
  dataList.sort((a, b) => {
      return  a.KVDataList[0].value-b.KVDataList[0].value;
  });
  totalGroup = [];
  for (var i = 0; i < dataList.length; i++) {
    var obj = {};
    obj.key = i;
    obj.name = dataList[i].nickname;
    obj.url = dataList[i].avatarUrl;
    obj.scroes = dataList[i].KVDataList[0].value;
    totalGroup.push(obj);
  }
  

  renderDirty=true;
}




/**

 * 循环函数

 * 每帧判断一下是否需要渲染

 * 如果被标脏，则重新渲染

 */

function loop() {

  if (renderDirty) {

    console.log(`stageWidth :${stageWidth}   stageHeight:${stageHeight}`)

    context.setTransform(1, 0, 0, 1, 0, 0);

    context.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height);

    drawRankPanel();

    renderDirty = false;

  }

  requestAnimationFrameID = requestAnimationFrame(loop);

}