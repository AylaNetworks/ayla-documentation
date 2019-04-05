---
title: Contact
layout: page-full-width.html
---
<!--
<table>
<tr><th>Webmaster</th><td>matt&#64;aylanetworks.com</td></tr>
<tr><th>Professional Services</th><td>sss</td></tr>
<tr><th>Support</th><td>sss</td></tr>
</table>
-->

<form action="/assets/server/contact.php" method="post">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name="name" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" name="email" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="topic">Topic</label>
      <select class="custom-select">
        <option value="kit">Inquire about an Ayla Dev Kit</option>
        <option selected value="error">Report an error</option>
        <option value="question">Ask a question</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="company">Company</label>
      <input type="text" class="form-control" id="company" name="company" placeholder="" required>
    </div>
  </div>
  <div class="form-group">
    <label for="description">Message</label>
    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>

<!--
<form action="/assets/server/thank-you.php" method="post">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" id="first-name" name="first-name" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" id="last-name" name="last-name" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" name="email" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="company">Company</label>
      <input type="text" class="form-control" id="company" name="company" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="page">Page Path</label>
      <input type="text" class="form-control" id="page" name="page" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" name="description" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
-->