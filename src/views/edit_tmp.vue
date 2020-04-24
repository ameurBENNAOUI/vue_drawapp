<template>
    <div  class="container">
      <div class="row">
              <ImageCropper ref="foo" :src="img"/>
                      <div class="col">
              <div class="get-info-container">
                   <button   type="button"  :id="se" :class="class_name" on:click="get_data" v-for="se in set"  :key="se.message" v-on:click="get_data(se,$event,)">
                        <button type="button" class="view" :id="se+'_view'" v-on:click="view_data(se)"><i class="fa fa-eye" aria-hidden="true"/></button>
                       {{se}} 
                       <button type="button" class="icon" :id="se+'_icon'" v-on:click="delete_data(se)"><i class="fa fa-times-circle-o" aria-hidden="true"/></button>
                       
                       
                        </button>
                   <!-- <button type="button" class="extract-white" >Click Me!</button
                   <button type="button" class="extract-green" >Click Me! <button type="button" class="icon" ><i class="fa fa-times-circle-o" aria-hidden="true"></i></button></button>
                   <button type="button" class="extract-green" >Click Me!</button> -->
                   <div class="zoom-window">
                       <img src="" id="img_small" alt="">
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
import data from '../assets/setting.json'
import bootbox from 'bootbox'
import 'bootstrap/dist/js/bootstrap.js'
// import $ from "jquery"


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
            set:{},
            extractcted_data:{},
            class_name:"extract-white"
        }
    },
    methods:{
        submit(){
            console.log("123")
            this.data.label_json=this.extractcted_data;
            this.data.label_status=true

            var header={
                headers: { 'Content-Type': 'application/json' }
              }
            axios.put('http://localhost:8080/template/1/'+this.data.id,this.data,header).then(function (response) {
                console.log(response);
                window.location.href ="/view_template";
                
            })


        },
        view_data(se){
            this.$refs.foo.setData(this.extractcted_data[se])
            // btn.disabled=false
        },

        delete_data(se){
          var self =this
          bootbox.confirm({
                message: "This is a confirm with custom button text and color! Do you like it?",
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
                  console.log(result)
                  if (result==true){
                        var btn =document.getElementById(se)
                        console.log(btn)
                        var icon =document.getElementById(se+'_icon')
                        var view =document.getElementById(se+'_view')
            
                        btn.setAttribute("class","extract-white")

                        icon.style.display = "none";
                        view.style.display = "none";
                        // btn.style.display = "none";


                        self.$delete(self.extractcted_data, se.toString())
                        btn.disabled=false;


                }
                }
                  }

            
            
         );
         },
                                     
        get_data:function(se){
            var btn =document.getElementById(se)
            // if (btn.getAttribute("class")=="extract-white"){
                if(btn.getAttribute('class')=="extract-white"){
                var icon =document.getElementById(se+'_icon')
                var view =document.getElementById(se+'_view')
                // btn.disabled=true

        
                this.extractcted_data[se]=this.$refs.foo.getData()

                // btn.style.backgroundColor ="#2ecc71"
                btn.setAttribute("class","extract-green")
                // btn.style.backgroundColor ="#ecf0f1"
                
                icon.style.display = "block";
                view.style.display = "block";
                // btn.style.display = "none";
                // btn.disabled=true;
                }
            
            // }
            
              
          }
    },
    mounted(){
        // console.log(this.$route.params.id)
        // var a;
        this.set=data.buttons;

        var self = this;
        axios.get('http://localhost:8080/template/'+this.$route.params.id).then(function (response) {
                // console.log(response);

                self.data=response.data;
                self.img="http://localhost:8080/static/template_cropped_img_200/"+self.data.template_path
                console.log(self.data);
            })
        


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