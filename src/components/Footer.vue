<template>
  <footer>
    <div class="by">@By Filipe Jardim Fernandes</div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
}
</script>

<style scoped>
  footer{
    width: 100%;
    height: 60px;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .by{
    font-size: 16px;
    color: var(--color-text-light);
  }
  
</style>