<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>
<script>
import PostList from "@/components/Posts/PostList.vue"


export default {
  components: {
    PostList
  },
   asyncData(context){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       resolve({loadedPosts:[
                {
                  id:"1",
                  title:"First Post~",
                  previewText:"This is our first post!",
                  thumbnail:"https://via.placeholder.com/150"
                },
                {
                  id:"2",
                  title:"Second Post",
                  previewText:"This is our Second post!",
                  thumbnail:"https://via.placeholder.com/150"
                }
               ]})
       },1500)
      // rejct(new Error())
    })
    .then(data=>{
      return data
    }).catch(e=>{
      context.error(e)
    })
     

  },
};
</script>
<style scoped>
    .posts-page{
        display: flex;
        justify-content: center;
        align-items: center
    }
    

</style>