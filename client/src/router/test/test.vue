<template>
  <div>
    {{txt}}
    <div>
      <p ><input  type = "text" name = "username" placeholder="用户名" v-model = "username"/></p>
			<p ><input  type = "password" name = "password" placeholder="密码" v-model = "password"/></p>
    </div>
    <button @click="register">注册</button>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:'',
      txt:''
    };
  },
  created () {
    this.$axios.get('/mock/test/test').then(res => {
      this.txt = res.data.msg;
    });
  },
  methods: {
    register () {
      let params = {
        username: this.username,
        password: this.password
      };
      console.log(params);
      this.$axios.post('/api/user/register', params).then(res => {
        console.log(res);
        if (res.code === 200) {
          alert('注册成功');
        }
      });
    },
    login () {
      let params = {
        username: this.username,
        password: this.password
      };
      this.$axios.post('/api/user/login', params).then(res => {
        if (res.code === 200) {
          alert('登录成功');
        }
      });
    }
  }
};
</script>

<style lang="less">

</style>
