import React, { Component } from 'react';

class Self extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="self">
                <div className="self-top">
                    <div className="login-wrap">
                        <button className="login">请登录</button>
                    </div>
                </div>
                <div className="order">
                    <p>
                        <span className="iconfont icon-order_icon"></span>
                        <span>全部订单</span>
                    </p>
                    <p>
                        <span className="iconfont icon-peisong"></span>
                        <span>代配送</span>
                    </p>
                    <p>
                        <span className="iconfont icon-zititubiao"></span>
                        <span>代自提</span>
                    </p>
                    <p>
                        <span className="iconfont icon-daipingjia"></span>
                        <span>待评价</span>
                    </p>
                    <p>
                        <span className="iconfont icon-tui"></span>
                        <span>轻松退</span>
                    </p>
                </div>
                <div className="money">
                    <p>
                        <span>0</span>
                        <span>余额</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span>预付</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span>积分</span>
                    </p>
                    <p>
                        <span>0</span>
                        <span>优惠券</span>
                    </p>
                </div>
                <div className="cls">
                    <p>
                        <span className="iconfont icon-chongzhi"></span>
                        <span>充值</span>
                    </p>
                    <p>
                        <span className="iconfont icon-dizhi"></span>
                        <span>地址管理</span>
                    </p>
                    <p>
                        <span className="iconfont icon-shoucang"></span>
                        <span>收藏</span>
                    </p>
                    <p>
                        <span className="iconfont icon-liulanjilu"></span>
                        <span>浏览记录</span>
                    </p>
                </div>
                <div className="cls">
                    <p>
                        <span className="iconfont icon-qia"></span>
                        <span>食行卡</span>
                    </p>
                    <p>
                        <span className="iconfont icon-kefu"></span>
                        <span>客户服务</span>
                    </p>
                    <p>
                        <span className="iconfont icon-icon-test"></span>
                        <span>帮助中心</span>
                    </p>
                    <p>
                        <span className="iconfont icon-shangwuhezuo"></span>
                        <span>商务合作</span>
                    </p>
                </div>
                <div className="cls">
                    <p>
                        <span className="iconfont icon-tongyongliangpiao"></span>
                        <span>食行粮票</span>
                    </p>

                </div>
            </div>

        )
    }
}


export default Self;
