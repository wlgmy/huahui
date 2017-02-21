<template lang="html">
  <div class="home">
    <div class="banner">
      <mt-swipe :auto="4000" class="swip-banner">
        <mt-swipe-item >
          <img src="~public/home-banner1.png" alt="" />
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="~public/home-banner1.png" alt="" />
        </mt-swipe-item>
        <mt-swipe-item >
          <img src="~public/home-banner1.png" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="view flex flex-column home-content">
      <p class="bigP">
        国家<span class="point">权威</span>认证，只做让您放心的产品
      </p>
      <p>
        多年致力于研发创新，我们精心打造了更专业的新风系统，华汇嘉犀利产品已获得国家权威认证，<br />
        并获得多项国家专利。
      </p>
      <div class="block1">

      </div>
      <p class="bigP">
        看起来<span class="point">简单</span>，但是更懂您的产品
      </p>
      <p>
        我们反复试验，摒弃了各种低效型号，主打350/500风量，为的只是更贴近您的真是需求。
      </p>
      <div class="block1">

      </div>
      <p class="bigP">
        新风、净化器一键切换，<span class="point">专利</span>让产品更专业
      </p>
      <p>
        当室外长期处于雾霾重度污染时，适当切换到净化器模式，可在一定程度上延长滤芯使用寿命
      </p>
      <div class="block1">

      </div>
      <p class="bigP">
        贴心<span class="point">定制</span>专属您的新风系统
      </p>
      <p>
        好新风不只是产品，而是为您打造一个真正有效的室内净化方案
      </p>
      <div class="block1">

      </div>
      <p class="bigP">
        用专注铸就<span class="point">品牌，创新</span>成就未来
      </p>
      <p>
        自2004年成立以来，我们用技术创新与专业服务，铸就了一个让用户信赖的品牌，而美好的明天，<br />
        我们期待更多志同道合的朋友！
      </p>
      <div class="block1">

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 100%;
}
.mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
}
.mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
}
.mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
            transform: none;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    // border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active {
    background: #17d676;
}
  .home{
    width: 100%;
    .banner{
      width: 100%;
      height: 300px;
      .swip-banner{
        text-align: center;
        overflow: hidden;
        position: relative;
      }
      img{
        width: 100%;
        height: 300px;
        vertical-align:top;
        display: block;
      }
    }
    .home-content{
      align-items: center;
      p{
        font-size: 14px;
        color: #676767;
        height: 150%;
        line-height: 21px;
        margin: 0;
        margin-top: 30px;
        text-align: center;
      }
      p+p{
        margin-top: 18px;
      }
      .bigP{
        font-size: 20px;
        height: 30px;
        .point{
          font-size: 24px;
        }
      }
      .block1{
        width: 1122px;
        height: 350px;
        display: block;
        background-color: #c1c1c1;
        margin-top: 18px;
      }
    }
  }
</style>
