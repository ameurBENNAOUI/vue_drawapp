<template>
<div class="conatainer">
    <ImageCropper ref="foo" :src="img_src" />

    <button type="button" v-for="item in buttons" :id="item" :key="item.message" v-on:click="get_data(item)"  class="btn btn-primary">
        {{item}}
    </button>
    <button type="button" class="btn btn-danger" v-on:click="resteee">Reset</button>
    <button type="button" class="btn btn-info" v-on:click="upload">Upload</button>


</div>

</template>

<script>
// import ImageCropper from "@/components/img_copy";
import ImageCropper from './img_ copy'
import axios from 'axios/dist/axios.min.js'

import data1 from '../assets/setting.json';

export default {
    name:"multi",
    components:
    {
        ImageCropper
    },
    data(){
        return{
            a:{},
            data:{},
            buttons:data1.buttons,
            img_src:{},
            data_extracted:{}
        }
        
      },
      methods :{
          upload:function(){
              var obj={
                "id":this.data.id,
                "name": this.data.name,
                "crop_json": JSON.stringify(this.data),
                "status_crop":true,
                "label_json": JSON.stringify(this.data_extracted),
                "label_status": true,
                "template_path": this.data.name
            }

            var header={
                headers: { 'Content-Type': 'application/json' }
              }
            axios.put('http://localhost:8080/template/1/2',obj,header).then(function (response) {
                console.log(response);
                window.location.href ="";
                
            })
            .catch(function (error) {
                console.log(error);
            });

          },
          resteee:function(){
              this.data_extracted={}
              this.buttons.forEach(element => {
                  document.getElementById(element).setAttribute("class","btn btn-primary")
              }); 
          },
          get_data:function(item){

            if (document.getElementById(item).getAttribute("class")=="btn btn-success"){
                this.$refs.foo.setData(this.data_extracted[item]);
            }else{
                var coordination=this.$refs.foo.getData();
                // this.data_extracted{""}
                this.data_extracted[item] = coordination
                console.log("aa",this.data_extracted)
                document.getElementById(item).setAttribute("class","btn btn-success")
            }
            

            


            // ImageCropper.
          }
      },
    mounted() {
        // let json = require('/Users/Documents/workspace/test.json');
        // let urlParams = new URLSearchParams(window.location.search);
        // let myParam = urlParams.get('visible');
        this.a=window.location.href
        var id=this.a.substring(this.a.lastIndexOf("/") + 1, this.a.length);
        this.a=id
    
        axios.get('http://localhost:8080/template/'+id)
        .then((response) => {
        console.log(response);
        this.data=response.data;
        this.img_src='http://localhost:8080/static/template_cropped_img_200/'+response.data.template_path;
        }, (error) => {
        console.log(error);
        });
    }
    
}
</script>