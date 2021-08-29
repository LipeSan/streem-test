<template>
  <div class="article">
    <div class="col-image">
      <img alt="IMG" id="image" :src="article.source.logo_url">
      <div class="name">{{article.source.name}}</div>
    </div>
    <div class="col-body">
      <a :href="article.url" target="blank" class="title">{{article.title}}</a>
      <div class="time-published row">
        <div class="col-5 time">
          <span class="time-published-text">{{convertDate(article.published_at)}}</span>
          <span class="time-published-text">{{article.word_count+" wolds"}}</span>
        </div>
        <div class="col-5"><span class="author-text">{{article.author.name != "" ? article.author.name : "no author"}}</span></div>
      </div>
      <div class="excerpts">
        <div class="" v-if="showLess" >
          <div class="excerpt" v-for="(excerpt, index) in article.excerpts" :key="index">
            <p v-if="index < limitationList" v-html="excerpt.text"/>
          </div>
        </div>
        <div class="" v-else >
          <div class="excerpt" v-for="(excerpt, index) in article.excerpts" :key="index">
            <p v-html="excerpt.text"/>
          </div>
        </div>
        <a class="more" v-if="article.excerpts.length > 1" v-on:click="seeMoreExcerpt" >{{showLess ? "show" : "hide"}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Common from '@/utils/common.js';

export default {
  name: "Article",
  props: ['article'],
  data(){
    return{
      limitationList:1,
      showLess: true
    }
  },
  methods: {
    convertDate: function(date){
      if(date){
        return Common.convertDate(date);
      }
    },
    seeMoreExcerpt: function(){
      this.showLess = !this.showLess;
    }
  },
}
</script>

<style scoped>
  .article{
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    min-height: 150px;
  }

  .col-body{
    width: 80%;
    background-color: var(--color-background-home);
    padding: 10px;
    position: relative;
  }

  .col-image{
    width: 20%;
    height: 100hv;
    padding: 5px;
    background-color: var(--color-background-home);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #image{
    max-width: -webkit-fill-available;
    width: 100px;
  }

  .name{
    color: var(--color-text-light);
    font-size:12px;
    text-align: center;
    bottom: 0;
  }

  .title{
    font-size: 18px;
    color: var(--color-text-light);
  }

  .time-published{
    bottom: 5px;
    margin-top: 10px;

  }

  .time-published-text, .author-text{
    color: var(--color-text-light);
    font-size: 12px;
    width: 50%;
  }

  .author-text{
    text-align: right;
    padding-right: 10px;
    position: absolute;
  }

  .excerpts{
    margin: 15px 0;
    border-top: 1px solid var(--color-text-light);
  }

  .excerpt{
    margin-top: 10px;
  }

  p{
    font-size: 16px;
    color: var(--color-text-light);
  }

  .more{
    margin-top: 5px;
    font-size: 14px;
    font-style: oblique;
    color: var(--color-text-light);
  }

  .time{
    flex-direction: column;
    display:flex;
  }

</style>