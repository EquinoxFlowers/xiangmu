<template>
    <div>
        <el-row class="block-col-2">
            <el-dropdown>
      <span class="el-dropdown-link">
        应用<i class="icon"><img src="../assets/img/banner-r04.gif" alt=""></i>
      </span>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </div>
</template>
<script>
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>
.icon{
    margin-left: 26px;
}
</style>