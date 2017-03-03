<template>
  <div class="list">
  	<scroller lock-x scrollbar-y use-pullup use-pulldown height="-50" @on-pullup-loading="onLoadMore"
              @on-pulldown-loading="onRefresh" v-model="status" ref="scroller">
    <ul class="list-ul">
    	<li v-for="item in articleList" class="list-li">
    		<div class="list-title">
    			 <div class="feed-label" :class="[item.top ? 'feed-label-top' : `feed-label-other`]">
                {{item.tab | translateTab(item.top)}}
              </div>
              <p v-text="item.title"></p>
    		</div>
    		<div class="list-top">
    			<div class="list-avatar"><img :src="item.author.avatar_url" alt="headImgUrl"/></div>
    			<div class="list-middle">
    				<div class="user-name" v-text="item.author.loginname"></div>
    				<div class="user-time" >{{item.create_at | formatDate('yyyy-MM-dd hh:mm:ss')}}</div>
    			</div>
    			<div class="list-right">
    				<div class="feed-count">
	            <span v-text="item.reply_count"></span> / {{item.visit_count}}
	          </div>
	          <div class="feed-pass">
	            {{item.last_reply_at | timeAgo}}
	          </div>
    			</div>
    		</div>
    	</li>
    </ul>
    <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up"
           style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
        <span v-show="status.pullupStatus === 'loading'" style="line-height: 40px;"><spinner type="ios-small"></spinner></span>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
	data () {
      return {
        page: 1,
        limit: 20,
        articleList: [],
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        }
      };
    },
	mounted() {
    this.onRefresh();
  },
	methods: {
		onRefresh () {
			this.$loading.show();
		this.$http.get('https://cnodejs.org/api/v1/topics', {
			params: {
            page: 1,
            limit: 20
          }
		}).then(response => {
		this.articleList = response.body.data;
		this.$nextTick(() => {
              this.$refs.scroller.donePulldown();
              this.$refs.scroller.reset();
              this.$loading.hide();
           });
			console.log(this.articleList);
		}, response => {
		});
		},
		onLoadMore () {
        let _this = this;
        this.$http.get('https://cnodejs.org/api/v1/topics', {
			params: {
            page: 1,
            limit: 20
          }
		}).then(response => {
            this.articleList = this.articleList.concat(response.body.data);
            this.$nextTick(() => {
              _this.page++;
              this.$refs.scroller.donePullup();
              this.$refs.scroller.reset();
            });
          })
          .catch(e => {
            console.log(e);
            this.$vux.toast.show({
              text: '获取数据失败'
            });
            this.$loading.hide();
          });
     }
	},
     computed: {
      minHeight: () => {
        return (document.body.clientHeight >= 400 && document.body.clientHeight <= 736) ? document.body.clientHeight : window.screen.height;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.list-ul
 padding:20px
 .list-li
  padding:5px 0 5px 0
  border-bottom:1px solid red
 .list-title
  display:flex
  flex-direction: row
  .feed-label
   height:20px
   padding:3px
   border-radius:2px
   line-height:20px
   flex:none
   font-size:14px
  .feed-label-top
   background:#80bd01
  .feed-label-other
   background:red
  p
   flex:1
   padding-top:5px
   padding-left:5px
   font-size:16px
 .list-top
  padding-top:5px
  display:flex
  flex-direction: row
  .list-avatar
   flex:0
   img
    width:40px
    height:40px
  .list-middle
   flex:5
   .user-name
    padding:10px 0 0 10px
    font-size:14px
    color:blue
   .user-time
    padding-top:4px
    color:aqua
  .list-right
   flex:2
   .feed-count
    font-size:14px
    span
     color:red
   .feed-pass
    font-size:14px
    padding-top:5px
</style>
