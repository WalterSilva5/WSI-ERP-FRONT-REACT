<template>
  <div>
    <div>
      <div
        class="wrapper nav justify-content-center text-center"
        id="wsi-navbar"
      >
        <!-- Sidebar -->
        <nav id="sidebar">
          <div class="sidebar-header">
            <router-link to="/vendas"
              ><button
                class="btn wsi-btn-primary wsi-btn-menu wsi-btn-menu-shadow"
              >
                VENDAS
              </button></router-link
            >
            <router-link to="/produtos">
              <button
                class="btn wsi-btn-primary wsi-btn-menu wsi-btn-menu-shadow"
              >
                PRODUTOS
              </button></router-link
            >
            <div class="mt-5">
              <button
                @click="fullScreen"
                class="btn wsi-btn-primary wsi-btn-menu wsi-btn-menu-shadow mt-5"
              >
                TELA CHEIA
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telaCheia: false
    }
  },
  methods: {
    fullScreen() {
      if (this.telaCheia == false){
        this.telaCheia = true
        document.body.webkitRequestFullScreen(); 
      }else{
        this.telaCheia = false;
        document.bodyt.exitFullscreen()
      }
    }
  },
};
</script>

<style scoped lang="scss">
#wsi-navbar {
  min-height: 720px;
}
</style>
