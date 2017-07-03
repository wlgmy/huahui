#<template lang="html">
  <div class="case-list">
    <img class="banner-img" src="~public/casebanner.png"/>
    <div class="view">
      <p class="case">
        客户经典案例
      </p>
      <div class="list flex flex-row">
          <router-link to="#" class="item">
          <img src="~public/casepic1.png"/>
          <div class="case-desc flex">
            <span>
              北京海淀区学院路小学
            </span>
          </div>

        </router-link >
        <router-link to="#" class="item">
        <img src="~public/casepic2.png"/>
        <div class="case-desc flex">
          <span>
            北京海淀区学院路小学
          </span>
        </div>

      </router-link >
      <router-link to="#" class="item">
      <img src="~public/casepic3.png"/>
      <div class="case-desc flex">
        <span>
          北京海淀区学院路小学
        </span>
      </div>

    </router-link >
    <router-link to="#" class="item">
    <img src="~public/casepic1.png"/>
    <div class="case-desc flex">
      <span>
        北京海淀区学院路小学
      </span>
    </div>

  </router-link >
  <router-link to="#" class="item">
  <img src="~public/casepic2.png"/>
  <div class="case-desc flex">
    <span>
      北京海淀区学院路小学
    </span>
  </div>

</router-link >
<router-link to="#" class="item">
<img src="~public/casepic3.png"/>
<div class="case-desc flex">
  <span>
    北京海淀区学院路小学
  </span>
</div>

</router-link >
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.banner-img{
  width: 100%;
  margin-bottom: 30px;
}
.case-list{
  .view{
    .case{
      margin:0;
      font-size: 24px;
      color:#676767;
      text-align: center;
    }
    .list{
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
        display: block;
        width: 30%;
        margin-top: 30px;
        text-decoration: none;
        position: relative;
        img{
          width: 100%;
          z-index: 1;
          display: block;
        }
        .case-desc{
          height: 45px;
          background-color: rgba(209,209,209,.8);
          z-index: 2;
          position: absolute;;
          margin-top: -45px;
          width: 100%;
          justify-content: center;
          align-items: center;
          span{
            font-size: 14px;
            color: #676767;
            margin: auto;
          }
        }
      }
      .item:hover{
        .case-desc{
          top:0;
          right: 0;
          left: 0;
          bottom: 0;
          height: 100%;
          line-height: 100%;
          margin-top: 0;
          span{
            text-decoration: underline;
            font-size: 20px;
          }
        }
      }
    }
  }
}
  @media screen and (max-width: 750px){
    .case-list{
      .view{
        .list{
          .item{
            width: 48%;
          }
        }
      }
    }
  }
</style>
