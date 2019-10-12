---
title: Petstore Service API
layout: site.html
e: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Petstore Service API</a></li>
    <li><a href="#operations-tag-pet">Pet</a></li>
    <li><a href="#operations-tag-store">Store</a></li>
    <li><a href="#operations-tag-user">User</a></li>
  </ul>
</aside>

<link rel="stylesheet" type="text/css" href="/assets/swagger/swagger-ui.css" >
<style>
.swagger-ui .wrapper {padding: 0 !important;}
</style>
<div id="swagger-ui"></div>
<script src="/assets/swagger/swagger-ui-bundle.js"> </script>
<script src="/assets/swagger/swagger-ui-standalone-preset.js"> </script>
<script>
window.onload = function() {
  // Begin Swagger UI call region
  const ui = SwaggerUIBundle({
    //url: "https://petstore.swagger.io/v2/swagger.json",
    url: "petstore-service.yml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    //layout: "StandaloneLayout"
  })
  // End Swagger UI call region

  window.ui = ui
}
</script>