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
							masthead: 'Infinite 台新無限季刊',
							date: '2019 冬季號',
							title: '回鄉逐夢的勇者 布拉瑞揚',
							subtitle: '「台新藝術獎」首位連年獲獎藝術家',
							credit: 'TEXT_Daniel PHOTO_周兆志、林峻永、陳韋勝、李麟、拉風影像工作室',
							images: [
								'dancer01.png',
								'dancer02.png'
							]
						},
						{
							id: 2,
							masthead: 'Infinite 台新無限季刊',
							date: '2020 秋季號',
							title: '大自然裡的花草行者',
							subtitle: 'CNFlower西恩 凌宗湧',
							credit: 'TEXT_Daniel PHOTO_Kris Kang、CNFlower西恩',
							images: [
								'Flower01.png',
								'Flower02.png'
							]
						},
						{
							id: 3,
							masthead: 'Infinite 台新無限季刊',
							date: '2020 春季號',
							title: '碧海藍天 袁緒虎',
							subtitle: '水下攝影及導演',
							credit: 'TEXT_Daniel PHOTO_莊智淵、袁緒虎',
							images: [
								'tiger01.png',
								'tiger02.png'
							]
						},
						{
							id: 4,
							masthead: 'Infinite 台新無限季刊',
							date: '2021 冬季號',
							title: '打造路易莎咖啡宇宙',
							subtitle: '黃銘賢 進軍商用精品咖啡',
							credit: 'TEXT_Daniel PHOTO_蔡勝義、路易莎咖啡',
							images: [
								'Louisa01.png',
								'Louisa02.png'
							]
						},
						{
							id: 5,
							masthead: 'Infinite 台新無限季刊',
							date: '2021 夏季號',
							title: '美的釋放者',
							subtitle: '磊勒丹・巴瓦瓦隆',
							credit: 'TEXT_Daniel PHOTO_蔡勝義、磊勒丹・巴瓦瓦隆',
							images: [
								'Atitan01.png',
								'Atitan02.png'
							]
						},
						{
							id: 6,
							masthead: 'Infinite 台新無限季刊',
							date: '2020 冬季號',
							title: '設計 恰到好處的美',
							subtitle: 'Celia Chu 朱怡芬',
							credit: 'TEXT_Daniel PHOTO_莊智淵、Celia Chu',
							images: [
								'Celia01.png',
								'Celia02.png'
							]
						},
						{
							id: 7,
							masthead: 'Infinite 台新無限季刊',
							date: '2022 秋季號',
							title: '找到屬於你的那片海',
							subtitle: '攝影師Po Chen',
							credit: 'TEXT_Daniel PHOTO_Po Chen',
							images: [
								'PoChen01.png',
								'PoChen02.png'
							]
						},
						{
							id: 8,
							masthead: 'Infinite 台新無限季刊',
							date: '2020 夏季號',
							title: '用塗鴉轟炸城市',
							subtitle: '塗鴉藝術家 Reach',
							credit: 'TEXT_Daniel PHOTO_Kris Kang、Reach',
							images: [
								'Reach01.png',
								'Reach02.png'
							]
						}
					]
				},
				features: {
					title: '專題',
					collections: [
						{
							id: 1,
							masthead: 'Infinite 台新無限季刊',
							date: '2022 秋季號',
							title: '手作的溫度 HANDMADE',
							subtitle: '',
							credit: 'TEXT_Daniel、黃映嘉、YuhShan PHOTO_莊智淵、能作、蔡勝義、Christina、HMM、Ray Chang、Mobellio、林冠良、Mykita、Edokumiko Tatematsu',
							images: [
								'Handmade01.png',
								'Handmade02.png',
								'Handmade03.png',
								'Handmade04.png',
								'Handmade05.png',
								'Handmade06.png',
								'Handmade07.png',
								'Handmade08.png',
								'Handmade09.png',
								'Handmade10.png',
								'Handmade11.png',
								'Handmade12.png',
								'Handmade13.png',
								'Handmade14.png'
							]
						},
						{
							id: 2,
							masthead: 'Infinite 台新無限季刊',
							date: '2022 春季號',
							title: '台灣文化力 The Cultural Spectrum of Taiwan',
							subtitle: '',
							credit: 'TEXT_Daniel、Renee、Penny Kuo、黃映嘉 PHOTO_雲門舞集、北師美術館、Ray Chang、蔡勝義、島內散步',
							images: [
								'TWculture01.png',
								'TWculture02.png',
								'TWculture03.png',
								'TWculture04.png',
								'TWculture05.png',
								'TWculture06.png',
								'TWculture07.png',
								'TWculture08.png'
							]
						},
						{
							id: 3,
							masthead: 'Infinite 台新無限季刊',
							date: '2021 夏季號',
							title: '越在地 越國際 Going Global, Locally',
							subtitle: '',
							credit: 'TEXT_Daniel、YuhShan、黃映嘉、因奉 PHOTO_莊智淵、選選研、Ray Chang、Liz Kao、陳蘊如、高雄流行音樂中心、公視',
							images: [
								'Local01.png',
								'Local02.png',
								'Local03.png',
								'Local04.png',
								'Local05.png',
								'Local06.png',
								'Local07.png',
								'Local08.png'
							]
						}
					]
				},
				travel: {
					title: '旅行',
					collections: [
						{
							id: 1,
							masthead: 'Ciao 潮旅',
							date: '2020 1月號',
							title: '北海道 冰雪奇緣 Hokkaido',
							subtitle: 'The Frozen Enchantment',
							credit: 'TEXT_Daniel PHOTO_Hazy、Kiroro Resort、SkiJapan.com、Ki Niseko、Josephine、一般社團法人札幌觀光協會',
							images: [
								'Hokkaido01.png',
								'Hokkaido02.png',
								'Hokkaido03.png',
								'Hokkaido04.png',
								'Hokkaido05.png',
								'Hokkaido06.png',
								'Hokkaido07.png',
								'Hokkaido08.png',
								'Hokkaido09.png',
								'Hokkaido10.png',
								'Hokkaido11.png',
								'Hokkaido12.png',
								'Hokkaido13.png',
								'Hokkaido14.png',
								'Hokkaido15.png',
								'Hokkaido16.png',
								'Hokkaido17.png'
							]
						},
						{
							id: 2,
							masthead: 'Ciao 潮旅',
							date: '2019 7月號',
							title: '移動的風景畫',
							subtitle: "Scotland's Classic Splendours",
							credit: 'TEXT_Daniel PHOTO_周兆志、Belmond Royal Scotsman',
							images: [
								'Scotland01.png',
								'Scotland02.png',
								'Scotland03.png',
								'Scotland04.png',
								'Scotland05.png',
								'Scotland06.png',
								'Scotland07.png',
								'Scotland08.png',
								'Scotland09.png',
								'Scotland10.png',
								'Scotland11.png',
								'Scotland12.png',
								'Scotland13.png',
								'Scotland14.png',
								'Scotland15.png'
							]
						},
						{
							id: 3,
							masthead: 'Infinite 台新無限季刊',
							date: '2020 秋季號',
							title: '島嶼漫遊 Island Getaways',
							subtitle: '',
							credit: 'TEXT_Daniel PHOTO_周兆志、涵碧樓、蔡勝義',
							images: [
								'Island01.png',
								'Island02.png',
								'Island03.png',
								'Island04.png',
								'Island05.png',
								'Island06.png',
								'Island07.png'
							]
						},
						{
							id: 4,
							masthead: 'Ciao 潮旅',
							date: '2020 4月號',
							title: '老空間 新創意',
							subtitle: '發現城市新韻味',
							credit: 'TEXT_Daniel PHOTO_蔡勝義、景澤創意、Arttime藝術網、蕭壠文化園區、棧貳庫',
							images: [
								'Old01.png',
								'Old02.png',
								'Old03.png',
								'Old04.png',
								'Old05.png',
								'Old06.png'
							]
						},
						{
							id: 5,
							masthead: 'Ciao 潮旅',
							date: '2020 3月號',
							title: '建築小旅行',
							subtitle: '城市裡的悠閒散步',
							credit: 'TEXT_Daniel PHOTO_莊智淵、蔡勝義、台北流行音樂中心、衛武營國家藝術文化中心、田中央建築師事務所、台南市美術館、高雄市立圖書館',
							images: [
								'CityArch01.png',
								'CityArch02.png',
								'CityArch03.png',
								'CityArch04.png',
								'CityArch05.png',
								'CityArch06.png',
								'CityArch07.png'
							]
						},
						{
							id: 6,
							masthead: 'terroir 肥沃台灣',
							date: '2021 Vol.08',
							title: '旅人與海 順著黑潮與鯨豚共舞 in 花蓮',
							subtitle: 'Sail the Sea with Whales',
							credit: 'TEXT_Daniel PHOTO_周兆志',
							images: [
								'Sea01.png',
								'Sea02.png',
								'Sea03.png'
							]
						}
					]
				},
				collection: {
					title: '收藏',
					collections: [
						{
							id: 1,
							masthead: 'Infinite 台新無限季刊',
							date: '2021 冬季號',
							title: '收藏新視界',
							subtitle: 'The New Vision of Collection',
							credit: 'TEXT_Daniel、林佳蕙、黃映嘉、Silence Huang PHOTO_Ray Chang、何理互動設計、akaSwap、王新仁、莊智淵',
							images: [
								'collect01.png',
								'collect02.png',
								'collect03.png',
								'collect04.png',
								'collect05.png',
								'collect06.png',
								'collect07.png',
								'collect08.png',
								'collect09.png'
							]
						},
						{
							id: 2,
							masthead: '合庫樂活理財季刊',
							date: '2021 1月號',
							title: '方寸之間 想像無限',
							subtitle: '電影海報收藏',
							credit: 'TEXT_Daniel PHOTO_蔡勝義',
							images: [
								'poster01.png',
								'poster02.png',
								'poster03.png'
							]
						},
						{
							id: 3,
							masthead: '合庫樂活理財季刊',
							date: '2020 7季號',
							title: '我為琴狂',
							subtitle: '奇美博物館的名琴饗宴',
							credit: 'TEXT_Daniel PHOTO_蔡勝義',
							images: [
								'Chimei01.png',
								'Chimei02.png',
								'Chimei03.png'
							]
						},
						{
							id: 4,
							masthead: '合庫樂活理財季刊',
							date: '2019 10月號',
							title: '喝一杯精品咖啡',
							subtitle: '典藏古典咖啡機',
							credit: 'TEXT_Daniel PHOTO_周兆志',
							images: [
								'coffeejoe01.png',
								'coffeejoe02.png',
								'coffeejoe03.png'
							]
						}
					]
				},
				architecture: {
					title: '建築',
					collections: [
						{
							id: 1,
							masthead: 'Infinite 台新無限季刊',
							date: '2022 夏季號',
							title: '家的樣子 My Home',
							subtitle: '',
							credit: 'TEXT_Daniel、黃映嘉、毛森江 PHOTO_行一建築、蔡勝義、半畝塘、Ray Chang、毛森江、Fabian Ong、7OCEAN',
							images: [
								'Home01.png',
								'Home02.png',
								'Home03.png',
								'Home04.png',
								'Home05.png',
								'Home06.png',
								'Home07.png',
								'Home08.png',
								'Home09.png',
								'Home10.png',
								'Home11.png',
								'Home12.png',
								'Home13.png'
							]
						},
						{
							id: 2,
							masthead: 'Infinite 台新無限季刊',
							date: '2021 秋季號',
							title: '時代的紋理',
							subtitle: 'The Texture of Time',
							credit: 'TEXT_Daniel、Penny K.、馬姍妤、Kirstie Wang、黃映嘉 PHOTO_la Samaritaine、Apple、Prada、GUCCI、嘉義市立美術館、朱逸文',
							images: [
								'texture01.png',
								'texture02.png',
								'texture03.png',
								'texture04.png',
								'texture05.png',
								'texture06.png',
								'texture07.png',
								'texture08.png'
							]
						},
						{
							id: 3,
							masthead: 'Core Interior 空間',
							date: '2019 1月號',
							title: '理性的空間 感性的存在',
							subtitle: '台北表演藝術中心 Taipei Performing Arts Center',
							credit: 'TEXT_Daniel PHOTO_OMA、大元建築師事務所',
							images: [
								'TPACi01.png',
								'TPACi02.png',
								'TPACi03.png',
								'TPACi04.png',
								'TPACi05.png'
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
