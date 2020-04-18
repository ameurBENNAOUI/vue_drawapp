<template>
        <div class="col">
              <div class="get-info-container">
                   <button type="button" class="extract-white" on:click="get_data" v-for="se in set"  :key="se.message">{{se}}</button>



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
          get_data:function(event){
              
          }
      }
  }

</script>


