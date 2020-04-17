<template>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
                      <!-- <h3>Demo:</h3> -->
                      <div class="img-container">
                      <img  ref="image" :src="src" >

              </div>
        </div>


      <div class="col-md-3">
                    <!-- <h3>Preview:</h3> -->
                    <img :src="src" id="img_small"  height="200px" width="200px">

                  
            
                    <!-- <h3>Data:</h3> -->
                    <!-- <h3>Data:</h3> -->
                    <div class="docs-data">
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataX">X</label>
                        </span>
                        <input type="text" class="form-control" id="dataX" placeholder="x">
                        <span class="input-group-append">
                          <span class="input-group-text">px</span>
                        </span>
                      </div>
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataY">Y</label>
                        </span>
                        <input type="text" class="form-control" id="dataY" placeholder="y">
                        <span class="input-group-append">
                          <span class="input-group-text">px</span>
                        </span>
                      </div>
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataWidth">Width</label>
                        </span>
                        <input type="text" class="form-control" id="dataWidth" placeholder="width">
                        <span class="input-group-append">
                          <span class="input-group-text">px</span>
                        </span>
                      </div>
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataHeight">Height</label>
                        </span>
                        <input type="text" class="form-control" id="dataHeight" placeholder="height">
                        <span class="input-group-append">
                          <span class="input-group-text">px</span>
                        </span>
                      </div>
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataRotate">Rotate</label>
                        </span>
                        <input type="text" class="form-control" id="dataRotate" placeholder="rotate">
                        <span class="input-group-append">
                          <span class="input-group-text">deg</span>
                        </span>
                      </div>
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataScaleX">ScaleX</label>
                        </span>
                        <input type="text" class="form-control" id="dataScaleX" placeholder="scaleX">
                      </div>
                      <div class="input-group input-group-sm">
                        <span class="input-group-prepend">
                          <label class="input-group-text" for="dataScaleY">ScaleY</label>
                        </span>
                        <input type="text" class="form-control" id="dataScaleY" placeholder="scaleY">
                      </div>
                      <br>
                      <div>
                          <div class="radio">
                              <label><input type="radio" name="optradio" id="0 degree" checked="" onclick="$('#rodio_stat').attr('value',0)">0 degree</label>
                              <label><input type="radio" name="optradio" id="90 degree" onclick="$('#rodio_stat').attr('value',90)">90 degree</label>
                            </div>
                           

                          <button type="button" class="btn btn-success btn-lg" onclick="document.forms[&quot;upload_file&quot;].submit();">Go to the next page</button>
					     	  <form action="/third" id="upload_file" enctype="multipart/form-data" method="POST">
                          
                            <input type="text" id="img_cro" name="name_text" placeholder="Lower case, all one word" value="mabrouk bennaoui">
                            <input type="text" id="rodio_stat" name="rodio_stat" value="0">
                        </form>

                  </div>
              </div>

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
            
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="move" data-option="-10" id="move_left" data-second-option="0" title="Move Left">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(-10, 0)">
                          <span class="fa fa-arrow-left"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="move" data-option="10" id="move_right" data-second-option="0" title="Move Right">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(10, 0)">
                          <span class="fa fa-arrow-right"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="move" data-option="0" id="move_up" data-second-option="-10" title="Move Up">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(0, -10)">
                          <span class="fa fa-arrow-up"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="move" data-option="0" id="move_down" data-second-option="10" title="Move Down">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.move(0, 10)">
                          <span class="fa fa-arrow-down"></span>
                        </span>
                      </button>
                    </div>
            
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="rotate" id="rotat_plus" data-option="-45" title="Rotate Left">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.rotate(-45)">
                          <span class="fa fa-rotate-left"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="rotate" id="rotat_moin" data-option="45" title="Rotate Right">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.rotate(45)">
                          <span class="fa fa-rotate-right"></span>
                        </span>
                      </button>
                    </div>
            
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="scaleX" id="scale_x" data-option="-1" title="Flip Horizontal">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.scaleX(-1)">
                          <span class="fa fa-arrows-h"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="scaleY" id="scale_y" data-option="-1" title="Flip Vertical">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.scaleY(-1)">
                          <span class="fa fa-arrows-v"></span>
                        </span>
                      </button>
                    </div>
            
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-method="crop" title="Crop">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.crop()">
                          <span class="fa fa-check"></span>
                        </span>
                      </button>
                      <button type="button" class="btn btn-primary" data-method="clear" title="Clear">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.clear()">
                          <span class="fa fa-remove"></span>
                        </span>
                      </button>
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


export default {
  name: "ImageCropper",
  props:{
  src: String 
  },
  data(){
    return{
      cropper:{},
      destination:{},
      image :{}
    }},
    mounted() {
      this.image = this.$refs.image;
      this.cropper=new Cropper(this.image,{
        // zoomable:false,
        // scalable:false,
        aspectRation:1,
        crop(e) {
          document.getElementById("dataX").value = e.detail.x;
		  		document.getElementById("dataY").value = e.detail.y;
		  		document.getElementById("dataWidth").value = e.detail.width;
			  	document.getElementById("dataHeight").value = e.detail.height;
          document.getElementById("dataRotate").value = e.detail.rotate;
          document.getElementById("dataScaleX").value = e.detail.scaleX;
          document.getElementById("dataScaleY").value = e.detail.scaleY;
          var canavas=cropper.getCroppedCanvas({height:200}).toDataURL('image/png')
          // this.destination=canavas.toDataURL('image/png')
          document.getElementById('img_small').setAttribute("src",canavas)
        },
      });
      var cropper=this.cropper

  		document.getElementById('zoom_button').addEventListener('click', function(){
			cropper.zoom(0.1);
			})
			document.getElementById('un_zoom_button').addEventListener('click', function(){
			cropper.zoom(-0.1)
			})
			document.getElementById('set_drag_mode').addEventListener('click', function(){
			cropper.setDragMode("move")
			})
			document.getElementById('set_crop_mode').addEventListener('click', function(){
			cropper.setDragMode("crop")
			})
			
			document.getElementById('move_left').addEventListener('click', function(){
			cropper.move(10,0)
			})
			document.getElementById('move_right').addEventListener('click', function(){
			cropper.move(10,0)
			})
			
			document.getElementById('move_up').addEventListener('click', function(){
			cropper.move(0,-10)
			})
			document.getElementById('move_down').addEventListener('click', function(){
			cropper.move(0,10)
			
			})
			
			
			document.getElementById('rotat_plus').addEventListener('click', function(){
			cropper.rotate(90)
			})
			
			
			document.getElementById('rotat_moin').addEventListener('click', function(){
			cropper.rotate(-90)
			})
			
			document.getElementById('scale_x').addEventListener('click', function(){
			console.log(document.getElementById("dataScaleX").value)
			if (document.getElementById("dataScaleX").value == -1) {
				cropper.scaleX(1)
			} else {
				cropper.scaleX(-1)
			}
			
			
			})
			document.getElementById('scale_y').addEventListener('click', function(){
			console.log(document.getElementById("dataScaleY").value)
			if (document.getElementById("dataScaleY").value  == -1) {
				cropper.scaleY(1)
			} else {
				cropper.scaleY(-1)
			}
			
			})
			
			
	    }
    }
</script>

<style scoped>
.img-container{
  width: 640px;
  height: 480px;
}
</style>