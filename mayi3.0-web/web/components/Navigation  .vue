<template>
    <div class="site-footer">
        <div class="containers">
            <div class="footer-service">
              <ul class="list-service clearfix" >
                  <li class="">
                      <a href="#"><span>关于我们</span></a>
                  </li>
                  <li>
                      <a href="#"><span>联系方式</span></a>
                  </li>
                  <li>
                      <a href="#"><span>招贤纳士</span></a>
                  </li>
                  <li>
                      <a href="#"><span>隐私条款</span></a>
                  </li>

              </ul>

            </div>
            <div class="footer-links clearfix">
                <div class="site-info">
                    <button>友情链接</button>
                </div>
                <div class="col-links-first">
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇亿</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                    <dl class="col-links ">
                        <dd><a href="">亿智蘑菇</a></dd>
                        <dd><a href="">威客网</a></dd>
                        <dd><a href="">亿智蘑菇</a></dd>
                    </dl>
                </div>
                <p class="footer-fp-img">
                    <a href=""><img src="../assets/img/footer-01.gif" alt=""></a>
                    <a href=""><img src="../assets/img/footer-02.png" alt=""></a>
                    <a href=""><img src="../assets/img/footer-02.png" alt=""></a>
                    <a href=""><img src="../assets/img/footer-02.png" alt=""></a>
                </p>
                <div class="col-contact">
                    <p class="phone">服务与支持</p>
                    <p >400-9918-280</p>
                    <p >

                        周一至周五 09:00-19:00

                    </p>
                    <p><a href=""><img src="../assets/img/erweima.png" alt=""></a></p>
                    <span>扫码关注微信公众平台</span>
                </div>
                <div class="footer">
                    <p>
                        <span>京ICP备14055257号-6</span>
                        <span>版权所有：北京智网易联科技有限公司</span>

                    </p>
                </div>
            </div>

        </div>


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
<style scoped lang="less">
    .site-footer{

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
        background: #372d29;

           .containers{
               width: 1200px;
               height: 387px;
               margin-right: auto;
               margin-left: auto;
               .footer-service{
                   padding: 27px 0;
                   overflow: hidden;
                   .list-service{
                       padding: 0;
                       list-style-type: none;
                       margin-left: -28px;
                       li{
                           border-left: 0;
                           float: left;
                           border-left: 1px solid #9b9694;
                           font-size: 16px;
                           line-height: 25px;
                           text-align: center;
                           padding: 0  30px;
                           a{
                               color: #fff;
                           }
                       }
                   }
               }
               .footer-links{
                   height: 300px;
                   position: relative;

                   .site-info{
                       width: 97px;
                       height: 30px;
                       background: #1075d7;
                       border-radius: 2px;
                       margin-top: 3px ;
                       button{
                           height: 100%;
                           width: 100%;
                           border:0px;
                           font-family: "Microsoft YaHei";
                           color: #fff;
                           background-color:transparent

                       }

                   }
                   .col-links-first{
                       width: 943px;
                       display: flex;
                       .col-links{
                           width: 100px;
                           height: 112px;
                           line-height: 30px;
                           overflow: hidden;
                           padding-top: 20px;
                           display: flex;
                           flex-direction: column;
                           flex: 1;
                           align-items: baseline;
                           justify-content: center;
                           dd{
                               a{
                                   font-size: 14px;
                                   color: #fff;
                               }
                           }

                       }

                   }
                   .col-contact{
                       float: right;
                       width: 180px;
                       height: 328px;
                       color: #616161;
                       text-align: right;
                       position: absolute;
                       top: -80px;
                       right: 0;
                       padding: 30px 0 40px 0;
                       .phone{
                           color: #fff;
                           font-size: 18px;
                           margin-bottom: 7px;
                       }
                       p{
                           font-family: "Microsoft YaHei";
                       }
                       p:nth-child(2){
                           color: #fff;
                           font-size: 25px;
                           margin-bottom: 7px;
                       }
                       p:nth-child(3){
                           color: #fff;
                           font-size: 14px;
                           margin-bottom: 14px;

                       }
                       span{
                           font-size: 12px;
                           color: #fff;
                       }
                   }
                   .footer-fp-img{
                       height: 40px;
                       margin-top: 27px;
                       margin-bottom: 40px;
                       a{
                           margin-right: 10px;
                           display: inline-block;
                           width: 110px;
                           height: 40px;
                           background: #d5ffee;
                       }
                   }
                   .footer{
                       height: 56px;
                       line-height: 56px;
                       width: 1200px;
                       text-align: center;
                       border-top: 1px solid #5f5754;
                       p{
                           span{
                               font-size: 14px;
                               color: #fff;
                           }
                           span:first-child{
                               margin-right: 27px;
                           }


                       }
                   }
               }
           }
       }




</style>