<template>
	<div class="post-wrap">
		<h3 class="title py-3 border bg-white text-center mb-4">張貼動態</h3>
		<div class="rounded-card card">
			<div class="card-body p-4">
				<div class="mb-3">
					<label for="content" class="form-label">貼文內容</label>
					<textarea class="form-control rounded-0" rows="3" id="content" placeholder="輸入您的貼文內容"
						v-model="info.content"></textarea>
				</div>
				<div class="mb-3">
					<label for="upload-file" class="btn form-label bg-black text-white shadow-none py-1 mb-0">上傳圖片</label>
					<input class="form-control d-none" type="file" id="upload-file" accept="image/png, image/jpeg"
						ref="upload-file" @change="getPreviewFile()">
				</div>
				<div class="image-wrap border rounded overflow-hidden" v-show="imagePreview">
					<img :src="imagePreview" class="w-100">
				</div>
				<div v-if="errorMessage" class="text-danger text-center d-block mt-3">
					<small>{{ errorMessage }}</small>
				</div>
				<div class="submit-btn-wrap mx-auto">
					<button type="button" class="btn btn-secondary w-100 mt-3" :disabled="!info.content || isLoading"
						@click="submitPost()">
						<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="isLoading"></span>
						送出貼文
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Work',
	data() {
		return {
			info: {
				content: '', // 貼文內容
				image: ''
			},
			imagePreview: '', // 圖片預覽
			errorMessage: '', // 錯誤訊息
			isLoading: false
		};
	},
	mounted() {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	.post-wrap {
		.title {
			box-shadow: -5px 5px 0 -2px white, -5px 5px 0 0px $black;
		}
		.submit-btn-wrap {
			width: 320px;
		}
	}
</style>
