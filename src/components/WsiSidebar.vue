<template>
  <div>
    <div>
      <div
        class="justify-content-center text-center d-flex justify-content-evenly wsi-navbar"
      >
        <!-- Sidebar -->
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
            <button
                @click="fullScreen"
                class="btn wsi-btn-primary wsi-btn-menu wsi-btn-menu-shadow btn-tela"
              >
                TELA CHEIA
              </button>
          </div>
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
        document.getElementById("app").requestFullscreen(); 
      }else{
        this.telaCheia = false;
        document.exitFullscreen()
      }
    }
  },
};
</script>

<style scoped lang="scss">
.wsi-navbar {
height:100vh;
background-color: black;
}
.btn-tela{
  margin-top: 100%;
  margin-bottom: 0;
  float: inline-end;
}
</style>
