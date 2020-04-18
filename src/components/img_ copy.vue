<template>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
                      <!-- <h3>Demo:</h3> -->
                      <div class="img-container">
                      <img  ref="image" id="bl" :src="src" >

              </div>
        </div>


 



      <div class="row" >
                  <div class="col-md-9 docs-buttons">
                    <!-- <h3>Toolbar:</h3> -->
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="setDragMode" id="set_drag_mode" data-option="move" title="Move">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setDragMode(&quot;move&quot;)">
                          <span class="fa fa-arrows"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="setDragMode" id="set_crop_mode" data-option="crop" title="Crop">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.setDragMode(&quot;crop&quot;)">
                          <span class="fa fa-crop"></span>
                        </span>
                      </button>
                    </div>
            
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="zoom" id="zoom_button" data-option="0.1" title="Zoom In">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.zoom(0.1)">
                          <span class="fa fa-search-plus"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="zoom" id="un_zoom_button" data-option="-0.1" title="Zoom Out">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.zoom(-0.1)">
                          <span class="fa fa-search-minus"></span>
                        </span>
                      </button>
                      
                    </div>
            
                    </div>
            
                    <!-- <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="disable" title="Disable">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.disable()">
                          <span class="fa fa-lock"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="enable" title="Enable">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.enable()">
                          <span class="fa fa-unlock"></span>
                        </span>
                      </button>
                    </div>
            
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.reset()">
                          <span class="fa fa-refresh"></span>
                        </span>
                      </button>
					  
                      <label class="btn btn-primary btn-upload" for="inputImage" title="Upload image file">
                        <input type="file" class="sr-only" id="inputImage" onchange="readURL(this);" name="image" accept="image/*">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="Import image with Blob URLs">
                          <span class="fa fa-upload"></span>
                        </span>
                      </label>
                      <button type="button" class="btn btn-primary" data-method="destroy" title="Destroy">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.destroy()">
                          <span class="fa fa-power-off"></span>
                        </span>
                      </button> -->
                    <!-- </div> -->
            

            
            
                </div>
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
    }

  },
  watch: { 
        src: function(newVal, oldVal) { // watch it
        
        // this.cropper.destroy();
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
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
        // zoomable:false,
        // scalable:false,
        aspectRation:1
        // crop(e) {
        //   document.getElementById("dataX").value = e.detail.x;
		  	// 	document.getElementById("dataY").value = e.detail.y;
		  	// 	document.getElementById("dataWidth").value = e.detail.width;
			  // 	document.getElementById("dataHeight").value = e.detail.height;
        //   document.getElementById("dataRotate").value = e.detail.rotate;
        //   document.getElementById("dataScaleX").value = e.detail.scaleX;
        //   document.getElementById("dataScaleY").value = e.detail.scaleY;
        //   var canavas=cropper.getCroppedCanvas({height:200}).toDataURL('image/png')
        //   // this.destination=canavas.toDataURL('image/png')
        //   document.getElementById('img_small').setAttribute("src",canavas)
        // },
      });
      var cropper=this.cropper


      // cropper.getCropBoxData()

  		document.getElementById('zoom_button').addEventListener('click', function(){
      cropper.zoom(0.1);
      // cropper.replace("/l.jpg")
			})
			document.getElementById('un_zoom_button').addEventListener('click', function(){
      cropper.zoom(-0.1)
      // cropper.replace("/logo.png")
			})
			document.getElementById('set_drag_mode').addEventListener('click', function(){
			cropper.setDragMode("move")
			})
			document.getElementById('set_crop_mode').addEventListener('click', function(){
			cropper.setDragMode("crop")
			})
			
			// document.getElementById('move_left').addEventListener('click', function(){
			// cropper.move(10,0)
			// })
			// document.getElementById('move_right').addEventListener('click', function(){
			// cropper.move(10,0)
			// })
			
			// document.getElementById('move_up').addEventListener('click', function(){
			// cropper.move(0,-10)
			// })
			// document.getElementById('move_down').addEventListener('click', function(){
			// cropper.move(0,10)
			
			// })
			
			
			// document.getElementById('rotat_plus').addEventListener('click', function(){
			// cropper.rotate(90)
			// })
			
			
			// document.getElementById('rotat_moin').addEventListener('click', function(){
			// cropper.rotate(-90)
			// })
			
			// document.getElementById('scale_x').addEventListener('click', function(){
			// console.log(document.getElementById("dataScaleX").value)
			// if (document.getElementById("dataScaleX").value == -1) {
			// 	cropper.scaleX(1)
			// } else {
			// 	cropper.scaleX(-1)
			// }
			
			
			// })
			// document.getElementById('scale_y').addEventListener('click', function(){
			// console.log(document.getElementById("dataScaleY").value)
			// if (document.getElementById("dataScaleY").value  == -1) {
			// 	cropper.scaleY(1)
			// } else {
			// 	cropper.scaleY(-1)
			// }
			
			// })
			
			
	    }
    }
</script>

<style scoped>
.img-container{
  width: 640px;
  height: 480px;
}
</style>