<template>
  <div class="layout">
    <div class="header">
      <div class="logo">
      Gitcuss
      </div>
    </div>
    <div class="content">
      <div class="body">
        <button v-on:click="getTopic"> </button>
        <mu-sub-header>阳光</mu-sub-header>
        <mu-content-block>
          如果我有一天能见到JavaScript的开发者 我一定会fuckfuckfuckfuck ta
        </mu-content-block>

        <div v-for="(item, index) in items">
          <a v-bind:href="[item.html_url]">{{ item.home_url }}

            <mu-card>
              <mu-row gutter>
                <mu-col width="100" tablet="30" desktop="20">
                  <mu-card-header v-bind:title="item.user.login" v-bind:subTitle="item.updated_at">
                    <mu-avatar size="80" v-bind:src="item.user.avatar_url" slot="avatar"/>
                  </mu-card-header>
                </mu-col>
                <mu-col width="100" tablet="60" desktop="80">
                  <mu-card-title v-bind:title="item.title" v-bind:subTitle="item.updated_at"/>
                  <mu-card-text>{{ item.body }}</mu-card-text>
                </mu-col>
              </mu-row>
            </mu-card>

          </a>
        </div>

      </div>
    </div>
    <div class="footer">
      Gitcuss ©2017 Created by a-wing
    </div>

  </div>
</template>
<script>
let api_url = "https://api.github.com/repos/JRT-FOREVER/JRT-discuss/issues"

export default {
  data () {
    return {
      items: [],
      aaa: "AAAAAAAAAAAAAAAAA",
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    getTopic: function () {
      //axios.get(api_url)
      var _this = this
      this.$ajax.get(api_url)
      .then(function (response) {
        //console.log(_this.aaa)
        //console.log(response.data)
        _this.items = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.content{
  width: 90%;
  margin: 0 auto;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>
