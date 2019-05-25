---
title: Contact
coreWidth: width-narrow
---

<form id="contact-form" method="post" action="contact.php" role="form">
  <div class="controls">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" name="name" class="form-control" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" class="form-control" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" class="form-control" rows="4" required></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="not-robot" required>
          <label class="form-check-label" for="not-robot">I am not a robot.</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input type="submit" class="btn btn-go btn-send" value="Send">
        </div>
      </div>
    </div>
  </div>
</form>
