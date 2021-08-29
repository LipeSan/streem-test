<template>
  <header>
    <nav class="container">
      <a href="/">
        <img alt="STEEM" id="logo" src="https://www.streem.com.au/wp-content/uploads/2021/05/Streem-Logo.svg">
      </a>

      <img v-on:click="clickMenu" alt="OPEN-MENU" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

      <div v-on:click="clickMenu" id="menu-overlay" v-if="menuActive"/>

      <div id="menu-items" :class="{active:menuActive}">
        <img alt="STEEM" id="menu-logo" src="https://www.streem.com.au/wp-content/uploads/2021/05/Streem-Logo.svg">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/feeds">Feeds</a></li>
        </ul>
      </div>

    </nav>
  </header>
</template>


<script>
  export default{
    name: 'header',
    data(){
      return {
        menuActive: false
      }
    },
    methods:{
      clickMenu: function (){
        this.menuActive = !this.menuActive;
      }
    }
  }
</script>


<style scoped>
  header{
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }

  #logo{
    width: 130px;
  }

  #menu-button{
    width: 30px;
  }

  #menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.8;
    z-index: 2
  }

  #menu-logo{
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  #menu-items{
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 2
  }

  #menu-items.active{
    display: flex;
  }

  ul{
    list-style: none;
    text-align: center;
  }

  ul li{
    margin: 20px 0px;
  }

  ul li a{
    color: var(--color-text-light)
  }

  @media (min-width: 700px){
    #menu-button,
    #menu-logo,
    #menu-overlay{
      display: none
    }

    #menu-items{
      display: flex;
      position: static;
      height: 60px;
      width: auto;
    }

    ul li{
      margin: 0;
      margin-left: 20px;
    }

    ul{
      display: flex;
      height: 60px;
      align-items: center;
    }
  }
</style>