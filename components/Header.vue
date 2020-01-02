<template>
  <header class="header">
      <ul class="nav-items">
         <li class="nav-list">
             <nuxt-link to="/">Home</nuxt-link>
          </li>  
          <li class="nav-list"> 
             <nuxt-link to ="/users">Users</nuxt-link>
         </li>
     </ul>  
  </header>
    
</template>

<style scoped>
.header{
  background: #e0e0e0;
}

  .nav-items{
    display:flex;
    text-align: center;
    justify-content: center;
  }
  .nav-list{
    padding: 16px 42px;
    list-style-type: none;
  }
  .nav-list a{
    text-decoration: none;
    color:#333;
  }

  .nav-list a:hover{
    color:white
  }
</style>
