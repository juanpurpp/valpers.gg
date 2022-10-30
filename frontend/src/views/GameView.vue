<template>
<div>
<ContentR :key="componentKey"></ContentR>
</div>
</template>

<script>
import ContentR from '@/components/ContentR.vue'


export default{
  name:'GameView',
  components:{
    ContentR
  },
  data(){
    return{
      componentKey: 0
    }
  },
  methods:{
    forceRerender(){
      this.componentKey +=1;
    }
  }
}

</script>
