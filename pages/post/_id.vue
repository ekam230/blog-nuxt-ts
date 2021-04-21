<template lang="pug">

.page
  SocialHead(
    :title="currentPost.title"
    :description="currentPost.desc"
    :image="currentPost.img"
  )
  link-to-home
  section-header(
    :title="currentPost.title"
  )
  post-full(
    :post="currentPost"
  )
  div
    p {{currentId}} {{currentPost.title}}
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'
import posts from '~/content/posts'

export default Vue.extend({
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      windowWidth: 432432,
    }
  },
  computed: {
    currentId(): number {
      return Number(this.$route.params.id)
    },
    currentPost(): Post | undefined {
      const { locale } = (this as any).$i18n

      return posts[locale as 'en' | 'ru'].find(
        (post: Post) => post.id === this.currentId
      )
    },
  },
})
</script>
