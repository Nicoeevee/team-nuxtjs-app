<template>
	<div class="content">
		<div class="center">
			<div class="center_left">
				<div class="center_right">
						<div ><strong>标题</strong>
						<p>plugins 目录是我们存放自定义插件的地方，自定的插件可以直接在我们的vue代码里面使用，
							这里如果我们在创建项目的时候选择了UI框架，默认是会把UI框架的配置文件存放到这个目录，
							比如我这里创建之前选择了elementui，里面会包含一个element-ui.js，代码就跟我们平时用element配置一样,写一个自己的插件也比较简单，
							比如我这里写了一个时间格式化的插件</p>
								<div style="margin-top:20px;float:right;">
									<span>200浏览</span>
									<span>消息</span>
									<span>点赞</span>
								</div>
						</div>
						<div>
						<strong>标题</strong>
						<p>plugins 目录是我们存放自定义插件的地方，自定的插件可以直接在我们的vue代码里面使用，
							这里如果我们在创建项目的时候选择了UI框架，默认是会把UI框架的配置文件存放到这个目录，
							比如我这里创建之前选择了elementui，里面会包含一个element-ui.js，代码就跟我们平时用element配置一样,写一个自己的插件也比较简单，
							比如我这里写了一个时间格式化的插件</p>
								<div style="margin-top:20px;float:right;">
									<span>200浏览</span>
									<span>消息</span>
									<span>点赞</span>
								</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		layout:'default'
	}
</script>

<style scoped>
	.center_right>div{
		border: 1px solid #cfcfcf;
		background-color: aliceblue;
		min-height:150px;
	}
	.content{
		width: 100%;
		background-color:blue;
		overflow: hidden;
	}
	.center{
		width: 1100px;
		margin: 0px auto;
		overflow: hidden;
	}
	.center_left{
		width: 1200px;
		margin-right: 20px;
		min-height: 500px;
		background-color: pink;
		float: left;
		border-radius: 5px;
		padding: 10px;
	}
	.center_right{
		width: 1000px;
		min-height: 400px;
		background-color:#ffffff;
		float: left;
		margin-top: 20px;
		padding: 10px;
	}
</style>
