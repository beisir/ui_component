<template>
    <div class="container">
        <el-scrollbar  wrap-class="scrollbar-wrapper" style="width: 100%;height:100%;">
        <el-menu
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="model"
            mode="vertical"
            background-color="#304156"
            text-color="#bfcbd9"
            class="submenu-container"
            active-text-color="#409EFF">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">导航五</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">导航六</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-setting"></i>
                <span slot="title">导航七</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-setting"></i>
                <span slot="title">导航八</span>
            </el-menu-item>

            <el-menu-item index="9">
                <i class="el-icon-setting"></i>
                <span slot="title">导航九</span>
            </el-menu-item>
            <el-menu-item index="10">
                <i class="el-icon-setting"></i>
                <span slot="title">导航十</span>
            </el-menu-item>
            <el-menu-item index="11">
                <i class="el-icon-setting"></i>
                <span slot="title">导航十一</span>
            </el-menu-item>
            <el-menu-item index="12">
                <i class="el-icon-setting"></i>
                <span slot="title">导航十二</span>
            </el-menu-item>
            <el-menu-item index="13">
                <i class="el-icon-setting"></i>
                <span slot="title">导航十三</span>
            </el-menu-item>

        </el-menu>
        </el-scrollbar>

        <!-- <el-row :gutter="8">
            <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
            <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
                <el-card class="box-card-component" >
                    <div slot="header" class="box-card-header">
                        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
                    </div>   


                </el-card>

            </el-col>

        </el-row>
        
        

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb> -->

        <button @click="model=!model" style="width: 500px;">click</button>

    </div>
</template>

<script>

export default {
    data (){
        return {
            activeNames: ['1'],
            model: false
        }
    },
    methods: {
        handleChange () {

        }
    }

}
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
    }
    .submenu-container {
        
    }
    .submenu-container .el-menu-item {
        width: 100%;
        min-width: 100%;
    }
    .scrollbar-wrapper {
        overflow: hidden;
    }
    .el-scrollbar__view {
        position: fixed;
        width: 180px;
        left: 0;
        top: 0;
        bottom: 0;
    }
</style>
