// 配置Vuex中的State支持TS类型推断 https://vuex.vuejs.org/guide/typescript-support.html
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 声明 State 类型
export interface State {
  count: number
}

// 声明 Injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 创建 Vuex 容器
export const store = createStore<State>({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
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
