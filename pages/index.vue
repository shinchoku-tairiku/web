<template>
  <section>
    <Book v-for="book in books" :book="book" :key="book.id"></Book>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import Book from "~/components/Book.vue"

@Component({
  components: {
    Book
  }
})
export default class extends Vue {
  @State books
}
</script>

<style scoped></style>
