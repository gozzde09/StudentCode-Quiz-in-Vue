import { defineStore } from 'pinia'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    category: ''
  }),
  actions: {
    setCategory(value) {
      this.category = value
      console.log(this.category)
    }
  }
})
