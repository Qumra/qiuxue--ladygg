<template>
  <div class="myVideo">
    <!-- v-for="item in info"   -->
    <div class="videoList" v-for="(item index) in data" :key="item.id ">
      <div class="head">
        <div class="img">
          <!-- ../assets/images/touxiang.png -->
          <img :src="item.headPhotoUrl" alt>
        </div>
        <div class="txt">
          <p class="teacher">{{item.nickName}}</p>
          <p class="jianjie" v-if="item.showContent">
            <span v-html="txtFormat(item.summary)"></span>
            <span @click="unfold(index)" style="color:blue;" v-if="item.summary.length > 27">...更多</span>
          </p>
          <p class="jianjie" v-else>
            <span>{{item.summary}}</span>
            <span @click="unfold(index)" style="color:blue;margin-left:.3rem">收起</span>
          </p>
        </div>
      </div>
      <router-link class="middle" tag="div" :to="{path:'/videoDetail',query:{id:item.id}}">
        <div class="mask1">
          <img src="../assets/images/Layer.png" alt>
          <p class="title">{{item.title}}</p>
          <p class="time">{{item.videoTime}}</p>
          <button>立即观看</button>
        </div>
        <!-- ../assets/images/successBg.png -->
        <img class="banner" :src="item.videoCoverUrl" alt>
      </router-link>
      <div class="bottom">
        <div class="left">
          <img
            v-if="item.isPrise"
            class="collect"
            src="../assets/images/collect_c.png"
            alt
            @click="praise(item.id)"
          >
          <img
            v-else
            class="collect"
            src="../assets/images/collect.png"
            alt
            @click="praise(item.id)"
          >
          <span>{{item.praise}}</span>
          <img
            v-if="item.isCollection"
            class="praise"
            src="../assets/images/heart_c.png"
            alt
            @click="collect(item.id)"
          >
          <img v-else class="praise" src="../assets/images/heart.png" alt @click="collect(item.id)">
          <span>{{item.collection}}</span>
        </div>
        <div class="right">
          {{item.updateAt |dateformat}}
          <img src="../assets/images/arrow.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
export default {
  props: {
    data: { type: Array, required: true }
  },
  data() {
    return {
      // showContent: true,
    };
  },
  created(){
    this.data.forEach(i=>{
      i.showContent = true
    })
  },
  methods: {
    unfold(index) {
      this.data[index].showContent = !this.data[index].showContent;
    },
    txtFormat: function(data) {
      //   var output= data.substring(0, 27)+'<br>'+data.substring(27,52);
      return data.substring(0, 27);
    },
    collect(id) {
      let that = this;
      let userId = this.$store.getters.userInfo.userId;
      this.axios
        .put(`/u/videoData/collection?id=${id}&userId=${userId}`)
        .then(response => {
          console.log(response.data);
          if (response.data.code == 0) {
            that.data.forEach(i => {
              //data为父组件请求到的数据
              if (i.id === id) {
                if (i.isCollection) {
                  i.isCollection = false;
                  i.collection--;
                } else {
                  i.isCollection = true;
                  i.collection++;
                }
                return;
              }
            });
          } else {
            alert(response.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    praise(id) {
      var that = this;
      let userId = this.$store.getters.userInfo.userId;
      this.axios
        .put(`/u/videoData/praise?id=${id}&userId=${userId}`)
        .then(response => {
          console.log(response.data);
          if (response.data.code == 0) {
            that.data.forEach(i => {
              if (i.id === id) {
                if (i.isPrise) {
                  i.isPrise = false;
                  i.praise--;
                } else {
                  i.isPrise = true;
                  i.praise++;
                }
                return;
              }
            });
          } else {
            alert(response.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/public";
.myVideo {
  .videoList {
    padding: 0.2rem;
    background-color: #fff;
    margin-top: 0.3rem;
    color: #b8b8b8;
    font-size: 0.3rem;
    .head {
      display: flex;
      margin-bottom: 0.2rem;
      .img {
        background-color: #b8b8b8;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        margin-right: 0.1rem;
        overflow: hidden;
        img {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
      .txt {
        flex: 1;
        .teacher {
          font-size: 0.38rem;
          color: #333;
        }
        .jianjie {
          font-size: 0.36rem;
        }
      }
    }
    .middle {
      position: relative;
      height: 3.5rem;
      margin-bottom: 0.2rem;
      .mask1 {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: center;
        // z-index: 98;
        img {
          width: 0.6rem;
          position: absolute;
          top: 5%;
          right: 5%;
        }
        .title {
          font-size: 0.4rem;
          margin-top: 10%;
        }
        .time {
          margin-top: 5%;
        }
        button {
          color: #fff;
          background-color: transparent;
          border: 2px solid #fff;
          padding: 0.1rem;
          margin-top: 5%;
        }
      }
      .banner {
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        .collect {
          width: 0.3rem;
          margin-right: 0.1rem;
        }
        .praise {
          width: 0.3rem;
          margin-right: 0.1rem;
        }
        span {
          margin-right: 0.2rem;
        }
      }
      .right {
        img {
          width: 0.15rem;
          height: 0.24rem;
        }
      }
    }
  }
}
</style>