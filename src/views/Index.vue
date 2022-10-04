<template>
	<div id="main-container" class="main-container">
		<TheNavbar></TheNavbar>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import TheNavbar from '@layout/TheNavbar.vue';

export default {
	name: 'Template',
	components: {
		TheNavbar
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
	.content {
		@include container-setting;
		margin-top: $navbar-height;
		margin-bottom: 4rem;
	}
</style>
