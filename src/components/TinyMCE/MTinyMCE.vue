<template>
  <div>
    <textarea ref="editor"></textarea>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';

import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';

export default {
  name: 'MTinyMCE',
  emits:["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  mounted() {
    tinymce.init({
      selector: this.$refs.editor,
      plugins: ['link', 'image', 'lists'],
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
      skin_url: '/skins/ui/oxide',
      content_css: '/skins/content/default/content.css',
      width: '100%',
      height: '300px',
      setup: editor => {
        editor.on('change', () => {
          const content = editor.getContent();
          this.$emit('update:modelValue', content);
        });
      },
    });
  },
};
</script>