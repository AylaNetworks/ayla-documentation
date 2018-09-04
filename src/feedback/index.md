---
title: Feedback
---

<form action="thank-you.php" method="post">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="first-name">First Name</label>
      <input type="text" class="form-control" name="first-name" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="last-name">Last Name</label>
      <input type="text" class="form-control" name="last-name" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="text" class="form-control" name="email" placeholder="" required>
    </div>
    <div class="form-group col-md-6">
      <label for="company">Company</label>
      <input type="text" class="form-control" name="company" placeholder="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="page">Page Path</label>
      <input type="text" class="form-control" name="page" placeholder="">
    </div>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" name="description" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>