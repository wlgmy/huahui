<template lang="html">
  <div class="product">
      <img class="banner-img" src="~public/casebanner.png"/>
      <div class="pro-cate view">
        <div class="cate">
          <input type="radio" v-model="cate" value="all" id="all"/>
          <label for="all">全部产品</label>
        </div>
        <div class="line"></div>
        <div class="cate">
          <input type="radio" v-model="cate" value="cate1" id="cate1"/>
          <label for="cate1">壁挂式新风系统</label>
        </div>
        <div class="line"></div>
        <div class="cate">
          <input type="radio" v-model="cate" value="cate2" id="cate2"/>
          <label for="cate2">吊顶式新风系统</label>
        </div>
        <div class="line"></div>
        <div class="cate">
          <input type="radio" v-model="cate" value="cate3" id="cate3"/>
          <label for="cate3">柜式新风系统</label>
        </div>
        <div class="line"></div>
        <div class="cate">
          <input type="radio" v-model="cate" value="cate4" id="cate4"/>
          <label for="cate4">新风滤芯耗材</label>
        </div>
      </div>
      <div class="pro-list view">
        <div class="pro-item" v-for="(item, index) in all" v-show='cate === "all"'>
          <ProItem :item='item' :proId="index"></ProItem>
        </div>
        <div class="pro-item" v-for="(item, index) in cate1" v-show='cate === "cate1"'>
          <ProItem :item='item' :proId="index"></ProItem>
        </div>
        <div class="pro-item" v-for="(item, index) in cate2" v-show='cate === "cate2"'>
          <ProItem :item='item' :proId="index"></ProItem>
        </div>
        <div class="pro-item" v-for="(item, index) in cate3" v-show='cate === "cate3"'>
          <ProItem :item='item' :proId="index"></ProItem>
        </div>
        <div class="pro-item" v-for="(item, index) in cate3" v-show='cate === "cate3"'>
          <ProItem :item='item' :proId="index"></ProItem>
        </div>
      </div>
  </div>
</template>

<script>
let proList=[
  {
    images: ['../../public/pro1.png','../../public/sol1.png','../../public/sol2.png','../../public/sol3.png','../../public/sol4.png']
    ,
    name: '壁挂系统',
    desc: [
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚',
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰'
    ],
    src: "/#"
  },
  {
    images: ['../../public/pro1.png','../../public/sol1.png','../../public/sol2.png','../../public/sol3.png','../../public/sol4.png']
    ,
    name: '壁挂系统',
    desc: [
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚',
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚'
    ],
    src: "/#"
  },
  {
    images: ['../../public/pro1.png','../../public/sol1.png','../../public/sol2.png','../../public/sol3.png','../../public/sol4.png']
    ,
    name: '壁挂系统',
    desc: [
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚',
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚'
    ],
    src: "/#"
  },
  {
    images: ['../../public/pro1.png','../../public/sol1.png','../../public/sol2.png','../../public/sol3.png','../../public/sol4.png']
    ,
    name: '壁挂系统',
    desc: [
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚',
      '自带壁挂换风系统可以轻松自由换风', '来来来来，咱们接着吹呀吹呀吹呀',
      '大家好哦啊发开发和 啊华锋答复哈佛哈金凤凰', '大家已清理安徽啊大护法 安抚'
    ],
    src: "/#"
  },
]

import ProItem from '../components/ProItem.vue'

export default {
  data () {
    return {
      cate: 'all',
      all: proList,
      cate1: proList,
      cate2: proList,
      cate3: proList,
      cate4: proList
    }
  },
  components: {
    ProItem
  }
}
</script>

<style lang="scss">
.product{
  .banner-img{
    width: 100%;
    margin-bottom: 30px;
  }
  .pro-cate{
    width: 100%;
    display: flex;
    flex-direction: row;
    height:40px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    .cate{
      flex:1;
      label{
        width: 100%;
        height:40px;
        line-height: 40px;
        text-align: center;
        display:block;
        font-size: 20px;
        color:#676767;
      }
      input{
        display: none;
      }
      input:checked ~ label{
        color: #11a95e;
        border-bottom:3px solid #11a95e;
      }
    }
    .line{
      width:1px;
      height: 30px;
      background-color: #dedede;
    }
  }
  .pro-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    .pro-item{
      width: 100%;
    }
  }
}
</style>
