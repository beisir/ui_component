<template>
	<section class="app-main">
		
		<transition name="fade-transform" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view :key="key" />
			</keep-alive>
		</transition>
	</section>
</template>

<script>
	export default {
		name: 'AppMain',
		computed: {
			cachedViews() {
				return this.$store.state.tagsView.cachedViews
			},
			key() {
				return this.$route.fullPath
			}
		}
	}
</script>

<style scoped>
	.app-main {
		/*84 = navbar + tags-view = 50 +34 */
		/* height: calc(100% - 139px); */
		/* height: 100%; */
		/* width: 100%; */
		/* position: relative; */
		/* overflow-y: scroll; */
		    position: absolute;
			top: 86px;
			width: 100%;
			bottom: 0;
			overflow-y: auto;
	}
</style>