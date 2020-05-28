---
title: Tech Note Draft
layout: technote.html
author: Matt Hagen
creationDate: January 1, 2020
---

Do you know if we have any documentation on ack-enabled properties for Production Agent? More specifically, how the host application should respond to acked properties.

Briefly, the host app's handler for the to-device property will be handed a pointer to a prop structure. Inside that structure is a prop_ack structure, which contains an ID, a status, and a "message" (ie. error code). If the ID is non-null, then the routine should validate the property value and/or take the action associated with the property. If successful, the prop_ack fields can be left unchanged. If an error occurred, status should be set to 1, and the "message" set to an error code of meaning to the source of the property change (usually the mobile app).

The demo code assumes that all validation and application of the property happens in the context of the handler routine; I don't know if there's a way to send the ack later in another context, of the property is applied asynchronously. That would be a feature request of the library, I think.

Here’s my reply to Leo who asked if we had docs on acked properties:

On ACKed properties, I could not find any documentation, not even in the cloud's service API doc.

How it works, is basically, if the property has ACK enabled in the template, then cloud sends the device an ACK ID with the datapoint in the `<id>` XML tag.  We pass that to the MCU.   When the MCU gets the value, it returns the ACK to the module with two integer values, a status and a message.   Status is non-zero on failure.  The device then posts to `/dev/v1/dsn/properties/<name>/<ack_id>.xml` with the ack_status and ack_message in the XML body.  The

ack_status is 200 on success and 400 on failure.  And `<ack_message>` is specific to the host app and can indicate if it was a range error or something.

BTW, the cloud had a bug recently (maybe just US-DEV) where they were giving the device status 500 on any ACK, although the ACK worked it would loop up the agent.  The agent fixed that in 2.11 and some other releases, but the cloud needed to fix it, too, and I think has a fix either deployed or about to be.  (In case this is why you were asking).

okay, thanks, but I think they are asking specifically about how the host app sends an acknowledgement after receiving the property and applying it. That is, what APIs need to be used to do this.

Am I right that this can only be done by setting the result in the prop structure within the handler function context? It can't be done later in another context?

From `Ayla-host-lib-2.1/example/app/ledevb/demo.c`

```
static struct prop prop_table[] = {
	{ "input", ATLV_INT, set_input, prop_send_generic, &input, sizeof(input)},
	{ "output", ATLV_INT, NULL, prop_send_generic, &output, sizeof(output)},
};
```

```
static void set_input(struct prop *prop, void *arg, void *valp, size_t len)
{
  s32 i = *(s32 *)valp;

  if (len != sizeof(s32)) {
    /*
    * Demo for end-to-end datapoint acks. Enable acks for input property in the template.
    * ack_status = 1 (failure), it is 0 by default.
    */
    prop->ack.ack_status = 1;
    prop->ack.ack_message = VAL_BAD_LEN;
    return;
  }
  input = i;
  if (i > 0x7fff || i < -0x8000) {
    output = -1;		/* square would overflow */
    /*
    * Demo for end-to-end datapoint acks.
    */
    prop->ack.ack_status = 1;
    prop->ack.ack_message = VAL_OUT_OF_RNG;
  } else {
    output = i * i;
  }
  demo_log("%s set %s to %ld", prop_source_string(prop), prop->name, (long)input);
  demo_log("set output to %ld", (long)output);
  prop_send_req("output");
}
```
