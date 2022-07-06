<template>
  <swiper
    :direction="'vertical'"
    :pagination="{
      clickable: true,
    }"
    :mousewheel="swiper_options.mousewheel"
    :modules="modules"
    class="mySwiper"
    :speed="swiper_options.speed"
  >
    <swiper-slide>
      <div class="first-img">
        <div class="top-wrapper">
          <div class="top-content">
            <div class="logo">
              <img src="../assets/img/logo.webp" alt="" />
            </div>
            <div class="top-button">
                <router-link to="main">
              <img src="../assets/img/topBtn.webp" alt="" />
              </router-link>
            </div>
          </div>
        </div>
        <div class="videoBtn">
          <img src="../assets/img/videoBtn.webp" alt="" />
        </div>
        <div class="button-group">
          <div class="pc-Download">
            <img src="../assets/img/pcDownload.webp" alt="" />
          </div>
          <div class="other-Download">
            <img src="../assets/img/otheDownload.webp" alt="" />
          </div>
          <div class="yun-Download">
            <img src="../assets/img/yunDownload.webp" alt="" />
          </div>
        </div>

        <div class="age-tip" @click="handleShowTip">
          <img src="../assets/img/ageTip.webp" alt="" />
        </div>
        <div class="show-tip" v-show ="isShowTip">
          <img src="../assets/img/tipContent.webp" alt="">
        </div>
        <div class="cancel-Btn" v-show = "isShowTip" @click="handleShowTip">
          <img src="../assets/img/cancelBtn.webp" alt="">
        </div>
        
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="second-img">
          <div class="challenge-Btn">
              <img src="../assets/img/challengeBtn.webp" alt="">
              <!-- <img src="" alt=""> -->
        </div>
      </div>
    </swiper-slide>
    <swiper-slide >
      <div class="third-img">
      
      </div>
    </swiper-slide>
    <swiper-slide >
      <div class="fourth-img">
    
      </div>
    </swiper-slide>
    
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive, ref } from "vue";
import "swiper/css";
import router from "../routers";

import "swiper/css/pagination";

import "./style.css"

import { Pagination } from "swiper";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Mousewheel,
} from "swiper";
SwiperCore.use([Autoplay, Pagination, EffectCoverflow, Navigation, Mousewheel]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let swiper_options = reactive({
      speed: 600, //切换过渡速度
      centeredSlides: true, //设置slide居中
      pagination: {
        clickable: true,
      },
      mousewheel: true,
    });
    let isShowTip = ref(true)
    function handleShowTip(){
      isShowTip.value = !isShowTip.value
      console.log(isShowTip.value);
    }
    return {
      swiper_options,
      modules: [Pagination],
      isShowTip,
      handleShowTip,
    };
  },
};
</script>

<style>
.first-img {
  /* display: block; */
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url("../assets/img/firstbg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.second-img {
  /* display: block; */
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url("../assets/img/secondBg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.third-img {
  /* display: block; */
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url("../assets/img/thirdBg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.fourth-img {
  /* display: block; */
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url("../assets/img/fourthBg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.logo {
  flex-grow: 1;
}

.top-wrapper {
  height: 160px;
  width: 100%;
  /* background-color: aquamarine; */
}

.button-wrapper {
  position: absolute;
  width: 2.08rem;
  height: 0.53rem;
  cursor: pointer;
  top: 0.61rem;
  right: 3.45rem;
  font-size: 76.8px;
  background-color: aqua;
}

.top-content {
  display: flex;
  height: 100%;
  width: 90%;
  margin: auto;
  align-items: center;
}

.top-button {
  height: 50%;
  width: 250px;
}

.top-button img {
  cursor: pointer;
}
.videoBtn {
  position: absolute;
  top: 26%;
  right: 20%;
  height: 60px;
  width: 60px;
}
.videoBtn img {
  height: 50px;
  width: 50px;
}
.videoBtn :hover {
  cursor: pointer;
}

.button-group {
  position: absolute;
  top: 20%;
  right: 15%;
  width: 40px;
  height: 400px;
  /* background-color: aqua; */
}
.pc-Download {
  width: 40px;
  padding: 0px;
}
.pc-Download img {
  width: 100%;
}
.pc-Download {
  cursor: pointer;
}
.other-Download {
  width: 40px;
  padding: 0px;
}
.other-Download img {
  width: 100%;
}
.other-Download {
  cursor: pointer;
}
.yun-Download {
  width: 40px;
  padding: 0px;
}
.yun-Download img {
  width: 100%;
}
.yun-Download {
  cursor: pointer;
}
.age-tip {
  position: absolute;
  bottom: 30px;
  left: 120px;
  cursor: pointer;
}
.age-tip img {
  height: 110px;
  width: 90px;
}
.show-tip{
            position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%,-50%);
             

}
.show-tip img{
  height: 550px;
  width: 700px;
}
.cancel-Btn{
  position: absolute;
  top: 18.5%;
  left: 70%;
  cursor: pointer;
}
.cancel-Btn img{
  height: 40px;
}
/*第三张图片*/

.challenge-Btn{
  position: absolute;
  top: 20%;
  right: 30%;
  cursor: pointer;
}
.challenge-Btn img{
  height: 300px;
  width: 50px;
}


</style>
