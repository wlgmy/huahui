<template lang="html">
  <div class="product-item">
    <p class="pro-name">
      {{item.name}}
    </p>
    <div class="pro-det">
      <img :src='src' class="pro-img" />
      <div class="img-list">
        <div class="img-item" v-for="(img, index) in item.images">
          <input type="radio" v-model="src" :value="img" :id='imgId+"_img_"+index' />
          <label :for='imgId+"_img_"+index' >
            <img :src="img"  />
          </label>
        </div>
      </div>
      <div class="pro-desc">
        <ul>
          <li v-for="dd in item.desc">
            <span>{{dd}}</span>
          </li>
        </ul>
        <span class="buyNow">
          <i class="iconfont">&#xe63f;&nbsp;&nbsp;&nbsp;</i>在线购买
        </span>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return{
      src: this.item.images[0],
      curImg: this.item.images[0],
      imgId: this.guid()
    }
  },
  methods: {
    guid() {
      function S4() {
         return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      }
      return (S4()+S4()+"-"+S4());
    }
  }
}
</script>

<style lang="scss">
.product-item{
  margin-top: 30px;
  .pro-name{
    font-size: 24px;
    color: #676767;
  }
  .pro-det{
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 340px;
    justify-content: space-between;
    .pro-img{
      height: 300px;
      width: 300px;
    }
    .img-list{
      width: 46px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin-left: 30px;
      margin-right: 60px;
      .img-item{
        width: 100%;
        height: 46px;
        input{
          display: none;
        }
        label{
          width:46px;
          height:46px;
          display:block;
          border: 1px #dedede solid;
          img{
            width: 100%;
          }
        }
        input:checked ~ label{
          border: 1px #11a95e solid;
        }
      }
    }
    .pro-desc{
      flex:1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      ul{
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        li{
          height: 36px;
          background-color: #d1d1d1;
          line-height: 45px;
          padding-left: 16px;
          span{
            font-size: 16px;
            color: #676767;
          }
        }
        li:nth-child(2n){
          background-color: #FFF;
        }
      }
      .buyNow {
        height: 42px;
        width: 80%;
        margin-left: 10%;
        text-align: center;
        line-height: 42px;
        display: block;
        color: #FFF;
        background-color: #11a95e;
      }

    }
  }
}
</style>
