<template>
    <div class="Content-area">

        <div class="Center">
            <div class="header">
                <div class="header-text">
                    <span class="text">您好，欢迎来到码易</span>
                    <div class="Land">
                        <a class="leftLand" href="#">注册</a>
                        <a href="#">登陆</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="Content-logo">
            <div class="header-extra">
                <div class="load">
                    <a href="#">
                        <img src="../assets/img/LOGO.png" alt="">
                    </a>
                    <span>高质量交付和交易的互联网服务平台</span>
                </div>
                <div class="mallSearch">
                    <form action="" class="search-form clearfix">

                        <input type="search" class="search-text" placeholder="搜应用">
                        <div class="keyword-list">
                            <input type="submit" class="search-btn" value="" @click="searchBtn">
                            <img class="search-img" src="../assets/img/sousuo.png" alt="">
                        </div>
                        <div class="search-hot-words">
                            <Popup></Popup>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="Navigation">
            <div class="Navigation-bar clearfix">
                <span class="service">一键式网络服务</span>
                <div class="list">
                    <ul>
                        <li>首页</li>
                        <li>重包平台</li>
                        <li>应用商城</li>
                        <li>专业服务</li>
                    </ul>
                </div>
                <div class="dropDown-box">
                    <div class="dropDown">
                        <span class="sum">企业分站</span>
                        <div class='Spinner'>
                            <el-dropdown class="el-dropdown">
  <span class="el-dropdown-link">

    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                    <el-dropdown-item>狮子头</el-dropdown-item>
                                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
                <div class="dropDown-box">
                    <div class="dropDown">
                        <span class="sum">企业分站</span>
                        <div class='Spinner'>
                            <el-dropdown class="el-dropdown">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                                <el-dropdown-menu slot="dropdown" >
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                    <el-dropdown-item>狮子头</el-dropdown-item>
                                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Popup from './Popup.vue'
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {
            searchBtn:function () {

            }
        },
        computed: {},
        components: {Popup}
    }
</script>
<style scoped lang="less">
    .Content-area {
        width: 100%;
        height: 100%;

        * {
            padding: 0;
            margin: 0;
        }
        font-family: "Microsoft YaHei";
        ul, li {
            list-style: none;
        }
        .clearfix:after {
            content: '';
            display: block;
            clear: both;
        }
        .Center {
            background: #f7f7f7;
            .header {
                width: 1200px;
                margin: 0 auto;
                background: #f7f7f7;
                .header-text {
                    background: #f7f7f7;
                    height: 40px;
                    line-height: 40px;
                    .text {
                        font-size: 14px;
                        color: #999;
                        left: 0;
                    }
                    .Land {
                        float: right;
                        display: inline-block;
                        a {
                            font-size: 14px;
                            color: #1075b7;

                        }
                        .leftLand {
                            margin-right: 13px;
                            padding-right: 13px;;
                            border-right: 2px solid #dbe1ec;
                        }

                    }
                }

            }

        }
        .Content-logo {
            background: #fff;
            .header-extra {
                width: 1200px;
                height: 100px;
                margin: 0 auto;
                background: #fff;

                .load {
                    float: left;
                    width: 432px;
                    height: 100px;
                    display: flex;
                    a {
                        padding-right: 13px;
                        margin-right: 20px;
                        border-right: 1px solid #ebebeb;
                        align-self: center;
                    }
                    span {

                        align-self: center;
                        font-size: 16px;
                        color: #2d2d2d;

                    }
                }
                .mallSearch {
                    float: right;
                    margin-top: 27.5px;
                    display: inline-block;
                    .search-form {
                        width: 470px;
                        height: 45px;
                        position: relative;
                        .search-text {
                            width: 470px;
                            height: 45px;
                            border: 1px solid #e0e0e0;
                            font-size: 14px;
                            color: #999;
                            border-radius: 9px;
                            padding-left: 20px;
                            outline: none;
                            -webkit-appearance: none;
                            position: relative;

                        }
                        .keyword-list {
                            width: 70px;
                            height: 45px;
                            position: absolute;
                            top:0;
                            right: 0;
                            .search-btn {
                                width: 70px;
                                height: 45px;
                                border: 1px solid #1075d7;
                                background:#1075d7;
                                border-top-right-radius: 9px;
                                border-bottom-right-radius: 9px;

                            }
                            .search-img{
                                position: absolute;
                                top: 8px;
                                left: 20px;
                            }


                        }
                        .search-hot-words{
                            width: 110px;
                            height: 25px;
                            line-height: 25px;
                            border-left: 1px solid #999;
                            position: absolute;
                            top:10px;
                            right: 70px;
                            padding: 0 20px;
                            span{
                                font-size: 14px;
                                color: #333;


                            }
                            .icon{
                                display: inline-block;
                                width: 13px;
                                height: 18px;
                                margin-left: 16px;

                            }
                        }



                    }
                }

            }
        }
        .Navigation {
            background: #1075d7;
            .Navigation-bar {
                width: 1200px;
                height: 50px;
                margin: 0 auto;
                z-index: 10;
                position: relative;
                .service {
                    width: 260px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                    float: left;
                    color: #fff;
                    text-align: center;
                    display: inline-block;
                }
                .list {
                    width: 462px;
                    height: 50px;
                    line-height: 50px;
                   float: left;

                    ul {
                        display: flex;
                        li {
                            flex: 1;
                            text-align: center;
                            font-size: 16px;
                            color: #ccffff;
                        }
                        li:hover {
                            color: #68cfb2;
                        }
                    }

                }
                .dropDown-box {
                    float: right;
                    .dropDown {
                        width: 175px;
                        height: 25px;
                        background: #fff;
                        margin-top: 12px;
                        margin-left: 10px;
                        display: inline-block;
                        border-radius: 5px;
                        border: 1px solid #dbe1ec;
                        position: relative;
                        .sum {
                            position: absolute;
                            top: 2px;
                            left: 10px;
                            height: 16px;
                            font-size: 14px;
                            color: #333;
                            padding-right: 8px;
                            border-right: 1px solid #e7e7e7;

                        }
                        .Spinner {
                            display: inline-block;
                            position: absolute;
                            top: 1.5px;
                            left: 80px;
                            .el-dropdown {
                                font-size: 14px;
                                color: #999;
                                .el-icon-arrow-down {
                                    margin-left: 15px;
                                }
                            }

                        }

                    }
                }

            }

        }

    }
</style>