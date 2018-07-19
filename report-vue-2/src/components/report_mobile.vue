<template>
    <div>
        <main>
            <section class="banner">
                <img src="../../static/images/bannermin.jpg" alt="">
            </section>
            <section class="information wrapped">
                <div class="title--logo">
                    <img src="../../static/images/titlemin_1.png" alt="">
                </div>
                <div class="infor_content">
                    <p><b>主办单位</b>GNEV官方机构</p>

                    <p><b>联合主办单位:</b>上海国际汽车城</p>

                    <p><b>承包单位:</b>第一电动网</p>

                    <p><b style=" height: 4em; display:  inline-block; float: left;">支持单位:</b>上海国际汽车城世茂实业有限公司<br>
                        中国汽车产业培训基地<br>
                        汽车. 创新港</p>
                </div>
            </section>
            <section class="speech wrapped" v-if="newCar">
                <div class="title--logo">
                    <img src="../../static/images/titlemin_2.png" alt="">
                </div>
                <div class="speech_list news">
                    <section class="article--wraped clearfix" v-for="(e,i) in newCar" :key="i">
                        <a :href="domain + e.pcUrl">
                            <div class="article--content am-fl">
                                <span class="article_p">{{e.title}}</span>
                                <div class="forter">
                                    <span>第一电动网</span>
                                    <span>{{e.addTimeStr.split(" ")[0]}}</span>
                                </div>
                            </div>
                            <div class="article--img am-fr">
                                <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                            </div>
                            <div class="paiming"></div>
                        </a>
                    </section>
                </div>
            </section>
            <section class="speech wrapped" v-if="person">
                <div class="title--logo">
                    <img src="../../static/images/titlemin_3.png" alt="">
                </div>
                <div class="speech_list news">
                    <section class="article--wraped clearfix" v-for="(e,i) in person" :key="i">
                        <a :href="domain + e.pcUrl">
                            <div class="article--content am-fl">
                                <span class="article_p">{{e.title}}</span>
                                <div class="forter">
                                    <span>第一电动网</span>
                                    <span>{{e.addTimeStr.split(" ")[0]}}</span>
                                </div>
                            </div>
                            <div class="article--img am-fr">
                                <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                            </div>
                            <div class="paiming"></div>
                        </a>
                    </section>
                </div>
            </section>
            <section class="speech wrapped" v-if="video">
                <div class="title--logo">
                    <img src="../../static/images/titlemin_4.png" alt="">
                </div>
                <div class="speech_list news">
                    <section class="article--wraped clearfix" v-for="(e,i) in video" :key="i">
                        <a :href="domain + e.pcUrl">
                            <div class="article--content am-fl">
                                <span class="article_p">{{e.title}}</span>
                                <div class="forter">
                                    <span>第一电动网</span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="article--img am-fr">
                                <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                            </div>
                            <div class="paiming"></div>
                        </a>
                    </section>
                </div>
            </section>
            <section class="speech wrapped" v-if="technology">
                <div class="title--logo">
                    <img src="../../static/images/titlemin_5.png" alt="">
                </div>
                <div class="speech_list news">
                    <section class="article--wraped clearfix" v-for="(e,i) in technology" :key="i">
                        <a :href="domain + e.pcUrl">
                            <div class="article--content am-fl">
                                <span class="article_p">{{e.title}}</span>
                                <div class="forter">
                                    <span>第一电动网</span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="article--img am-fr">
                                <img v-lazy="baseUrl + e.coverImgUrl" :alt="e.title">
                            </div>
                            <div class="paiming"></div>
                        </a>
                    </section>
                </div>
            </section>
            <section class="parter wrapped">
                <div class="title--logo">
                    <div class="title--logo">
                        <img src="../../static/images/titlemin_6.png" alt="">
                    </div>
                </div>
                <div class="parter_div">
                    <p>主办单位: GNEV官方机构</p>
                </div>
                <div class="parter_div">
                    <p>承办单位:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list4" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="parter_div">
                    <p>协办单位:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list5" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="parter_div">
                    <p>支持单位:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list3" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl">
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>合作伙伴:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list1" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl">
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>合作媒体:</p>
                    <ul class="parter_list clearfix">
                        <li v-for="(e,i) in parter.list2" :key="i">
                            <div class="img--wrapper">
                                <img :src="e.coverImgUrl">
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <div class="foot--wrapper">
                <div class="am-container">
                    <div class="foot--copyright">Copyright © 2010-2018<a style="color:#949494;" href="http://www.d1ev.com" class="foot--copyright_a">第一电动网</a>京ICP备14024261号 京ICP证160753号<a style="color:#949494;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033163" target="_blank"><img style="margin-bottom:4px;" src="http://cdn-fs.d1ev.com/d/file/default/ghs.png">京公网安备 11010502033163号</a>广播电视节目制作经营许可证（京）字第06795号</div>
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
    import datalist from './datalist'

    export default {
        name: "report_mobile",
        data() {
            return {
                domain: "",
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
                  
                });

            },
            goTop(){
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(this.goTop);
                    window.scrollTo (0,currentScroll - (currentScroll/5));
                }
            }
        },
        mounted() {
            this.dataList = datalist.data()
            this.getMessage()
        }
    }
</script>

<style src="../../static/css/mobile.css" scoped></style>
