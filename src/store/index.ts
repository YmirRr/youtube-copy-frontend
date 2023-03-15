// 配置Vuex中的State支持TS类型推断 https://vuex.vuejs.org/guide/typescript-support.html
import { User } from '@/api/user'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 声明 State 类型
export interface State {
  user: User | null
}

// 声明 Injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 创建 Vuex 容器
export const store = createStore<State>({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },
  getters: {
  },
  mutations: {
    setUser (state, user: User) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})

// 声明你自己的 useStore
export function useStore () {
  return baseUseStore(key)
}
