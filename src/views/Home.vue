<template>
	<div class="home-wrap">
		<div class="swiper-wrap mx-auto">
			<div class="animate__animated animate__jello animate__delay-1s mb-2">
				<div class="swiper swiper-container">
					<div class="swiper-wrapper">
						<div v-for="(item, key) in banner" :key="`banner_${key}`" class="swiper-slide bg-light">
							<img :src="getImageUrl('banner', item)" alt="banner" class="banner">
						</div>
					</div>
				</div>
			</div>
			<div class="row gx-5">
				<div class="col-md-7">
					<small>我們不只是用相機拍照。我們帶到攝影中的是所有我們讀過的書、看過的電影、聽過的音樂、愛過的人。 — Ansel Adams</small>
				</div>
				<!-- about -->
				<div class="col-md-5">
					<div class="guide-card bg-white ms-auto position-relative py-4 px-md-5">
						<div class="mb-3">
							<h4 class="title d-sm-inline-block lh-lg me-3">關於我</h4>
							<h5 class="subtitle">about</h5>
						</div>
						<small class="d-block lh-lg">
							<span class="name fs-7 fw-bold">Daniel Chang 張景棠</span> <br />
							Editor - Writer - Shutterbug <br />
							Born｜1989.01.07 <br />
							Hometown｜Taipei <br />
							Residence｜New Taipei City
						</small>
					</div>
				</div>
			</div>
		</div>
		<!-- experience -->
		<div id="experience" class="experience-content mx-auto py-3 py-sm-4 py-md-5">
			<div class="row gx-5">
				<div class="col-sm-8 mb-3 mb-sm-0">
					<div class="mb-3 mb-md-5">
						<h4 class="title lh-lg me-4 fs-md-2">工作經歷</h4>
						<h5 class="subtitle fs-md-4">experience</h5>
					</div>
					<ul class="lh-lg">
						<li v-for="(item, index) in experience" :key="`experience_${index}`" class="mt-3">
							<p class="fw-bold fs-7">
								{{ item.during }}｜{{ item.company }} {{ item.title }}
								<template v-if="item.titleList?.length">
									<small class="d-block" v-for="(titleItem, key) in item.titleList" :key="`title_${index}_${key}`">
										{{ titleItem.name }} {{ titleItem.during }}
									</small>
								</template>
							</p>
							<div class="d-flex flex-column ms-sm-3 mt-2">
								<small v-for="(publishItem, key) in item.publish" :key="`publish_${index}_${key}`" class="mt-1">
									- {{ publishItem }}
								</small>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-sm-4 align-self-end">
					<div class="image-wrap bg-light mb-2 mb-md-4"></div>
					<div class="text-end mb-2">
						<a href="#" class="profile-link fs-7 ms-auto py-1">
							profile<i class="bi bi-arrow-right ms-1"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- works -->
		<div id="work" class="work-content pt-4 pt-md-5">
			<div v-for="work in works" :key="work.id" class="work-wrap pb-3 pb-md-5">
				<div class="mb-4 mb-md-5">
					<h3 class="title lh-lg d-md-inline-block">{{ work.id }}</h3>
					<h6 class="subtitle fs-6 ms-md-3 fw-normal">{{ work.title }}</h6>
				</div>
				<ul class="row">
					<li v-for="item in work.collections" :key="`work_${work.id}_${ item.id}`"
						class="work col-md-6 col-lg-4 mb-4">
						<router-link :to="`work/${work.id}/${item.id}`" class="work-item">
							<small class="d-block fw-bold mb-3">{{ item.date }} ｜ {{ item.title }}</small>
							<div class="image-wrap position-relative bg-light mb-3">
								<img :src="getImageUrl(work.id, item.image)" :alt="item.title" class="image position-absolute">
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- contact -->
		<div id="contact" class="contact-content bg-light bg-opacity-50 text-center position-relative mx-auto mt-5 p-5">
			<h3 class="title position-absolute">contact</h3>
			<p class="mb-2">專題企劃、採訪撰稿歡迎來信</p>
			<i class="bi bi-envelope d-block mb-2"></i>
			<a href="mailto:danielchang0281@gmail.com" class="email fs-7" target="_blank" rel="noreferrer noopener">danielchang0281@gmail.com</a>
		</div>
	</div>
</template>

<script>
import Swiper, {
	Autoplay,
	EffectCoverflow,
	EffectCube,
	Pagination,
	Navigation
} from 'swiper';

Swiper.use([ Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation ]);

