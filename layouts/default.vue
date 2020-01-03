<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav 
     :show="displaySidenav"
     @close="displaynavSidenav=false"/>
    <nuxt />
  </div>
</template>
<script>
import TheHeader from "@/components/Navigation/TheHeader.vue"
import TheSidenav from "@/components/Navigation/TheSidenav.vue"
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle.vue"

export default {
  components:{
    TheHeader,
    TheSidenav,
    TheSideNavToggle
  },
  data(){
    return{
      displaySidenav:false
    }
  }
}
</script>
<style>
html{
  font-family:'Comfortaa'
}

body{
  margin:0
}
</style>
