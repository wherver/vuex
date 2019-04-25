<template>
    <div class="hello">
        <h1>我是购物车组件</h1>
         <button @click="increment">点击加一</button><br/>
         仔细观察产品数量：{{this.$store.state.cart.count}}
    </div>
   
    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        increment(){
            this.$store.commit('increment')
        }
    }
}
</script>
<style scoped>

</style>



