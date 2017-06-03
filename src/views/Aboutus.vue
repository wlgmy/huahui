<template lang="html">
	<div class="aboutus">
		<div class="banner">
		<img src="../../public/pictures/conbanner.png" class="bannerimg">
		</div>
		<p>公司介绍</p>

		<div class="gongsijieshao">
			<div class="left">
				<p class="content">北京华汇嘉电气设备有限公司公司成立于2004年，注册资金5000万, 设有大型的现代化标准车间和展厅。一直以来致力于研发创新，内部 管理及生产工艺流程严格遵照国家规范，是市场公认的质量可靠企业。 <br><br>我们的新风系统经过国家权威部门认证，并获得多项国家专利。<br><br> 公司具备一流的生产工艺，拥有成套的先进加工设备，雄厚的技术力 量，大量的专业人员和技术骨干，优良的产品质量，严格的出厂检 测，完善的售后服务，可根据客户的需求提供最优质的设计方案及工 程咨询服务。<br><br> 公司的经营理念：客户致上，质量过硬，客户的满意高于一切。</p>
			</div>

			<div class="right">
				<img src="../../public/pictures/conbanner1.png" class="banner1">

			</div>
		</div>


		<p>车间概况</p>
		<div class="chejiangaikuang">
		<div class="arrow-wrap">
		<img class="arrow" src="../../public/pictures/conarrow1.png">
		</div>
		<img src="../../public/pictures/conpic1.png">
		<img src="../../public/pictures/conpic2.png">
		<img src="../../public/pictures/conpic3.png">
		<div class="arrow-wrap">
		<img class="arrow" src="../../public/pictures/conarrow2.png">
		</div>
			
		</div>


		<p>联系我们</p>
		<div class="contactus">
		<div class="conleft">
		<img src="../../public/pictures/conbanner2.png">
		</div>

		<div class="conright">
		<p class="contact">
		<span>北京华汇嘉电气设备有限公司</span><br> 地址：北京市大兴区******* <br> 邮编：102600 <br> 电话：010-80212071 <br> 业务联系人：沙经理 13811808395
			
		</p>

		</div>
			
		</div>
		
	</div>

</template>

<script>
export default {
}
</script>

<style lang="scss">

.aboutus{
	display: flex;
	flex-direction: column;

 .bannerimg{
 	width: 100%;
 }
 p{
 	text-align: center;
 	font-family: "Microsoft YaHei";
 	font-size:24px;
 	line-height: 22px;
 	color:#676767;
 }

.gongsijieshao{
	display: flex;
	flex-direction:row;
	width: 60%;
	margin:20px auto;
	p{
		font-size: 14px;
		line-height: 21px;
		text-align: left;
		display: flex;
		align-items: center;
	}
	.left{
		flex:1;
		flex-shrink: 0;
		margin:10px;

	}
	.right{
		flex:2;
		img{
			width: 100%;
			margin:10px;
		}
	}
}

.chejiangaikuang{
	display: flex;
	flex-direction:row;
	margin:20px auto;
	img{
		flex:2;
		width: 100%;
		margin:10px;
	}
	.arrow-wrap{
		display: flex;
		align-items: center;
	}
	.arrow{
		
		flex: 1;
	

	}

}

.contactus{
	display: flex;
	flex-direction:row;
	width: 60%;
	margin:20px auto;

	.conleft{
		flex:2;
		margin: 10px;
		img{
			width: 100%;
		}

	}

	.conright{
		flex:1;
		margin: 10px;
		display: flex;
		align-items: center;
		
	}
	p{
		font-size: 20px;
		text-align: left;
		line-height: 36px;
	}
	span{
		font-size: 24px;
	}
}

}

</style>
