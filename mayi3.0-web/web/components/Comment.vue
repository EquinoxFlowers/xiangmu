<template>
    <div class="Content-area">
        <div class="banner-slider ">
            <div class="Carousel-figure">
                <div class="el-carousel" height="500px">
                    <Banner></Banner>
                </div>
                <div class="content">
                    <Banner></Banner>
                    <div class="fuShi-nav-cate">
                        <div class="tm-fushi-cate">
                            <ul class="cate-nav">
                                <li class="cate-item">
                                    <h2 class="singleHighlight">软件定制开发</h2>
                                    <ul class="cate-bd ">
                                        <li class="highlight">
                                            <a href="#">App开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">前端开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">微信开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">网站建设</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">UI设计</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">行业应用开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">人工智能</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">大数据</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">VR/AR</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="cate-item">
                                    <h2 class="singleHighlight">软件定制开发</h2>
                                    <ul class="cate-bd ">
                                        <li class="highlight">
                                            <a href="#">App开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">前端开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">微信开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">网站建设</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">UI设计</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">行业应用开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">人工智能</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">大数据</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">VR/AR</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="cate-item">
                                    <h2 class="singleHighlight">软件定制开发</h2>
                                    <ul class="cate-bd ">
                                        <li class="highlight">
                                            <a href="#">App开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">前端开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">微信开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">网站建设</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">UI设计</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">行业应用开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">人工智能</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">大数据</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">VR/AR</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="cate-item">
                                    <h2 class="singleHighlight">软件定制开发</h2>
                                    <ul class="cate-bd ">
                                        <li class="highlight">
                                            <a href="#">App开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">前端开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">微信开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">网站建设</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">UI设计</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">行业应用开发</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">人工智能</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">大数据</a>
                                        </li>
                                        <li class="highlight">
                                            <a href="#">VR/AR</a>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <button class="button"><span @click="toTab('requirements')">发布需求</span></button>
                    </div>
                    <div class="main-banner-con2">
                        <a href="#"><img src="../assets/img/banner-r01.png" alt=""></a>
                        <a href="#"><img src="../assets/img/banner-r02.png" alt=""></a>
                        <a href="#"><img src="../assets/img/banner-r03.png" alt=""></a>
                        <a href="#"><img src="../assets/img/banner-r04.png" alt=""></a>

                    </div>
                </div>
            </div>
        </div>
        <!--侧边栏-->
        <div class="mui-mbar">
            <div class="mui-mbar-tab">
                <div class="tab-logo"><img src="../assets/img/mui-01.png" alt=""></div>
                <div class="tab-txt">发包</div>
                <div class="tab-logo"><img src="../assets/img/mui-02.png" alt=""></div>
                <div class="tab-txt">微信</div>
                <div class="tab-logo"><img src="../assets/img/mui-03.png" alt=""></div>
                <div class="tab-txt">客服</div>
                <div class="tab-logo"><img src="../assets/img/mui-04.png" alt=""></div>
                <div class="tab-txt">反馈</div>
            </div>
        </div>
        <!--底部-->
        <div class=" category-item">
            <div class="ategory" @click="flag=!flag">
                <i v-if="flag"><img src="../assets/img/left-01.png" alt=""></i>
                <i v-if="!flag"><img src="../assets/img/right-02.png" alt=""></i>
                <img src="../assets/img/mui-05.png" alt="">
            </div>
            <transition name="fade">
                <div transiton="fade" class="top-wrap" v-if="flag"  >
                    <form action="" class="form-list">
                        <p>10秒快速发布需求</p>
                        <div class="form-group">
                            <input  class="form-text" placeholder="您的手机号" type="text">
                        </div>
                        <div class="form-item">
                            <button type="submit"  value="" class=" btn-large ">
                                免费发包
                            </button>
                        </div>
                    </form>
                </div>
            </transition>
        </div>
        <!--选项卡-->
        <div class="box-bd">
            <div class="xm-carousel-list">
                <!--选项卡-->
                <div class="xm-carousel-wrapper">
                    <el-carousel height="180px"   :autoplay="false" indicator-position="none"  arrow="always">

                    <el-carousel-item height="180px" v-for="item in 2" :key="item">
                    <ul>
                            <li v-for="item in mag" :key="item">
                                <a href="">
                                    <img src="../assets/img/leab-jbcg.png" alt="">
                                    <img :src="item.imgUrl" alt="">
                                </a>
                            </li>
                        </ul>
                    </el-carousel-item>
                    </el-carousel>
                </div>
                <!--图片-->
                <div class="around">
                    <div class="box-hd">
                        <img src="../assets/img/icon-rmtj.png" alt="">
                        <span class="title">热门推荐</span>
                    </div>
                    <div class="page-main">
                        <ul class="brick-list clearfix">
                            <li class="brick-item ">
                                <div class="figure ">
                                    <a href="#">
                                        <img src="../assets/img/img01.jpg" alt="">
                                    </a>
                                </div>
                                <div class="Prices">
                                    <p class="Price">¥14500.00</p>
                                    <p class="desc">名称：行业客户关系管理系统</p>
                                </div>

                            </li>
                            <li class="brick-item ">
                                <div class="figure ">
                                    <a href="#">
                                        <img src="../assets/img/img01.jpg" alt="">
                                    </a>
                                </div>
                                <div class="Prices">
                                    <p class="Price">¥14500.00</p>
                                    <p class="desc">名称：行业客户关系管理系统</p>
                                </div>

                            </li>
                            <li class="brick-item ">
                                <div class="figure ">
                                    <a href="#">
                                        <img src="../assets/img/img01.jpg" alt="">
                                    </a>
                                </div>
                                <div class="Prices">
                                    <p class="Price">¥14500.00</p>
                                    <p class="desc">名称：行业客户关系管理系统</p>
                                </div>

                            </li>
                            <li class="brick-item ">
                                <div class="figure ">
                                    <a href="#">
                                        <img src="../assets/img/img01.jpg" alt="">
                                    </a>
                                </div>
                                <div class="Prices">
                                    <p class="Price">¥14500.00</p>
                                    <p class="desc">名称：行业客户关系管理系统</p>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>


            </div>

        </div>
        <div class="shape-container">
            <div class="detailBlock">
                <div class="floor-line-con ">
                    <div class="floor-name">
                        <i></i>
                        <span class="content-loading">10秒快速发布需求</span>
                        <i></i>
                        <span>码易已解决615200人的需求</span>
                    </div>

                </div>
                <div class="goods-sub-bar">
                    <div class="sub-bar">
                        <a href=""><img src="../assets/img/img02.png" alt=""></a>
                        <div class="floor-line-con ">
                            <ul class="item-info">
                                <li class="item-name one">
                                    <a href="#"> <span class="item-desc" style="                                       text-align: right;
