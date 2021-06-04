<template>
  <div>
    <nav class="navbar navbar-light px-3 mx-0 justify-content-between">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss" scoped>
nav{
  min-height:60px;
}
</style>
