<template>
  <div class="footer">
    <ul>
    	<template v-for="item in list">
	        <li :class="{ active: item.path == $route.path }">
	            <router-link :to="item.path">
	                <em>{{ item.title }}</em>
	                <div class="count" v-if="item.path == '/my/messages' && count > 0">{{ count }}</div>
	            </router-link>
	        </li>
	    </template>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
        return {
            count: 0,
            list: [
                {
                    title: '首页',
                    path: '/',
                    icon: 'icon-index'
                },
                {
                    title: '发表',
                    path: '/create',
                    icon: 'icon-edit'
                },
                {
                    title: '消息',
                    path: '/message',
                    icon: 'icon-msg'
                },
                {
                    title: '我的',
                    path: '/user',
                    icon: 'icon-user'
                }
            ]
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.footer
 position: fixed;
 right: 0;
 bottom: 0;
 left: 0;
 z-index: 50;
 height: 49px;
 text-align: center;
 border-top: 1px solid #ddd;
 ul
  display:flex;
  flex-direction:row;
  li
   line-height: 49px;
   flex: 1;
   em
    font-style: normal;
 
</style>
