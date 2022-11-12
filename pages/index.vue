<template>
  <v-app>
    <v-container>
      <v-row dense>
        <v-col md="4">
          <v-card class="card card-form">
            <v-card-subtitle>The information that will be displayed on Google and social media.</v-card-subtitle>
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
            <v-text-field
              v-model="metaData.image"
              label="Image"
              filled
              persistent-hint
              hint="Recommended: 1200x630px"
              @input="updateMetaImage"
            />
          </v-card>

          <v-card class="card">
            <p>I can am currently working adding additional features and platforms. Please feel free to reach out to me if you have any specific request that I can add to the roadmap. In the meantime, here is another site that does a decent job mockups: <a href="https://admockups.com/" target="_blank">https://admockups.com/</a>.</p>
          </v-card>
        </v-col>

        <v-col md="4">
          <v-card class="card">
            <v-card-subtitle>Code Example</v-card-subtitle>
            <code>
              &lt;!-- HTML Meta Tags --&gt;<br>
              &lt;title&gt;{{ metaData.metaTitle }}&lt;/title&gt;<br>
              &lt;meta name="description" content="{{ metaData.metaDescription }}"&gt;<br><br>

              &lt;!-- Facebook Meta Tags --&gt;<br>
              &lt;meta property="og:url" content="{{ metaData.url }}"&gt;<br>
              &lt;meta property="og:type" content="website"&gt;<br>
              &lt;meta property="og:title" content="{{ metaData.metaTitle }}"&gt;<br>
              &lt;meta property="og:description" content="{{ metaData.metaDescription }}"&gt;<br>
              &lt;meta property="og:image" content="{{ metaData.image }}"&gt;<br><br>

              &lt;!-- Twitter Meta Tags --&gt;<br>
              &lt;meta name="twitter:card" content="summary_large_image&gt;<br>
              &lt;meta property="twitter:url" content="{{ metaData.url }}"&gt;<br>
              &lt;meta name="twitter:title" content="{{ metaData.metaTitle }}"&gt;<br>
              &lt;meta name="twitter:description" content="{{ metaData.metaDescription }}"&gt;<br>
              &lt;meta name="twitter:image" content="{{ metaData.image }}"&gt;<br><br>

              &lt;!-- Meta Tags Generated via https://meta-tags.morsecodemedia.com --&gt;
            </code>
          </v-card>
        </v-col>

        <v-col md="4">
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
        url: 'https://meta-tags.morsecodemedia.com',
        image: ''
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
    this.setMetaImage(this.metaData.image)
  },
  methods: {
    ...mapMutations('meta', ['setMetaTitle', 'setMetaDescription', 'setMetaURL', 'setMetaImage']),
    updateMetaTitle (e) {
      this.setMetaTitle(this.metaData.metaTitle)
    },
    updateMetaDescription (e) {
      this.setMetaDescription(this.metaData.metaDescription)
    },
    updateMetaURL (e) {
      this.setMetaURL(this.metaData.url)
    },
    updateMetaImage (e) {
      this.setMetaImage(this.metaData.image)
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
  max-width: 1400px;
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
