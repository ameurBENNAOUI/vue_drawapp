<template>
    <div  class="container">
      <div class="row">
              <ImageCropper :src="img"/>
              <GetLabels />



      </div>
    </div>

</template>

<script>

import ImageCropper from "../components/cropper_container"
import GetLabels from "../components/edit_template_button"
import axios from 'axios/dist/axios.min.js'

export default {
    name:"App",
    components:
    {
        ImageCropper,
        GetLabels
    },
    // created() {
    //         this.img = this.$route.params.id
    // },
    data(){
        return {
            img:{},
            data:{}
        }
    },
    mounted(){
        // console.log(this.$route.params.id)
        // var a;
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