# Avvinue Clowder

The component library for Avvinue. The intention of this repo is to centralize all common components so development time is reduced.

Development
Components, composables and styling can be added/adjusted in their respective places.

Those will be fed into the index.js file located at src/ which will build to the /dist folder after running yarn build.

How to use
`yarn add avvinue-clowder`

`vite.config.js`:

```
import { resolve } from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        eslintPlugin(),
        quasar(), // do not specify a sass/scss file here
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
```

`main.js`:

```
import { config } from 'avvinue-clowder'

import "../node_modules/avvinue-clowder/dist/style.css"

app.use(Quasar, {
    plugins: {},
    config: {
        brand: { ...config.brand}
    },
})
```

Component file: `import { AVColorPicker, AVRow } from "avvinue-clowder"`

### Releases

`1.0.2`
-Added max height on buttons and removed padding for buttons inside of AVInput before and after slots.

`1.0.3`
-Removed default button in Modal component

`1.0.4`
-Added AVRadio
-Adjustments to AVRow to better handle layouts

`1.0.5`
-AVFormWrapper can now be disabled and will show appropriate styling when in that state
-AVToggle component created

`1.0.8`
-Updating how the theme variables are exported

`2.0.1`
