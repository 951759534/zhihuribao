/* eslint-disable no-extend-native */
/**
 * Created by K550jk on 2017/6/5.
 */
import * as types from './mutation-types'
export const mutations = {
  [types.RECEIVE_LATESTARTICLES] (state, { latestArticles }) {
    if (!latestArticles.erro) {
      state.allArticles = [];
      state.allArticles[0] = latestArticles
    } else {
      state.allArticles[0] = JSON.parse(localStorage.getItem('latestArticles'))
    }
    state.loadStart = false
  },
  [types.RECEIVE_NEXTTARTICLES] (state, {nextArticles}) {
    state.allArticles.push(nextArticles)
    state.loadNext = !state.loadNext
  },
  [types.CHANGE_LOADNEXT] (state) {
    state.loadNext = !state.loadNext
  },
  [types.CHANG_LOADSTART] (state) {
    state.loadStart = !state.loadStart
  }
};
export const state = {
  allArticles: Array,
  loadNext: false,
  loadStart: false   //  加载前和加载中状态
};
