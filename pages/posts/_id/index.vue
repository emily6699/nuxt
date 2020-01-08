<template>
    <div class="single-post-page">
        <section class="post">
            <div class="post-title">{{loadedPost.title}}</div>
            <div class="post-details">
                <div class="post-detail">{{loadedPost.updatedDate}}</div>
                <div class="post-detail">Written by{{loadedPost.author}}</div>
            </div>
            <div>{{loadedPost.content}} </div>
        </section>
        <section class="post-feedback">
            <div>Let me know what you think about the post, send a eamil to <a href="mailto:elu@snowjoe.com"></a></div>
        </section>
    </div>
</template>
<script>
export default {
  asyncData(context,callback) {
    setTimeout(()=>{
      callback(null,{
        loadedPost:[
           {
              id:"1",
              title:"First Post(ID:" + context.route.params.id +")",
              previewText:"This is our first post!",
              author:"Max",
              updatedDate:new Date(),
              content:"ccccccccccoooooooooooonnnnntent",
              thumbnail:"https://via.placeholder.com/150"
          },
        ]
      })
    },1000)
  },
}
</script>

<style scoped>
    .single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>