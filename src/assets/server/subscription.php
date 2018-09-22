<?php
header('Content-Type: application/json');
http_response_code(200);
$in = file_get_contents('php://input');
$inDecoded = json_decode($in, true);
$aToken = $inDecoded['access_token'];
unset($inDecoded['access_token']);
$in = json_encode($inDecoded);

$ch = curl_init('https://user-dev.aylanetworks.com/api/v1/subscriptions.json');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $in);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Accept: application/json',
  'Authorization: auth_token ' . $aToken,
  'Content-Type: application/json',
  'Content-Length: ' . strlen($in)
));

$out = curl_exec($ch);
$errno = curl_errno($ch);
$error  = curl_error($ch);
$header  = curl_getinfo($ch);
curl_close($ch);

if($errno != 0) {
	http_response_code(404);
  $out = $error;
}

echo json_encode($out);
?>
