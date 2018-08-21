export default {
  install(Vue, options = {}) {
    let pluginOptions = {
      disableLogMethod: false
    }
    Object.assign(pluginOptions, options)

    Vue.directive('focus', {
      inserted: function(el, binding) {
        let elementId = el.id;
        let focusAlways = binding.arg;
        if (focusAlways) {
          return el.focus();
        }
        if (elementId === binding.value) {
          el.focus();
        }
      }
    });

    Vue.directive('alert', {
      inserted: function(el, binding) {
        el.style.backgroundColor = binding.value || 'red';
      }
    });

    if (!pluginOptions.disableLogMethod) {
      Vue.prototype.$log = function(message) {
        console.log(message); // eslint-disable-line
      }
    }

    Vue.component('MyButton', {
      props: {
        title: {
          default: 'Default',
          type: String
        }
      },
      render(createElement) {
        return createElement('a', {
          on: {
            click: this.onClick
          }
        }, [ this.title ])
      },
      methods: {
        onClick(event) {
          this.$emit('click', event)
        }
      }
    })
  }
}