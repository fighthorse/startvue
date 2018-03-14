<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="dat.title"></h2>
    <p>作者：{{dat.author.loginname}}发表于：{{$utils.goodTime(dat.create_at)}}</p>
    <hr>
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies" :key='i.id' >
        <p>评论者：{{i.author.loginname}}评论于：{{$utils.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {
        'author': { 'loginname': ' ' },
        'create_at': ' ',
        'content': ' ',
        'replies': [
          {
            'author': { 'loginname': ' ' },
            'create_at': ' ',
            'content': ' '
          }
        ]
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      if (this.id === undefined) {
        alert('error id')
      } else {
        this.$api.get('topic/' + this.id, null, r => {
          this.dat = r.data
        })
      }
    }
  }
}
</script>
