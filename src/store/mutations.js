const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  }
}

export default mutations

// mutations只能做同步的操作，如果需要请求接口获取数据，之后再修改state，需要结合actions
