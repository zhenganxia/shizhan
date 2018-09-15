<template>
    <div>
        <div class="search-bar">
            <van-row class="location-row">
                <van-col span="3" class="location-ic">
                    <img :src="locationIcon"  class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input" />
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- swipe-area -->
       <div>
          <van-swipe class="swipe-area"  :autoplay="3000">
              <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                 <img :src="banner.imageUrl" alt="" width="100%">
              </van-swipe-item>
          </van-swipe>
       </div>
        
    </div>
</template>

<script>
    
   import axios from  'axios'
    export default {
        data() {
            return {
                msg: 'Shopping Mall',
                locationIcon: require('../assets/images/search.png'),
                bannerPicArray:[]
            }
        },
        created(){
            
        } 
    }
</script>

<style scoped>
    .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color: #e5017d;
        color:#fff;
    }
    .location-row{
        height: 2.2rem;
    }
     
    .location-icon{
        width:2.2rem;
        height: 100%;
        padding-top:.1rem;
        padding-left:.1rem;
    }
    .swipe-area{
        width: 20rem;
    }




</style>
