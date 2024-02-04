<template>
  <div>
    <select @change="updateLanguage()" v-model="$root.$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectLocale',
  data() {
    return { langs: ['hu', 'en', 'nl'] }
  },
   methods: {
    updateLanguage() {
      localStorage.setItem("locale", this.$i18n.locale);
    },
  },
  mounted() {
    if (localStorage.getItem("locale")) {
      this.$i18n.locale = localStorage.getItem("locale");
    } else {
      localStorage.setItem("locale", this.$i18n.locale);
    }
  },
}
</script>