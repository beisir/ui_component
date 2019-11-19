<template>
    <!-- app.vue 的template标签内只能有一个节点 -->
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'VueSSR APP'
    },
    // 声明组件，之后便可以使用组件标签
    components: {
    },
    mounted () {
        
    },
    computed: {
        
    },
    methods: {
        noteifyFn () {
            this.$notify({
                content: `test content ======> ${i++}`,
                btn: '关闭'
            });
        }
    }
}
</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>

</style>
