<!-- <template>
    <div>
        <el-row>
            <el-col :span="17">
                <div class="goods-content">
                    <div class="goods-title">常用商品</div>
                    <div class="goods-list">
                        <ul>
                            <li v-for="(goods,index) in goodsContent" :key="index" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span class="goods-price">￥{{goods.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="show-goods">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul clas="cook-list">
                                <li v-for="(good,index) in typeGoods" :key="index">
                                    <span class="goods-image"><img :src=good.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{good.goodsName}}</span>
                                    <span class="goods-price">￥{{good.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul clas="cook-list">
                                <li v-for="(good,index) in typeGoods1" :key="index">
                                    <span class="goods-image"><img :src=good.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{good.goodsName}}</span>
                                    <span class="goods-price">￥{{good.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul clas="cook-list">
                                <li v-for="(good,index) in typeGoods2" :key="index">
                                    <span class="goods-image"><img :src=good.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{good.goodsName}}</span>
                                    <span class="goods-price">￥{{good.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul clas="cook-list">
                                <li v-for="(good,index) in typeGoods3" :key="index">
                                    <span class="goods-image"><img :src=good.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{good.goodsName}}</span>
                                    <span class="goods-price">￥{{good.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                goodsContent: [],
                typeGoods: [],
                typeGoods1: [],
                typeGoods2: [],
                typeGoods3: []
            }
        },
        props:{
          goodsList:{
              type: Array,
               default:function () {
                   return []
               }
          }
        },
        created() {//pos.vue一创建就拉取数据
            axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
                .then(response => {//箭头函数data是指向外边的data ，response是返回来的数据
                    this.goodsContent = response.data;
                })
                .catch(error => {
                    console.log(error);
                    alert('网络错误')
                })
            axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
                .then(response => {//箭头函数data是指向外边的data ，response是返回来的数据
                    this.typeGoods = response.data[0];
                    this.typeGoods1 = response.data[1];
                    this.typeGoods2 = response.data[2];
                    this.typeGoods3 = response.data[3];

                })
                .catch(error => {
                    console.log(error)
                })
        },
        methods: {
            addOrderList(goods) {
                var arr = [];
                arr= this.goodsList;
                // console.log(arr[0].count
                arr.forEach((element,index,arrs) => {
                    if(element.goodsName == goods.goodsName){
                        element.count ++;
                        console.log(element.count)
                         console.log(element.goodsName)
                         debugger
                    }else{
                    //    this.goodsLis.push({
                          
                    //     goodsName:'goods.goodsName',
                    //     count:1,
                    //     price:'goods.'
                    //    })
                    }
                });
                
                // console.log(goods.goodsName)
                // goods.forEach((element,index)=> {
                //     console.log(element)
                // });
                //先判断商品是否存在订单列表中，如果存在数量增加，如果不存在就整个添加到订单列表中
                //let isHave = false;//判断的变量，false代表没有
                // tableData.forEach((element,index,array) => {
                //     console.log(element)
                // });
                // for(let i=0;i<tableData.length;i++){
                //     if(tableData[i].goodsId==goods[i].goodsId){//列表中的id和传入的商品Id相同的时候说明商品已经存在
                //        isHave = true;//存在那么判断值为true
                //     }
                // }
                // if(isHave){//商品已经存在
                //     let arr = this.tableData.filter(a=>a.goodsId == goods.goodsId);
                //     arr[0].count++
                // }else{
                //     let newGoods = {
                //         goodsId:goods.goodsId,
                //         goodsName:goods.goodsName,
                //         price:goods.price,
                //         count:1
                //     }
                //     this.tableData.push(newGoods);
                // }
                //判断值编写业务逻辑

            }
        }
    }
</script>

<style scoped>
    .goods-title {
        height: .2rem;
        border-bottom: 1px solid #e5e9f2;
        background-color: #f9fafc;
        padding: .1rem;

    }

    .goods-list ul li {
        list-style: none;
        float: left;
        border: 1px solid #f9fafc;
        padding: .1rem;
        margin: .1rem;
        background-color: #fff;
    }

    .goods-price {
        color: #68B7ff;
    }

    .show-goods {
        clear: both;
        padding-left: .1rem;
    }

    .show-goods li {
        list-style: none;
        width: 23%;
        border: 1px solid E5E9F2;
        background-color: #fff;
        padding: 10px;
        height: auto;
        padding: .02rem;
        float: left;
        margin: .02rem;
    }

    .show-goods span {
        display: block;
        float: left;
    }

    .goods-image {
        width: 40%;

    }

    .goods-name {
        font-size: .18rem;
        padding-left: .1rem;
    }

    .goods-price {
        font-size: .16rem;
        padding-left: .1rem;
        padding-top: .1rem;
    }
</style> -->