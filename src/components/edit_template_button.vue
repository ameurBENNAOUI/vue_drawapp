<template>
        <div class="col">
              <div class="get-info-container">
                   <button v-on:click="get_data" type="button" class="extract-white" on:click="get_data" v-for="se in set"  :key="se.message">{{se}}</button>
                   <!-- <button type="button" class="extract-white" >Click Me!</button>
                   <button type="button" class="extract-green" >Click Me! <button type="button" class="icon" ><i class="fa fa-times-circle-o" aria-hidden="true"></i></button></button>
                   <button type="button" class="extract-green" >Click Me!</button> -->
                   <div></div>
                    <button type="button" class="extract-green save-change" >Submit!<i class="fa fa-floppy-o" aria-hidden="true"></i></button>
              </div>
        </div>
</template>

<script>
import data from '../assets/setting.json'
export default {
  name: "GetLabels",
  data(){
      return{
          set:{}
       }
      },
      mounted(){
          this.set=data.buttons;
      },
      methods:{
          get_data:function(){
              console.log(this.cropper.datagetData())
              
          }
      }
  }

</script>

<style  scoped>
/* .btn {
  background-color: DodgerBlue; 
  border: none; 
  color: white; 
  padding: 12px 16px; 
  font-size: 16px; 
  cursor: pointer; 
  border-radius: 0;
} */
</style>
