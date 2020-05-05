<div class="container-fluid main profile">
			<div class="row">
				<!--左边主要内容-->
				<div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
					<!--正文-->
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<h4 class="question-title">
							<span>{{Discuss.title}}</span>
						</h4>
						<span class="text-desc">
							作者：
							<!-- <span>{{Discuss.userDetail.userName}}</span> | -->
							发布时间：
							<span>{{Discuss.gmtCreate}}</span> |
							阅读数：
							<span>{{Discuss.viewCount}}</span>
						</span>
						<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12" />

						<!--内容-->
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="question-view">
							<p>{{Discuss.description}}</p>
						</div>

						<!--标签-->
						<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<span class="question-tag" th:each="tag : ${question.tag.split(',')}">
								<a class="community-tag">{{Discuss.tag}}</a>
							</span>
						</div>

						<!--编辑-->
						<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<a class="community-menu" v-if="User.id == Discuss.userDetail.userId">
								<span class="glyphicon glyphicon-pencil" aria-hidden="true">编辑</span>
							</a>
						</div>
						<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
					</div>

					<!--回复-->
					<!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<h4>
							<span th:text="${question.commentCount}"></span> 个回复
						</h4>
						<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12 comment-sp" />
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 comments" th:each="comment : ${comments}">
							<div class="media">
								<div class="media-left">
									<a href="#">
										<img class="media-object img-rounded" th:src="${comment.user.avatarUrl}" />
									</a>
								</div>
								<div class="media-body" th:id="${'comment-body-'+comment.id}">
									<h5 class="media-heading">
										<span th:text="${comment.user.name}"></span>
									</h5>
									<div th:text="${comment.content}"></div>
									<div class="menu">
										<span class="glyphicon glyphicon-thumbs-up icon"></span>
										<span th:data-id="${comment.id}" onclick="collapseComments(this)" class="comment-icon">
											<span class="glyphicon glyphicon-comment"></span>
											<span th:text="${comment.commentCount}"></span>
										</span>
										<span class="pull-right" th:text="${#dates.format(comment.gmtCreate,'yyyy-MM-dd')}"></span>
									</div>


									<div
										class="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse sub-comments"
										th:id="${'comment-'+comment.id}"
									>
										<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<input
												type="text"
												class="form-control"
												placeholder="评论一下……"
												th:id="${'input-'+comment.id}"
											/>
											<button
												type="button"
												class="btn btn-success pull-right"
												onclick="comment(this)"
												th:data-id="${comment.id}"
											>评论</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>-->

					<!--回复输入框-->
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<h4>提交回复</h4>
						<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12 comment-sp" />
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="comment_section">
							<div class="media">
								<div class="media-body">
									<h5 class="media-heading">
										<span>用户评论</span>
									</h5>
								</div>
							</div>
							<textarea class="form-control comment" rows="6" id="comment_content"></textarea>
							<button type="button" class="btn btn-success btn-comment" @click="comment()">评论</button>
						</div>
					</div>
				</div>

				<!--右边信息块-->
				<div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<h4>发起人</h4>
						<!-- <div class="media">
							<div class="media-left">
								<a href="#">
									<img class="media-object img-rounded" th:src="${question.user.avatarUrl}" />
								</a>
							</div>
							<div class="media-body">
								<h5 class="media-heading">
									<span th:text="${question.user.name}"></span>
								</h5>
							</div>
						</div>-->
					</div>
					<!--相关问题-->
					<hr class="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<h4>相关问题</h4>
						<ul class="question-related">
							<!-- <li th:each="related : ${relatedQuestions}">
								<a>11</a>
							</li>-->
						</ul>
					</div>
				</div>
			</div>
		</div>