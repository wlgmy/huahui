<template lang="html">
  <div class="solution">
      <img class="banner-img" src="~public/solbanner.png"/>
      <div class="tabCell">
        <div class="view tab">
          <div :class='["tabitem", tabSelect === 0 ? "selected" : ""]' @click="() => tabSelect = 0">
            壁挂式新风解决方案
          </div>
          <div :class='["tabitem", tabSelect === 1 ? "selected" : ""]' @click="() => tabSelect = 1">
            吊顶式新风解决方案
          </div>
          <div :class='["tabitem", tabSelect === 2 ? "selected" : ""]' @click="() => tabSelect = 2">
            柜式新风解决方案
          </div>
        </div>
      </div>

      <div class="view solute">
        <ul class="solList">
          <li v-for="item in solList">
            <img :src="item.imgSrc"/>
            <div class="intro">
              <p class="title">
                {{item.title}}
              </p>
              <p class="desc">
                {{item.desc}}
              </p>
              <p class="content">
                {{item.content}}
              </p>
              <div class="btn">
                <span>
                  了解相关产品>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>

</template>

<script>
const content = new Array(10).fill('描述文字').join(',')
const bigua = [
  {title: '家居', desc: '健康家居，有华汇嘉随行', content: content, imgSrc: '../../public/solbanner1.png'},
  {title: '办公', desc: '让灵感在清新呼吸中迸发', content: content, imgSrc: '../../public/solbanner2.png'},
  {title: '学校', desc: '给孩子们一个健康成长的环境', content: content, imgSrc: '../../public/solbanner3.png'},
  {title: '医院', desc: '清新呼吸，让健康随行', content: content, imgSrc: '../../public/solbanner4.png'}
]

const diaoding = bigua

const guishi = bigua

export default {
  components: {

  },
  data () {
    return {
      tabSelect: 0,
      lists: [
        bigua,
        diaoding,
        guishi
      ]
    }
  },
  methods: {

  },
  computed: {
    solList () {
      return this.lists[this.tabSelect]
    }
  }
}
</script>

<style lang="scss">
.tabCell{
  width: 100%;
  border-top: 1px #dedede solid;
  border-bottom: 1px #dedede solid;
}
.tab{
  height: 80px;
  display: flex;
  flex-direction: row;
  .tabitem {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #676767;
    font-weight: bold;
  }
  .selected {
    color: #11a95e;
    border-bottom:3px solid #11a95e;
  }
}
.solList{
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-top: 30px;
    position: relative;
    img{
      width: 100%;
    }
    &:hover{
      .intro{
        width: 100%;
        .btn{
          span{
            background-color: rgb(32 ,168 ,95);
          }
        }
      }
    }
    .intro {
      z-index: 2;
      overflow: hidden;
      background-color: rgba(209, 209, 209, .8);
      position: absolute;
      top: 0;
      left: 0;
      width: 280px;
      height: 100%;
      p{
        text-align: center;
        color: #676767;
        margin: 0;
        overflow : hidden;
        text-overflow: ellipsis;
        padding: 0 10px;
      }
      .title{
        font-size: 24px;
        margin-top: 48px;
        height: 1.2em;
      }
      .desc{
        font-size: 20px;
        margin-top: 36px;
      }
      .content{
        font-size: 14px;
        margin-top: 24px;
      }
      .btn{
        height: 60px;
        bottom: 30px;
        position: absolute;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          display: block;
          line-height: 60px;
          height: 60px;
          width: 230px;
          border-radius: 6px;
          background-color: #11a95e;
          color: #FFF;
        }
      }
    }
  }
}

</style>
