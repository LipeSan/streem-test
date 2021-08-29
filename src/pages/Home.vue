<template>
  <main>
    <div class="text-top">Filipe's test for <b>STREEM</b></div>
    <a href="https://www.streem.com.au/" target="blank">
        <img alt="STEEM" id="logo" src="https://www.streem.com.au/wp-content/uploads/2021/05/Streem-Logo.svg">
      </a>
    <div class="text-bottom">streem.com.au</div>
  </main>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
  main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
  }

  .text-top{
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 20px;
  }

  .text-bottom{
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px; 
  }

  #logo{
    width: 300px;
  }
</style>