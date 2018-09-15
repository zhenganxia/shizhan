·<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="iconfont icon-huiyuanqia "></i>
                <p>会员卡</p>
            </li>
            <li>
                <i class="iconfont icon-dianpu "></i>
                <p>店铺</p>
            </li>
            <li>
                <i class="iconfont icon-goumai "></i>
                <p>购买</p>
            </li>
            <li>
                <i class="iconfont icon-hanbao "></i>
                <p>汉堡</p>
            </li>
            <li>
                <i class="iconfont icon-huiyuanqia "></i>
                <p>会员卡</p>
            </li>
            <!-- <li v-for='(img,index) in imagePng' :key='index'>
                    <img :src='img.url' alt="" width="20px" height="20px" > -->
                    <!-- <img :src="img.url" alt="" width="200" height="200"> -->
                    <!-- <img :class="['left-'+img.tag]" >  -->

                <!-- <p>{{ img.title }}</p> -->
                <!-- <img src="../../assets/images/shop.png" alt=""> -->
            <!-- </li> --> 
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                imagePng: [
                    {
                        title: '商铺',
                        tag: 'shop',
                        url: '@/assets/images/shop.png'
                    },
                    // {
                    //     title: '购买',
                    //     tag: 'shopping',
                    //     url: ('../../assets/images/han.png')

                    // },
                    // {
                    //     title: '汉堡',
                    //     tag: 'han',
                    //     url: ('../../assets/images/han.png')

                    // },

                    // {
                    //     title: '会员',
                    //     tag: 'huiyuan',
                    //     url: ('../../assets/images/han.png')

                    // }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
 @import "../../assets/images/iconfont.css";
    .left-nav {
        float: left;
        /* display: flex;
        flex-wrap: wrap; */
        width: 5%;
        height: 100%;
        color: #fff;
        background-color: #1D8CE0;
        font-size: .1rem;
    }
/* .left-nav img{
 transform: scale(0.6,0.6);
} */
    /* .left-han {
        background: url('../../assets/images/han.png') 
    } */

     /* .left-shop {
        background: url('../../assets/images/shop.png') no-repeat -10px -10px;
    } */

    /* .left-shopping {
        background: url('../../assets/images/shopping.png')
    }

   .left-huiyuan {
        background: url('../../assets/images/huiyuan.png')
    } */

    .iconfont {
        font-size: .34rem;
    }

    .left-nav ul {
        width:100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0;
        padding-left: 0;
       
    }

    .left-nav li {
        width: 100%;
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;   
        /* 使用padding把i和p都相右移动 */
        margin-top: .05rem ;
    }

    .left-nav li {
        list-style: none;
    }
</style>