<template>
  <b-card-group deck>
    <b-card header-tag="header" footer-tag="footer">

      <h3 slot="header" class="s-title mb-0">
        <span class="badge badge-danger" v-if="book.new">New!</span>
        <a :href="anchor"><i class="fas fa-book-open"></i></a>
        <a :name="book.id"> {{book.title}}</a>
      </h3>

      <b-container>
        <b-row>

          <b-col cols="3">
            <h3 class="s-event">
              <a :href="book.event.url" target="_blank"><b-badge pill variant="primary">{{book.event.date}}</b-badge><span class="s-t"> {{book.event.title}}</span></a>
            </h3>
            <a :href="book.event.circle.url" target="_blank"><img :src="book.image_url"></a>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-button :href="book.event.circle.url"
                          target="_blank"
                          variant="success"
                          class="s-circle-btn">
                  サークル詳細
                </b-button>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="9">
            <h3>場所</h3>
            <p><a :href="book.event.circle.location.url">{{book.event.circle.location.label}}</a></p>

            <h3>紹介</h3>
            <p>{{book.description}}</p>

            <h3>内容</h3>

            <b-table :items="book.content.items" :fields="book.content.fields">
              <template slot="author" slot-scope="data">
                <a :href="data.value.url">{{data.value.name}}</a>
              </template>
            </b-table>

            <h3>価格</h3>
            <ul>
              <li v-for="price in book.prices" :key="price.text">
                <span v-if="price.link != undefined"><a :href="price.link.url" target="_blank">{{price.link.text}}</a>&emsp;</span>{{price.text}}
              </li>
            </ul>

            <p></p>
            <h3>サポート</h3>
            <p><a href="mailto:shinchoku.tairiku@gmail.com">shinchoku.tairiku@gmail.com</a></p>

            <p></p>
            <h3 v-if="book.thanks !== undefined">謝辞</h3>
            <b-row v-if="book.thanks !== undefined">
              <b-col cols="12" v-for="thank in book.thanks" :key="thank.for">
                <small>{{thank.for}}: <a :href="thank.url" target="_blank">{{thank.name}}</a></small>
              </b-col>
            </b-row>
          </b-col>

        </b-row>
      </b-container>

    </b-card>
  </b-card-group>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Book extends Vue {
  @Prop() book
  data() {
    return {
      anchor: "#" + this.book.id
    }
  }
}
</script>

<style scoped>

</style>
