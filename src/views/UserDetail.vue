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
							<a @click="toCheckout()">
								<span class="fa fa-truck" aria-hidden="true"></span>订单
							</a>
						</li>
						<li>
							<span class="fa fa-phone" aria-hidden="true"></span> 001 234 5678
						</li>
						<li>
							<a v-if="User==''" data-toggle="modal" data-target="#myModal1" ref="login">
								<span class="fa fa-unlock-alt" aria-hidden="true"></span> 登录
							</a>
							<a v-else-if="User.userName==null" data-toggle="modal" data-target="#myModal3" ref="update">
								<span class="fa fa-grav" aria-hidden="true"></span> 点击完善信息
							</a>
							<a
								v-else-if="User.userPlanSpent==0"
								data-toggle="modal"
								data-target="#myModal6"
								ref="update"
							>
								<span class="fa fa-grav" aria-hidden="true"></span> 设置本月消费额度
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
							<a
								v-else-if="User!='' && User.openStore==0 && User.userName!=null"
								data-toggle="modal"
								data-target="#myModal4"
							>
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 点击开店
							</a>
							<a v-else-if="User!='' && User.openStore==1" @click="toMyStore()">
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 店铺管理
							</a>
						</li>
					</ul>
					<!-- //header lists -->
					<!-- 顶部搜索栏 -->
					<div class="agileits_search">
						<!-- <form action="#" method="post">
							<input name="Search" type="search" placeholder="今天您想买些什么?" required />
							<button type="submit" class="btn btn-default" aria-label="Left Align">
								<span class="fa fa-search" aria-hidden="true"></span>
							</button>
						</form>-->
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
							<div class="box">
								<label for="type">类型选择:</label>
								<select class="form-control" id="type" v-model="OpenStore.storeCate" placeholder="店铺类型">
									<option
										selected
										v-for="TypeList in TypeList"
										:key="TypeList.cateId"
										:value="TypeList.cateId"
									>{{TypeList.cateName}}</option>
								</select>
							</div>

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
						<a class="close" ref="banca" data-dismiss="modal">&times;</a>
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
							<input type="submit" value="下单" @click="toCheckout()" data-dismiss="modal" />
						</div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal5 -->

		<!-- Modal6 -->
		<div class="modal fade" id="myModal6" tabindex="-1" role="dialog">
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
								<input type="text" placeholder="本月消费额度$" v-model="Update.userPlanSpent" required />
							</div>
							<br />
							<input type="submit" value="提交" @click="updateSpent()" data-dismiss="modal" />
						</div>
					</div>
				</div>
				<!-- //Modal content-->
			</div>
		</div>
		<!-- //Modal6 -->

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
		<!-- dd -->
		<div style="height:300px;width:300px;margin: 80px auto;">
			<h3>个人信息如下</h3>
			<div style="margin: 20px;"></div>
			<el-form :label-position="labelPosition" label-width="80px" :model="UserDetail">
				<el-form-item label="用户名字">
					<el-input v-model="UserDetail.userName"></el-input>
				</el-form-item>
				<el-form-item label="当前消费$">
					<el-input v-model="UserDetail.userCurrentSpent" disabled></el-input>
				</el-form-item>
				<el-form-item label="计划消费">
					<el-input v-model="UserDetail.userPlanSpent"></el-input>
				</el-form-item>
				<el-form-item label="用户邮箱">
					<el-input v-model="UserDetail.userEmail"></el-input>
				</el-form-item>
				<el-form-item label="用户电话">
					<el-input v-model="UserDetail.userPhone"></el-input>
				</el-form-item>
				<el-form-item label="用户性别">
					<el-input v-model="UserDetail.sex"></el-input>
				</el-form-item>
			</el-form>
			<a  data-toggle="modal" data-target="#myModal3" ref="update">
				<span class="fa fa-grav" aria-hidden="true"></span> 点击完善信息
			</a>
			<a  data-toggle="modal" data-target="#myModal6" ref="update">
				<span class="fa fa-grav" aria-hidden="true"></span> 设置本月消费额度
			</a>
		</div>
		<!-- dd -->
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
			imgAddr:
				'https://hzsfile.oss-cn-beijing.aliyuncs.com/images/2020/04/09/15864355211077425.jpg',
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
			Cart: {},
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
			},
			UserDetail: {},
			labelPosition: 'left'
		}
	},
	mounted: function() {
		var _this = this
		layui.use('layer', function() {
			_this.layer = layui.layer
		})
		//钩子函数页面加载后获取用户 分类 店铺商品信息
		_this.getUser()
		_this.getCate()
		_this.getUserDetail()
	},
	methods: {
		toContact() {
			this.$router.push({
				path: '/contact'
			})
		},
		//获取用户详情
		getUserDetail() {
			var _this = this
			_this.$axios
				.get(
					'/api/user/getUserDetail?userId=' +
						this.$route.query.userId,
					{
						emulateJSON: true,
						withCredentials: true
					}
				)
				.then(res => {
					_this.UserDetail = res.data
					_this.Update = res.data
					console.log(_this.UserDetail)
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		//管理员界面
		toAdmin() {
			this.$router.push({
				path: '/admin'
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
		//去结账页面
		toCheckout() {
			this.$router.push({
				path: '/checkout',
				query: { userId: this.User.id }
			})
		},
		//去店铺管理页面
		toMyStore() {
			this.$router.push({
				path: '/myStore',
				query: { userId: this.User.id }
			})
		},
		//数据格式化只显示小数点后两位
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
		//登录接口
		login() {
			var _this = this
			var account = function(str) {
				var patrn = /^[0-9]{1,30}$/
				var bool = true
				if (!patrn.exec(str)) {
					bool = false
				}
				return bool
			}
			if (
				_this.Login.userAccount == '' ||
				_this.Login.userAccount == ' '
			) {
				layer.msg('账号不能为空')
				_this.$refs.login.click()
				return
			}
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
					} else if (res.data == -2) {
						_this.layer.close(loading)
						_this.layer.msg('账号已经失效!')
					} else {
						_this.layer.close(loading)
						_this.layer.msg('密码错误!')
					}
					_this.Login = {}
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		//获取用户
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
		//获取分类
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
		//获取店铺商品列表
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
		//购物车列表获取
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
				.get('/api/cart/getAllCartGood?userId=' + _this.User.id, {
					emulateJSON: true,
					withCredentials: true
				})
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
		//加入购物车
		addCart(goodId) {
			var _this = this
			if (_this.User == '') {
				_this.layer.msg('加入失败，请先登录')
				return
			}
			if (_this.User.userPlanSpent == 0) {
				_this.layer.msg('加入失败,请先完善信息设置消费额度')
				//console.log(_this.$refs.login.click())
				return
			}
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
					// headers: {
					// 	'Content-Type': 'multipart/form-data'
					// }
				})
				.then(res => {
					_this.layer.close(loading)
					_this.layer.msg('加入购物车成功')
					_this.getCart()
				}) // 发送请求
		},
		//购物车商品全选
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
					}) // 发送请求
			}
		},
		//购物车商品选中一个
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
					}) // 发送请求
			}
		},
		//购物车数量-1
		handleReduce(id, num) {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			if (num == 1) {
				_this.layer.msg('已经为1了减什么减?')
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
					}) // 发送请求
			}
		},
		//购物车数量+1
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
				}) // 发送请求
		},
		//购物车商品删除
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
				}) // 发送请求
		},
		//用户注册接口
		register() {
			var _this = this
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			if (_this.Register.userPassword != _this.Register.userRePassword) {
				_this.layer.msg('两次密码不匹配')
				_this.layer.close(loading)
				_this.Register.userPassword = ''
				_this.Register.userRePassword = ''
			} else {
				_this.$axios
					.post('/api/user/userSignUp', _this.Register, {
						emulateJSON: true,
						withCredentials: true
					})
					.then(res => {
						if (res.data == 1) {
							_this.Register = {}
							_this.layer.close(loading)
							_this.layer.msg('注册成功!,快登录享受购物吧')
						} else if (res.data == -2) {
							_this.Register = {}
							_this.layer.close(loading)
							this.$message({
								message: '注册失败，账号已经被使用',
								type: 'warning'
							})
						}
					})
					.catch(err => {
						console.log(err.data)
					})
			}
		},
		//开店接口
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
			_this.Update.userId = _this.User.userId
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this.$axios
				.post('/api/user/updateUser', _this.Update, {
					emulateJSON: true,
					withCredentials: true
				})
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
		},
		updateSpent() {
			var _this = this
			_this.Update.userId = _this.User.userId
			var loading = _this.layer.load(0, {
				shade: false,
				time: 30 * 1000
			})
			_this.$axios
				.post('/api/user/updateUserSpent', _this.Update, {
					emulateJSON: true,
					withCredentials: true
				})
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
.box {
	display: flex;
	justify-content: space-around;
}
.box label {
	width: 100px;
	line-height: 34px;
	font-size: 15px;
}
.demo-table-expand {
	font-size: 0;
}
.demo-table-expand label {
	width: 90px;
	color: #99a9bf;
}
.demo-table-expand .el-form-item {
	margin-right: 0;
	margin-bottom: 0;
	width: 50%;
}
</style>