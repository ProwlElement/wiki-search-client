import { defineStore } from 'pinia'
import axios from 'axios'

import type { SearchResponse } from '../types/api'

const baseURL = 'http://localhost:3000/api/search/'

export const useSearchStore = defineStore('search', {
  state: () => ({
    results: [] as Array<{ title: string; snippet: string }>,
    loading: false,
    errorBag: [] as Error[],
    history: [] as Array<{ title: string; snippet: string }>,
  }),
  actions: {
    async searchWiki(query: string): Promise<SearchResponse<null>> {
      // check for null

      console.log('searching...');

      this.errorBag = []
      this.loading = true

      try {
        const searchResults = await axios.get(String(baseURL) + query)
        this.results = searchResults.data.query.search
        this.history = [...this.history, ...this.results]
        this.query = ""
        return { data: null, status: searchResults.status }
      } catch (err) {
        this.errorBag.push(new Error(String(err)))
        return { data: null, status: 500 }
      } finally {
        this.loading = false
      }
    },
  },
})
