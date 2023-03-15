<template>
    <div>
      <!-- eslint-disable vue/html-indent -->
      <q-markdown
      >
        Indented code (4 spaces)

        Inline `code`

            // Some comments (4 spaces on all)
            line 1 of code
            line 2 of code
            line 3 of code

        Block code "fences"

        ```
        Sample text here...
        ```

        Syntax highlighting

        ```vue
        var foo = function (bar) {
          return bar++;
        };

        console.log(foo(5));
        ```
      </q-markdown>
      <!-- eslint-enable vue/html-indent -->
    </div>
  </template>

  <script>
  import { defineComponent, ref } from 'vue'
  import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'
  import '@quasar/quasar-ui-qmarkdown/dist/index.css'

  export default defineComponent({
    name: 'QCode',
    components: {
      QMarkdown
    },

    setup () {
      const model = ref(false),
        model2 = ref(false),
        model3 = ref(false)

      return {
        model,
        model2,
        model3
      }
    }
  })
  </script>
