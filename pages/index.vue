<template>
  <v-app>
    <v-container>
      <v-row dense>
        <v-col md="6">
          <v-card class="card card-form">
            <v-text-field
              v-model="metaData.metaTitle"
              :counter="60"
              :rules="metaTitleRules"
              label="Meta Title"
              filled
              persistent-hint
              @input="updateMetaTitle"
            />
            <v-textarea
              v-model="metaData.metaDescription"
              :counter="160"
              label="Meta Description"
              :rules="metaDescriptionRules"
              :value="metaData.metaDescription"
              filled
              rows="4"
              row-height="4"
              no-resize
              @input="updateMetaDescription"
            />
            <v-text-field
              v-model="metaData.url"
              label="URL"
              filled
              @input="updateMetaURL"
            />
          </v-card>
          <v-card class="card">
            Google
            <div class="inline">
              OFF
              <v-switch
                v-model="googleSwitch"
                inset
              />
              ON
            </div>

            <v-divider />

            Facebook
            <div class="inline">
              OFF
              <v-switch
                v-model="facebookSwitch"
                inset
              />
              ON
            </div>
          </v-card>
        </v-col>

        <v-col md="6">
          <GoogleCard v-if="googleSwitch" />
          <FacebookCard v-if="facebookSwitch" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import GoogleCard from '~/components/google-card.vue'
import FacebookCard from '~/components/facebook-card.vue'
export default {
  name: 'Homepage',
  components: {
    GoogleCard,
    FacebookCard
  },
  data () {
    return {
      metaData: {
        metaTitle: 'Meta Tags | a morsecodemedia tool.',
        metaDescription: 'A page to check character count and preview meta tags in various scenarios.',
        url: 'https://meta-tags.morsecodemedia.com'
      },
      metaTitleRules: [v => v.length <= 60 || 'Ideal meta titles are less than 60 characters'],
      metaDescriptionRules: [v => v.length <= 160 || 'Ideal meta descriptions are less than 160 characters'],
      googleSwitch: true,
      facebookSwitch: true
    }
  },
  created () {
    this.setMetaTitle(this.metaData.metaTitle)
    this.setMetaDescription(this.metaData.metaDescription)
    this.setMetaURL(this.metaData.url)
  },
  methods: {
    ...mapMutations('meta', ['setMetaTitle', 'setMetaDescription', 'setMetaURL']),
    updateMetaTitle (e) {
      this.setMetaTitle(this.metaData.metaTitle)
    },
    updateMetaDescription (e) {
      this.setMetaDescription(this.metaData.metaDescription)
    },
    updateMetaURL (e) {
      this.setMetaURL(this.metaData.url)
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
.container {
  max-width: 1000px;
}
.card {
  padding: 12px 16px;
  margin: 0 auto 25px;
  .v-card__subtitle {
    padding: 0 16px 16px 0;
  }
}
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 150px;
}
.v-divider {
  margin-bottom: 20px;
}
</style>
