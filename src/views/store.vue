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
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'

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
      userName: state => state.user.userName
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

    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },

    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

