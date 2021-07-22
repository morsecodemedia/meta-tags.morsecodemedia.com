<template>
  <div>
    <div id="skip">
      <a class="skip-main" href="#main">Skip to main content</a>
    </div>
    <nuxt
      id="main"
      ref="main"
      aria-label="main"
      role="main"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
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
