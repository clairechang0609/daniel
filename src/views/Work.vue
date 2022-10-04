<template>
	<div class="work-wrap pt-5">
		<div class="title-card p-4 mb-5">
			<h5 class="title d-inline-block me-4">{{ $route.params.category }}</h5>
			<p class="subtitle d-inline-block">{{ category.title }}</p>
		</div>
		<div class="work-content mx-auto">
			<h6>{{ collection?.subtitle }}</h6>
			<h4>{{ collection?.title }}</h4>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Work',
	data() {
		return {
			data: {
				travel: {
					title: '旅行',
					collection: [
						{
							id: 4,
							title: 'Ciao 潮旅',
							subtitle: '2020 1月號',
							content: [
								'說明文字說明文字說明文字'
							],
							images: []
						}
					]
				}
			}
		};
	},
	computed: {
		category() {
			return this.data[this.$route.params.category];
		},
		collection() {
			return this.category?.collection?.find(item => item.id === Number(this.$route.params.id));
		}
	},
	mounted() {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	.title-card {
		border: 5px solid $black;
	}
	.subtitle {
		font-size: 14px;
		position: relative;
		display: inline-block;
		&::before {
			content: '';
			position: absolute;
			background: currentColor;
			width: 50px;
			height: 1px;
			right: -70px;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.work-content {
		max-width: 1000px;
	}
</style>
