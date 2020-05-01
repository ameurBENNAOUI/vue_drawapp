<template>
    <div class="container">

        <div id="example-2">
        <!-- <p><i class="icon-camera-retro icon-large"></i> icon-camera-retro</p> -->
            <button type="button" id="refresh" class="btn btn-success" v-on:click="greet">Refresh</button>

        </div>
<table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Thumb Image</th>
        <th scope="col">Thumb Cropped Image</th>
        <th scope="col">fileName</th>
        <th scope="col">Crop Status</th>
        <th scope="col">Crop</th>
        <th scope="col">Labling Data Status</th>
        <th scope="col">Labling Data</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="item in json_data" :key="item.message" v-bind:class="classObject(item)" >
        <td>{{item.id}}</td>
        <td> <img :src="'http://localhost:8080/static/template_img_200/'+item.template_path" :name="item.template_path" :id="item.id" ref="img"  v-on:click="crop_popup('http://localhost:8080/static/template_img_200/',item)" alt=""> </td>

        <td> <img :src="'http://localhost:8080/static/template_cropped_img_300/'+item.template_path" :name="item.template_path" :id="item.id" v-on:click="crop_popup('http://localhost:8080/static/template_cropped_img_300/',item)" ref="img"  alt=""> </td>

        <td>{{item.name}} </td>
        <td>{{item.status_crop}}</td>

        <td><button type="button" class="btn btn-light" data-toggle="modal" v-on:click="modale(item)" >Edit</button></td>
        <td>{{item.label_status}}</td>
        <td><button type="button" class="btn btn-light"  v-on:click="gotosite(item.id)">Edit</button></td>
        <td><button type="button" class="btn btn-danger" v-on:click="Delete(item.id)">Delete</button></td>

      </tr>

    </tbody>
  </table>
  <!-- <ImageCropper ref="foo" :src=img_src /> -->
             <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit cropped image</h5>
                        <div id="spin_parent" class="" role="status">
                          <span id="spin_child" class=""></span>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ImageCropper ref="foo"   :src=img_src />
                        <div class="radio">
                              <label><input type="radio" name="optradio" id="0 degree" checked="" v-on:change="check_status = 0">0 degree</label>
                              <label><input type="radio" name="optradio" id="90 degree" v-on:change="check_status = 90">90 degree</label>
                            </div>
                    </div>
                    <div class="zoom-window">
                      <img src="" id="img_small" alt="">
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" id="close" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" id="save1" class="btn btn-primary" v-on:click="get_data">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
  
<!-- The Modal -->
<div id="myModal" class="modal1">

  <!-- The Close Button -->
  <span class="close" v-on:click="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal1-content1" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="caption1"></div>
</div>
<!-- Modal -->


    </div>
</template>

<script>
import  "jquery/dist/jquery.js";

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'axios/dist/axios.min.js'
import axios from 'axios/dist/axios.min.js'
// import 'bootbox/dist/bootbox.min.js'
import bootbox from 'bootbox'
import store from '../store'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token

// import Vue from "vue";

