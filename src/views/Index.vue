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
							<a v-else data-toggle="modal" data-target="#myModal1">
								<span class="fa fa-address-book-o" aria-hidden="true"></span>
								欢迎{{User.userName}}
							</a>
						</li>
						<li>
							<a v-if="User==''" data-toggle="modal" data-target="#myModal2">
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 注册
							</a>
							<a v-else-if="User!='' && User.openStore==0" data-toggle="modal" data-target="#myModal4">
								<span class="fa fa-pencil-square-o" aria-hidden="true"></span> 点击开店
							</a>
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
							<form action="#" method="post" class="last">
								<input type="hidden" name="cmd" value="_cart" />
								<input type="hidden" name="display" value="1" />
								<button class="w3view-cart" type="submit" name="submit" value>
									<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
								</button>
							</form>
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
								<input type="text" placeholder="姓名" v-model="OpenStore.storeName" required />
							</div>
							<div class="styled-input">
								<input type="text" placeholder="电话" v-model="OpenStore.storeDesc" required />
							</div>
							<div class="styled-input">
								<input type="email" placeholder="E-mail" name="Email" v-model="OpenStore.storeCate" />
							</div>
							<select class="form-control">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
							<div class="styled-input">
								<input type="file" placeholder="本月消费额度$" v-on:change="OpenStore.file" required />
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
		<!-- navigation -->
		<div class="ban-top">
			<div class="container">
				<div class="agileits-navi_search">
					<form action="#" method="post">
						<select id="agileinfo-nav_search" name="agileinfo_search" required>
							<option value>所有类别</option>
							<option value="Kitchen">服装</option>
							<option value="Household">食品</option>
							<option value="Snacks &amp; Beverages">器材</option>
						</select>
					</form>
				</div>
				<div class="top_nav_left">
					<nav class="navbar navbar-default">
						<div class="container-fluid">
							<!-- Collect the nav links, forms, and other content for toggling -->
							<div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav menu__list">
									<li class="active">
										<a class="nav-stylehead" href="index.html">
											首页
											<span class="sr-only">(current)</span>
										</a>
									</li>
									<li class>
										<a class="nav-stylehead" href="about.html">关于我们</a>
									</li>
									<li class="dropdown">
										<a
											href="#"
											class="dropdown-toggle nav-stylehead"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											我的
											<span class="caret"></span>
										</a>
										<ul class="dropdown-menu multi-column columns-3">
											<div class="agile_inner_drop_nav_info">
												<div class="col-sm-4 multi-gd-img">
													<ul class="multi-column-dropdown">
														<li>
															<a href="product.html">Bakery</a>
														</li>
														<li>
															<a href="product.html">Baking Supplies</a>
														</li>
														<li>
															<a href="product.html">Coffee, Tea & Beverages</a>
														</li>
													</ul>
												</div>
												<div class="col-sm-4 multi-gd-img">
													<ul class="multi-column-dropdown">
														<li>
															<a href="product.html">Pickles</a>
														</li>
														<li>
															<a href="product.html">Pasta & Noodles</a>
														</li>
														<li>
															<a href="product.html">Rice, Flour & Pulses</a>
														</li>
													</ul>
												</div>
												<div class="col-sm-4 multi-gd-img">
													<img src="../images/nav.png" alt />
												</div>
												<div class="clearfix"></div>
											</div>
										</ul>
									</li>
									<li class="dropdown">
										<a
											href="#"
											class="dropdown-toggle nav-stylehead"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											购物车
											<span class="caret"></span>
										</a>
										<ul class="dropdown-menu multi-column columns-3">
											<div class="agile_inner_drop_nav_info">
												<div class="col-sm-6 multi-gd-img">
													<ul class="multi-column-dropdown">
														<li>
															<a href="product2.html">Kitchen & Dining</a>
														</li>
														<li>
															<a href="product2.html">Detergents</a>
														</li>
													</ul>
												</div>
												<div class="col-sm-6 multi-gd-img">
													<ul class="multi-column-dropdown">
														<li>
															<a href="product2.html">Pet Care</a>
														</li>
														<li>
															<a href="product2.html">Cleaning Accessories</a>
														</li>
													</ul>
												</div>
												<div class="clearfix"></div>
											</div>
										</ul>
									</li>
									<li class>
										<a class="nav-stylehead" href="faqs.html">论坛</a>
									</li>
									<li class="dropdown">
										<a class="nav-stylehead dropdown-toggle" href="#" data-toggle="dropdown">
											Pages
											<b class="caret"></b>
										</a>
										<ul class="dropdown-menu agile_short_dropdown">
											<li>
												<a href="icons.html">Web Icons</a>
											</li>
											<li>
												<a href="typography.html">Typography</a>
											</li>
										</ul>
									</li>
									<li class>
										<a class="nav-stylehead" href="contact.html">联系我们</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
		<!-- //navigation -->
		<!-- banner -->
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
			<!-- Indicators-->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1" class></li>
				<li data-target="#myCarousel" data-slide-to="2" class></li>
				<li data-target="#myCarousel" data-slide-to="3" class></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<div class="container">
						<div class="carousel-caption">
							<h3>
								大
								<span>甩卖</span>
							</h3>
							<p>
								Get flat
								<span>10%</span> Cashback
							</p>
							<a class="button2" href="product.html">Shop Now</a>
						</div>
					</div>
				</div>
				<div class="item item2">
					<div class="container">
						<div class="carousel-caption">
							<h3>
								Healthy
								<span>Saving</span>
							</h3>
							<p>
								Get Upto
								<span>30%</span> Off
							</p>
							<a class="button2" href="product.html">Shop Now</a>
						</div>
					</div>
				</div>
				<div class="item item3">
					<div class="container">
						<div class="carousel-caption">
							<h3>
								Big
								<span>Deal</span>
							</h3>
							<p>
								Get Best Offer Upto
								<span>20%</span>
							</p>
							<a class="button2" href="product.html">Shop Now</a>
						</div>
					</div>
				</div>
				<div class="item item4">
					<div class="container">
						<div class="carousel-caption">
							<h3>
								Today
								<span>Discount</span>
							</h3>
							<p>
								Get Now
								<span>40%</span> Discount
							</p>
							<a class="button2" href="product.html">Shop Now</a>
						</div>
					</div>
				</div>
			</div>
			<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
		<!-- //banner -->

		<!-- top Products -->
		<div class="ads-grid">
			<div class="container">
				<!-- tittle heading -->
				<h3 class="tittle-w3l">
					推荐的产品
					<span class="heading-style">
						<i></i>
						<i></i>
						<i></i>
					</span>
				</h3>
				<!-- //tittle heading -->
				<!-- 左边栏目 -->
				<div class="side-bar col-md-3">
					<div class="search-hotel">
						<h3 class="agileits-sear-head">Search Here..</h3>
						<form action="#" method="post">
							<input type="search" placeholder="Product name..." name="search" required />
							<input type="submit" value=" " />
						</form>
					</div>
					<!-- 广告位 -->
					<div class="range">
						<h3 class="agileits-sear-head">广告位</h3>
					</div>
					<!-- //广告位 -->
					<!-- food preference -->
					<div class="left-side">
						<h3 class="agileits-sear-head">Food Preference</h3>
						<ul>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">Vegetarian</span>
							</li>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">Non-Vegetarian</span>
							</li>
						</ul>
					</div>
					<!-- //food preference -->
					<!-- discounts -->
					<div class="left-side">
						<h3 class="agileits-sear-head">Discount</h3>
						<ul>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">5% or More</span>
							</li>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">10% or More</span>
							</li>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">20% or More</span>
							</li>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">30% or More</span>
							</li>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">50% or More</span>
							</li>
							<li>
								<input type="checkbox" class="checked" />
								<span class="span">60% or More</span>
							</li>
						</ul>
					</div>
					<!-- //discounts -->
					<!-- reviews -->
					<div class="customer-rev left-side">
						<h3 class="agileits-sear-head">Customer Review</h3>
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<span>5.0</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star-o" aria-hidden="true"></i>
									<span>4.0</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
									<i class="fa fa-star-o" aria-hidden="true"></i>
									<span>3.5</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star-o" aria-hidden="true"></i>
									<i class="fa fa-star-o" aria-hidden="true"></i>
									<span>3.0</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star" aria-hidden="true"></i>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
									<i class="fa fa-star-o" aria-hidden="true"></i>
									<i class="fa fa-star-o" aria-hidden="true"></i>
									<span>2.5</span>
								</a>
							</li>
						</ul>
					</div>
					<!-- //reviews -->

					<!-- deals -->
					<div class="deal-leftmk left-side">
						<h3 class="agileits-sear-head">Special Deals</h3>
						<div class="special-sec1">
							<div class="col-xs-4 img-deals">
								<img src="../images/d2.jpg" alt />
							</div>
							<div class="col-xs-8 img-deal1">
								<h3>Lay's Potato Chips</h3>
								<a href="single.html">$18.00</a>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="special-sec1">
							<div class="col-xs-4 img-deals">
								<img src="../images/d1.jpg" alt />
							</div>
							<div class="col-xs-8 img-deal1">
								<h3>Bingo Mad Angles</h3>
								<a href="single.html">$9.00</a>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="special-sec1">
							<div class="col-xs-4 img-deals">
								<img src="../images/d4.jpg" alt />
							</div>
							<div class="col-xs-8 img-deal1">
								<h3>Tata Salt</h3>
								<a href="single.html">$15.00</a>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="special-sec1">
							<div class="col-xs-4 img-deals">
								<img src="../images/d5.jpg" alt />
							</div>
							<div class="col-xs-8 img-deal1">
								<h3>Gujarat Dry Fruit</h3>
								<a href="single.html">$525.00</a>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="special-sec1">
							<div class="col-xs-4 img-deals">
								<img src="../images/d3.jpg" alt />
							</div>
							<div class="col-xs-8 img-deal1">
								<h3>Cadbury Dairy Milk</h3>
								<a href="single.html">$149.00</a>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<!-- //deals -->
				</div>
				<!-- //product left -->
				<!-- product right -->
				<div class="agileinfo-ads-display col-md-9">
					<div class="wrapper">
						<!-- first section (nuts) -->
						<div class="product-sec1">
							<h3 class="heading-tittle">店铺名字</h3>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/m1.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Almonds, 100g</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$149.00</span>
											<del>$280.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Almonds, 100g" />
													<input type="hidden" name="amount" value="149.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="加入购物车" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/m2.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Cashew Nuts, 100g</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$200.00</span>
											<del>$420.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Cashew Nuts, 100g" />
													<input type="hidden" name="amount" value="200.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="加入购物车" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/m3.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Pista..., 250g</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$520.99</span>
											<del>$600.99</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Pista, 250g" />
													<input type="hidden" name="amount" value="520.99" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="加入购物车" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<!-- //first section (nuts) -->
						<!-- second section (nuts special) -->
						<div class="product-sec1 product-sec2">
							<div class="col-xs-7 effect-bg">
								<h3 class>Pure Energy</h3>
								<h6>Enjoy our all healthy Products</h6>
								<p>Get Extra 10% Off</p>
							</div>
							<h3 class="w3l-nut-middle">Nuts & Dry Fruits</h3>
							<div class="col-xs-5 bg-right-nut">
								<img src="../images/nut1.png" alt />
							</div>
							<div class="clearfix"></div>
						</div>
						<!-- //second section (nuts special) -->
						<!-- third section (oils) -->
						<div class="product-sec1">
							<h3 class="heading-tittle">Oils</h3>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/mk4.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Freedom Oil, 1L</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$78.00</span>
											<del>$110.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Freedom Sunflower Oil, 1L" />
													<input type="hidden" name="amount" value="78.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/mk5.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Saffola Gold, 1L</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$130.00</span>
											<del>$150.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Saffola Gold, 1L" />
													<input type="hidden" name="amount" value="130.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/mk6.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Fortune Oil, 5L</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$399.99</span>
											<del>$500.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Fortune Oil, 5L" />
													<input type="hidden" name="amount" value="399.99" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<!-- //third section (oils) -->
						<!-- fourth section (noodles) -->
						<div class="product-sec1">
							<h3 class="heading-tittle">Pasta & Noodles</h3>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/mk7.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Yippee Noodles, 65g</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$15.00</span>
											<del>$25.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="YiPPee Noodles, 65g" />
													<input type="hidden" name="amount" value="15.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/mk8.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Wheat Pasta, 500g</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$98.00</span>
											<del>$120.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Wheat Pasta, 500g" />
													<input type="hidden" name="amount" value="98.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="../images/mk9.jpg" alt />
										<div class="men-cart-pro">
											<div class="inner-men-cart-pro">
												<a href="single.html" class="link-product-add-cart">Quick View</a>
											</div>
										</div>
										<span class="product-new-top">New</span>
									</div>
									<div class="item-info-product">
										<h4>
											<a href="single.html">Chinese Noodles, 68g</a>
										</h4>
										<div class="info-product-price">
											<span class="item_price">$11.99</span>
											<del>$15.00</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Chinese Noodles, 68g" />
													<input type="hidden" name="amount" value="11.99" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" class="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<!-- //fourth section (noodles) -->
					</div>
				</div>
				<!-- //product right -->
			</div>
		</div>
		<!-- //top products -->
		<!-- special offers -->
		<div class="featured-section" id="projects">
			<div class="container">
				<!-- tittle heading -->
				<h3 class="tittle-w3l">
					推荐商品
					<span class="heading-style">
						<i></i>
						<i></i>
						<i></i>
					</span>
				</h3>
				<!-- //tittle heading -->
				<div class="content-bottom-in">
					<ul id="flexiselDemo1">
						<li>
							<div class="w3l-specilamk">
								<div class="speioffer-agile">
									<a href="single.html">
										<img src="../images/s1.jpg" alt />
									</a>
								</div>
								<div class="product-name-w3l">
									<h4>
										<a href="single.html">Aashirvaad, 5g</a>
									</h4>
									<div class="w3l-pricehkj">
										<h6>$220.00</h6>
										<p>Save $40.00</p>
									</div>
									<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Aashirvaad, 5g" />
												<input type="hidden" name="amount" value="220.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" class="button" />
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="w3l-specilamk">
								<div class="speioffer-agile">
									<a href="single.html">
										<img src="../images/s4.jpg" alt />
									</a>
								</div>
								<div class="product-name-w3l">
									<h4>
										<a href="single.html">Kissan Tomato Ketchup, 950g</a>
									</h4>
									<div class="w3l-pricehkj">
										<h6>$99.00</h6>
										<p>Save $20.00</p>
									</div>
									<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
										<form action="#" method="post">
											<fieldset>
												<input type="hidden" name="cmd" value="_cart" />
												<input type="hidden" name="add" value="1" />
												<input type="hidden" name="business" value=" " />
												<input type="hidden" name="item_name" value="Kissan Tomato Ketchup, 950g" />
												<input type="hidden" name="amount" value="99.00" />
												<input type="hidden" name="discount_amount" value="1.00" />
												<input type="hidden" name="currency_code" value="USD" />
												<input type="hidden" name="return" value=" " />
												<input type="hidden" name="cancel_return" value=" " />
												<input type="submit" name="submit" value="Add to cart" class="button" />
											</fieldset>
										</form>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- //special offers -->

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
							<h3>店铺</h3>
							<ul>
								<li>
									<a href="product.html">361</a>
								</li>
								<li>
									<a href="product.html">安踏</a>
								</li>
								<li>
									<a href="product.html">李宁</a>
								</li>
								<li>
									<a href="product2.html">万斯</a>
								</li>
								<li>
									<a href="product.html">匡威</a>
								</li>
								<li>
									<a href="product2.html">天猫超市</a>
								</li>
							</ul>
						</div>
						<div class="col-xs-6 footer-grids agile-secomk">
							<ul>
								<li>
									<a href="product.html">Snacks & Beverages</a>
								</li>
								<li>
									<a href="product.html">Bread & Bakery</a>
								</li>
								<li>
									<a href="product.html">Sweets</a>
								</li>
								<li>
									<a href="product.html">Chocolates & Biscuits</a>
								</li>
								<li>
									<a href="product2.html">Personal Care</a>
								</li>
								<li>
									<a href="product.html">Dried Fruits & Nuts</a>
								</li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
					<!-- //footer categories -->
					<!-- quick links -->
					<div class="col-sm-5 address-right">
						<div class="col-xs-6 footer-grids">
							<h3>Quick Links</h3>
							<ul>
								<li>
									<a href="about.html">About Us</a>
								</li>
								<li>
									<a href="contact.html">Contact Us</a>
								</li>
								<li>
									<a href="help.html">Help</a>
								</li>
								<li>
									<a href="faqs.html">Faqs</a>
								</li>
								<li>
									<a href="terms.html">Terms of use</a>
								</li>
								<li>
									<a href="privacy.html">Privacy Policy</a>
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
			Login: {
				userAccount: '',
				userPassword: ''
			},
			Register: {
				userAccount: '',
				userPassword: '',
				userRePassword: ''
			},
			OpenStore: {
				ownerId: '',
				storeId: '',
				storeName: '',
				storeDesc: '',
				storeCate: '',
				file: {}
			}
		}
	},
	mounted: function() {
		var _this = this
		layui.use('layer', function() {
			_this.layer = layui.layer
		})
		this.getUser()
	},
	methods: {
		uploadFile(e) {
			var _this = this
		},
		getUser() {
			var _this = this
			_this.$axios
				.post('http://localhost:8081/api/user/getUser', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res)
					_this.User = res.data
					console.log(_this.User)
				})
				.catch(err => {
					console.log(err.data)
				})
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
				.post('http://localhost:8081/api/user/login', _this.Login, {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res.data)
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
						'http://localhost:8081/api/user/userSignUp',
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
			// var loading = _this.layer.load(0, {
			// 	shade: false,
			// 	time: 30 * 1000
			// })
			// _this.$axios
			// 	.post(
			// 		'http://localhost:8081/api/store/addStore',
			// 		_this.OpenStore,
			// 		{
			// 			emulateJSON: true,
			// 			withCredentials: true
			// 		}
			// 	)
			// 	.then(res => {
			// 		console.log(res)
			// 		_this.layer.close(loading)
			// 		// if (res.statusText == 'OK') {
			// 		// 	_this.layer.close(loading)
			// 		// 	_this.layer.msg('修改成功!')
			// 		// 	_this.getUser()
			// 		// }
			// 	})
			// 	.catch(err => {
			// 		console.log(err.data)
			// 	})
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
					'http://localhost:8081/api/user/updateUser',
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
</style>