">免费发布需求协助帮您梳理需求</span>
                                        <img class="item-img tow" src="../assets/img/fb-icon01.png" alt=""></a>
                                </li>
                                <li class="item-name two">
                                    <a href=""> <span class="item-desc" style="                                       text-align: right;
">免费发布需求协助帮您梳理需求</span>
                                        <img class="item-img tow" src="../assets/img/fb-icon02.png" alt=""></a>
                                </li>
                                <li class="item-name three">
                                    <span class="item-desc" style="                                       text-align: right;
">免费发布需求协助帮您梳理需求</span>
                                    <img class="item-img tow" src="../assets/img/fb-icon03.png" alt="">
                                </li>
                                <li class="item-names four">

                                    <span class="itemDesc" style="                                       text-align: left;
">免费发布需求协助帮您梳理需求</span>
                                    <img class="item-image four" src="../assets/img/fb-icon04.png" alt="">
                                </li>
                                <li class="item-names five">

                                    <span class="itemDesc" style="                                       text-align: left;
">免费发布需求协助帮您梳理需求</span>
                                    <img class="item-image four" src="../assets/img/fb-icon05.png" alt="">
                                </li>
                                <li class="item-names six">

                                    <span class="itemDesc" style="                                       text-align: left;
">免费发布需求协助帮您梳理需求</span>
                                    <img class="item-image four" src="../assets/img/fb-icon06.png" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-container " style="background-color: #fff ;">
            <div class="detailBlock" style="background-color: #fff;height:670px;">
                <div class="floor-line-con " style="padding-top: 0">
                    <div class="floor-name" style="width: 600px">
                        <i></i>
                        <span class="content-loading">官方服务</span>
                        <span class="content-loading " style="margin-left: -10px">品质保证</span>
                        <i></i>
                        <span>已为上百万企业提供满意的企业基础服务</span>
                    </div>

                </div>
                <div class="goods-sub-bar-fg">
                    <div class="sub-bar">
                        <ul class="product clearfix">
                            <li class="product-list">
                            <div class="product-iWrap">
                                <div class="ng-img">
                                    <img src="../assets/img/img03.png" alt="">
                                </div>
                                <p class="productStatus">平台多项支撑服务</p>
                                <div class="small">
                                    <a>
                                        <i><img src="../assets/img/icon-01.png" alt=""></i>
                                        <span>项目管理</span>
                                    </a> <a>
                                    <i><img src="../assets/img/icon-01.png" alt=""></i>
                                    <span>项目管理</span>
                                </a> <a>
                                    <i><img src="../assets/img/icon-01.png" alt=""></i>
                                    <span>项目管理</span>
                                </a>
                                </div>
                            </div>
                            <div  class="iWrap">
                                <img class="img-fan" src="../assets/img/fanzhuan-icon.png" alt="">
                                <div class="afford-inner">
                                    <h2 class="afford-hd">
                                        项目管理工具
                                    </h2>
                                    <ul class="list-text ">
                                        <li class="brand-item">
                                            <span class="text-left">专业项目管理工具</span>
                                            <span class="text-right">让您与客户得到双重保障</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">里程碑管理</span>
                                            <span class="text-right">记录交付里程碑</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">信息发布</span>
                                            <span class="text-right">每个交付节点双向发布</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">风险控制</span>
                                            <span class="text-right">预测、评估交付风险</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">沟通历史</span>
                                            <span class="text-right">实时保存历史记录</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            </li>    <li class="product-list">
                            <div class="product-iWrap">
                                <div class="ng-img">
                                    <img src="../assets/img/img03.png" alt="">
                                </div>
                                <p class="productStatus">平台多项支撑服务</p>
                                <div class="small">
                                    <a>
                                        <i><img src="../assets/img/icon-01.png" alt=""></i>
                                        <span>项目管理</span>
                                    </a> <a>
                                    <i><img src="../assets/img/icon-01.png" alt=""></i>
                                    <span>项目管理</span>
                                </a> <a>
                                    <i><img src="../assets/img/icon-01.png" alt=""></i>
                                    <span>项目管理</span>
                                </a>
                                </div>
                            </div>
                            <div  class="iWrap">
                                <img class="img-fan" src="../assets/img/fanzhuan-icon.png" alt="">
                                <div class="afford-inner">
                                    <h2 class="afford-hd">
                                        项目管理工具
                                    </h2>
                                    <ul class="list-text ">
                                        <li class="brand-item">
                                            <span class="text-left">专业项目管理工具</span>
                                            <span class="text-right">让您与客户得到双重保障</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">里程碑管理</span>
                                            <span class="text-right">记录交付里程碑</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">信息发布</span>
                                            <span class="text-right">每个交付节点双向发布</span>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                            </li>    <li class="product-list">
                            <div class="product-iWrap">
                                <div class="ng-img">
                                    <img src="../assets/img/img03.png" alt="">
                                </div>
                                <p class="productStatus">平台多项支撑服务</p>
                                <div class="small">
                                    <a>
                                        <i><img src="../assets/img/icon-01.png" alt=""></i>
                                        <span>项目管理</span>
                                    </a> <a>
                                    <i><img src="../assets/img/icon-01.png" alt=""></i>
                                    <span>项目管理</span>
                                </a> <a>
                                    <i><img src="../assets/img/icon-01.png" alt=""></i>
                                    <span>项目管理</span>
                                </a>
                                </div>
                            </div>
                            <div  class="iWrap">
                                <img class="img-fan" src="../assets/img/fanzhuan-icon.png" alt="">
                                <div class="afford-inner">
                                    <h2 class="afford-hd">
                                        项目管理工具
                                    </h2>
                                    <ul class="list-text ">
                                        <li class="brand-item">
                                            <span class="text-left">专业项目管理工具</span>
                                            <span class="text-right">让您与客户得到双重保障</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">里程碑管理</span>
                                            <span class="text-right">记录交付里程碑</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">信息发布</span>
                                            <span class="text-right">每个交付节点双向发布</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">风险控制</span>
                                            <span class="text-right">预测、评估交付风险</span>
                                        </li>
                                        <li class="brand-item">
                                            <span class="text-left">沟通历史</span>
                                            <span class="text-right">实时保存历史记录</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-container" style=" margin-top: 0;background: #f7f7f7">
            <div class="detailBlock" style="height: 625px">
                <div class="floor-line-con" style="padding-top: 80px;">
                    <div class="floor-name">
                        <i></i>
                        <span class="content-loading">10秒快速发布需求</span>
                        <i></i>
                        <span>码易已解决615200人的需求</span>
                    </div>

                </div>
                <div class="hexagonal-picture">
                    <i><img src="../assets/img/hzhb-01.png" alt=""></i>
                    <i class="move-down"><img src="../assets/img/hzhb-02.png" alt=""></i>
                    <i class="move"><img src="../assets/img/hzhb-03.png" alt=""></i>
                    <i class="move-down-right"><img src="../assets/img/hzhb-04.png" alt=""></i>

                </div>

            </div>
        </div>
        <div class="shape-container " style="margin-top: 0;padding-top:80px; height:525px;background-color: #fff ;">
            <div class="detailBlock" style="height:525px;background-color: #fff ;">
                <div class="floor-line-con " style="padding-top: 0">
                    <div class="floor-name" style="width: 600px">
                        <i></i>
                        <span class="content-loading">官方服务</span>
                        <span class="content-loading " style="margin-left: -10px">品质保证</span>
                        <i></i>
                        <span>已为上百万企业提供满意的企业基础服务</span>
                    </div>

                </div>
                <div class="goods-sub-bar-fg" style="height:230px;width: 1100px">
                    <div class="Product-evaluation clearfix" style="margin-right: 100px">
                        <div class="evaluation">
                            <div class="Customer-image">
                                <img src="../assets/img/fb-icon06.png">
                            </div>
                            <div class="alignment">
                                <h2 class="Customer-name">刘女士</h2>
                                <span>智网易联有限公司</span>
                            </div>
                            <p class="comment">"已经在码易完成了6个项目，开发者的素质和总体产出都非常不错，通过码易发包方式也提高了开发效率，降低框研发风险。"</p>

                        </div>



                    </div>
                    <div class="Product-evaluation clearfix">
                        <div class="evaluation">
                            <div class="Customer-image">
                                <img src="../assets/img/fb-icon06.png">
                            </div>
                            <div class="alignment">
                                <h2 class="Customer-name">刘女士</h2>
                                <span>智网易联有限公司</span>
                            </div>
                            <p class="comment">"已经在码易完成了6个项目，开发者的素质和总体产出都非常不错，通过码易发包方式也提高了开发效率，降低框研发风险。已经在码易完成了6个项目，开发者的素质和总体产出都非常不错，通过码易发包方式也提高了开发效率，降低框研发风险"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Quality-assurance">
            <ul class="maintain clearfix">
                <li class="maintain-list ">
                    <div class="Customer">
                        <img src="../assets/img/bottom-icon01.png">
                    </div>
                    <div class="list-ment">
                        <h2 class="customer">刘女士</h2>
                        <span>智网易联有限公司</span>
                    </div>
                </li>
                <li class="maintain-list ">
                    <div class="Customer">
                        <img src="../assets/img/bottom-icon02.png">
                    </div>
                    <div class="list-ment">
                        <h2 class="customer">刘女士</h2>
                        <span>会员优先，免费服务</span>
                    </div>
                </li>
                <li class="maintain-list ">
                    <div class="Customer">
                        <img src="../assets/img/bottom-icon03.png">
                    </div>
                    <div class="list-ment">
                        <h2 class="customer">刘女士</h2>
                        <span>平台提供拆包，UI测试等服务</span>
                    </div>
                </li>
                <li class="maintain-list ">
                    <div class="Customer">
                        <a href=""> <img src="../assets/img/bottom-icon04.png"></a>
                </div>
                    <div class="list-ment">
                        <h2 class="customer">刘女士</h2>
                        <span>托管。分期，垫资多种服务</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import Banner from './Banner.vue'
    import  guanggaoOne from '../assets/img/guanggao-01.png'
    import  guanggaob from '../assets/img/guanggao-02.png'
    import  guanggaoc from '../assets/img/guanggao-03.png'
    import  guanggaod from '../assets/img/guanggao-04.png'
    export default {
        data(){
           /* return {mag: [
                'http://img1.3lian.com/2015/a1/95/d/105.jpg' ,
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=283736174,1349655799&fm=27&gp=0.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522653091601&di=944c169f1168172d1e4e7ac25af8e453&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2015%2F01%2F08%2F1420705094_Cffakzfm.jpg' ,
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522653091600&di=3df4fd43131a59728d9ac75d204f42ad&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F161008%2F103-16100P94940211.jpg' ,
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522653091600&di=0d44d0b8d2301188f571b365d66cae4a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F59bb34345988a.jpg' ,
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522653091600&di=ce8d4bb2c1343ce4cc6ad549d3342a24&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F58f725478f794.jpg' ,
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522653091600&di=96839ac9b593c346beb764d9528b2f96&imgtype=0&src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fab%2Fe7%2F5d%2Fabe75ded950123ed843d95c9ae2de1fb.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522653091599&di=fd7975b57a0b76b2e8832bca3b1bcad1&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F170614%2F106-1F6140U215263.jpg' ,


            ]}*/
           return {
               flag:false,
               mag:[{imgUrl:guanggaoOne},{imgUrl:guanggaob},{imgUrl:guanggaoc},{imgUrl:guanggaod}]
           }
        },
        created(){
        },
        methods: {
            toTab (name) {
                this.$router.push(`/tab/${name}`)
            }
        },
        computed: {},
        components: {Banner}
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
        .mui-mbar{
            width: 42px;
            height: 800px;
            z-index: 99;
            position: fixed;
            top: 0;
            right: 0;
            background: #372e29;
            .mui-mbar-tab{
                width: 40px;
                height: 300px;
                position: absolute;
                top:50%;
                left: 50%;
                margin-top: -150px;
                margin-left: -22px;
                .tab-logo{
                    padding-bottom: 5px;
                    text-align: center;

                }
                .tab-txt{
                    width: 25px;
                    height: 17px;
                    font-size: 12px;

                    color: #c3bfbc;
                    padding-bottom: 30px;
                    margin:0  auto;


                }
            }

        }
        .category-item{
            width: 100%;
            height: 100px;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index:80;
            .ategory{
                position: absolute;
                top:0;
                right: 53px;
                z-index: 99;
                i{
                    position: absolute;
                     top: 46px;
                    left: 10px;
                }
            }
            .top-wrap{
                width: 95%;
                height: 100px;
                border-radius: 7px;
                position: absolute;
                top:0;
                left: 0;
                background: #4b413f;
                margin-left: 10px;
                z-index: 20;
                display: inline-block;
                .slide-fade-enter-active {
                    transition: all .3s ease;
                }
                .slide-fade-leave-active {
                    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                }
                .slide-fade-enter, .slide-fade-leave-to
                    /* .slide-fade-leave-active for below version 2.1.8 */ {
                    transform: translateX(10px);
                    opacity: 0;
                }
                .form-list{
                    width: 760px;
                    height: 100px;
                    margin-left: 260px;
                    position: relative;
                    p{
                        width: 227px;
                        height: 28px;
                        font-size: 28px;
                        display: inline-block;
                        color: #fff;
                        position: absolute;
                        top: 30px;
                        left: 0;
                    }
                    .form-group{
                        width: 351px;
                        height: 50px;
                        display: inline-block;
                        border-radius: 10px;
                        position: absolute;
                        top:25px;
                        left:242px;
                        .form-text{
                            width: 100%;
                            height: 100%;
                            padding-left: 23px;
                            border: 1px solid #DBDBDB;
                            border-radius: 10px;
                            outline: none;
                            -webkit-appearance: none;


                        }
                    }
                    .form-item{
                        width: 150px;
                        height: 50px;
                        border-radius: 10px;
                        background: #0d68c1;
                        position: absolute;
                        top: 25px;
                        right: 0;
                        .btn-large{
                            width: 100%;
                            height: 100%;
                            border: 1px solid #0d68c1;
                            background: #0d68c1;
                            display: inline-block;
                            border-radius: 10px;
                        }
                    }

                }
            }
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s
            }
            .fade-enter, .fade-leave-active {
                opacity: 0
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
                    height: 100px;
                    display: inline-block;
                    .mallSearch-input {
                        width: 470px;
                        height: 50px;
                        .s-combobox {
                            .input-wrap {
                                display: flex;
                                span {
                                    font-size: 14px;
                                    align-self: center;
                                }
                                span:first-child {
                                    color: #999;
                                }
                                span:last-child {
                                    color: #333;
                                }
                                input {
                                    width: 400px;
                                    border-radius: 5px;
                                    height: 40px;
                                }
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
                    color: #fff;
                    text-align: center;
                    display: inline-block;
                }
                .list {
                    width: 462px;
                    height: 50px;
                    line-height: 50px;
                    position: absolute;
                    top: 0;
                    left: 260px;

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
                            top: 3px;
                            left: 80px;
                            .el-dropdown {
                                font-size: 14px;
                                color: #999;
                                width: 100px;
                                height: 90px;
                                .el-icon-arrow-down {
                                    margin-left: 15px;
                                }
                            }

                        }

                    }
                }

            }

        }
        .banner-slider {
            width: 100%;
            height: 500px;
            background: #f7f7f7;
            .Carousel-figure {
                width: 100%;
                height: 500px;
                position: relative;
                .el-carousel {
                    width: 100%;
                    height: 500px;
                    Banner{
                        width: 100%;
                        height: 500px;
                    }
                }
                .content {
                    width: 1200px;
                    height: 500px;
                    margin: -250px 0 0 -600px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 9;

                    .fuShi-nav-cate {
                        position: absolute;
                        left: 0;
                        top: -50px;
                        width: 260px;
                        height: 550px;
                        background: #231814;
                        opacity: 0.8;
                        .tm-fushi-cate {
                            position: absolute;
                            top: 50px;
                            left: 0;

                        }
                        .cate-nav {
                            width: 260px;
                            height: 408px;
                            overflow: hidden;
                            display: inline-block;
                            .cate-item {
                                height: auto;
                                position: relative;
                                width: 260px;
                                padding-left: 20px;
                                padding-bottom: 15px;
                                border-bottom: 1px solid #716a67;
                                padding-top: 20px;
                                .singleHighlight {
                                    font-family: "Microsoft YaHei";
                                    font-size: 14px;
                                    color: #fff;
                                }
                                .cate-bd {
                                    height: auto;
                                    overflow: hidden;

                                    .highlight {
                                        float: left;
                                        margin: 15px 20px 0 0;

                                        a {
                                            color: #b3ffffff;
                                            font-size: 12px;
                                        }
                                    }
                                }

                            }

                        }
                        .button {
                            width: 220px;
                            height: 40px;
                            position: absolute;
                            left: 20px;
                            bottom: 25px;
                            text-align: center;
                            border-radius: 5px;
                            span {
                                color: #1075d7;
                            }
                        }

                    }
                    .main-banner-con2 {
                        width: 170px;
                        position: absolute;
                        top: 10px;
                        right: 0;

                        a {
                            display: block;
                            width: 170px;
                            height: 120px;
                            margin-bottom: 1px;
                            img {
                                width: 170px;
                                height: 120px;

                            }
                        }

                    }
                }
            }

        }
        .box-bd {
            width: 100%;
            height: auto;
            background: #fff;
            padding-top: 20px;
            .xm-carousel-list {
                width: 1200px;
                margin: 0 auto;
                position: relative;
                .xm-carousel-wrapper {
                    height:180px;
                    width:1200px;
                    ul{
                        width: 9000px;
                        height: 180px;
                        li{
                            display: inline-block;
                            float: left;
                            width: 290px;
                            height: 180px;
                            margin-right: 14px;
                            position: relative;
                            img:first-child{
                                position: absolute;
                                left: 0;
                                top: 0;
                            }
                            img:last-child{
                                width: 100%;
                                height: 100%;

                            }
                        }
                    }
                }
                .around {
                    position: relative;
                    margin-top: 50px;
                    .title {
                        position: absolute;
                        top: -1px;
                        left: 89px;
                        font-size: 20px;
                        color: #e86664;
                    }
                }
                .page-main {
                    width: 1200px;
                    margin: 0 auto;
                    .brick-list {

                        .brick-item {
                            float: left;
                            width: 300px;
                            height: 375px;
                            margin-left: -1px;
                            padding-left: 14px;
                            border: 1px solid #e7e7e7;
                            .figure {
                                width: 270px;
                                height: 270px;
                                img {
                                    width: 100%;
                                    height: 100%;
                                    margin-top: 14px;
                                }
                            }
                            .Prices {
                                width: 270px;
                                height: 89px;
                                margin-top: 14px;
                                display: inline-block;
                                .Price {
                                    font-size: 20px;
                                    color: #e86664;
                                    padding-top: 13px;
                                    padding-bottom: 9px;

                                }
                                .desc {

                                    font-size: 14px;

                                    font-family: "Microsoft YaHei";

                                    color: #333;

                                }

                            }

                        }
                    }

                }

            }
        }
        .shape-container {
            margin-top: 74px;
            width: 100%;
            height: auto;
            background-color: #f7f7f7;
            .detailBlock {
                width: 1200px;
                height: 773px;
                margin: 0 auto;
                background: #f7f7f7;
                .floor-line-con {
                    width: 581px;
                    height: 29px;
                    line-height: 29px;
                    margin: 0 auto;
                    padding-top: 53px;
                    padding-bottom: 67px;
                    .floor-name {
                        width: 581px;
                        height: 29px;
                        line-height: 29px;
                        text-align: center;
                        i {
                            width: 160px;
                            margin-bottom: 9px;
                            height: 1px;
                            display: inline-block;
                            border-top: 1px solid #1075b7;
                        }
                        .content-loading {
                            font-size: 28px;
                            color: #333;
                            margin: 0 20px 18px 14px;
                            font-family: "Microsoft YaHei";
                        }
                        .demand {
                            font-size: 16px;
                            color: #666;
                        }
                    }
                }
                .goods-sub-bar {
                    width: 960px;
                    height: 522px;
                    margin: 0 auto;
                    padding-top: 67px;
                    .sub-bar {
                        width: 960px;
                        height: 522px;
                        text-align: center;
                        position: relative;
                        .floor-line-con {
                            position: absolute;
                            top: 0;
                            left: 0;
                            .item-info {
                                width: 960px;
                                height: 522px;
                                position: absolute;
                                .item-name {
                                    width: 211px;
                                    height: 75px;
                                    /* background: red; */
                                    position: relative;
                                    .item-desc {
                                        display: inline-block;
                                        width: 113px;
                                        height: 40px;
                                        line-height: 22px;
                                        font-size: 14px;
                                        color: #2d2d2d;
                                        position: absolute;
                                        top: 16px;
                                        left: 0;
                                    }
                                    .item-img {
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                    }
                                }
                                .one {
                                    position: absolute;
                                    top: -52px;
                                    left: 71px;
                                }
                                .two {
                                    position: absolute;
                                    top: 174px;
                                    left: 0;
                                }
                                .three {
                                    position: absolute;
                                    top: 385px;
                                    left: 87px;
                                }
                                .item-names {
                                    width: 211px;
                                    height: 74px;

                                    /* background: red; */
                                    position: relative;
                                    .itemDesc {
                                        display: inline-block;
                                        width: 113px;
                                        height: 40px;
                                        line-height: 22px;
                                        font-size: 14px;
                                        color: #2d2d2d;
                                        position: absolute;
                                        top: 16px;
                                        right: 0;
                                    }
                                    .item-image {
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                    }
                                }
                                .four {
                                    position: absolute;
                                    top: -52px;
                                    right: 71px;
                                }
                                .five {
                                    position: absolute;
                                    top: 174px;
                                    right: 0;
                                }
                                .six {
                                    position: absolute;
                                    top: 385px;
                                    right: 87px;
                                }

                            }
                        }

                    }

                }
                .goods-sub-bar-fg {
                    width: 1230px;
                    height: 522px;
                    margin: 0 auto;
                    .product {
                        margin-top: 80px;
                        height: 444px;
                       .product-list{
                           height: 444px;
                           width: 380px;
                           margin-right: 30px;
                           float: left;
                           position: relative;
                           border: 1px solid #e7e7e7;
                           .product-iWrap {
                               height: 444px;
                               width: 380px;
                               transform-style: preserve-3d;
                               backface-visibility:hidden;
                               transition:all 2s;
                               transform:rotateY(0);
                               .ng-img {
                                   width: 380px;
                                   height: 281px;

                               }
                               p {
                                   text-align: center;
                                   font-size: 32px;
                                   color: #1075b7;
                               }
                               .small {
                                   margin-top: 14px;
                                   height: 71px;
                                   line-height: 26px;
                                   display: flex;
                                   a {
                                       display: flex;
                                       flex-direction: column;
                                       flex: 1;
                                       align-items: center;
                                       justify-content: center;
                                       span {
                                           font-size: 14px;
                                           color: #333;
                                       }
                                   }
                               }
                           }
                           .iWrap {
                               height: 444px;
                               width: 380px;
                               float: left;
                               border: 1px solid #e7e7e7;
                               position: absolute;
                               top: 0;
                               left:0;
                               transform:rotateY(-180deg);
                               background: #41a2ff;
                               backface-visibility:hidden;
                               transition:all 2s;
                               .img-fan {
                                   position: absolute;
                                   top: -57px;
                                   left: 133px;
                               }
                               .afford-inner {
                                   height: 444px;
                                   width: 300px;
                                   margin: 0 auto;
                                   padding-top: 88px;
                                   .afford-hd {
                                       font-size: 30px;
                                       color: #fff;
                                       text-align: center;
                                       font-family: "Microsoft YaHei";
                                   }
                                   .list-text {
                                       margin-top: 35px;
                                       .brand-item {
                                           line-height: 37px;
                                           span {
                                               font-size: 14px;
                                               color: #fff;
                                           }
                                           .text-left {
                                               margin-right: 20px;
                                           }
                                       }
                                   }

                               }

                           }
                           .product-list:hover .product-iWrap{
                               transform:rotateY(-180deg);
                           }
                           .product-list:hover .div2{
                               transform:rotateY(0deg);
                           }
                       }
                    }
                }
                .hexagonal-picture {
                    height: 322px;
                    position: relative;
                    margin-top: 70px;
                    .move {
                        position: relative;
                        top: 0px;
                        left: -19px;
                    }
                    .move-down {
                        position: relative;
                        top: 57px;
                        left: -11px;;
                    }
                    .move-down-right {
                        position: absolute;
                        top: 57px;
                        right: 0;
                    }

                }
                .Product-evaluation {
                    width: 500px;
                    height: 228px;
                    float: left;
                    position: relative;
                    background: url("../assets/img/wmfwdyh-bg.png")no-repeat;
                    margin-top: 60px;
                    .evaluation{
                        width: 406px;
                        height: 135px;
                        overflow: hidden;

                        margin:0 auto;
                        position: absolute;
                        top: 52px;
                        left: 47px;
                        .Customer-image {
                            float: left;
                            width: 60px;
                            height: 60px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .alignment {
                            float: left;
                            display: inline-block;
                            height: 45px;
                            line-height: 27px;
                            margin-left: 17px;
                            margin-top: 6px;

                            .Customer-name{
                                font-size: 18px;
                                color: #2d2d2d;
                            }
                            span{
                                font-size: 14px;
                                color: #666;
                            }
                        }
                        .comment{
                            position: absolute;
                            top:88px;
                            left: 0;
                            text-indent:7px;
                            overflow: hidden;//必须
                            display: -webkit-box;//必须
                            -webkit-line-clamp: 2;//必须
                            -webkit-box-orient: vertical;//必须
                        }
                    }



                }


            }
        }
        .Quality-assurance{
            height: 117px;
            width: 100%;
            background: #f7f7f7;
            .maintain{
                width: 1200px;
                height: auto;
               margin: 0 auto;
                padding-top: 30px;

                display: flex;
                .maintain-list{
                    width: 200px;
                    height: 60px;
                    float: left;
                    display: inline-block;


                    flex:1;
                    text-align:left;
                    .Customer{
                        float: left;
                    }
                    .list-ment{
                        float: left;
                        display: inline-block;
                        height: 45px;
                        line-height: 31px;
                        margin-left: 15px;
                        .customer{
                            font-size: 20px;
                            color: #333;

                        }
                        span{
                            font-size: 14px;
                            color: #999;
                        }

                    }

                }


            }
        }


    }


</style>