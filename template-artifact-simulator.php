<?php /* Template Name: artifact */ ?>
<?php

if ( ! is_front_page() )
	get_header(); ?>

<style>
.page-container{margin:20px;font-family:"Microsoft Yahei",Arial;-moz-user-select:none;-webkit-user-select:none}*{margin:0;padding:0}h1,h3{margin:20px;margin-top:0;color:#212121;text-align:center}.wrapper{width:740px;height:635px;margin:0 auto}.effect{text-align:left;width:740px;margin:30px auto;background:#FFF;box-shadow:0 5px 10px rgba(0,0,0,0.35),0 4px 15px rgba(0,0,0,0.33);color:#212121;padding:5px 10px}.wrapper-15{background:url(http://www.myriptide.com/artifact-simulator/img/bg15.jpg) no-repeat}.wrapper-40{background:url(http://www.myriptide.com/artifact-simulator/img/40.jpg) no-repeat}.wrapper-41{background:url(http://www.myriptide.com/artifact-simulator/img/41.jpg) no-repeat}.wrapper-42{background:url(http://www.myriptide.com/artifact-simulator/img/42.jpg) no-repeat}line{stroke:#aaaaaa;stroke-width:5px}.page-container .tooltip{position:absolute;width:200px;height:auto;font-family:"Microsoft Yahei";font-size:14px;line-height:20px;text-align:left;border:2px solid #fff;border-radius:10px;background-color:rgba(10,10,10,0.7);color:#ffeb3b;padding:5px 10px}.page-container .tooltip h3{color:#fff;font-size:16px;margin:0;text-align:left}.power,.border,.link{opacity:0.5}svg .active{opacity:1}.power[data-role="unlocked"],.border[data-role="unlocked"]{opacity:1;}
</style>
	<div class="page-container">
	<div class="effect">
		<h1>萨满——元素天赋</h1>
		<h3>莱登之拳</h3>
		<p ><b>神器特效：</b>施放闪电箭或熔岩爆裂时，你有一定几率用元素能量充能，使你下2次闪电箭额外过载2次，下2次熔岩爆裂的伤害提高100%。</p>
	</div>
	<div class="wrapper wrapper-40"></div>
	<div class="effect">
		<h1>萨满——增强天赋</h1>
		<h3>毁灭之锤</h3>
		<p><b>神器特效：</b>使用火舌、冰封或石化时，你有一定几率用该种元素类型为你的毁灭之锤充能，对敌人造成毁灭性的效果。</p>
	</div>
	<div class="wrapper wrapper-41"></div>
	<div class="effect">
		<h1>萨满——恢复天赋</h1>
		<h3>艾萨拉的权杖</h3>
		<p><b>神器特效：</b>你的治疗法术有一定几率触发艾萨拉之赐。艾萨拉之赐在3秒内从你向一个受伤同伴移动。触发时，为5码内所有同伴恢复x点生命值。其他同伴可以通过接触艾萨拉之赐来激活这个效果。</p>
	</div>
	<div class="wrapper wrapper-42"></div>
</div>
<script src="http://www.myriptide.com/artifact-simulator/js/data.js"></script>
<script src="http://www.myriptide.com/artifact-simulator/js/d3.min.js"></script>
<script src="http://www.myriptide.com/artifact-simulator/js/demo.min.js"></script>

<?php if ( ! is_front_page() ) get_footer(); ?>