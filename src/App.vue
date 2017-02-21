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
          <span><i class="iconfont">&#xe63b;</i>关注我们</span>
        </div>
      </div>
      <div class="nav">
        <div class="view navs">
          <router-link to="/#">首页</router-link>
          <router-link to="/#">产品中心</router-link>
          <router-link to="/#">解决方案</router-link>
          <router-link to="/#">客户案例</router-link>
          <router-link to="/#">合作共赢</router-link>
          <router-link to="/#">关于我们</router-link>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 233894 */
  src: url('//at.alicdn.com/t/font_tlvgpdp068lx47vi.eot');
  src: url('//at.alicdn.com/t/font_tlvgpdp068lx47vi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_tlvgpdp068lx47vi.woff') format('woff'),
  url('//at.alicdn.com/t/font_tlvgpdp068lx47vi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_tlvgpdp068lx47vi.svg#iconfont') format('svg');
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
    max-width: 1120px;
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
  .header{
    width: 100%;
    height: 120px;
    .top-header{
      display: flex;
      flex-direction: row;
      height: 60px;
      background-color: #FFF;
      justify-content: space-between;
      align-items: center;
      .logo{
        width: 82px;
        height: 60px;
        float: left;
      }
      span{
        font-szie: 20px;
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
      }
    }
  }
</style>
