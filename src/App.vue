<template>
  <div id="app">
    <!-- <div class="header">
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/top">Top</router-link>
        <router-link to="/new">New</router-link>
        <router-link to="/show">Show</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/job">Jobs</router-link>
        <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">
          Built with Vue.js
        </a>
      </div>ß
    </div> -->
    <div class="header">
      <div class="view top-header">
        <div>
          <img class="logo" src="~public/logo.png"/>
          <span>新风系统</span>
        </div>
        <div>
          <span><i class="iconfont">&#xe63f;</i>在线购买</span>
          <span @click="showOrHideAtt"><i class="iconfont">&#xe63b;</i>关注我们</span>
        </div>
        <transition name="fade" mode="out-in">

          <div class="attention flex flex-row" v-show="showAtt">
            <div class="flex flex-column">
              <img src="~public/code1.png" />
              <p>
                微信客服
              </p>
            </div>
            <div class="flex flex-column">
              <img src="~public/code1.png" />
              <p>
                公众号
              </p>
            </div>
          </div>
        </transition>
      </div>
      <div class="nav">
        <div class="view navs">
          <router-link to="/#" :class="currentRouter === 'home' ? 'current' : ''">首页</router-link>
          <router-link to="/product" :class="currentRouter === 'product' ? 'current' : ''">产品中心</router-link>
          <router-link to="/#" :class="currentRouter === 'project' ? 'current' : ''">解决方案</router-link>
          <router-link to="/caselist" :class="currentRouter === 'case' ? 'current' : ''">客户案例</router-link>
          <router-link to="/#" :class="currentRouter === 'cooperation' ? 'current' : ''">合作共赢</router-link>
          <router-link to="/#" :class="currentRouter === 'aboutus' ? 'current' : ''">关于我们</router-link>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <div class="footer">
      <div class="nav">
        <div class="view navs">
          <router-link to="/#">网站首页</router-link>
          <router-link to="/#">产品中心</router-link>
          <router-link to="/#">解决方案</router-link>
          <router-link to="/caselist">客户案例</router-link>
          <router-link to="/#">合作共赢</router-link>
          <router-link to="/#">关于我们</router-link>
        </div>
      </div>
      <div class="footer-content flex flex-row view">
        <div class="left flex flex-column">
          <div>
            <img class="logo" src="~public/logo.png"/>
            <span>新风系统</span>
          </div>
          <p>
            Copyright&#169; 2016 北京华汇嘉电器设备有限公司 京ICP备*****
          </p>
          <p>
            邮编：102600 北京市大兴区青云店工业区甲2号
          </p>
        </div>
        <i class="iconfont right">&#xe65d;</i>
      </div>
    </div>
    <img class="phone" src="~public/phone-box.png"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showAtt: false,
      currentRouter: 'home'
    }
  },
  methods: {
    showOrHideAtt() {
      this.showAtt = !this.showAtt
    },
    changeRouter(){
      this.currentRouter = this.$route.name || 'home'
    }
  },
  watch: {
    '$route':'changeRouter'
  },
  mounted(){
    this.currentRouter = this.$route.name || 'home'
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 233894 */
  src: url('//at.alicdn.com/t/font_1nc70rdfwujqyqfr.eot');
  src: url('//at.alicdn.com/t/font_1nc70rdfwujqyqfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1nc70rdfwujqyqfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_1nc70rdfwujqyqfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1nc70rdfwujqyqfr.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size: 16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.flex{
  display: flex;
}
.flex-row{
  flex-direction: row;
}
.flex-column{
  flex-direction: column;
}

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    background-color: #FFF;
    margin: 0;
    overflow-y: scroll;
  }
  .view{
    max-width: 800px;
    text-decoration: none;
    position: relative;
    margin: 0 auto;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
  .attention{
    position: absolute;;
    z-index: 999;
    background-color: #FFF;
    padding: 10px;
    top: 60px;
    right: 0;
    div + div{
      margin-left: 10px;
    }
  }
  .header{
    width: 100%;
    .top-header{
      display: flex;
      flex-direction: row;
      background-color: #FFF;
      justify-content: space-between;
      align-items: center;
      .logo{
        width: 82px;
        height: 60px;
        float: left;
      }
      span{
        font-size: 20px;
        color: #676767;
        margin-left: 20px;
        display: block;
        height: 60px;
        line-height: 60px;
        float: left;
        i{
          margin-right: 10px;
        }
      }
      span:hover{
        color: #17d676;
      }
    }
  }
  .nav{
    width: 100%;
    height: 60px;
    background: url('~public/footerbar.png') repeat;
    .navs{
      display: flex;
      flex-direction: row;
      a{
        flex: 1;
        text-decoration: none;
        color: #FFF;
        display: block;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .current{
        color: #676767;
        border-bottom: 2px solid #676767;
      }
    }
  }
  .footer{
    background: url('~public/footerbar.png') repeat;
    .nav{
      background: none;
      margin-top: 30px;
    }
    .footer-content{
      border-top: 1px solid #FFF;
      justify-content: space-between;
      padding-bottom: 53px;
      align-items: center;
      .left{
        div{
          img{
            width: 60px;
            margin-right: 10px;
            float: left;
            height: 45px;
          }
          span{
            font-size: 16px;
            color: #FFF;
            line-height: 45px;
            height: 45px;
            float: left;
          }
        }
      }
      p{
        font-size: 14px;
        line-height: 150%;
        color: #FFF;
        margin: 0;
      }
    }
    .right{
      font-size: 18px;
      font-weight:900;
      color: #FFF;
    }
  }
  .phone{
    position: fixed;
    top:40%;
    right: 1%;
    width: 160px;
    z-index: 999;
  }
  @media screen and (max-width: 750px) {
    .top-header{
      flex-direction: column !important;
      div{
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
    .phone{
      display: none;
    }
  }
  .view{
    width: 96%;
    margin: 0 auto;
  }
</style>
