<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>下面是两个组件</h2>
    <ul> 
      <li>
        <cart></cart>
      </li>
      <li>
        <product></product>
      </li>
    </ul>
  </div>
</template>
<script>
import cart from './cart'
import product from './product'

export default {
  name:'HelloWorld',
  data(){
    return{
      msg:"欢迎来到我的vuex学习项目"
    }
  },
  components:{
    cart,
    product
  }  
}
</script>
<style scoped>
  h1,h2 {
    font-weight: 400;
  }
  ul {
    list-style: none;
    padding:0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color:#42b983;
  }
</style>
