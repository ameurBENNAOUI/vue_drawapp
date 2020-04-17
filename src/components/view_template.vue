<template>
    <div class="container">

        <div id="example-2">
            <!-- `greet` is the name of a method defined below -->
            <button v-on:click="greet">Greet</button>
        </div>
<table class="table">
    <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Thumb</th>
        <th scope="col">fileName</th>
        <th scope="col">Crop</th>
        <th scope="col">Labling Data</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in json_data" :key="item.message"  class="table-active">
        <th scope="row">Active</th>
        <td> <img :src="'http://localhost:8080/static/croped_img_200/'+item.name" :name="item.name" :id="item.id" ref="img"  alt=""> </td>
        <td>{{item.name}}</td>
        <td><button type="button" class="btn btn-light" data-toggle="modal" v-on:click="modale(item.name)" >Edit</button></td>
        <td><button type="button" class="btn btn-light"  v-on:click="gotosite(item.id)">Edit</button></td>

      </tr>
             <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ImageCropper ref="foo" :src=img_src />
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="get_data">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
    </tbody>
  </table>

  
<!-- Modal -->


    </div>
</template>

<script>
import  "jquery/dist/jquery.js";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'axios/dist/axios.min.js'
import axios from 'axios/dist/axios.min.js'


// import Vue from "vue";

import ImageCropper from './img_ copy'
import $ from "jquery"
export default {
    name:"multi",
    data(){
    return{
        
      json_data:{},
      img_src:{}
      
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
         gotosite:function(producturl){
            window.location.href ="/edit/"+ producturl
         },

        get_data:function(){
            var coordination=this.$refs.foo.getData();
            var rotate=this.$refs.foo.$data.check_status;
            var src =this.$refs.foo.src;
            var name=src.substring(src.lastIndexOf("/") + 1, src.length);
            var img_id;
            var i;
            for (i = 0; i < this.json_data.length; i++) {
                if (this.json_data[i].name==name){
                    img_id=this.json_data[i].id
                }
            }
            coordination.rotate=rotate;
            var obj={
                "id":img_id,
                "name": name,
                "crop_json": JSON.stringify(coordination),
                "status_crop":true,
                "label_json": null,
                "label_status": false,
                "template_path": name
            }
            // console.log(obj)
            var header={
                headers: { 'Content-Type': 'application/json' }
              }
            axios.put('http://localhost:8080/template/1/2',obj,header).then(function (response) {
                console.log(response);
                $('#exampleModalCenter').modal('toggle');
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


        

        // `event` is the native DOM event
        // if (event) {
        //     alert(event.target.tagName)
        // }
        },
        modale:function(event){
            
            // var element = event.target.parentElement
            
            // element=element
            // var img =element.getElementById("img").setAttribute("class", "democlass");

            this.img_src='http://localhost:8080/static/croped_img_200/'+event;

            $("#exampleModalCenter").modal()
            

            // B.data().settings
            console.log("aaa : ",ImageCropper.data().get_data);
            
            

            // this.$refs.ImageCropper.src = this.img_src

            // console.log(this.$attrs("class")); // Output : Select span|i|a element

            // href = element.getAttribute('class');

            // console.log(event);

            



        }
        
        }
    
}
</script>