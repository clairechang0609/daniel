<template>
	<div class="collection-wrap">
		{{ $route.params.category }} <br />
		{{ $route.params.id }}
	</div>
</template>

<script>
export default {
	name: 'Work',
	data() {
		return {
			collections: {
				travel: {
					'001': {
						title: '',
						subtitle: '',
						content: '',
						images: []
					}
				}
			}
		};
	},
	mounted() {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
</style>
