<template>
    <div class="app-wrapper" :class="classObj">
        <el-header height="55px">helloword</el-header>
        <el-main>
            <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
            <sidebar class="sidebar-container" />
            <div class="main-container">
                <nav-bar></nav-bar>
                <tags-view></tags-view>
                <app-main></app-main>
            </div>
        </el-main>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar/index.vue'
    import NavBar from './components/Navbar.vue'
    import TagsView from './components/TagsView.vue'
    import AppMain from './components/AppMain.vue'
    import ResizeMixin from './mixin/ResizeHandler'
    export default {
        mixins: [ResizeMixin],
        components: {
            Sidebar,
            NavBar,
            TagsView,
            AppMain
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            device() {
                return this.$store.state.app.device
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('closeSideBar', {
                    withoutAnimation: false
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/assets/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;

        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
        .el-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            background-color: brown;
        }
        .el-main {
            padding: 55px 0 0 0;
            height: 100%;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>