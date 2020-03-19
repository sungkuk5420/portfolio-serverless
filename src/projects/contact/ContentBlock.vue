<template>
  <div class="block-content">
    <h3 class="block-title">連絡先</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="contact-content">
          <div class="contact-icon">
            <i class="fa fa-map-marker"></i>
          </div>
          <div class="contact-details">
            <h5>住所</h5>
            <p>大阪府大阪市</p>
          </div>
        </div>
        <div class="contact-content">
          <div class="contact-icon">
            <i class="fa fa-phone"></i>
          </div>
          <div class="contact-details">
            <h5>電話番号</h5>
            <p>+81 - 070-4805-2725</p>
          </div>
        </div>
        <div class="contact-content">
          <div class="contact-icon">
            <i class="fa fa-envelope"></i>
          </div>
          <div class="contact-details">
            <h5>Eメール</h5>
            <p>sungkuk5420@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input
            name="name"
            type="text"
            class="form-control requiretop"
            placeholder="* タイトル"
            v-model="subject"
          />
        </div>
        <!-- <div class="form-group">
          <input
            name="email"
            type="email"
            class="form-control requiretop"
            placeholder="* 返信先Eメール"
            v-model="email"
          />
        </div>-->
        <div class="form-group">
          <textarea
            rows="6"
            name="content"
            class="form-control requiretop"
            placeholder="* メッセージ"
            v-model="content"
          ></textarea>
        </div>
        <div class="form-group">
          <button @click="sendMail" class="btn btn-dark selected">メッセージ送信</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { T } from "../../store/module-example/types";
import { mapGetters } from "vuex";

export default {
  name: "ContentBlock",
  components: {},
  data() {
    return {
      subject: "",
      email: "",
      content: ""
    };
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {},
  methods: {
    sendMail() {
      var link = `mailto:sungkuk5420@gmail.com?&subject=${this.subject}&body=${this.content}`;
      window.location.href = link;
    }
  }
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
