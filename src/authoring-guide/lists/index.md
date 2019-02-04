---
title: Lists
layout: authoring-guide.html
b: block
---

You can use Github markdown for all lists except when the list includes the following:

<ol>
<li>Indentation that you want to preserve:
<pre>
$(function() {
  $('#save-property-value').click(function(event) {
    let selected = $('#select-property option:selected')
    let propertyId = $(selected).val()
    let value = $('#value-wrapper input').val()
    createDatapoint(propertyId, value)
  })
})
</pre>
</li>
<li>Empty lines:
<pre>
void blue_button_isr(void) {...}

int main(void) {
  ...
  wiringPiISR(BLUE_BUTTON, INT_EDGE_BOTH, &blue_button_isr);
  ...
}
</pre>
</li>
</ol>

For lists that include one or both of these features, see [Complex code in lists](complex-code-in-lists).

