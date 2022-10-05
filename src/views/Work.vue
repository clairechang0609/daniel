<template>
	<div class="work-wrap pt-5 mx-auto">
		<div class="row gx-5">
			<div class="col-md-6">
				<div class="title-card h-100">
					<div class="title-card-body p-3">
						<h3 class="title">travel</h3>
						<h5 class="subtitle position-relative d-inline-block fs-7">旅行</h5>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="work-content">
					<small class="mb-2">2020 10月號</small>
					<h4 class="mb-4">刊頭名稱</h4>
					<p class="fs-7">
						作者是誰：一些內容 <br /><br />
						這是說明文字一段這是說明文字一段這是說明文字一段， <br />
						說明文字二段說明文字二段說明文字二段，以上。 <br />
					</p>
				</div>
			</div>
		</div>
		<div class="image-content mt-5">
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
			<div class="image-example mb-4 bg-light w-100"></div>
		</div>
		<div>
			<router-link :to="{ name: 'Home' }" class="fs-8">
				<i class="bi bi-arrow-left me-1"></i>back home
			</router-link>
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
			return this.data[this.$route.params?.category];
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
	.work-wrap {
		max-width: 1000px;
	}
	.title-card {
		border: 7px solid $black;
	}
	.subtitle {
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
	.image-example {
		padding-top: 75%;
	}
</style>
