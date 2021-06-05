<template>
  <div>
    <div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
export default {
};
</script>

<style lang="scss" scoped></style>
