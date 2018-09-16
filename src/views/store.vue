<template>
  <div>
    <a-input @input="handleInput" />
    <p>{{inputValue}} -> lastLetter is {{inputValueLastLetter}}</p>
    <a-show :content="inputValue" />
    <pre>appName: {{ appName }}
      appNameWithVersion: {{appNameWithVersion}}</pre>
    <pre>userName: {{ userName }}
      firstLetter: {{firstLetter}}
    </pre>
    <button @click="handleChangeAppName">修改appName</button>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      todoList: state => state.todo ? state.todo.todoList :[]
    }),

    // ...mapState([
    //   'appName'
    // ])

    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }

    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),

    appName () {
      return this.$store.state.appName
    },

    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },

    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),

    ...mapActions([
      'updateAppName'
    ]),

    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // this.SET_APP_NAME('newAppName')

      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      this.updateAppName()

    },
    changeUserName () {
      this.SET_USER_NAME('vue-course')
      // this.$store.dispatch('updateAppName', '123')
    },
    registerModule () {
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    }
  }
}
</script>

