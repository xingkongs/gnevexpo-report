<template>
<div>
    <header></header>
    <main>
        <div class="banner"></div>
        <div class="news wrapped clearfix">
            <section class="slide--wrapper am-fl">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(e,i) in slides" :key="i">
                            <img :src="e.imgPath" alt="">
                            <div class="slider-desc clearfix">
                                <p class="slide_li">协同创新、驱动未来——2018珠三角未来汽车供应链创新论坛在深圳盛大开幕</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </section>
            <section class="newsList am-fr">
                <ul>
                    <li class="division" v-for="(i,index) in recommendNews" :key="index">
                        <a :href="domain+i.pcUrl" target="_blank">
                            <p class="title">{{i.title}}</p>
                            <p class="discription">{{i.summary}}</p>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
        <section class="title2 wrapped">
            <div class="title--logo">
                <img src="../../static/images/title_1.png" alt="">
            </div>
            <ul class="speech_list clearfix">
                <li v-for="(e,i) in person" :key="i">
                    <a :href="domain + e.pcUrl" target="_blank">
                        <div class="img--wrapper">
                            <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                        </div>
                        <p class="title">{{e.title}}</p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="title2 wrapped">
            <div class="title--logo">
                <img src="../../static/images/title_2.png" alt="">
            </div>
            <ul class="speech_list clearfix">
                <li v-for="(e,i) in person" :key="i">
                    <a :href="domain + e.pcUrl" target="_blank">
                        <div class="img--wrapper">
                            <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                        </div>
                        <p class="title">{{e.title}}</p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="title2 wrapped">
            <div class="title--logo">
                <img src="../../static/images/title_3.png" alt="">
            </div>
            <ul class="speech_list clearfix">
                <li v-for="(e,i) in person" :key="i">
                    <a :href="domain + e.pcUrl" target="_blank">
                        <div class="img--wrapper">
                            <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                        </div>
                        <p class="title">{{e.title}}</p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="title1 wrapped">
            <div class="title--logo">
                <img src="../../static/images/title_4.png" alt="">
            </div>
            <ul class="speech_list clearfix">
                <li v-for="(e,i) in newCar" :key="i">
                        <a :href="domain + e.pcUrl" target="_blank">
                        <div class="img--wrapper">
                            <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                        </div>
                        <p class="title">{{e.title}}</p>
                    </a>
                </li>
            </ul>
        </section>
    </main>
    <footer>
      <div class="foot--wrapper">
        <div class="am-container">
          <div class="am-cf foot--list">
            <a href="http://www.d1ev.com/about/aboutus" class="am-fl">关于我们</a>
            <a href="http://www.d1ev.com/app/download" class="am-fl">客户端下载</a>
            <a href="http://www.d1ev.com/about/contact" class="am-fl">联系我们</a>
            <a href="http://www.d1ev.com/about/joinus" class="am-fl">加入我们</a>
            <a href="http://www.d1ev.com/about/agreement" class="am-fl">用户协议</a>
            <a href="http://www.d1ev.com/about/friendlink" class="am-fl">友情链接</a>
            <a href="http://www.d1ev.com/about/feedback" class="am-fl">意见反馈</a>
          </div>
          <div class="foot--copyright"><span>Copyright © 2010-2018<a style="color:#949494;" href="http://www.d1ev.com" class="foot--copyright_a">第一电动网</a>京ICP备14024261号 京ICP证160753号<a style="color:#949494;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033163" target="_blank"> <img style="vertical-align:middle;" src="http://cdn-fs.d1ev.com/d/file/default/ghs.png">京公网安备 11010502033163号</a>广播电视节目制作经营许可证（京）字第06795号</span></div>
        </div>
      </div>
    </footer>
    <ul class="goTop">
      <li>
        <a href="javascript:;" @click="goTop()">
          <img src="../../static/images/goTop.png" alt="">
        </a>
      </li>
    </ul>
</div>
</template>
<script>
    import Swiper from 'swiper'
    import datalist from './datalist'
    export default {
        name:"beijingautoshow",
        data() {
            return {
            domain: "//www.d1ev.com",
            baseUrl:"https://cdn-fs.d1ev.com/",
            slides:'',
            newCar:'',
            recommendNews:'',
            person:'',
            video:'',
            newsList:'',
            dataList:""
            }
        },
        methods: {
            getMessage(){
                let data = this.dataList.date
                this.$nextTick(()=>{
                    this.slides = data.banner.list
                    this.newCar = data.newCar.list
                    this.recommendNews = data.recommendNews.list
                    this.person = data.person.list
                    this.video = data.video.list
                    this.newsList = data.all.list
                    this.initSwiper()
                });

            },
            goTop(){
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(this.goTop);
                    window.scrollTo (0,currentScroll - (currentScroll/5));
                }
            },
            initSwiper(){
                        window.onload= ()=>{
                         new Swiper ('.swiper-container', {
                          slidesPerView: 1,
                          loop: true,
                          pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                          },
                          navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                          },
                         }) 
                        }                        
                  
            }
        },
        mounted() {
            this.dataList = datalist.data()
            this.getMessage()
        }
    }
</script>
<style scoped src="../../static/css/autoshow.css"></style>
<style scoped>
    .swiper-container {
        width: 640px;
        height: 360px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide img{
        width:100%;
        height:100%;
    }
    .swiper-slide{
        position: relative;
    }
    .swiper-slide .slider-desc{
        position: absolute;
        bottom: 0;
        width: 100%;
        color: #fff;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0),#000);
        font-size: 18px;
        font-weight: bold;
        height: 86px;
        padding: 17px;
    }
</style>
