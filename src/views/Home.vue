<template>
	<div class="home-wrap">
		<div class="carousel-wrap mx-auto mb-5">
			<div id="carousel" class="carousel slide animate__animated animate__jello animate__delay-1s bg-light mb-2" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item bg-light" data-bs-interval="3000" v-for="(item, key) in banner" :key="`banner_${key}`"
						:class="{ 'active': !key }">
						<img src="@/assets/image/banner/banner-1.jpg" alt="banner" class="banner">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-7">
					<small>some descriptions to introduce this pictures</small>
				</div>
				<div class="col-5">
					<div class="guide-card bg-white ms-auto p-4">
						<h6 class="fw-bold mb-3">Editor / Writer / Shutterbug</h6>
						<small>
							我是說明文字 <br />
							我是說明文字 <br />
							我是說明文字 <br />
							我是說明文字 <br />
							我是說明文字
						</small>
					</div>
				</div>
			</div>
		</div>
		<!-- about -->
		<div id="about" class="about-content row gx-5 mx-auto pb-5">
			<div class="col-sm-8">
				<div class="mb-5">
					<h2 class="title d-inline-block lh-lg me-4">關於我</h2>
					<h4 class="subtitle">about</h4>
				</div>
				<ul class="lh-lg">
					<li v-for="(item, index) in experience" :key="`experience_${index}`" class="mt-3">
						<p class="fw-bold">
							{{ item.during }}｜{{ item.company }} {{ item.title }}
							<template v-if="item.titleList?.length">
								<small class="d-block" v-for="(titleItem, key) in item.titleList" :key="`title_${index}_${key}`">
									{{ titleItem.name }} {{ titleItem.during }}
								</small>
							</template>
						</p>
						<div class="d-flex flex-column ms-3 mt-2">
							<small v-for="(publishItem, key) in item.publish" :key="`publish_${index}_${key}`" class="mt-1">
								- {{ publishItem }}
							</small>
						</div>
					</li>
				</ul>
			</div>
			<div class="col-sm-4 align-self-end">
				<div class="text-end mb-4">
					<a href="#" class="profile-link ms-auto py-1">
						profile<i class="bi bi-arrow-right ms-1"></i>
					</a>
				</div>
				<div class="image-wrap bg-light"></div>
			</div>
		</div>
		<!-- works -->
		<div id="work" class="work-content pt-5">
			<div v-for="workItem in works" :key="workItem.id" class="work-item pb-5">
				<h3 class="mb-5">
					{{ workItem.id }}
					<small class="subtitle fs-6 ms-3 fw-normal">{{ workItem.title }}</small>
				</h3>
				<ul class="row">
					<li v-for="(item, key) in workItem.collections" :key="`${workItem.id}_${key}`"
						class="col-md-6 col-lg-4 mb-4">
						<small class="d-block fw-bold mb-3">{{ item.date }} ｜ {{ item.title }}</small>
						<div class="image-wrap bg-light mb-3"></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import bootstrapComponents from '@/mixin/bootstrap.js';

export default {
	name: 'Home',
	mixins: [ bootstrapComponents ],
	components: {
	},
	data() {
		return {
			banner: [
				'banner-1.jpg',
				'banner-2.jpg',
				'banner-3.jpg',
				'banner-4.jpg'
			],
			works: [
				{
					id: 'travel',
					title: '旅行',
					collections: [
						{
							date: '2022 夏季號',
							title: 'tigertales 台灣虎航機上誌'
						},
						{
							date: '2021 春季號',
							title: 'tigertales 台灣虎航機上誌'
						}
					]
				},
				{
					id: 'people',
					title: '人物',
					collections: [
						{
							date: '2022.06',
							title: 'Infinite 台新無限季刊'
						},
						{
							date: '2021.08',
							title: 'Infinite 台新無限季刊'
						},
						{
							date: '2021.06',
							title: 'Infinite 台新無限季刊'
						},
						{
							date: '2020.11',
							title: 'Infinite 台新無限季刊'
						}
					]
				}
			],
			experience: [
				{
					during: '2019-now',
					company: '華訊事業股份有限公司',
					title: '副總編輯',
					titleList: [
						{
							during: '2022-now',
							name: '代編部 副總編輯'
						},
						{
							during: '2019-2022',
							name: '代編部 主編'
						}
					],
					publish: [
						'Infinite 台新無限季刊（台新銀行無限卡會員刊物）',
						'合庫樂活理財季刊（合作金庫理財季刊）',
						'terroir 肥沃台灣（台灣肥料企業形象刊物）',
						'dawn 曙光季刊（國立臺東生活美學館）',
						'Ciao 潮旅（華訊與中華航空異業合作旅遊刊物）'
					]
				},
				{
					during: '2016-2019',
					company: '意念文創股份有限公司',
					title: '主編',
					publish: [
						'tigertales 台灣虎航機上雜誌',
						'Inspire 意念圖誌',
						'My Plus 加分誌'
					]
				},
				{
					during: '2015-2016',
					company: '世界公民文化中心',
					title: '企劃編輯',
					publish: [ '英語島雜誌' ]
				}
			]
		};
	},
	mounted() {
		window.addEventListener('scroll', this.showElement, true);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.showElement);
	},
	methods: {
		showElement() {
			const workItems = document.querySelectorAll('.work-item');
			workItems.forEach(item => {
				if ((item.offsetTop + 50) < (window.scrollY + window.innerHeight)) {
					item.classList.add('active');
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.carousel {
		z-index: -1;
	}
	.carousel-item {
		max-width: $container-width;
		height: 650px;
		.banner {
			width: 100%;
			height: 650px;
			object-fit: cover;
		}
	}
	.title {
		letter-spacing: 2rem;
	}
	.subtitle {
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
	.profile-link {
		font-size: 14px;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			background: currentColor;
			width: 100%;
			height: 1px;
			left: 0;
			bottom: 0;
			transition: width 0.3s ease-out;
		}
		&:hover {
			opacity: 0.75;
			&::before {
				width: calc(100% + 1rem);
			}
		}
	}
	.guide-card {
		margin-top: -50px;
	}
	.about-content {
		max-width: 1000px;
		.image-wrap {
			padding-top: 100%;
			background-image: url('~@/assets/image/avatar.jpg');
			@include backgroundImage;
		}
	}
	.work-content {
		.image-wrap {
			padding-top: 75%;
		}
		.work-item {
			&.active {
				animation: fadeInLeft;
				animation-duration: 1.5s;
			}
		}
	}
</style>
