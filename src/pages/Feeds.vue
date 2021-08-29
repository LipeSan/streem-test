<template>
  <main v-on:scroll.passive='handleScroll'>
  <div class="loading-page" v-if="isLoadingPage">
    <img class="loading" alt="lofing" src="@/assets/loading.gif">
  </div>
    <section class="container">
      <h1>Feeds</h1>
      <section class="feeds" >
        <div class="feed" v-for="(feed, index) in feedList" :key="index">
          <Article v-bind:article="feed"/>
        </div>
      </section>
      <div class="loading-bottom" v-if="isloadingBottom">
        <img class="loading-gif-bottom" alt="lofing" src="@/assets/loading.gif">
      </div>
    </section>
  </main>
</template>


<script>
import Api from '@/services/api.js';
import Article from '@/components/Article';

export default {
  name: "Feeds",
  components: {
    Article,
  },
  data(){
    return {
      feedList: [],
      page: 1,
      pageSize: 10,
      isloadingBottom: false,
      isLoadingPage: true,

      getMore: true,
    }
  },
  async mounted(){
    this.isLoadingPage = true;
    Api.getFeeds().then(result => {
      if(result && result.length > 0){
        this.feedList = result;
        this.isLoadingPage = false;
      }
    });
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: async function (event) {
      let bottomOfWindow = event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight;
      if(bottomOfWindow && this.getMore && !this.isloading){
        this.isloadingBottom = true;
        this.page += 1;
        const newFeedList = await Api.getFeeds(this.page, this.pageSize);
        this.getMore = newFeedList && newFeedList.length > 0 ? true : false;
        this.feedList = this.feedList.concat(newFeedList);
        this.isloadingBottom = false;
      }
    }
  }  
}
</script>


<style scoped>
    main{
      align-items: center;
    }

    .main-loading{
      background: 
    }

    .loading-page{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    .loading-bottom{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }

    .loading-gif-bottom{
      width: 40px;
    }

    .loading{
      width: 80px;
    }
</style>