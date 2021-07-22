<template>
  <v-card class="card card-google">
    <v-card-subtitle>Google</v-card-subtitle>
    <span class="google-title">{{ metaData.metaTitle }}</span>
    <div class="google-url">
      <span class="google-url-title">{{ metaData.url }}</span>
      <span class="google-url-arrow" />
    </div>
    <span class="google-description">{{ googleTruncatedMetaDescription }}</span>
  </v-card>
</template>

<script>
export default {
  name: 'GoogleCard',
  props: {
    metaData: {
      type: Object,
      required: true,
      twoWay: true,
      default: () => {}
    }
  },
  data () {
    return {
      googleTruncatedMetaDescription: ''
    }
  },
  watch: {
    metaDescription () {
      this.googleMeta()
    }
  },
  mounted () {
    this.googleMeta()
  },
  methods: {
    googleMeta () {
      if (this.metaData.metaDescription.length > 160) {
        this.googleTruncatedMetaDescription = this.metaData.metaDescription.substring(0, 160) + '...'
      } else {
        this.googleTruncatedMetaDescription = this.metaData.metaDescription
      }
    }
  }
}
</script>

<style lang="scss">
.card {
  &.card-google {
    font-size: 14px;
    line-height: 20px;
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    .google-title {
      display: block;
      letter-spacing: normal;
      color: #1a0dab;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .google-url {
      display: block;
      height: 17px;
      white-space: nowrap;
      border-bottom: 1px solid #ddd;
      padding-bottom: 22px;
      margin-bottom: 6px;
      .google-url-title {
        position: relative;
        top: -2px;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: normal;
        color: #006621;
      }
      .google-url-arrow {
        display: none;
        vertical-align: middle;
        margin-top: -4px;
        margin-left: 3px;
        border-width: 5px 4px 0 4px;
        border-style: solid;
        border-color: #006621 transparent;
      }
    }
    .google-description {
      color: #545454;
      font-size: 13px;
      line-height: 1.4;
      overflow: hidden;
      word-wrap: break-word;
    }
  }
}

@media screen and (min-width: 770px) {
  .card {
    &.card-google {
      width: 600px;
      .google-title {
        font-size: 18px;
        line-height: 1.2;
      }
      .google-url {
        border: none;
        padding: 0;
        margin: 0;
      }
      .google-url-arrow {
        display: inline-block;
      }
    }
  }
}
</style>
