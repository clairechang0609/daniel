<template>
	<div class="work-wrap pt-5 mx-auto">
		<div class="row gx-5 pb-4">
			<div class="col-md-6">
				<div class="title-card h-100">
					<div class="title-card-body p-3">
						<h3 class="title mb-2">{{ $route.params?.category }}</h3>
						<h5 class="subtitle position-relative d-inline-block fs-7">{{ category.title }}</h5>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="work-content">
					<small class="mb-2">{{ collection.date }}</small>
					<h4 class="mb-4">{{ collection.masthead }}</h4>
					<div class="d-flex flex-column fs-7">
						<p>{{ collection.credit }}</p>
						<p>{{ collection.title }}</p>
						<p>{{ collection.subtitle }}</p>
					</div>
				</div>
			</div>
		</div>
		<ul class="image-content pt-5">
			<li class="image-wrap position-relative mb-5" :alt="item" v-for="item in collection.images" :key="item">
				<img :src="getImageUrl(item)" class="position-relative image w-100">
			</li>
		</ul>
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
				people: {
					title: '人物',
					collections: [
						{
							id: 1,
							masthead: '刊頭',
							date: '2020 10月號',
							title: '主標',
							subtitle: '副標',
							credit: '作者',
							images: [
								'dancer01.png',
								'dancer02.png'
							]
						},
						{
							id: 2,
							masthead: '刊頭',
							date: '2020 10月號',
							title: '主標',
							subtitle: '副標',
							credit: '作者',
							images: [
								'Flower01.png',
								'Flower02.png'
							]
						}
					]
				},
				travel: {
					title: '旅行',
					collections: [
						{
							id: 1,
							masthead: '刊頭',
							date: '2020 10月號',
							title: '主標',
							subtitle: '副標',
							credit: '作者',
							images: [

							]
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
			return this.category?.collections?.find(item => item.id === Number(this.$route.params.id));
		}
	},
	methods: {
		getImageUrl(image) { // 取得圖片路徑
			return require(`@/assets/image/${this.$route.params?.category}/${image}`);
		}
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
	.image-wrap {
		box-shadow:0 1px 4px rgba($black, 0.3), 0 0 40px rgba($black, 0.1) inset;
		&::before, &::after {
			content: '';
			position: absolute;
			z-index: -1;
			box-shadow:0 0 20px rgba($black, 0.8);
			top: 50%;
			bottom: 0;
			left: 10px;
			right: 10px;
			-moz-border-radius: 100px / 10px;
			border-radius: 100px / 10px;
		}
		&::after {
			right: 10px;
			left: auto;
			transform: skew(8deg) rotate(3deg);
		}
	}
</style>