export default {
	name: 'Home',
	data() {
		return {
			banner: [
				'banner-1.jpg',
				'banner-2.jpg',
				'banner-3.jpg',
				'banner-4.jpg',
				'banner-5.jpg',
				'banner-6.jpg'
			],
			works: [ // 作品
				{
					id: 'people',
					title: ' 人物',
					collections: [
						{
							id: 1,
							date: '2019 冬季號',
							title: 'Infinite 台新無限季刊',
							image: 'dancer01.png'
						},
						{
							id: 2,
							date: '2020 秋季號',
							title: 'Infinite 台新無限季刊',
							image: 'Flower01.png'
						},
						{
							id: 3,
							date: '2020 春季號',
							title: 'Infinite 台新無限季刊',
							image: 'tiger01.png'
						},
						{
							id: 4,
							date: '2021 冬季號',
							title: 'Infinite 台新無限季刊',
							image: 'Louisa01.png'
						},
						{
							id: 5,
							date: '2021 夏季號',
							title: 'Infinite 台新無限季刊',
							image: 'Atitan01.png'
						},
						{
							id: 6,
							date: '2020 冬季號',
							title: 'Infinite 台新無限季刊',
							image: 'Celia01.png'
						},
						{
							id: 7,
							date: '2022 秋季號',
							title: 'Infinite 台新無限季刊',
							image: 'PoChen01.png'
						},
						{
							id: 8,
							date: '2020 夏季號',
							title: 'Infinite 台新無限季刊',
							image: 'Reach01.png'
						}
					]
				},
				{
					id: 'features',
					title: '專題',
					collections: [
						{
							id: 1,
							date: '2022 秋季號',
							title: 'Infinite 台新無限季刊',
							image: 'Handmade01.png'
						},
						{
							id: 2,
							date: '2022 春季號',
							title: 'Infinite 台新無限季刊',
							image: 'TWculture01.png'
						},
						{
							id: 3,
							date: '2021 夏季號',
							title: 'Infinite 台新無限季刊',
							image: 'Local01.png'
						}
					]
				},
				{
					id: 'travel',
					title: '旅行',
					collections: [
						{
							id: 1,
							date: '2020 1月號',
							title: 'Ciao 潮旅',
							image: 'Hokkaido01.png'
						},
						{
							id: 2,
							date: '2019 7月號',
							title: 'Ciao 潮旅',
							image: 'Scotland01.png'
						},
						{
							id: 3,
							date: '2020 秋季號',
							title: 'Infinite 台新無限季刊',
							image: 'Island01.png'
						},
						{
							id: 4,
							date: '2020 4月號',
							title: 'Ciao 潮旅',
							image: 'Old01.png'
						},
						{
							id: 5,
							date: '2020 3月號',
							title: 'Ciao 潮旅',
							image: 'CityArch01.png'
						},
						{
							id: 6,
							date: '2021 Vol.08',
							title: 'terroir 肥沃台灣',
							image: 'Sea01.png'
						}
					]
				},
				{
					id: 'collection',
					title: '收藏',
					collections: [
						{
							id: 1,
							date: '2021 冬季號',
							title: 'Infinite 台新無限季刊',
							image: 'collect01.png'
						},
						{
							id: 2,
							date: '2021 1月號',
							title: '合庫樂活理財季刊',
							image: 'poster01.png'
						},
						{
							id: 3,
							date: '2020 7季號',
							title: '合庫樂活理財季刊',
							image: 'Chimei01.png'
						},
						{
							id: 4,
							date: '2019 10月號',
							title: '合庫樂活理財季刊',
							image: 'coffeejoe01.png'
						}
					]
				},
				{
					id: 'architecture',
					title: '建築',
					collections: [
						{
							id: 1,
							date: '2022 夏季號',
							title: 'Infinite 台新無限季刊',
							image: 'Home01.png'
						},
						{
							id: 2,
							date: '2021 秋季號',
							title: 'Infinite 台新無限季刊',
							image: 'texture01.png'
						},
						{
							id: 3,
							date: '2019 1月號',
							title: 'Core Interior 空間',
							image: 'TPAC01.png'
						}
					]
				}
			],
			experience: [ // 經歷
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
			],
			swiperOptions: { // 輪播設定
				loop: true,
				slidesPerView: 1,
				autoplay: true
			},
			swiper: ''
		};
	},
	mounted() {
		this.swiper = new Swiper('.swiper', this.swiperOptions);
		window.addEventListener('scroll', this.showElement, true);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.showElement);
	},
	methods: {
		showElement() { // 顯示內容動態效果
			const workItems = document.querySelectorAll('.work');
			workItems.forEach(item => {
				if ((item.offsetTop + 50) < (window.scrollY + window.innerHeight)) {
					item.classList.add('active');
				}
			});
		},
		getImageUrl(category, image) { // 取得圖片路徑
			return require(`@/assets/image/${category}/${image}`);
		}
	}
};
</script>

<style lang="scss" scoped>
	.swiper {
		max-width: $container-width;
		height: 250px;
		@include media-sm {
			height: 350px;
		}
		@include media-md {
			height: 480px;
		}
		@include media-lg {
			height: 650px;
		}
		.banner {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
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
		@include media-md {
			margin-top: -50px;
			z-index: 500;
		}
		.title {
			letter-spacing: 1rem;
		}
	}
	.experience-content {
		max-width: 1000px;
		.title {
			letter-spacing: 2rem;
		}
		.image-wrap {
			padding-top: 100%;
			background-image: url('~@/assets/image/avatar.jpg');
			@include backgroundImage;
		}
	}
	.work-content {
		.title {
			letter-spacing: 0.5rem;
		}
		.work {
			&.active {
				animation: fadeInLeft;
				animation-duration: 1.5s;
			}
		}
		.work-item {
			overflow: hidden;
			transition: 0.8s;
			&:hover {
				opacity: 0.6;
				.image {
					width: 87.5%;
				}
			}
			.image-wrap {
				padding-top: 75%;
				&::before, &::after {
					z-index: -1;
					position: absolute;
					content: '';
					bottom: 15px;
					left: 10px;
					width: 50%;
					top: 80%;
					max-width: 300px;
					background: rgba($black, 0.45);
					box-shadow: 0 15px 10px rgba($black, 0.45);
					transform: rotate(-3deg);
				}
				&::after {
					transform: rotate(3deg);
					right: 10px;
					left: auto;
				}
			}
			.image {
				width: 75%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				box-shadow: 0 0.35rem 0.35rem -0.25rem rgba($black, 0.2);
				transition: 0.8s;
			}
		}
	}
	.contact-content {
		max-width: 750px;
		.title {
			letter-spacing: 0.5rem;
			top: -1.5rem;
			left: 50%;
			transform: translateX(-50%);
		}
		.email {
			&:hover {
				opacity: 0.6;
			}
		}
	}
</style>
