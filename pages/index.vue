<template>
  <v-app>
    <v-container>
      <v-row dense>
        <v-col md="6">
          <v-card class="card card-form">
            <v-text-field
              v-model="metaTitle"
              :counter="60"
              :rules="metaTitleRules"
              label="Meta Title"
              filled
              persistent-hint
            />
            <v-textarea
              v-model="metaDescription"
              :counter="160"
              label="Meta Description"
              :rules="metaDescriptionRules"
              :value="metaDescription"
              filled
              rows="4"
              row-height="4"
              no-resize
            />
            <v-text-field
              v-model="url"
              label="URL"
              filled
            />
          </v-card>
        </v-col>

        <v-col md="6">
          <v-card class="card card-google">
            <v-card-subtitle>Google</v-card-subtitle>
            <span class="google-title">{{ metaTitle }}</span>
            <div class="google-url">
              <span class="google-url-title">{{ url }}</span>
              <span class="google-url-arrow" />
            </div>
            <span class="google-description">{{ googleTruncatedMetaDescription }}</span>
          </v-card>

          <v-card class="card card-facebook">
            <v-card-subtitle>Facebook</v-card-subtitle>
            <v-skeleton-loader type="image" class="facebook-image" />
            <div class="facebook-text">
              <span class="facebook-url-title">{{ url }}</span>
              <div class="facebook-content">
                <span class="facebook-title">{{ metaTitle }}</span>
                <span class="facebook-description">{{ metaDescription }}</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      metaTitle: 'Meta Titles | a morsecodemedia tool.',
      metaTitleRules: [v => v.length <= 60 || 'Ideal meta titles are less than 60 characters'],
      metaDescription: 'A page to check character count and preview meta tags in various scenarios.',
      metaDescriptionRules: [v => v.length <= 160 || 'Ideal meta descriptions are less than 160 characters'],
      googleTruncatedMetaDescription: '',
      url: 'https://meta-tags.morsecodemedia.com'
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
      if (this.metaDescription.length > 160) {
        this.googleTruncatedMetaDescription = this.metaDescription.substring(0, 160) + '...'
      } else {
        this.googleTruncatedMetaDescription = this.metaDescription
      }
    }
  },
  head () {
    return {
      title: 'Meta Tags | a morsecodemedia tool',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Meta Tags | a morsecodemedia tool' },
        { hid: 'twtitle', name: 'twitter:title', content: 'Meta Tags | a morsecodemedia tool' },
        { hid: 'googlename', itemprop: 'name', content: 'Meta Tags | a morsecodemedia tool' },
        { hid: 'description', name: 'description', content: 'A page to check character count and preview meta tags in various scenarios.' },
        { hid: 'ogdescription', property: 'og:description', content: 'A page to check character count and preview meta tags in various scenarios.' },
        { hid: 'twdescription', name: 'twitter:description', content: 'A page to check character count and preview meta tags in various scenarios.' },
        { hid: 'googledescription', itemprop: 'description', content: 'A page to check character count and preview meta tags in various scenarios.' },
        { hid: 'ogurl', property: 'og:url', content: 'https://meta-tags.morsecodemedia.com' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://meta-tags.morsecodemedia.com' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://meta-tags.morsecodemedia.com' + this.$route.path }
      ]
    }
  }
}
</script>

<style lang="scss">
.card {
  padding: 12px 16px;
  margin: 0 auto 25px;
  .v-card__subtitle {
    padding: 0 16px 16px 0;
  }
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
