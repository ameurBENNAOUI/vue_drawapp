<template>
    <div  class="container">
      <div class="row">
              <ImageCropper ref="foo"  :src=img_src />
                      <div class="col">
              <div class="get-info-container">
                  

                   <div class="zoom-window">
                       <img src="" id="img_small" alt="">
                   </div>

                   <div class="radio">
                              <label><input type="radio" name="optradio" id="0 degree" checked="" v-on:change="check_status = 0">0 degree</label>
                              <label><input type="radio" name="optradio" id="90 degree" v-on:change="check_status = 90">90 degree</label>
                    </div>

                    <button type="button" v-on:click="submit()" class="extract-green save-change" >Submit!</button>
              </div>
        </div>



      </div>
      <!-- <button type="button" v-on:click="delete_data">Click Me!</button> -->

    </div>

</template>

<script>

import ImageCropper from "../components/cropper_container"
// import GetLabels from "../components/edit_template_button"
import axios from 'axios/dist/axios.min.js'
// import data1 from '../assets/setting.json'
// import bootbox from 'bootbox'
import 'bootstrap/dist/js/bootstrap.js'
// import $ from "jquery"
import store from '../store/index'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token


export default {
    name:"App",
    components:
    {
        ImageCropper,
        // GetLabels
    },  
//     computed: {
//     class_name() {
//       let className = 'default';



//       return className;
//     }
//   },
    // created() {
    //         this.img = this.$route.params.id
    // },
    data(){
        return {
            img:{},
            data:{},
            img_src:{},
            check_status:0
        }
    },
    methods:{
        submit(){
            var coordination=this.$refs.foo.getData();
            var rotate=this.check_status;
            coordination.rotate=rotate;

            var obj={
                "id":this.$route.params.img_id,
                "name": name,
                "crop_json": JSON.stringify(coordination),
                "status_crop":true,
                "label_json": null,
                "label_status": false,
                "template_path": this.$route.params.template_path
            }

            var header={
                headers: { 'Content-Type': 'application/json' }
              }
            axios.put('http://13.90.171.117:8080/template/'+obj.id,obj,header).then(function (response) {
                console.log(response);
                window.location.href ="/view_template";
                
            })


        },
        


                         
  
    },
    
    mounted(){

      this.img_src='http://13.90.171.117:8080/static/template_img_200/'+this.$route.params.template_path;


    }
}
</script>
<style scoped>
.icon,
.view{
    display: none;
    outline: none;
}


.zoom-window img{
  vertical-align: middle;
    border-style: none;
    max-width: 250px;
    max-height: 200px;
    min-width: 250px;
    min-height: 200px;
}
</style>