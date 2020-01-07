<template>
      <section class="posts-list">
           <PostPreview
           id="1"
           thumbnail=""
           title="Title 1"
           previewText="Text 1"
           :is-admin="isAdmin"/>
           <PostPreview
           id="2"
           thumbnail=""
           title="Title 2"
           previewText="Text 2"
           :is-admin="isAdmin"/>
           <PostPreview
           id="3"
           thumbnail=""
           title="Title 3"
           previewText="Text 3"
           :is-admin="isAdmin"/>
      </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview.vue"

 export default {
    components: {
        PostPreview
    },
    props:{
        isAdmin:{
          type:Boolean,
          required:true
        },
      }
 };
</script>
<style scoped>
    .posts-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
  }
</style>