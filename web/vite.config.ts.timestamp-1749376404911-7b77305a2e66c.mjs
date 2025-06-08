// vite.config.ts
import { defineConfig } from "file:///C:/Users/Administrator/Documents/Development/NControlUI/web/node_modules/.pnpm/vite@5.4.19_lightningcss@1.30.1/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///C:/Users/Administrator/Documents/Development/NControlUI/web/node_modules/.pnpm/@sveltejs+vite-plugin-svelt_348d02b589482de1d3fbd41933d3335f/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import tailwindcss from "file:///C:/Users/Administrator/Documents/Development/NControlUI/web/node_modules/.pnpm/@tailwindcss+vite@4.1.8_vite@5.4.19_lightningcss@1.30.1_/node_modules/@tailwindcss/vite/dist/index.mjs";
import { resolve } from "path";
var vite_config_default = defineConfig({
  plugins: [svelte(), tailwindcss()],
  base: "./",
  // fivem nui needs to have local dir reference
  resolve: {
    alias: {
      "@assets": resolve("./src/assets"),
      "@components": resolve("./src/components"),
      "@providers": resolve("./src/providers"),
      "@stores": resolve("./src/stores"),
      "@utils": resolve("./src/utils"),
      "@typings": resolve("./src/typings"),
      "@enums": resolve("./src/enums"),
      "@lib": resolve("./src/lib")
    }
  },
  server: {
    port: 3e3
  },
  build: {
    emptyOutDir: true,
    outDir: "../build",
    assetsDir: "./",
    rollupOptions: {
      output: {
        // By not having hashes in the name, you don't have to update the manifest, yay!
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxOQ29udHJvbFVJXFxcXHdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxcTkNvbnRyb2xVSVxcXFx3ZWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL0RldmVsb3BtZW50L05Db250cm9sVUkvd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbc3ZlbHRlKCksIHRhaWx3aW5kY3NzKCldLFxyXG4gICAgYmFzZTogJy4vJywgLy8gZml2ZW0gbnVpIG5lZWRzIHRvIGhhdmUgbG9jYWwgZGlyIHJlZmVyZW5jZVxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAYXNzZXRzJzogcmVzb2x2ZShcIi4vc3JjL2Fzc2V0c1wiKSxcclxuICAgICAgICAnQGNvbXBvbmVudHMnOiByZXNvbHZlKFwiLi9zcmMvY29tcG9uZW50c1wiKSxcclxuICAgICAgICAnQHByb3ZpZGVycyc6IHJlc29sdmUoXCIuL3NyYy9wcm92aWRlcnNcIiksXHJcbiAgICAgICAgJ0BzdG9yZXMnOiByZXNvbHZlKFwiLi9zcmMvc3RvcmVzXCIpLFxyXG4gICAgICAgICdAdXRpbHMnOiByZXNvbHZlKFwiLi9zcmMvdXRpbHNcIiksXHJcbiAgICAgICAgJ0B0eXBpbmdzJzogcmVzb2x2ZShcIi4vc3JjL3R5cGluZ3NcIiksXHJcbiAgICAgICAgJ0BlbnVtcyc6IHJlc29sdmUoJy4vc3JjL2VudW1zJyksXHJcbiAgICAgICAgJ0BsaWInOiByZXNvbHZlKCcuL3NyYy9saWInKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBwb3J0OiAzMDAwLFxyXG4gICAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgIG91dERpcjogJy4uL2J1aWxkJyxcclxuICAgICAgYXNzZXRzRGlyOiAnLi8nLFxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAvLyBCeSBub3QgaGF2aW5nIGhhc2hlcyBpbiB0aGUgbmFtZSwgeW91IGRvbid0IGhhdmUgdG8gdXBkYXRlIHRoZSBtYW5pZmVzdCwgeWF5IVxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IGBbbmFtZV0uanNgLFxyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBbbmFtZV0uanNgLFxyXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBbbmFtZV0uW2V4dF1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICB9KVxyXG4gICJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVgsU0FBUyxvQkFBb0I7QUFDOVksU0FBUyxjQUFjO0FBQ3ZCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsZUFBZTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQ2pDLE1BQU07QUFBQTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsV0FBVyxRQUFRLGNBQWM7QUFBQSxNQUNqQyxlQUFlLFFBQVEsa0JBQWtCO0FBQUEsTUFDekMsY0FBYyxRQUFRLGlCQUFpQjtBQUFBLE1BQ3ZDLFdBQVcsUUFBUSxjQUFjO0FBQUEsTUFDakMsVUFBVSxRQUFRLGFBQWE7QUFBQSxNQUMvQixZQUFZLFFBQVEsZUFBZTtBQUFBLE1BQ25DLFVBQVUsUUFBUSxhQUFhO0FBQUEsTUFDL0IsUUFBUSxRQUFRLFdBQVc7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDRixPQUFPO0FBQUEsSUFDTCxhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUE7QUFBQSxRQUVOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
