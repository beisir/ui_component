<template>
  	 <el-scrollbar wrap-class="scrollbar-wrapper">
      		

    	<el-menu mode="vertical"
			:collapse="isCollapse"
      		:show-timeout="200"
      		:default-active="$route.path"
			background-color="#304156"
			text-color="#bfcbd9"
			active-text-color="#409EFF">
			<sidebar-item
				v-for="route in permission_routers"
				:key="route.path"
				:item="route"
				:base-path="route.path"/>
    	</el-menu>
  	</el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem.vue";

export default {
  	components: { SidebarItem },
  	computed: {
    	...mapGetters(["permission_routers", "sidebar"]),
    	isCollapse() {
      		return !this.sidebar.opened;
    	}
	}
};
</script>
