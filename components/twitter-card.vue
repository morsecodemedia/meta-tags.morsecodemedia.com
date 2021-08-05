<template>
  <v-card class="card card-twitter">
    <v-card-subtitle>Twitter</v-card-subtitle>
    <div class="card-twitter-container">
      <v-skeleton-loader type="image" class="twitter-image" />
      <div class="twitter-text">
        <span class="facebook-title">{{ metaTitle }}</span>
        <span class="facebook-description">{{ metaDescription }}</span>
        <span class="twitter-url-title">{{ facebookURL }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TwitterCard',
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
  &.card-twitter {
    .card-twitter-container {
      cursor: pointer;
      position: relative;
      display: block;
      background-color: #ffffff;
      border-radius: 14px;
      border-style: solid;
      border-color: #E1E8ED;
      border-width: 1px;
      margin-left: 44px;
      font-size: 14px;
      transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -48px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: #EBF1FA;
      }
      .twitter-image {
        height: 150px;
        background-size: cover;
        background-color: #E1E8ED;
        background-repeat: no-repeat;
        background-position: center;
        border-style: solid;
        border-color: inherit;
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
        border-bottom-width: 1px;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        overflow: hidden;
        .v-skeleton-loader__image {
        }
      }
      .twitter-text {
        padding: 9px;
        .twitter-title {
          display: block;
          margin: 0 0 0.15em;
          font-size: 14px;
          line-height: 18.375px;
          letter-spacing: normal;
          overflow: hidden;
        }
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
}

@media screen and (min-width: 770px) {
  .card {
    &.card-twitter {
      width: 504px;
      .card-twitter-container {
        margin-left: 0;
        overflow: hidden;
        &::before {
          display: none;
        }
      }
      .twitter-image {
        width: 504px;
        height: 252px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        overflow: hidden;
        .v-skeleton-loader__image {
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
