<template>


        <div class="col">
                      <!-- <h3>Demo:</h3> -->
              <div class="img-container">
                      <img  ref="image" id="bl" :src="src" >

              </div>
              <div class="tools">
                <button class="btn1" v-on:click="zoom"><i class="fa fa-search-plus" aria-hidden="true"></i></button>
                <button class="btn1" v-on:click="unzoom"><i class="fa fa-search-minus" aria-hidden="true"></i></button>
                <button class="btn1" v-on:click="arraw"><i class="fa fa-arrows"></i></button>
                <button class="btn1" v-on:click="crop"><i class="fa fa-crop"></i></button>
              </div>
        </div>


</template>


<script>
// import  "jquery/dist/jquery.js";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'cropperjs/src/js/cropper.js'
// import 'cropperjs/src/css/cropper.css'
import "popper.js/dist/popper.min.js"
import "font-awesome/css/font-awesome.css"


import Cropper from "cropperjs";


// import "@/assets/js/main_f.js"
// import "@/assets/css/style_f.css"
// import $ from "jquery"


export default {
  name: "ImageCropper",
  props:{
  src: String 
  },
  methods:{
    setData:function(data){
      var cropper=this.cropper
      return cropper.setData(data)
    },

    getData:function(){
      var cropper=this.cropper
      return cropper.getData()
    }, 
    zoom:function(){
      var cropper=this.cropper
      cropper.zoom(0.1);
    },
    unzoom:function(){
      var cropper=this.cropper
      cropper.zoom(-0.1)
    },
    arraw:function(){
        var cropper=this.cropper
        cropper.setDragMode("move")
    },
    crop:function(){
      var cropper=this.cropper
      cropper.setDragMode("crop")
    }
    },
  watch: { 
        src: function() { 
         var cropper=this.cropper;
         cropper.replace(this.src)

            }
            },
  data(){
    return{
      cropper:{},
      destination:{},
      image :{},
      check_status:0
    }},

    mounted() {
      // this.cropper.destroy();
      this.image = this.$refs.image;
      this.cropper=new Cropper(this.image,{
        aspectRation:1,
        crop() {
          var cropper=this.cropper;
          var canavas=cropper.getCroppedCanvas({height:200}).toDataURL('image/png')
          // this.destination=canavas.toDataURL('image/png')
          document.getElementById('img_small').setAttribute("src",canavas)
            // this.$emit('update-cart', this.destination)
        }
        })
}}
</script>


<style >
.img-container{
  width: 640px;
  height: 480px;
}
.img-container{
  width: 640px;
  height: 500px;
  border: 1px solid #333
}
.tools{
    position: absolute;
    top: 129px;
    left: 15px;
    display: flex;
    flex-direction: column;
}
.btn1 {
  background-color: DodgerBlue; 
  border: none; 
  color: white; 
  padding: 12px 16px; 
  font-size: 16px; 
  cursor: pointer; 
  border-radius: 0;
}


.btn:hover {
  background-color: RoyalBlue;
}
.extract-white{
  display: block;
  background-color: #ecf0f1;
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  outline: none;
}
.get-info-container div{
  width: 250px;
  height: 200px;
  border: 1px solid #333;
}
.extract-white:hover{
  background-color: #bdc3c7;
  -webkit-transition: background-color .5s ease-out;
  -moz-transition: background-color .5s ease-out;
  -o-transition: background-color .5s ease-out;
  transition: background-color .5s ease-out;
}
.extract-green{
  display: block;
  background-color: #2ecc71;
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  position: relative;
  
}
.extract-green:hover{
  background-color: #27ae60;
    -webkit-transition: background-color .5s ease-out;
  -moz-transition: background-color .5s ease-out;
  -o-transition: background-color .5s ease-out;
  transition: background-color .5s ease-out;
}
.extract-green:focus,
.extract-white:focus{
  outline: none;
}



.extract-green .icon ,
.extract-green  .view  {
    position: absolute;
    font-size: 32px;
    color: #fff;
    background: none;
    border: none;
    outline: none;


}
.extract-green .icon{
    top: -8px;
    right: 3px;
}
.extract-green  .view{
    top: -9px;
    right: 29px;
}

.extract-green .icon i ,.extract-green  .view i {
      -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
    font-size: 23px;
}
.extract-green .icon:hover i ,.extract-green  .view:hover i{
     -webkit-text-fill-color: red;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
 
}
.extract-green  .view:hover i{
     -webkit-text-fill-color: #f1c40f;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
 
}
.save-change{
  margin-top: 20px;
  background-color: #3498db;
  color:#fff
}
.save-change:hover{
  background-color: #2980b9;
}


</style>