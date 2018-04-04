<template>
    <div>
        <div class="banner">

            <div class="bannerImg">
                <transition-group tag="div">
      <span v-for="(v,i) in banners" :key="i" :style="{opacity:(i+1)==n?'1':'0'}" class="active">
                  <img :src="v.imgUrl" alt="">
      </span>
                </transition-group>
            </div>
            <ul class="bannerBtn clear-fix">
                <li v-for="num in banners.length">
                    <a href="javascript:;" :style="{background:num==n?'#ff7800':''}" @click='change(num)' class='aBtn'></a>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import img from '../assets/img/banner.png'
    export default {
        data () {
            return {
                banners:[
                    { imgUrl: img }, { imgUrl: img }, { imgUrl: img }, { imgUrl: img }, { imgUrl: img }, { imgUrl: img },
                    'https://img1.360buyimg.com/da/jfs/t3133/89/5984232745/66970/beaf615c/589ac9bcNe544a72e.jpg',
                    'https://img20.360buyimg.com/da/jfs/t3157/165/6117849901/102894/88bf53b8/589d67b6Ne8986a9e.jpg'],
                n:1,　　　　　　　// 图片的index。
                bFlag:true,      // 锁定
                timer1:'',　　　　// 这是bFlag定时器的数据
                timer2:'',　　　　// 这是自动播放（next（））定时器的数据
                timer3:'',　　　　// 这是打开浏览器时，初始运动定时器的数据
            }
        },


        created(){
        },
        methods:{
            next(){
                // 下一张　　　
                // 为了避免连续点击。让bFlag运动结束后再变为true。　　　　　　　　　　　　　　
                if(this.bFlag){
                    this.bFlag=false;
                    this.clearT();　　　　　　　　　   // 运动之前，清除所有定时器。
                    this.n=this.n+1==4?1:this.n+1;　  // 下一张，如果是第4张，就返回第一张。
                    // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
                    this.timeout();
                }
            },
            clearT(){
                // 清除所有定时器　　　　　　　　　　　　　　　
                clearTimeout(this.timer1);
                clearTimeout(this.timer2);
                clearTimeout(this.timer3);
            },
            timeout(){
                // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
                // 运动时间是1s。
                this.timer2=setTimeout(()=>{
                    this.bFlag=true
                },1000);
                this.timer1=setTimeout(()=>{
                    this.next()
                },3000);
            },
            change(num){
                // 点击按钮，切换到对应图片，需要获取index。
                if(this.bFlag){
                    this.bFlag=false;
                    this.clearT();
                    this.n=num;　　　　　　　         // 将显示图片变为选中的那一张。　　　　
                    this.timeout()
                }
            }
        },

        mounted(){
            this.timer3=setTimeout(this.next,3000);
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>
    ul,li{
        list-style: none;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .banner{
        position: relative;
    }
    .bannerImg{
        position: relative;
        height: 500px;
        background-size:100%;
        overflow: hidden;
    }
    .bannerImg span{
        position: absolute;
        top:0;
        left: 0;
    }
    .bannerImg span.active{
        transition:all 1s;
    }
    .bannerBtn{
        height: 10px;
        position:absolute;
        bottom: 22px;
        left: 32%;
    }
    .bannerBtn li{
        margin: 0 13px;
        width: 30px;
        height: 5px;
        float:left;
        background: rgba(255,255,255,.4);
    }
    .bannerBtn li a{
        display: block;
        width: 30px;
        height: 5px;
    }
    .bannerBtn li a.aBtn{
        transition:all .6s ease;
    }


</style>
