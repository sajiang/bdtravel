<template>
	<div class="content">
		{{$route.params.content}}
	</div>
</template>

<script>

export default {
	name: 'content',
	data () {
		return {
		  	imgPath:"../../../static/",
		}
	}
}
</script>

<style lang='less' scoped>
@import '../../../assets/common.less';
</style>
