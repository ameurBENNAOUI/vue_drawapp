<template>
<div class="container a">

        <div class="form-group select-qu">
        <label for="sel1">Select Queue:</label>
        <select @change="active_ul()"  class="form-control" id="sel1">
            <option v-for="item in data_queue" :key="item.message"  selected>
                {{item.name}}
            </option>
            
            <option >add new ...</option>
        </select>
        </div>

    <muti ref="ff"/>
    


</div>

</template>

<script>
import muti from "@/components/drag_upload";
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios/dist/axios.min.js'

import bootbox from 'bootbox'
import store from '../store'


axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token

export default {
    name:"App",
    components:
    {
        muti
    },
    data(){
        return{
            data_queue:{},
            list_value:"mabrouk"
        }
    },
    methods:{
        
        active_ul:function(){
            var self=this
            if (document.getElementById("sel1").value=="add new ..."){
                bootbox.prompt({
                title: "This is a prompt, vertically centered!", 
                centerVertical: true,
                callback: function(result){ 
                    console.log("+++++++",result)
                    if (result==null){
                        location.reload();
                    }else{

                    
                    var header={
                    headers: { 'Content-Type': 'application/json' }
                  }
                  var obj={
                      name:result
                  }
                    axios.post('http://13.90.171.117:8080/queue/',obj,header).then(function (response) {
                    console.log(response);
                    
                    // location.reload();
                    self.$router.push({name:'upload_pdf_queue' , query:{"name":result}}); 
                    // document.getElementById("sel1").value=self.$route.query.name
                    location.reload();
                
                      })
                    console.log('This was logged in the callback: ' + result);
                    console.log(result); 
                    }
                }
            });
            }
            this.data_queue.forEach(element => {
                if (element.name==document.getElementById("sel1").value){
                    this.$refs.ff.queue_id=element.id;
                    return;
                }
            });
            
            // this.$refs.ff.queue_id=this.data_queue(document.getElementById("sel1").value)


        },
        add_new:function(){
            
                    
    }},
    updated: function() {
        // var self=this
    
    document.getElementById("sel1").value=this.$route.query.name
     if (this.$route.query.name){

            document.getElementById("sel1").value=this.$route.query.name
        }
},
 
    mounted(){
           var self= this
        axios.get('http://13.90.171.117:8080/queue/').then(function (response) {
        // console.log(response);
        // location.reload();
                self.data_queue=response.data.Queues
        //         console.log(response.data.Queues)
        //         ="2"
        // console.log(document.getElementById("sel1").value)
    
            })
            // this.$refs.ff.queue_id=(document.getElementById("sel1").value).length
        
        
        // var self= this

        // if (self.$route.query.name){
        //     console.log("kkk",self.$route.query.name)
        //     console.log("kkk",document.getElementById("sel1").value)
        //     document.getElementById("sel1").value=self.$route.query.name
        // }
        // // console.log(this.$route.query.name)
        
        // // this.$refs.ff.queue_id="111"
    }
    
}
</script>

<style  scoped>

.select-qu{
    width: 667px;
    margin: auto;
    display: table;
}


</style>