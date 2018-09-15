<template>
    <div class="post">
        <el-row>
            <el-col :span="7" class="post-order" id="post-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width:100%">
                            <el-table-column prop="goodsName" label="商品名称">
                            </el-table-column>
                            <el-table-column prop="count" label="数量" width="60">
                            </el-table-column>
                            <el-table-column prop="price" label="金额" width="70">
                            </el-table-column>
                            <el-table-column prop="" label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delgoods(scope.row)">删除</el-button>
                                    <!--添加数量，这里获取的数据是tableData，scope作用域，这里没有循环之类的所以无法获取数据所以使用scope.row把单行传入到事件中-->
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="total">
                            <span><small>数量：</small>{{ totalCount }}</span>
                            <span><small>金额：</small>{{ totalMoney }}</span>
                        </div>
                        <div class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="delAllGoods">删除</el-button>
                            <el-button type="success" @click="checkOut">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                    </el-tab-pane>
                </el-tabs>


            </el-col>
            <!-- 商品栏 -->
            <el-col :span="17">
                <div class="goods-content">
                    <div class="goods-title">
                        <span>常用商品</span>
                    </div>
                    <div class="goods-list">
                        <ul>
                            <li v-for="(goods,index) in goodsContent" :key="index" @click="addOrderList(goods,index)">
                                <span>{{goods.goodsName}}</span>
                                <span class="goods-price">￥{{goods.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="show-goods">
                    <el-tabs><!--标签页-->
                        <el-tab-pane label="汉堡">
                            <ul class="cook-list" >
                                <li v-for="(goods,index) in typeGoods" :key="index" @click="addOrderList(goods,index)">
                                    <span class="goods-image"><img :src=goods.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">￥{{goods.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class="cook-list">
                                <li v-for="(goods,index) in typeGoods1" :key="index" @click="addOrderList(goods,index)">
                                    <span class="goods-image"><img :src=goods.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">￥{{goods.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class="cook-list">
                                <li v-for="(goods,index) in typeGoods2" :key="index" @click="addOrderList(goods,index)">
                                    <span class="goods-image"><img :src=goods.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">￥{{goods.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class="cook-list">
                                <li v-for="(goods,index) in typeGoods3" :key="index" @click="addOrderList(goods,index)">
                                    <span class="goods-image"><img :src=goods.goodsImg alt="" width="100%  "></span>
                                    <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">￥{{goods.price}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
            <!-- <order :goodsList="tableData"></order> -->
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios'
    // import Order from './order'

    export default {
        data() {
            return {
                tableData: [],
                goodsContent: [],
                typeGoods: [],
                typeGoods1: [],
                typeGoods2: [],
                typeGoods3: [],
                totalMoney: 0,
                totalCount: 0

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
        mounted() {//element是虚拟的，mounted在所有虚拟的加载完成以后再加载,这里设置的订单也的高度，由于element有很多的自带
            // css效果所以需要使用js来设置高度，直接设置height100%没有效果
            var OrderHeight = document.body.clientHeight//获得订单的高度
            document.getElementById('post-list').style.height = OrderHeight + 'px';
        },
        methods: {
            addOrderList(goods) {
                this.totalMoney = 0;//每次计算以后金额清零
                this.totalCount = 0;//每次添加以后数量也要清零
                //先判断商品是否存在订单列表中，如果存在数量增加，如果不存在就整个添加到订单列表中
                let isHave = false;//判断的变量，false订单列表中没有商品添加
                for (let i = 0; i < this.tableData.length; i++) {
                    console.log(this.tableData[i].goodsId);//goods传入的是一个对象拿取id直接使用goods.goodsId
                    if (this.tableData[i].goodsId == goods.goodsId) {//列表中的id和传入的商品Id相同的时候说明商品已经
                        isHave = true;//存在那么判断值为true
                    }
                }

                // 判断值编写业务逻辑
                if (isHave) {//商品已经存在
                    //改变列表中商品的数量
                    let arr = this.tableData.filter(a => a.goodsId == goods.goodsId);//过滤订单列表中的goodsId如果和传入的goodsId相同变成当前数组arr
                    arr[0].count++;
                } else {
                    let newGoods = {//定义新的数组，由于点击商品列表中的数组和传入到订单列表中的数据不太相同所以定义新的数组
                        goodsId: goods.goodsId,
                        goodsName: goods.goodsName,
                        price: goods.price,
                        count: 1//构建count默认值为1
                    }
                    this.tableData.push(newGoods);//新的数组push到新的数组中
                }
                this.getAllMoney();
            },
            //订单列表删除单个商品
            delgoods(goods) {
                //重新给tableData再次赋值，筛选出goodsId不相等的时候返回给tableData
                this.tableData = this.tableData.filter(a => a.goodsId != goods.goodsId);
                this.getAllMoney();//复用事件
            },
            //汇总数量金额
            getAllMoney() {
                this.totalCount = 0;
                this.totalMoney = 0;//如果不清零会累计计算
                if (this.tableData) {//有值的时候进行汇总
                    //计算汇总totalMoney金额和totalCount数量的计算
                    this.tableData.forEach(element => {
                        this.totalCount += element.count;
                        this.totalMoney = this.totalMoney + (element.price * element.count);//上次的金额加上本次的金额
                    });

                }
            },
            delAllGoods() {//删除所有数据getAllMoney有循环，这种方法更快速
                this.tableData = [],
                    this.totalCount = 0,
                    this.totalMoney = 0
            },
            //模拟结账
            checkOut() {
                if (this.totalCount != 0) {//汇总有数量那么tableDdata中有值
                    this.tableData = [];
                    this.totalCount = 0;
                    this.totalMoney = 0;
                    this.$message({//element提供组件
                        message: '结账成功',
                        type: 'success'
                    })
                } else {
                    this.$message.error('不能空结账')
                }

            }
        }

    }
</script>

<style scoped lang="less">
    .post {
        font-size: .2rem;
    }

    .post-order {
        background-color: #F9FAFC;
        border: 1px solid #C0CCDA;
    }

    .total {
        background-color: #fff;
        border-bottom: 1px solid #C0CCDA;
        padding: .1rem;
    }

    .total span {
        margin-right: .2rem;
        margin-left: .2rem;
    }

    .div-btn {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin: .2rem;
    }

    .div-btn .el-button {
        margin-top: .1rem;
        margin-left: 0;
    }

    /* 订单栏 */
    .goods-title {
        height: .2rem;
        border-bottom: 1px solid #e5e9f2;
        background-color: #f9fafc;
        padding: .2rem;
    }
.goods-list ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    
}
    .goods-list ul li {
        list-style: none;
        border: 1px solid #f9fafc;
        padding-top: .1rem;
        padding: .1rem;
        margin: .1rem;
        background-color: #fff;
        cursor: pointer; /*鼠标变成手的形状*/
    }

    .goods-price { 
        color: #68B7ff;
    }

.cook-list {
   display: flex;
    flex-wrap: wrap;
}
    .show-goods {

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
        cursor: pointer;
    }

    .show-goods span {
        display: block;
        float: left;
    }

    .goods-image {
        width: 40%;

    }

    .goods-name {
        font-size: .16rem;
        padding-left: .1rem;
    }

    .goods-price {
        font-size: .16rem;
        padding-left: .1rem;
        padding-top: .1rem;
    }
   
</style>