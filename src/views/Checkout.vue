<template>
	<div>
		<!-- top-header -->
		<div class="header-most-top">
			<p>hzs理性在线商城</p>
		</div>
		<!-- //top-header -->
		<!-- header-bot-->
		<div class="header-bot">
			<div class="header-bot_inner_wthreeinfo_header_mid">
				<!-- header-bot-->
				<div class="col-md-4 logo_agile">
					<h1>
						<a href="index.html">
							<span>HZS理消</span>
							<span>商城</span>
							<img src="../images/logo2.png" alt=" " />
						</a>
					</h1>
				</div>
				<!-- header-bot -->
				<div class="col-md-8 header">
					<!-- header lists -->
					<ul>
						<li>
							<a href="#" data-toggle="modal" data-target="#myModal1">
								<span class="fa fa-truck" aria-hidden="true"></span>订单
							</a>
						</li>
						<li>
							<span class="fa fa-phone" aria-hidden="true"></span> 001 234 5678
						</li>
						<li>
							<a v-if="User==''" data-toggle="modal" data-target="#myModal1">
								<span class="fa fa-unlock-alt" aria-hidden="true"></span> 登录
							</a>
							<a
								v-else-if="User.userName==''||User.userPlanSpent==0"
								data-toggle="modal"
								data-target="#myModal3"
							>
								<span class="fa fa-grav" aria-hidden="true"></span> 点击完善信息
							</a>
							<a v-else data-toggle="modal" data-target="#myModal4">
								<span class="fa fa-address-book-o" aria-hidden="true"></span>
								欢迎{{User.userName}}
							</a>
						</li>
						<li>
							<a v-if="User==''" data-toggle="modal" data-target="#myModal2">
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 注册
							</a>
							<a v-else-if="User!='' && User.openStore==1" data-toggle="modal" data-target="#myModal4">
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 点击开店
							</a>
							<!-- <a v-else-if="User!='' && User.openStore==1" data-toggle="modal" data-target="#myModal4">
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 新增商品
							</a>-->
						</li>
					</ul>
					<!-- //header lists -->
					<!-- 顶部搜索栏 -->
					<div class="agileits_search">
						<form action="#" method="post">
							<input name="Search" type="search" placeholder="今天您想买些什么?" required />
							<button type="submit" class="btn btn-default" aria-label="Left Align">
								<span class="fa fa-search" aria-hidden="true"></span>
							</button>
						</form>
					</div>
					<!-- //顶部搜索栏 -->
					<!-- cart details -->
					<div class="top_nav_right">
						<div class="wthreecartaits wthreecartaits2 cart cart box_1">
							<!-- <form action="#" method="post" class="last">
								<input type="hidden" name="cmd" value="_cart" />
								<input type="hidden" name="display" value="1" />
								
							</form>-->
							<button class="w3view-cart" @click="getCart()" data-toggle="modal" data-target="#myModal5">
								<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
							</button>
						</div>
					</div>
					<!-- //cart details -->
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>

		<!-- signin Model -->
		<!-- Modal1 -->
		<div
			class="modal fade"
			id="myModal1"
			tabindex="-1"
			role="dialog"
			aria-labelledby="myModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body modal-body-sub_agile">
						<div class="main-mailposi">
							<span class="fa fa-envelope-o" aria-hidden="true"></span>
						</div>
						<div class="modal_body_left modal_body_left1">
							<h3 class="agileinfo_sign">登录</h3>
							<p>
								登录账号开始购物. 还未注册?
								<a href="#" data-toggle="modal" data-target="#myModal2">马上注册</a>
							</p>
							<div class="styled-input agile-styled-input-top">
								<input type="text" placeholder="账号" v-model="Login.userAccount" required />
							</div>
							<div class="styled-input">
								<input type="password" placeholder="密码" v-model="Login.userPassword" required />
							</div>
							<input type="submit" value="登录" @click="login()" data-dismiss="modal" />
							<div class="clearfix"></div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal1 -->
		<!-- //signin Model -->
		<!-- signup Model -->
		<!-- Modal2 -->
		<div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body modal-body-sub_agile">
						<div class="main-mailposi">
							<span class="fa fa-envelope-o" aria-hidden="true"></span>
						</div>
						<div class="modal_body_left modal_body_left1">
							<h3 class="agileinfo_sign">快速注册</h3>
							<p>欢迎加入hzs在线商城!</p>
							<div class="styled-input agile-styled-input-top">
								<input type="text" placeholder="账号" v-model="Register.userAccount" required />
							</div>
							<div class="styled-input">
								<input type="password" placeholder="密码" v-model="Register.userPassword" required />
							</div>
							<div class="styled-input">
								<input type="password" placeholder="确认密码" v-model="Register.userRePassword" required />
							</div>
							<input type="submit" value="注册" @click="register()" data-dismiss="modal" />
						</div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal2 -->
		<!-- //signup Model -->
		<!-- //header-bot -->

		<!-- Modal3 -->
		<div class="modal fade" id="myModal3" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body modal-body-sub_agile">
						<div class="main-mailposi">
							<span class="fa fa-envelope-o" aria-hidden="true"></span>
						</div>
						<div class="modal_body_left modal_body_left1">
							<h3 class="agileinfo_sign">完善信息,规划本月计划消费额度</h3>
							<p>欢迎加入hzs在线商城!</p>
							<div class="styled-input">
								<label>
									<input type="radio" value="男" aria-label="男" v-model="Update.sex" />男
								</label>
								<label>
									<input type="radio" value="女" aria-label="女" v-model="Update.sex" />女
								</label>
							</div>
							<div class="styled-input agile-styled-input-top">
								<input type="text" placeholder="姓名" v-model="Update.userName" required />
							</div>
							<div class="styled-input">
								<input type="text" placeholder="电话" v-model="Update.userPhone" required />
							</div>
							<div class="styled-input">
								<input type="email" placeholder="E-mail" name="Email" v-model="Update.userEmail" />
							</div>
							<div class="styled-input">
								<input type="text" placeholder="本月消费额度$" v-model="Update.userPlanSpent" required />
							</div>
							<br />
							<input type="submit" value="提交" @click="update()" data-dismiss="modal" />
						</div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal3 -->
		<!-- Modal4 -->
		<div class="modal fade" id="myModal4" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body modal-body-sub_agile">
						<div class="main-mailposi">
							<span class="fa fa-envelope-o" aria-hidden="true"></span>
						</div>
						<div class="modal_body_left modal_body_left1">
							<h3 class="agileinfo_sign">开店</h3>
							<p>输入店铺信息</p>
							<div class="styled-input agile-styled-input-top">
								<input type="text" placeholder="店铺名" v-model="OpenStore.storeName" required />
							</div>
							<div class="styled-input">
								<textarea
									class="form-control"
									rows="3"
									placeholder="店铺描述"
									v-model="OpenStore.storeDesc"
									required
								/>
							</div>
							<label for="type">类型选择</label>
							<select class="form-control" id="type" v-model="OpenStore.storeCate" placeholder="店铺类型">
								<option
									selected
									v-for="TypeList in TypeList"
									:key="TypeList.cateId"
									:value="TypeList.cateId"
								>{{TypeList.cateName}}</option>
							</select>
							<div class="styled-input">
								<input type="file" placeholder="上传图片" id="file" v-on:change="uploadFile" />
							</div>
							<br />
							<input type="submit" value="提交" @click="openStore()" data-dismiss="modal" />
						</div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal4 -->

		<!-- Modal5 -->
		<div class="modal fade" id="myModal5" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body modal-body-sub_agile">
						<div class="main-mailposi">
							<span class="fa fa-envelope-o" aria-hidden="true"></span>
						</div>
						<div class="modal_body_left modal_body_left1">
							<h3 class="agileinfo_sign">购物车</h3>
							<p>您的购物车如下</p>
							<div id="app" v-cloak>
								<template v-if="Cart.length">
									<table>
										<thead>
											<tr>
												<th>
													<input type="checkbox" v-model="isAllChecked" @click="checkAll()" />
												</th>
												<th>序号</th>
												<th>商品名称</th>
												<th>商品单价</th>
												<th>购买数量</th>
												<th>操作</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(item, index) in Cart" :key="item.id">
												<td>
													<input
														type="checkbox"
														:value="item.id"
														v-model="item.checked"
														@click="checkOne(item.id,item.checked)"
													/>
												</td>
												<td>{{index+1 }}</td>
												<td>{{ item.goodsVO.goodName }}</td>
												<td>{{ item.goodsVO.price }}</td>
												<td>
													<button @click="handleReduce(item.id,item.quantity)" :disabled="item.quantity === 1">-</button>
													{{ item.quantity }}
													<button @click="handleAdd(item.id,item.quantity)">+</button>
												</td>
												<td>
													<button @click="handleRemove(item.id)">移除</button>
												</td>
											</tr>
										</tbody>
									</table>
									<div>总价:￥{{ numFilter(totalPrice) }}</div>
								</template>
								<div v-else>
									<table>
										<thead>
											<tr>
												<th></th>
												<th>商品名称</th>
												<th>商品单价</th>
												<th>购买数量</th>
												<th>操作</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colspan="5" style="text-align: center">购物车为空</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<input type="submit" value="提交" @click="openStore()" data-dismiss="modal" />
						</div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal5 -->

		<!-- navigation -->
		<div class="ban-top">
			<div class="container">
				<div class="agileits-navi_search">
					<select class="form-control" v-model="hzsType" @change="getStoreGoodsList">
						<option
							selected
							v-for="TypeList in TypeList"
							:key="TypeList.cateId"
							:value="TypeList.cateId"
						>{{TypeList.cateName}}</option>
					</select>
				</div>
				<div class="top_nav_left">
					<nav class="navbar navbar-default">
						<div class="container-fluid">
							<!-- Collect the nav links, forms, and other content for toggling -->
							<div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav menu__list">
									<li class="active">
										<a class="nav-stylehead" @click="toIndex()">
											首页
											<span class="sr-only">(current)</span>
										</a>
									</li>
									<li class>
										<a class="nav-stylehead" @click="toAddressMng()">地址管理</a>
									</li>
									<li class>
										<a class="nav-stylehead" @click="toUserDetail()">信息管理</a>
									</li>
									<li class>
										<a class="nav-stylehead" @click="toPublish()">发表帖子</a>
									</li>
									<li class>
										<a class="nav-stylehead" @click="toDiscuss()">论坛</a>
									</li>
									<li class>
										<a class="nav-stylehead" @click="toContact()">联系我们</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
		<!-- //navigation -->

		<!-- page -->
		<div class="services-breadcrumb">
			<div class="agile_inner_breadcrumb">
				<div class="container">
					<ul class="w3_short">
						<li>
							<a href="index.html">首页</a>
							<i>|</i>
						</li>
						<li>下单</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- //page -->
		<!-- checkout page -->
		<div class="privacy">
			<div class="container">
				<!-- tittle heading -->
				<h3 class="tittle-w3l">
					下单
					<span class="heading-style">
						<i></i>
						<i></i>
						<i></i>
					</span>
				</h3>
				<!-- //tittle heading -->
				<div class="checkout-right">
					<h4>
						您已选中的如下:
						<span>{{Checkout.length}} 件商品</span>
					</h4>
					<div class="table-responsive">
						<table class="timetable_sub">
							<thead>
								<tr>
									<th>SL No.</th>
									<th>商品</th>
									<th>数量</th>
									<th>商品名称</th>
									<th>价格</th>
									<th>移除</th>
								</tr>
							</thead>
							<tbody>
								<tr class="rem1" v-for="(item, index) in Checkout" :key="item.id">
									<td class="invert">{{index +1}}</td>
									<td class="invert-image">
										<a @click="toGoodDetail(item.goodsVO.goodId)">
											<img :src="item.goodsVO.imgAddr.split(',')[0]" alt=" " class="img-responsive" style="width:140px;height:140px;" />
										</a>
									</td>
									<td class="invert">
										<div class="quantity">
											<div class="quantity-select">
												<button
													class="entry value-minus"
													@click="handleReduce(item.id,item.quantity)"
													:disabled="item.quantity === 1"
												>&nbsp;</button>
												<div class="entry value">
													<span>{{item.quantity}}</span>
												</div>
												<div class="entry value-plus active" @click="handleAdd(item.id,item.quantity)">&nbsp;</div>
											</div>
										</div>
									</td>
									<td class="invert">{{item.goodsVO.goodName}}</td>
									<td class="invert">${{item.goodsVO.price}}</td>
									<td class="invert">
										<div class="rem">
											<div class="close1" @click="handleRemove(item.id)"></div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="checkout-left">
					<div class="address_form_agile">
						<h4 style="color:red;float:right;">总价$:{{numFilter(selectedTotalPrice)}}</h4>
						<hr />
						<label for="type">地址选择选择</label>
						<select class="form-control"  v-model="address.id" placeholder="地址选择">
							<option
								selected
								v-for="item in address"
								:key="item.id"
								:value="item.id"
							>{{item.province+','+item.city+','+item.county+','+item.consignee+','+item.phone}}</option>
						</select>
						<!-- <button class="submit check_out">+</button> -->
						<div class="checkout-right-basket">
							<a @click="insertOrder()">
								去付款
								<span class="fa fa-hand-o-right" aria-hidden="true"></span>
							</a>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
		<!-- //checkout page -->

		<!-- footer -->
		<footer>
			<div class="container">
				<!-- footer first section -->
				<p class="footer-main">
					<span>"理性消费"</span> 合理的消费可以让我们更好的体验消费的快感!
				</p>
				<!-- //footer first section -->
				<!-- footer second section -->
				<div class="w3l-grids-footer">
					<div class="col-xs-4 offer-footer">
						<div class="col-xs-4 icon-fot">
							<span class="fa fa-map-marker" aria-hidden="true"></span>
						</div>
						<div class="col-xs-8 text-form-footer">
							<h3>订单查询</h3>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="col-xs-4 offer-footer">
						<div class="col-xs-4 icon-fot">
							<span class="fa fa-refresh" aria-hidden="true"></span>
						</div>
						<div class="col-xs-8 text-form-footer">
							<h3>每月设置额度</h3>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="col-xs-4 offer-footer">
						<div class="col-xs-4 icon-fot">
							<span class="fa fa-times" aria-hidden="true"></span>
						</div>
						<div class="col-xs-8 text-form-footer">
							<h3>拒绝疯狂消费</h3>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="clearfix"></div>
				</div>
				<!-- //footer second section -->
				<!-- footer third section -->
				<div class="footer-info w3-agileits-info">
					<!-- footer categories -->
					<div class="col-sm-5 address-right">
						<div class="col-xs-6 footer-grids">
							<h3>著名品牌</h3>
							<ul>
								<li>
									<a>361</a>
								</li>
								<li>
									<a>安踏</a>
								</li>
								<li>
									<a>李宁</a>
								</li>
								<li>
									<a>万斯</a>
								</li>
								<li>
									<a>匡威</a>
								</li>
								<li>
									<a>天猫超市</a>
								</li>
							</ul>
						</div>
						<div class="col-xs-6 footer-grids">
							<h3>理性消费</h3>
							<ul>
								<li>
									<a>淘宝</a>
								</li>
								<li>
									<a>京东</a>
								</li>
								<li>
									<a>拍拍</a>
								</li>
								<li>
									<a>拼多多</a>
								</li>
								<li>
									<a>聚美优品</a>
								</li>
								<li>
									<a>天猫超市</a>
								</li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
					<!-- //footer categories -->
					<!-- quick links -->
					<div class="col-sm-5 address-right">
						<div class="col-xs-6 footer-grids">
							<h3>源码导航</h3>
							<ul>
								<li>
									<a href="https://github.com/1219148123/rational">github</a>
								</li>
								<li>
									<a href="https://mp.csdn.net/console/article">csdn</a>
								</li>
							</ul>
						</div>
						<div class="col-xs-6 footer-grids">
							<h3>联系管理员</h3>
							<ul>
								<li>
									<i class="fa fa-map-marker"></i> 中国 山西,太原 .
								</li>
								<li>
									<i class="fa fa-mobile"></i> 150 3435 1364
								</li>
								<li>
									<i class="fa fa-phone"></i> +暂无
								</li>
								<li>
									<i class="fa fa-envelope-o"></i>
									<a href="mailto:example@mail.com">487387645@qq.com</a>
								</li>
							</ul>
						</div>
					</div>
					<!-- //quick links -->
					<div class="clearfix"></div>
				</div>
				<!-- //footer third section -->
				<!-- footer fourth section (text) -->
				<div class="agile-sometext">
					<div class="sub-some">
						<h5>理性消费</h5>
						<p>理性消费</p>
					</div>
					<div class="sub-some">
						<h5>为您提供好的商品及消费建议</h5>
						<p>为您提供好的商品及消费建议</p>
					</div>
					<!-- brands -->
					<div class="sub-some">
						<h5>热门品牌</h5>
						<ul>
							<li>
								<a href="product.html">Aashirvaad</a>
							</li>
							<li>
								<a href="product.html">Amul</a>
							</li>
						</ul>
					</div>
					<!-- //brands -->
				</div>
				<!-- //footer fourth section (text) -->
			</div>
		</footer>
		<!-- //footer -->
		<!-- copyright -->
		<div class="copy-right">
			<div class="container">
				<p>Copyright &copy; 版权所有hzs</p>
			</div>
		</div>
		<!-- //copyright -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			TypeList: [],
			User: {},
			Update: {
				sex: '',
				userEmail: '',
				userId: '',
				userName: '',
				userPhone: '',
				userPlanSpent: 0
			},
			layer: {},
			isAllChecked: 0,
			totalPrice: 0,
			selectedTotalPrice: 0, //下单时候的总价
			address:{},
			Cart: {},
			Checkout: {},
			Login: {
				userAccount: '',
				userPassword: ''
			},
			Register: {
				userAccount: '',
				userPassword: '',
				userRePassword: ''
			},
			StoreGoodsList: '',
			OpenStore: {
				ownerId: '',
				storeId: '',
				storeName: '',
				storeDesc: '',
				storeCate: ''
			}
		}
	},
	mounted: function() {
		var _this = this
		layui.use('layer', function() {
			_this.layer = layui.layer
		})
		_this.getUser()
		_this.getSelectedGoods()
		_this.getAddress()
	},
	methods: {
		toContact() {
			this.$router.push({
				path: '/contact'
			})
		},
		//去商品详情
		toGoodDetail(id) {
			this.$router.push({
				path: '/goodDetail',
				query: { goodId: id }
			})
		},
		//去发布
		toPublish() {
			this.$router.push({
				path: '/publish'
			})
		},
		//去首页
		toIndex() {
			this.$router.push({
				path: '/'
			})
		},
		//去论坛了列表
		toDiscuss() {
			this.$router.push({
				path: '/discuss'
			})
		},
		//去地址管理页面
		toAddressMng() {
			this.$router.push({
				path: '/addressMng',
				query: { userId: this.User.id }
			})
		},
		numFilter(value) {
			let realVal = ''
			if (!isNaN(value) && value !== '') {
				// 截取当前数据到小数点后两位
				realVal = parseFloat(value).toFixed(2)
			} else {
				realVal = '--'
			}
			return realVal
		},
		login() {
			// this.User = this.$qs.stringify(this.User);
			// console.log(this.User);
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this.$axios
				.post('/api/user/login', _this.Login, {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					if (res.data == 1) {
						_this.layer.close(loading)
						_this.layer.msg('登录成功!')
						_this.getUser()
					} else if (res.data == 0) {
						_this.layer.close(loading)
						_this.layer.msg('账号不存在!')
					} else {
						_this.layer.close(loading)
						_this.layer.msg('密码错误!')
					}
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		getUser() {
			var _this = this
			_this.$axios
				.post('/api/user/getUser', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					_this.User = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		getCate() {
			var _this = this
			_this.$axios
				.get('/api/category/get', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					_this.TypeList = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		insertOrder(){
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			var OrderDTO = {
				addressId: _this.address.id,
				userId: _this.User.id
			}
			_this
				.$axios({
					url: '/api/order/insert', //****: 你的ip地址
					data: OrderDTO,
					method: 'post'
				})
				.then(res => {
					_this.layer.close(loading)
					_this.layer.msg('订单生成,请付款')
					_this.getCart()
					_this.getSelectedGoods()
					this.$router.push({ path: '/order', query: { userId:this.User.id}});
				}) // 发送请求
		},
		getAddress() {
			var _this = this
			_this.$axios
				.get('/api/address/addressMng?userId='+this.$route.query.userId, {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res)
					_this.address = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		getStoreGoodsList() {
			var _this = this
			_this.$axios
				.get('/api/sto/getStoreGoodsList', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					_this.StoreGoodsList = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		getCart() {
			// this.User = this.$qs.stringify(this.User);
			var _this = this
			if (_this.User == '') {
				_this.layer.msg('请先登录')
				return
			}
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this.$axios
				.get(
					'/api/cart/getAllCartGood?userId=' +
						_this.User.id,
					{
						emulateJSON: true,
						withCredentials: true
					}
				)
				.then(res => {
					_this.layer.close(loading)
					var sum = 0
					var allPrice = 0
					for (let index = 0; index < res.data.length; index++) {
						sum += res.data[index].checked
						if (res.data[index].checked == 1) {
							allPrice +=
								res.data[index].quantity *
								res.data[index].goodsVO.price
						}
					}
					_this.isAllChecked = sum == res.data.length
					_this.totalPrice = allPrice
					_this.Cart = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		getSelectedGoods() {
			// this.User = this.$qs.stringify(this.User);
			var _this = this
			if (_this.User == '') {
				_this.layer.msg('请先登录')
				return
			}
			_this.$axios
				.get(
					'/api/cart/getAllCheckedCartGood?userId=' +
						this.$route.query.userId,
					{
						emulateJSON: true,
						withCredentials: true
					}
				)
				.then(res => {
					var allPrice = 0
					for (let index = 0; index < res.data.length; index++) {
						allPrice +=
							res.data[index].quantity *
							res.data[index].goodsVO.price
					}
					_this.selectedTotalPrice = allPrice
					_this.Checkout = res.data
					console.log(_this.Checkout)
					console.log(_this.selectedTotalPrice)
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		addCart(goodId) {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			var addCart = {
				id: '',
				goodId: goodId,
				quantity: 1,
				userId: _this.User.id
			}
			_this
				.$axios({
					url: '/api/cart/insert', //****: 你的ip地址
					data: addCart,
					method: 'post'
				})
				.then(res => {
					_this.layer.close(loading)
					_this.layer.msg('加入购物车成功')
					_this.getCart()
				}) // 发送请求
		},
		checkAll() {
			var _this = this
			let formData = new FormData()
			formData.append('userId', _this.User.id)
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			if (_this.isAllChecked == 0) {
				_this
					.$axios({
						url: '/api/cart/checkAll', //****: 你的ip地址
						data: formData,
						method: 'post',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(res => {
						_this.layer.close(loading)
						_this.layer.msg('全选')
						_this.getCart()
						_this.getSelectedGoods()
					}) // 发送请求
			} else {
				_this
					.$axios({
						url: '/api/cart/inCheckAll', //****: 你的ip地址
						data: formData,
						method: 'post',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(res => {
						_this.layer.close(loading)
						_this.layer.msg('全不选')
						_this.getCart()
						_this.getSelectedGoods()
					}) // 发送请求
			}
		},
		checkOne(cartId, isChecked) {
			var _this = this
			let formData = new FormData()
			formData.append('id', cartId)
			//'userfile'是formData这个对象的键名
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			if (isChecked == 0) {
				_this
					.$axios({
						url: '/api/cart/checkGood', //****: 你的ip地址
						data: formData,
						method: 'post',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(res => {
						_this.layer.close(loading)
						_this.layer.msg('成功选择')
						_this.getCart()
						_this.getSelectedGoods()
					}) // 发送请求
			} else {
				_this
					.$axios({
						url: '/api/cart/inCheckGood', //****: 你的ip地址
						data: formData,
						method: 'post',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(res => {
						_this.layer.close(loading)
						_this.layer.msg('取消选择')
						_this.getCart()
						_this.getSelectedGoods()
					}) // 发送请求
			}
		},
		handleReduce(id, num) {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			if (num == 1) {
				_this.layer.msg('已经为1了减什么减?')
				_this.layer.close(loading)
			} else {
				let formData = new FormData()
				formData.append('id', id)
				formData.append('num', num - 1)
				_this
					.$axios({
						url: '/api/cart/changeNum', //****: 你的ip地址
						data: formData,
						method: 'post',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(res => {
						_this.layer.close(loading)
						_this.layer.msg('数量减一')
						_this.getCart()
						_this.getSelectedGoods()
					}) // 发送请求
			}
		},
		handleAdd(id, num) {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			let formData = new FormData()
			formData.append('id', id)
			formData.append('num', num + 1)
			_this
				.$axios({
					url: '/api/cart/changeNum', //****: 你的ip地址
					data: formData,
					method: 'post',
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(res => {
					_this.layer.close(loading)
					_this.layer.msg('数量加一')
					_this.getCart()
					_this.getSelectedGoods()
				}) // 发送请求
		},
		handleRemove(id) {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			let formData = new FormData()
			formData.append('id', id)
			_this
				.$axios({
					url: '/api/cart/deleteCartGood', //****: 你的ip地址
					data: formData,
					method: 'delete',
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(res => {
					_this.layer.close(loading)
					_this.layer.msg('移除成功')
					_this.getCart()
					_this.getSelectedGoods()
				}) // 发送请求
		},
		
		register() {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			if (_this.Register.userPassword != _this.Register.userRePassword) {
				_this.layer.msg('两次密码不匹配')
				_this.layer.close(loading)
				;(_this.Register.userPassword = ''),
					(_this.Register.userRePassword = '')
			} else {
				_this.$axios
					.post(
						'/api/user/userSignUp',
						_this.Register,
						{
							emulateJSON: true,
							withCredentials: true
						}
					)
					.then(res => {
						console.log(res)
						if (res.data == 1) {
							_this.Register = {}
							_this.layer.close(loading)
							_this.layer.msg('注册成功!,快登录享受购物吧')
						}
					})
					.catch(err => {
						console.log(err.data)
					})
			}
		},
		openStore() {
			var _this = this
			_this.OpenStore.ownerId = _this.User.id
			console.log(_this.OpenStore)
			// _this.OpenStore = this.$qs.stringify(_this.OpenStore)
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this.$axios
				.post('/api/sto/add', _this.OpenStore, {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					_this.layer.close(loading)
					console.log(res)
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		//上传点击事件
		uploadFile: function() {
			var _this = this
			let files = event.target.files
			let formData = new FormData()
			formData.append('file', files[0])
			//'userfile'是formData这个对象的键名
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this
				.$axios({
					url: '/api/sto/test', //****: 你的ip地址
					data: formData,
					method: 'post',
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(res => {
					console.log(res.data)
					_this.layer.close(loading)
					_this.layer.msg('图片上传成功')
				}) // 发送请求
		},
		update() {
			var _this = this
			_this.Update.userId = _this.User.id
			console.log(_this.Update)
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this.$axios
				.post(
					'/api/user/updateUser',
					_this.Update,
					{
						emulateJSON: true,
						withCredentials: true
					}
				)
				.then(res => {
					console.log(res)
					if (res.statusText == 'OK') {
						_this.layer.close(loading)
						_this.layer.msg('修改成功!')
						_this.getUser()
					}
				})
				.catch(err => {
					console.log(err.data)
				})
		}
	}
}
</script>


<style lang="scss" scoped>
@import '../css/bootstrap.css';
@import '../css/creditly.css';
@import '../css/easy-responsive-tabs.css';
@import '../css/flexslider.css';
@import '../css/font-awesome.css';
@import '../css/jquery-ui1.css';
@import '../css/popuo-box.css';
@import '../css/style.css';
@import '../css/table.css';
</style>