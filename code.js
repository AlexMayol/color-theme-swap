new Vue({
  el: '#main',
  data: {
    selected: ''
  },
  methods: {
    changeTheme() {
      const el = document.documentElement;
      el.classList.value = '';
      el.classList.add(this.selected);
    }
  }
})