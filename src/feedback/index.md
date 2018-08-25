---
title: Feedback
---

<form action="./thank-you/" method="post">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" id="last-name" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="company">Company</label>
      <input type="text" class="form-control" id="company" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="text">Page<sup>*</sub></label>
      <input type="text" class="form-control" id="page" placeholder="">
    </div>
  </div>

<!--
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="category">Category</label>
      <select id="category" class="form-control" required>
        <option value="">Choose</option> 
        <option value="apps">Apps</option> 
        <option value="certification">Certification</option>
        <option value="cloud">Cloud</option>
        <option value="devices">Devices</option>
        <option value="feedback">Feedback</option>
        <option value="general">General</option>
        <option value="glossary">Glossary</option>
        <option value="overview">Overview</option>
        <option value="training">Training</option>
      </select>
    </div>
    <div class="form-group col-md-8">
      <label for="text">Item</label>
      <input type="text" class="form-control" id="item" placeholder="">
    </div>
  </div>
-->

  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>

<p style="margin-top: 18px;">* Populated with the url of the current page when clicking Feedback.</p>
