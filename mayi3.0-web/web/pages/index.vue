<template>
   <div>
       <MHrader/>
       <Comment/>
       <Navigation/>
   </div>
</template>

<script>
    import MHrader from '~/components/MHrader'
   import   Comment from '../components/Comment.vue'
    import Navigation   from '../components/Navigation  .vue'
    export default {
        head () {
            return {
                titleTemplate: '%s - 最热'
            }
        },
        components: {
            Comment,
            MHrader,
            Navigation
        }
    }
</script>
<style scoped lang="less">


</style>