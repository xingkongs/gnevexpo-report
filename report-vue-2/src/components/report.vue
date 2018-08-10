<template>
    <div>
        <main>
            <div class="banner"></div>
            <div class="news wrapped clearfix">
                <section class="slide--wrapper am-fl">
                    <div class="swiper-container am-slider am-slider-default">
                      <ul class="am-slides">
                        <li v-for="(e,i) in slides" :key="i">
                          <a :href="e.pcUrl" target="_blank">
                            <span class="img--wrapper">
                                <img :src="e.imgPath" alt="">
                            </span>
                            <div class="am-slider-desc clearfix">
                              <p class="slide_li">{{e.title}}</p>
                            </div>
                          </a>
                        </li>
                      </ul>
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
            <section class="speech wrapped" v-if="newCar">
                <div class="title--logo">
                    <img src="../../static/images/title_1.png" alt="">
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
            <section class="speech wrapped" v-if="person">
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
            <section class="speech wrapped" v-if="video">
                <div class="title--logo">
                    <img src="../../static/images/title_3.png" alt="">
                </div>
                <ul class="speech_list clearfix">
                    <li v-for="(e,i) in video" :key="i">
                        <a :href="domain + e.pcUrl" target="_blank">
                            <div class="img--wrapper">
                                <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                            </div>
                            <p class="title">{{e.title}}</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="speech gnevexpo wrapped" v-if="technology">
                <div class="title--logo">
                    <img src="../../static/images/title_4.png" alt="">
                </div>
                <ul class="speech_list clearfix">
                    <li v-for="(e,i) in technology" :key="i">
                        <a :href="domain + e.pcUrl" target="_blank">
                            <div class="img--wrapper">
                                <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                            </div>
                            <p class="title">{{e.title}}</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="parter wrapped">
                <div class="title--logo">
                    <img src="../../static/images/title_5.png" alt="">
                </div>
                <div class="contentWrapper--flex clearfix">
                    <div class="parter_div">主办单位: <span>GNEV官方机构</span></div>
                    <div class="parter_div">承办单位:
                        <span class="img--wrapper" v-for="(e,i) in parter.list4" :key="i">
                            <img :src="e.coverImgUrl" alt="" title="">
                        </span>
                    </div>
                    <div class="parter_div">协办单位:
                        <span class="img--wrapper" v-for="(e,i) in parter.list5" :key="i">
                            <img :src="e.coverImgUrl" alt="" title="">
                        </span>
                    </div>

                </div>
                <div class="clearfix parter_zhichi">
                    <p class="am-fl">支持单位:</p>
                    <ul class="am-fl parter_list clearfix">
                        <li v-for="(e,i) in parter.list3" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl" alt="" title="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>合作伙伴:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list2" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl" alt="" title="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>合作媒体:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list1" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl" alt="" title="">
                            </div>
                        </li>
                    </ul>
                </div>

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
                    <div class="foot--copyright">
                        Copyright © 2010-2018 <a style="color:#949494;" href="http://www.d1ev.com" class="foot--copyright_a">第一电动网</a><span>京ICP备14024261号 京ICP证160753号</span><a
                            style="color:#949494;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033163" target="_blank"><img style="vertical-align: middle;" src="http://cdn-fs.d1ev.com/d/file/default/ghs.png">京公网安备
                        11010502033163号</a>广播电视节目制作经营许可证（京）字第06795号
                    </div>
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
    import $ from 'jquery'
    import 'amazeui'

    import datalist from './datalist'
    export default {
        name: "report",
        data() {
            return {
                domain: "",
                imgPath:'./',
                baseUrl:"",
                slides:'',
                newCar:'',
                recommendNews:'',
                person:'',
                video:'',
                newsList:'',
                dataList:"",
                technology:"",
                parter:{}
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
                    this.technology = data.technology.list
                    this.parter = data.parter
                    this.initSwiper()
                });

            },
            goTop(){
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 2) {
                    window.requestAnimationFrame(this.goTop);
                    window.scrollTo (0,currentScroll - (currentScroll/5));
                }
            },
            initSwiper(){
                window.onload= ()=>{
                  $('.am-slider').flexslider({})
                }
            }
        },
        mounted() {
            this.dataList = datalist.data()
            this.getMessage()
        }
    }
</script>
<style>
  @import "../../node_modules/amazeui/dist/css/amazeui.min.css";
</style>
<style scoped src="../../static/css/report.css"></style>
<style>
  .am-slider-default .am-direction-nav a{
    width:42px;
    height:66px;
    margin-top:-33px;
    background: url("../../static/images/right.png") no-repeat center;
  }
  .am-slider-default .am-direction-nav a:before,.am-slider-default .am-direction-nav a.am-next:before{
    content:'';
  }
  .am-slider-default .am-control-nav{
    width: 240px;
    right: 0;
    bottom: 36px;
  }
  .am-slider-default .am-control-nav li a{
    width:10px;
    height:10px;
  }
  .am-slider-default .am-control-nav li{
    margin:0 4px;
  }
  .am-slider-default .am-control-nav li a{
    background: #fff;
  }
  .am-slider-default .am-control-nav li a.am-active{
    background: #f60;
  }
</style>

