<template>
  <v-card class="card card-facebook">
    <v-card-subtitle>Facebook</v-card-subtitle>
    <v-skeleton-loader type="image" class="facebook-image" />
    <div class="facebook-text">
      <span class="facebook-url-title">{{ facebookURL }}</span>
      <div class="facebook-content">
        <span class="facebook-title">{{ metaTitle }}</span>
        <span class="facebook-description">{{ metaDescription }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FacebookCard',
  data () {
    return {
      facebookURL: ''
    }
  },
  computed: {
    ...mapGetters('meta', ['metaTitle', 'metaDescription', 'metaURL'])
  },
  watch: {
    metaURL () {
      this.facebookURLHostName()
    }
  },
  mounted () {
    this.facebookURLHostName()
  },
  methods: {
    facebookURLHostName () {
      const url = new URL(this.metaURL)
      this.facebookURL = url.hostname
    }
  }
}
</script>

<style lang="scss">
.card {
  &.card-facebook {
    .facebook-image {
      .v-skeleton-loader__image {
        height: 180px;
        border-top: 1px solid #dadde1;
        border-bottom: 1px solid #dadde1;
      }
    }
    .facebook-text {
      padding: 10px 12px;
      color: #1d2129;
      border-bottom: 1px solid #dadde1;
      background: #f2f3f5;
      .facebook-url-title {
        border-collapse: separate;
        color: #606770;
        direction: ltr;
        display: block;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 12px;
        height: 11px;
        line-height: 11px;
        overflow-x: hidden;
        overflow-y: hidden;
        text-align: left;
        text-overflow: ellipsis;
        text-transform: uppercase;
        user-select: none;
        white-space: nowrap;
        width: 501px;
        word-wrap: break-word;
        -webkit-border-horizontal-spacing: 0px;
        -webkit-border-vertical-spacing: 0px;
        -webkit-font-smoothing: antialiased;
      }
      .facebook-content {
        border-collapse: separate;
        color: #4b4f56;
        direction: ltr;
        display: block;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 12px;
        height: 46px;
        line-height: 14.4px;
        max-height: 46px;
        overflow-x: hidden;
        overflow-y: hidden;
        text-align: left;
        user-select: none;
        word-wrap: break-word;
        -webkit-border-horizontal-spacing: 0px;
        -webkit-border-vertical-spacing: 0px;
        -webkit-font-smoothing: antialiased;
        margin-top: 5px;
        .facebook-title {
          margin-top: 5px;
          border-collapse: separate;
          color: #1d2129;
          cursor: pointer;
          direction: ltr;
          display: inline;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          height: auto;
          letter-spacing: normal;
          line-height: 18px;
          text-align: left;
          text-decoration-color: #1d2129;
          text-decoration-line: none;
          text-decoration-style: solid;
          transition-delay: 0s;
          transition-duration: 0.1s;
          transition-property: color;
          transition-timing-function: ease-in-out;
          user-select: none;
          white-space: normal;
          width: auto;
          word-wrap: break-word;
          -webkit-border-horizontal-spacing: 0px;
          -webkit-border-vertical-spacing: 0px;
          -webkit-font-smoothing: antialiased;
        }
        .facebook-description {
          border-collapse: separate;
          color: #606770;
          direction: ltr;
          display: -webkit-box;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 14px;
          height: 18px;
          line-height: 20px;
          margin-top: 3px;
          max-height: 80px;
          overflow-x: hidden;
          overflow-y: hidden;
          text-align: left;
          text-overflow: ellipsis;
          user-select: none;
          white-space: normal;
          word-break: break-word;
          word-wrap: break-word;
          -webkit-border-horizontal-spacing: 0px;
          -webkit-border-vertical-spacing: 0px;
          -webkit-box-orient: vertical;
          -webkit-font-smoothing: antialiased;
          -webkit-line-clamp: 1;
        }
      }
    }
  }
}

@media screen and (min-width: 770px) {
  .card {
    &.card-facebook {
      width: 500px;
      .facebook-image {
        .v-skeleton-loader__image {
          border: 1px solid #dadde1;
          height: 261px;
        }
      }
      .facebook-text {
        border: 1px solid #dadde1;
        border-top: none;
        .facebook-content {
          .facebook-title {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
