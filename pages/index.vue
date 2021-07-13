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
  mounted () {
    this.googleMeta()
  },
  watch: {
    metaDescription () {
      this.googleMeta()
    }
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
      title: 'Meta Tags | A morsecodemedia tool',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Meta Tags | A morsecodemedia tool' },
        { hid: 'twtitle', name: 'twitter:title', content: 'Meta Tags | A morsecodemedia tool' },
        { hid: 'googlename', itemprop: 'name', content: 'Meta Tags | A morsecodemedia tool' },
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
}

  @media screen and (min-width: 770px) {
    .card {
      width: 600px;
      &.card-google {
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
