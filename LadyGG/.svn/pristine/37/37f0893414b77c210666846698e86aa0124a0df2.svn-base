<template>
  <div class="myLiterature">
    <!-- v-for="item in items" :to="{path: '/' + item.id}"  -->
    <div class="acticle" v-for="item in data">
      <router-link class="content" tag="div" :to="{path:'/literatureDetail',query:{id:item.id}}">
        <div class="img">
          <img :src="item.coverUrl" alt>
        </div>
        <div class="txt">
          <p class="title">{{item.title}}</p>
          <p class="author">{{item.author}}</p>
          <p class="jianjie">{{item.summary}}</p>
        </div>
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
            @click="collect(item.id) "
          >
          <img
            v-else
            class="praise"
            src="../assets/images/heart.png"
            alt
            @click="collect(item.id) "
          >
          <span>{{item.collection }}</span>
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
export default {
  props: {
    data: { type: Array, required: true }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    collect(id) {
      var that = this;
      let userId = this.$store.getters.userInfo.userId;
      this.axios
        .put(`/u/articleData/collection?id=${id}&userId=${userId}`)
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
        .put(`/u/articleData/praise?id=${id}&userId=${userId}`)
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
.myLiterature {
  .acticle {
    padding: 0.1rem 0.2rem;
    margin-top: 0.2rem;
    background-color: #fff;
    color: #b8b8b8;
    font-size: 0.3rem;
    .content {
      display: flex;
      .img {
        margin-right: 0.2rem;
        width: 1.4rem;
        height: 1.4rem;
        img {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
      .txt {
        flex: 1;
        .title {
          font-size: 0.38rem;
          color: #333;
          margin-bottom: 0.2rem;
        }
        .author {
          color: #333;
          margin-bottom: 0.2rem;
        }
        .jianjie {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom: 0.2rem;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 1.5rem;
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
