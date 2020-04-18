<template>
    <div  class="container">
      <div class="row">
        <div class="col">
                      <!-- <h3>Demo:</h3> -->
              <div class="img-container">
                      <img  ref="image" id="bl" src="/logo.png" >

              </div>
              <div class="tools">
                <button class="btn"><i class="fa fa-search-plus" aria-hidden="true"></i></button>
                <button class="btn"><i class="fa fa-search-minus" aria-hidden="true"></i></button>
                <button class="btn"><i class="fa fa-arrows"></i></button>
                <button class="btn"><i class="fa fa-crop"></i></button>
              </div>
        </div>
        <div class="col">
              <div class="get-info-container">
                   <button type="button" class="extract-white" >Click Me!</button>
                   <button type="button" class="extract-white" >Click Me!</button>
                   <button type="button" class="extract-green" >Click Me! <button type="button" class="icon" ><i class="fa fa-times-circle-o" aria-hidden="true"></i></button></button>
                   <button type="button" class="extract-green" >Click Me!</button>
                   <div></div>
                    <button type="button" class="extract-green save-change" >Submit!<i class="fa fa-floppy-o" aria-hidden="true"></i></button>
              </div>
        </div>
      </div>
    </div>



</template>
<style scoped>
.img-container{
  width: 640px;
  height: 500px;
  border: 1px solid #333
}
.tools{
    position: absolute;
    top: 129px;
    left: 16px;
    display: flex;
    flex-direction: column;
}
.btn {
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
.extract-green .icon {
    position: absolute;
    font-size: 32px;
    top: -8px;
    right: 3px;
    color: #fff;
    background: none;
    border: none;
    outline: none;


}
.extract-green .icon i{
      -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
}
.extract-green .icon:hover i{
     -webkit-text-fill-color: red;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
 
}
.save-change{
  margin-top: 20px;
}
</style>