import ImageCropper from './cropper_container.vue'
import $ from "jquery"
export default {
    name:"multi",
    watch:{
    destination:function(){
        
    }}
    ,
    data(){
    return{
        
      json_data:{},
      img_src:{},
      destination:{},
      check_status:0,
      msg:{}
      
    }},
    mounted() {

        axios.get('http://localhost:8080/template')
        .then((response) => {
        console.log(response);
        this.json_data=response.data.templates;
        }, (error) => {
        console.log(error);
        });
    },
    components:{
        ImageCropper
    },
     methods: {
       updateCart:function(e){
          console.log(e)
          this.msg = e;
      alert("hello child" + e)
       },
         Delete:function(id){

          bootbox.confirm({
                message: "You want delete template ?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-danger'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-success'
                    }
                },
                callback: function (result) {
                  console.log(result,id)
                  if (result==true){


                var header={
                    headers: { 'Content-Type': 'application/json' }
                  }
                    axios.delete('http://localhost:8080/template/'+id,header).then(function (response) {
                    console.log(response);
                    location.reload();
                
                      })
                    console.log('This was logged in the callback: ' + result);
                }
                }
                  }

            
            
         );},
         close:function(){
             var modal = document.getElementById("myModal");
             modal.style.display = "none";
         },
         crop_popup:function(event,item){
             // Get the modal
             console.log(event);
            var modal = document.getElementById("myModal");

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            // var img = document.getElementById(item.id);
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            // img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = event+item.template_path;
            captionText.innerHTML = ".......";
            // }

            // Get the <span> element that closes the modal
            // var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            // span.onclick = function() {
            // modal.style.display = "none";
            // }
         },

         classObject:function(item){
             if (item.status_crop){
                 if(item.label_status){
                     return "table-success"
                 }
                 return "table-warning"
             }
             return "table-danger"
         },
         gotosite:function(producturl){
            window.location.href ="/edit_template/"+ producturl
         },

        get_data:function(){
            var coordination=this.$refs.foo.getData();
            var rotate=this.check_status;
            var src =this.$refs.foo.src;
            var template_path=src.substring(src.lastIndexOf("/") + 1, src.length);
            var img_id;
            var name;
            var i;
            for (i = 0; i < this.json_data.length; i++) {
                if (this.json_data[i].template_path==template_path){
                    img_id=this.json_data[i].id
                    name=this.json_data[i].name
                }
            }
            var res = name.split(".")[0];
            console.log("vvvvvvvvv",res);
            coordination.rotate=rotate;


            var obj={
                "id":img_id,
                "name": name,
                "crop_json": JSON.stringify(coordination),
                "status_crop":true,
                "label_json": null,
                "label_status": false,
                "template_path": template_path
            }
            // console.log(obj)
            var header={
                headers: { 'Content-Type': 'application/json' }
              }
            axios.put('http://localhost:8080/template/'+obj.id,obj,header).then(function (response) {
                console.log(response);
                $('#exampleModalCenter').modal('toggle');
                location.reload();

                
            })
            .catch(function (error) {
                console.log(error);
            });

            
            // console.log(coordination,src)
        },
        greet: function () {
        // `this` inside methods points to the Vue instance
        // axios.get('http://localhost:8080/template' )
        // .then((response) => {
        // this.json_data=response.data.templates;
        // console.log(response);
        // }, (error) => {
        // console.log(error);
        // });

      location.reload();
        

        // `event` is the native DOM event
        // if (event) {
        //     alert(event.target.tagName)
        // }
        },
        modale:function(event){
              var a="/edit_tmp_crop";

              var img_id=event.id;
              var template_path=event.template_path;
              // password=1234;
              window.open(a+'/'+img_id+'/'+template_path,'_self');

              // this.img_src='/edit_tmp_crop/'+event.template_path;

            



        }
        
        }
    
}
</script>
<style  scoped>
td img{
    height: 40px;
}
/* #refresh{
    text-align: right;
} */
#example-2{
    text-align: right;
}






/* Style the Image Used to Trigger the Modal */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal1 {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal1-content1 {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption1 {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal1-content1, #caption1 {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal1-content1 {
    width: 100%;
  }
}
.modal-dialog {
    max-width: 966px;
    margin: 1.75rem auto;
}
.zoom-window{
    width: 250px;
    height: 200px;
    /* border: 1px solid #333; */
    right: 25px;
    position: absolute;
    bottom: 118px;
}
.zoom-window img{
  vertical-align: middle;
    border-style: none;
    max-width: 250px;
    max-height: 200px;
    min-width: 250px;
    min-height: 200px;
}
.modal-content{
  background-color: #ecf0f1;
}
.spinner-border{

      position: absolute;
    bottom: 18px;
    right: 60px;
}

#save1{
    min-width: 130px;
    min-height: 36px;
}
</style>