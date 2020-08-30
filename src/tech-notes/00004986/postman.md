```
curl --location --request GET 'https://s3.amazonaws.com/us-dev-data-export-0bbb112e?list-type=2' \
--header 'X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' \
--header 'X-Amz-Date: 20200829T143953Z' \
--header 'Authorization: AWS4-HMAC-SHA256 Credential=AKIAT554AKGR7TP3F2HS/20200829/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=24a6f98f6edcaf9575bfa5794d927b558c1ba0a3b0bc5607a8e1375a8666aff6'
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Name>us-dev-data-export-0bbb112e</Name>
    <Prefix></Prefix>
    <KeyCount>266</KeyCount>
    <MaxKeys>1000</MaxKeys>
    <IsTruncated>false</IsTruncated>
    <Contents>
        <Key>Connection/2020-02-03 21:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-03T22:15:48.000Z</LastModified>
        <ETag>&quot;c7e441d4600a1363fad74c3f8f4f9f28&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-07 20:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-07T21:16:12.000Z</LastModified>
        <ETag>&quot;4a39ab22cdbbe84fa8900e2caf2baf8e&quot;</ETag>
        <Size>214</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-08 01:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-08T02:19:14.000Z</LastModified>
        <ETag>&quot;dc31c45d75eae152f6c26e51a22f0631&quot;</ETag>
        <Size>212</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-19 04:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-19T05:15:01.000Z</LastModified>
        <ETag>&quot;851098df05e4508cbd3d91bd68af5f27&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-23 00:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-23T01:29:19.000Z</LastModified>
        <ETag>&quot;03a5bc420636624aed9843f12c54a9e8&quot;</ETag>
        <Size>214</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-23 03:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-23T04:26:06.000Z</LastModified>
        <ETag>&quot;556a5b7f1b1a357ba06158c14123da4b&quot;</ETag>
        <Size>212</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-27 14:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-27T15:17:51.000Z</LastModified>
        <ETag>&quot;ac2ac4b1de175b92d95baab09c69a885&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-02-27 23:00:00/dataexportserviceConnections.csv</Key>
        <LastModified>2020-02-28T00:21:51.000Z</LastModified>
        <ETag>&quot;1f1642c96a4a125a321d3165567a6fd3&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-04 19:00:00/Connections.csv</Key>
        <LastModified>2020-03-04T20:20:40.000Z</LastModified>
        <ETag>&quot;faeac1463c3a2ee03f4b8458d2708d86&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-11 04:00:00/Connections.csv</Key>
        <LastModified>2020-03-11T05:25:42.000Z</LastModified>
        <ETag>&quot;0c1f620f6a88d69664bb9063debdf692&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-25 15:00:00/Connections.csv</Key>
        <LastModified>2020-03-25T16:16:26.000Z</LastModified>
        <ETag>&quot;5ec670b9068e3d462fca3c2d112303b0&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-25 16:00:00/Connections.csv</Key>
        <LastModified>2020-03-25T17:17:57.000Z</LastModified>
        <ETag>&quot;28c870363bd48ba9b6d3eab822f4651f&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-25 20:00:00/Connections.csv</Key>
        <LastModified>2020-03-25T21:15:33.000Z</LastModified>
        <ETag>&quot;c7bb1ec19ff8bae4c7c1cbadcb667687&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-25 22:00:00/Connections.csv</Key>
        <LastModified>2020-03-25T23:17:59.000Z</LastModified>
        <ETag>&quot;f219120412156500537fdbea2bc1872f&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-25 23:00:00/Connections.csv</Key>
        <LastModified>2020-03-26T00:19:36.000Z</LastModified>
        <ETag>&quot;afac90e3b7303e5fc840ff0259f6c4d8&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-26 09:00:00/Connections.csv</Key>
        <LastModified>2020-03-26T10:20:49.000Z</LastModified>
        <ETag>&quot;c1d2a831731ff0c02ac623af35fc305e&quot;</ETag>
        <Size>319</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-26 16:00:00/Connections.csv</Key>
        <LastModified>2020-03-26T17:16:36.000Z</LastModified>
        <ETag>&quot;3aa5d6a2470ae0a365f1264e945440dd&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-26 18:00:00/Connections.csv</Key>
        <LastModified>2020-03-26T19:25:02.000Z</LastModified>
        <ETag>&quot;e8b24e081553851e19ce7cc17af7cd9f&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-27 00:00:00/Connections.csv</Key>
        <LastModified>2020-03-27T01:18:43.000Z</LastModified>
        <ETag>&quot;0933eaaf4f47241d74dc390c7ad548d0&quot;</ETag>
        <Size>320</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-03-27 04:00:00/Connections.csv</Key>
        <LastModified>2020-03-27T05:27:10.000Z</LastModified>
        <ETag>&quot;917b1bbe16a51af48ae18eee9e607e86&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-06 04:00:00/Connections.csv</Key>
        <LastModified>2020-04-07T07:20:16.000Z</LastModified>
        <ETag>&quot;26b11b915f332f1185d3988a588d7fc1&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-06 05:00:00/Connections.csv</Key>
        <LastModified>2020-04-07T07:22:34.000Z</LastModified>
        <ETag>&quot;ab19a38521f87a9f48cdddba14bef4db&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-07 00:00:00/Connections.csv</Key>
        <LastModified>2020-04-07T07:19:21.000Z</LastModified>
        <ETag>&quot;134c74583f17b0a468c7ce35cac0286f&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-07 19:00:00/Connections.csv</Key>
        <LastModified>2020-04-07T20:24:59.000Z</LastModified>
        <ETag>&quot;bb6d0c9a90323caa23f2512f507b8823&quot;</ETag>
        <Size>319</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-07 22:00:00/Connections.csv</Key>
        <LastModified>2020-04-07T23:20:50.000Z</LastModified>
        <ETag>&quot;c28474a1db9a3f5b13ecc8a2dfdff795&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-08 07:00:00/Connections.csv</Key>
        <LastModified>2020-04-08T08:16:31.000Z</LastModified>
        <ETag>&quot;4ec90b69e91357523aeab712e468bd28&quot;</ETag>
        <Size>319</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-08 12:00:00/Connections.csv</Key>
        <LastModified>2020-04-08T13:23:12.000Z</LastModified>
        <ETag>&quot;e51511770dfab00202e67440a0a8d943&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-08 15:00:00/Connections.csv</Key>
        <LastModified>2020-04-08T16:29:15.000Z</LastModified>
        <ETag>&quot;8e28ebd9bc64db96ada58467be1eaffb&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-08 16:00:00/Connections.csv</Key>
        <LastModified>2020-04-08T17:15:01.000Z</LastModified>
        <ETag>&quot;3bef0a0c8f3b16ddaf5eea45e4e8aea3&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-10 03:00:00/Connections.csv</Key>
        <LastModified>2020-04-10T04:21:15.000Z</LastModified>
        <ETag>&quot;9f43e5c340fb8e3f7c63ae1529444e58&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-10 13:00:00/Connections.csv</Key>
        <LastModified>2020-04-10T14:16:28.000Z</LastModified>
        <ETag>&quot;e2145ccee4688ba3f3b56b830d7e74a4&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-10 14:00:00/Connections.csv</Key>
        <LastModified>2020-04-10T15:22:32.000Z</LastModified>
        <ETag>&quot;bf86b7f703b3d3647714e8c8ccb1265e&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-11 14:00:00/Connections.csv</Key>
        <LastModified>2020-04-11T15:23:19.000Z</LastModified>
        <ETag>&quot;5ee917cf1556d18b89f4edcc2a78a5f1&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-13 17:00:00/Connections.csv</Key>
        <LastModified>2020-04-13T18:28:31.000Z</LastModified>
        <ETag>&quot;9d11e0de364c6f02dd578bc27cd0cf40&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-15 18:00:00/Connections.csv</Key>
        <LastModified>2020-04-15T19:27:44.000Z</LastModified>
        <ETag>&quot;2e0f95a7b1f125cec2565479528e904c&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-16 09:00:00/Connections.csv</Key>
        <LastModified>2020-04-16T10:26:56.000Z</LastModified>
        <ETag>&quot;89f4a44ef78dcd44ddb96432c913e71d&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-16 17:00:00/Connections.csv</Key>
        <LastModified>2020-04-16T18:25:44.000Z</LastModified>
        <ETag>&quot;9121323a59697dac28e6c257fdb58fbc&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-24 10:00:00/Connections.csv</Key>
        <LastModified>2020-04-24T11:32:19.000Z</LastModified>
        <ETag>&quot;f38d301c597ae69d0e4354873dc4f0fb&quot;</ETag>
        <Size>141</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-24 12:00:00/Connections.csv</Key>
        <LastModified>2020-04-24T13:16:10.000Z</LastModified>
        <ETag>&quot;712cef9d062dcafc64d11f5196071ec4&quot;</ETag>
        <Size>70</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-24 14:00:00/Connections.csv</Key>
        <LastModified>2020-04-24T15:21:13.000Z</LastModified>
        <ETag>&quot;35a3e3bd39447812ec886318df6e4de4&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-24 15:00:00/Connections.csv</Key>
        <LastModified>2020-04-24T16:19:06.000Z</LastModified>
        <ETag>&quot;b55fa2be8c6716793554c12d8110e03f&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-24 19:00:00/Connections.csv</Key>
        <LastModified>2020-04-24T20:26:05.000Z</LastModified>
        <ETag>&quot;9094a910817cd01977db6813260f8430&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-25 22:00:00/Connections.csv</Key>
        <LastModified>2020-04-25T23:18:57.000Z</LastModified>
        <ETag>&quot;3e426cf1cd69497ca016464175d8e27a&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-25 23:00:00/Connections.csv</Key>
        <LastModified>2020-04-26T00:22:29.000Z</LastModified>
        <ETag>&quot;c6dd60a1483b4d7fb52a75e4a5b31866&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-27 07:00:00/Connections.csv</Key>
        <LastModified>2020-04-27T08:19:24.000Z</LastModified>
        <ETag>&quot;5007ff9e1ceb33db1157edc5c9f5a9e0&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-27 15:00:00/Connections.csv</Key>
        <LastModified>2020-04-27T16:32:44.000Z</LastModified>
        <ETag>&quot;478b74af09fd245bfab0c94dab47328f&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-28 10:00:00/Connections.csv</Key>
        <LastModified>2020-04-28T11:28:23.000Z</LastModified>
        <ETag>&quot;57d5db07c5272433859a3f91a7de1da8&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-28 22:00:00/Connections.csv</Key>
        <LastModified>2020-04-28T23:19:07.000Z</LastModified>
        <ETag>&quot;8549120cc5fcb923e5291ef65d33ed98&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-29 11:00:00/Connections.csv</Key>
        <LastModified>2020-04-29T12:31:56.000Z</LastModified>
        <ETag>&quot;0b65a6e32bb1bc0b1bfc9443a9263757&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-29 15:00:00/Connections.csv</Key>
        <LastModified>2020-04-29T16:17:51.000Z</LastModified>
        <ETag>&quot;b482cc0705ca04908d7b011e5c67472f&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-30 12:00:00/Connections.csv</Key>
        <LastModified>2020-04-30T13:33:24.000Z</LastModified>
        <ETag>&quot;95e547ed0f5f43b6310cc9f06038c296&quot;</ETag>
        <Size>145</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-04-30 13:00:00/Connections.csv</Key>
        <LastModified>2020-04-30T14:32:19.000Z</LastModified>
        <ETag>&quot;f1f764512d3753a9dd5e1cf10a018656&quot;</ETag>
        <Size>72</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-05 17:00:00/Connections.csv</Key>
        <LastModified>2020-05-05T18:20:44.000Z</LastModified>
        <ETag>&quot;ce5d79ed3a11034117d2feadc7c8e5eb&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-05 20:00:00/Connections.csv</Key>
        <LastModified>2020-05-05T21:46:47.000Z</LastModified>
        <ETag>&quot;adfedadc9515225a158b757b76ff3e95&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-12 18:00:00/Connections.csv</Key>
        <LastModified>2020-05-12T19:19:21.000Z</LastModified>
        <ETag>&quot;66c20ddbd1c07aa3e35294ff880c9018&quot;</ETag>
        <Size>430</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-13 08:00:00/Connections.csv</Key>
        <LastModified>2020-05-13T09:53:20.000Z</LastModified>
        <ETag>&quot;6ed406656e17fdff03ee17e5d4339ad2&quot;</ETag>
        <Size>217</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-17 22:00:00/Connections.csv</Key>
        <LastModified>2020-05-17T23:27:28.000Z</LastModified>
        <ETag>&quot;ea8d6a0e0b7ac18160e878ae391c5668&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-19 13:00:00/Connections.csv</Key>
        <LastModified>2020-05-19T14:30:56.000Z</LastModified>
        <ETag>&quot;e28d21d15d2213169357c3824dd11248&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-19 14:00:00/Connections.csv</Key>
        <LastModified>2020-05-19T15:38:04.000Z</LastModified>
        <ETag>&quot;be41fb0848e7813b590aa94ea320e2d4&quot;</ETag>
        <Size>177</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-19 19:00:00/Connections.csv</Key>
        <LastModified>2020-05-19T20:32:05.000Z</LastModified>
        <ETag>&quot;ea8b3af0f4b2a298b12373a1444bf712&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-20 00:00:00/Connections.csv</Key>
        <LastModified>2020-05-20T01:16:26.000Z</LastModified>
        <ETag>&quot;552f9b1fad4b5a4f24d0eed9b094eba3&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-20 10:00:00/Connections.csv</Key>
        <LastModified>2020-05-20T11:16:23.000Z</LastModified>
        <ETag>&quot;096902a29c47e224d473b243f5c77ba7&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-20 11:00:00/Connections.csv</Key>
        <LastModified>2020-05-20T12:20:46.000Z</LastModified>
        <ETag>&quot;6e28b283ab07884af12915ec2b03ca47&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-20 12:00:00/Connections.csv</Key>
        <LastModified>2020-05-20T13:31:36.000Z</LastModified>
        <ETag>&quot;72654a6fd18722a68632b26952184b9e&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-20 21:00:00/Connections.csv</Key>
        <LastModified>2020-05-20T22:20:55.000Z</LastModified>
        <ETag>&quot;87025dfe393014407277cac64a8e7c77&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-20 22:00:00/Connections.csv</Key>
        <LastModified>2020-05-20T23:26:35.000Z</LastModified>
        <ETag>&quot;3aaa3a6704e058fe6a1f3d9a7c4a834d&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-22 09:00:00/Connections.csv</Key>
        <LastModified>2020-05-22T10:36:00.000Z</LastModified>
        <ETag>&quot;c20f317030625a28fda229255c463dbe&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-22 21:00:00/Connections.csv</Key>
        <LastModified>2020-05-22T22:16:21.000Z</LastModified>
        <ETag>&quot;1582068154f8b87eb95ba8b7152eee9b&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-23 22:00:00/Connections.csv</Key>
        <LastModified>2020-05-23T23:17:50.000Z</LastModified>
        <ETag>&quot;f6d69d1007554b45c5989b609338f248&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-25 11:00:00/Connections.csv</Key>
        <LastModified>2020-05-25T12:27:16.000Z</LastModified>
        <ETag>&quot;f2c144296d06f8b5309120d6edb1cd44&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-27 13:00:00/Connections.csv</Key>
        <LastModified>2020-05-27T14:23:59.000Z</LastModified>
        <ETag>&quot;739cb0352ccfde31626d2a9e1e84e9f9&quot;</ETag>
        <Size>145</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-28 21:00:00/Connections.csv</Key>
        <LastModified>2020-05-28T22:26:57.000Z</LastModified>
        <ETag>&quot;f716c9e0cf0d7911d28d329eff3397d5&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-28 22:00:00/Connections.csv</Key>
        <LastModified>2020-05-28T23:20:13.000Z</LastModified>
        <ETag>&quot;f3ccee9e930609004f38758d69990bcf&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-29 01:00:00/Connections.csv</Key>
        <LastModified>2020-05-29T02:21:12.000Z</LastModified>
        <ETag>&quot;31d7fa64fc3c4b591090fab0c7c43013&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-29 07:00:00/Connections.csv</Key>
        <LastModified>2020-05-29T08:16:31.000Z</LastModified>
        <ETag>&quot;2218638a3687b04dab44991747817957&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-29 18:00:00/Connections.csv</Key>
        <LastModified>2020-05-29T19:20:04.000Z</LastModified>
        <ETag>&quot;79289c8031f6bc13173342a9d14b5a2f&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-05-30 20:00:00/Connections.csv</Key>
        <LastModified>2020-05-30T21:30:46.000Z</LastModified>
        <ETag>&quot;26ac3d41216aa01460e5160f3b38edcb&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-03 14:00:00/Connections.csv</Key>
        <LastModified>2020-06-03T15:39:23.000Z</LastModified>
        <ETag>&quot;60aa74e35356c3bf7d4395fa999f87e8&quot;</ETag>
        <Size>145</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-05 20:00:00/Connections.csv</Key>
        <LastModified>2020-06-05T21:35:21.000Z</LastModified>
        <ETag>&quot;1d1b2729a48deda5c67eb25b37ea09d5&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-09 03:00:00/Connections.csv</Key>
        <LastModified>2020-06-09T04:21:02.000Z</LastModified>
        <ETag>&quot;71451cd4786ec718090376ad06374a8b&quot;</ETag>
        <Size>290</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-10 05:00:00/Connections.csv</Key>
        <LastModified>2020-06-10T06:35:22.000Z</LastModified>
        <ETag>&quot;d55ad87d8672137034eea052fa3de2c7&quot;</ETag>
        <Size>73</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-11 20:00:00/Connections.csv</Key>
        <LastModified>2020-06-11T21:37:57.000Z</LastModified>
        <ETag>&quot;d1ce9aabc89d8819289f38e3befbe11d&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-17 20:00:00/Connections.csv</Key>
        <LastModified>2020-06-17T21:20:33.000Z</LastModified>
        <ETag>&quot;a6b8159ddf48b129fd6b6bee16303167&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-22 12:00:00/Connections.csv</Key>
        <LastModified>2020-06-22T13:30:50.000Z</LastModified>
        <ETag>&quot;ab105722649d25f381abdfd6232f9787&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-22 13:00:00/Connections.csv</Key>
        <LastModified>2020-06-22T14:37:03.000Z</LastModified>
        <ETag>&quot;278ca9f4cf7305677c15127e75899c93&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-26 13:00:00/Connections.csv</Key>
        <LastModified>2020-06-26T14:16:05.000Z</LastModified>
        <ETag>&quot;e9fcfa0bd06514e770be793897fba9b4&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-27 21:00:00/Connections.csv</Key>
        <LastModified>2020-06-27T22:30:42.000Z</LastModified>
        <ETag>&quot;a4f9e2ac8cea367e2a64f5c5252ee43a&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-06-27 22:00:00/Connections.csv</Key>
        <LastModified>2020-06-27T23:24:59.000Z</LastModified>
        <ETag>&quot;c36ee36b57046664b211b78f6ca52c8c&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-01 15:00:00/Connections.csv</Key>
        <LastModified>2020-07-01T16:55:49.000Z</LastModified>
        <ETag>&quot;92b5c53d80c295df366c563567dd7b70&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-15 11:00:00/Connections.csv</Key>
        <LastModified>2020-07-15T12:48:21.000Z</LastModified>
        <ETag>&quot;887269689f3c96d05d76b80af1208f2b&quot;</ETag>
        <Size>319</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-15 12:00:00/Connections.csv</Key>
        <LastModified>2020-07-15T13:16:53.000Z</LastModified>
        <ETag>&quot;71877384dfd2e38bfdab80406fd11cb6&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-15 14:00:00/Connections.csv</Key>
        <LastModified>2020-07-15T15:32:19.000Z</LastModified>
        <ETag>&quot;a6583c6b15b6b2d24daca94cc191294a&quot;</ETag>
        <Size>70</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-15 17:00:00/Connections.csv</Key>
        <LastModified>2020-07-15T18:45:02.000Z</LastModified>
        <ETag>&quot;13f182a7601f063d0156d2cc1a95ff78&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-17 09:00:00/Connections.csv</Key>
        <LastModified>2020-07-17T10:19:29.000Z</LastModified>
        <ETag>&quot;66117ee5e69d42e65ad623ea829676cf&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-17 15:00:00/Connections.csv</Key>
        <LastModified>2020-07-17T16:30:09.000Z</LastModified>
        <ETag>&quot;ed102d852348ecd47a429eeaf095e4cf&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-27 15:00:00/Connections.csv</Key>
        <LastModified>2020-07-27T16:30:41.000Z</LastModified>
        <ETag>&quot;9eeaedef614977a49e6e39e649cffd34&quot;</ETag>
        <Size>141</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-27 18:00:00/Connections.csv</Key>
        <LastModified>2020-07-27T19:29:48.000Z</LastModified>
        <ETag>&quot;a2dc1c80229e1a3788210a279d76d973&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-27 20:00:00/Connections.csv</Key>
        <LastModified>2020-07-27T21:42:38.000Z</LastModified>
        <ETag>&quot;f47d9d94c6d4cf66ece0e8afb1752295&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-28 09:00:00/Connections.csv</Key>
        <LastModified>2020-07-28T10:21:24.000Z</LastModified>
        <ETag>&quot;116416d32bcb62e988f82107a97a4b5d&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-29 21:00:00/Connections.csv</Key>
        <LastModified>2020-07-29T22:38:52.000Z</LastModified>
        <ETag>&quot;d09d1130ade5514b32657690b9550e8e&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-07-30 14:00:00/Connections.csv</Key>
        <LastModified>2020-07-30T15:25:37.000Z</LastModified>
        <ETag>&quot;359451b9dddb6067651aff9cc6b5cfc7&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-04 20:00:00/Connections.csv</Key>
        <LastModified>2020-08-04T21:30:39.000Z</LastModified>
        <ETag>&quot;f52897a5315958b634b19b8c2d990368&quot;</ETag>
        <Size>217</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-05 06:00:00/Connections.csv</Key>
        <LastModified>2020-08-05T07:33:19.000Z</LastModified>
        <ETag>&quot;c80e226a860c55c150e6ca2b92ffe7a0&quot;</ETag>
        <Size>216</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-05 08:00:00/Connections.csv</Key>
        <LastModified>2020-08-05T09:25:00.000Z</LastModified>
        <ETag>&quot;59855df4b5b29aa3058f4b548a7df574&quot;</ETag>
        <Size>214</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-07 20:00:00/Connections.csv</Key>
        <LastModified>2020-08-07T21:15:01.000Z</LastModified>
        <ETag>&quot;52f6722a25ad4516fce698e1e21e1b67&quot;</ETag>
        <Size>430</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-10 10:00:00/Connections.csv</Key>
        <LastModified>2020-08-10T11:21:45.000Z</LastModified>
        <ETag>&quot;82c3e942fe7165be14682dfe07bfb23d&quot;</ETag>
        <Size>109</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-10 20:00:00/Connections.csv</Key>
        <LastModified>2020-08-10T21:15:01.000Z</LastModified>
        <ETag>&quot;317a56b41a2c356f9c8bb58aad8874eb&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-11 04:00:00/Connections.csv</Key>
        <LastModified>2020-08-11T06:40:48.000Z</LastModified>
        <ETag>&quot;9861cbac4569f9635cbd6ad149c058ca&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-11 05:00:00/Connections.csv</Key>
        <LastModified>2020-08-11T08:41:28.000Z</LastModified>
        <ETag>&quot;6a9cf38f45a20c7ee090be831fb4e019&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-13 04:00:00/Connections.csv</Key>
        <LastModified>2020-08-13T05:17:02.000Z</LastModified>
        <ETag>&quot;17a757e234cf5f73ba2cd329943f481c&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-14 14:00:00/Connections.csv</Key>
        <LastModified>2020-08-14T15:45:48.000Z</LastModified>
        <ETag>&quot;624cea4bdcd47bbf0279450cc8c8170e&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-18 16:00:00/Connections.csv</Key>
        <LastModified>2020-08-18T17:47:01.000Z</LastModified>
        <ETag>&quot;0b0d458c2f53e026af0d95c15cfe2ab7&quot;</ETag>
        <Size>107</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-18 22:00:00/Connections.csv</Key>
        <LastModified>2020-08-18T23:30:40.000Z</LastModified>
        <ETag>&quot;d03ba88b59d3dad716deb609019481c4&quot;</ETag>
        <Size>106</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-19 20:00:00/Connections.csv</Key>
        <LastModified>2020-08-19T21:34:51.000Z</LastModified>
        <ETag>&quot;f01a1bd212e08aac8edbff419ec2163b&quot;</ETag>
        <Size>213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-25 20:00:00/Connections.csv</Key>
        <LastModified>2020-08-25T21:40:33.000Z</LastModified>
        <ETag>&quot;c884c1bf5dbdec90e9251c2ded1eae7b&quot;</ETag>
        <Size>426</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Connection/2020-08-28 09:00:00/Connections.csv</Key>
        <LastModified>2020-08-28T10:25:56.000Z</LastModified>
        <ETag>&quot;7e28f4f4d20763a87b096e6e49a71222&quot;</ETag>
        <Size>321</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-02-05 12:00:00/dataexportserviceDatapoints.csv</Key>
        <LastModified>2020-02-05T13:23:02.000Z</LastModified>
        <ETag>&quot;d55e85873eb26ea1833df56f4920a50a&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-02-08 01:00:00/dataexportserviceDatapoints.csv</Key>
        <LastModified>2020-02-08T02:17:42.000Z</LastModified>
        <ETag>&quot;da005696baab8be079fcc99a012bfdaa&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-02-23 03:00:00/dataexportserviceDatapoints.csv</Key>
        <LastModified>2020-02-23T04:31:01.000Z</LastModified>
        <ETag>&quot;1b0e29a58f7d54aa8a1125a0277b1741&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-02-27 14:00:00/dataexportserviceDatapoints.csv</Key>
        <LastModified>2020-02-27T15:17:50.000Z</LastModified>
        <ETag>&quot;475821e4fd0393f9a5d0257a49531172&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-02-27 23:00:00/dataexportserviceDatapoints.csv</Key>
        <LastModified>2020-02-28T00:34:29.000Z</LastModified>
        <ETag>&quot;02aea0f13183af31228632860a286b01&quot;</ETag>
        <Size>231</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-04 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-04T20:18:11.000Z</LastModified>
        <ETag>&quot;d359efba0d1ce6d3a4524dc35d0c679d&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-06 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-06T20:17:35.000Z</LastModified>
        <ETag>&quot;69cac5e48a382f295487844975a5a442&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-06 21:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-06T22:19:48.000Z</LastModified>
        <ETag>&quot;c30ef5b4fefcb75eedc525129b220ce6&quot;</ETag>
        <Size>933</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-11 04:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-11T05:17:39.000Z</LastModified>
        <ETag>&quot;a0c3a9848a8d0ca92ed851dcabbe2f14&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-11 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-11T15:20:18.000Z</LastModified>
        <ETag>&quot;a04d4c8b1615d1ed67eebb636f682110&quot;</ETag>
        <Size>3068</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-13 07:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-13T08:15:23.000Z</LastModified>
        <ETag>&quot;f570f322ba88766b8f1076862594859d&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-21 10:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-21T11:23:47.000Z</LastModified>
        <ETag>&quot;aa87ba7ef3c6e899cdc54e40f4d2c249&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T12:26:04.000Z</LastModified>
        <ETag>&quot;c91172557b77b0f6bb38ab0b26a16471&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T13:24:32.000Z</LastModified>
        <ETag>&quot;876960d2468f15904c688de100e89142&quot;</ETag>
        <Size>920</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 16:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T17:16:41.000Z</LastModified>
        <ETag>&quot;b8dc94fd4dc609d1256f398c60cbb3bf&quot;</ETag>
        <Size>1212</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 18:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T19:24:21.000Z</LastModified>
        <ETag>&quot;0fe8c449dc9d87f8d7edbec849a3a9c6&quot;</ETag>
        <Size>1844</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T20:17:18.000Z</LastModified>
        <ETag>&quot;e5d743a6aeb09c13d4d2323cffb3f239&quot;</ETag>
        <Size>95427</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T21:15:01.000Z</LastModified>
        <ETag>&quot;dd1c9d5ce7930e500b995b3c8039f14d&quot;</ETag>
        <Size>17518</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 22:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-25T23:22:54.000Z</LastModified>
        <ETag>&quot;e89e71e8729c118b11188ecf816d2b09&quot;</ETag>
        <Size>85285</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-25 23:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T00:15:34.000Z</LastModified>
        <ETag>&quot;60e636cfeab8de7bcd19bded999d588f&quot;</ETag>
        <Size>751</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-26 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T10:15:42.000Z</LastModified>
        <ETag>&quot;07f14a8593dd4fe12959385ce828a389&quot;</ETag>
        <Size>2424</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-26 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T12:18:02.000Z</LastModified>
        <ETag>&quot;76d37b3c508a32b148b1bb2a46becef6&quot;</ETag>
        <Size>751</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-26 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T13:22:13.000Z</LastModified>
        <ETag>&quot;837fc1917464430d16ef2e8d61138f47&quot;</ETag>
        <Size>751</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-26 16:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T17:15:39.000Z</LastModified>
        <ETag>&quot;9197548a2b55b041f4a4cd1350b6d92a&quot;</ETag>
        <Size>747</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-26 18:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T19:20:36.000Z</LastModified>
        <ETag>&quot;932494ebfee0bbd9d81eade04873ec3e&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-26 21:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-26T22:22:52.000Z</LastModified>
        <ETag>&quot;99d98a5ac2ae08d1ce076775e27accc9&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-27 00:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-27T01:25:31.000Z</LastModified>
        <ETag>&quot;46e406cf017735b4488c1a618555f7f7&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-03-27 04:00:00/Datapoints.csv</Key>
        <LastModified>2020-03-27T05:21:06.000Z</LastModified>
        <ETag>&quot;400e644bdbb60b843bcc347b4f30915a&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-06 05:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-07T07:16:49.000Z</LastModified>
        <ETag>&quot;f1eb22aa3d39d332f777d8b1bfe67bc6&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-07 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-07T20:24:31.000Z</LastModified>
        <ETag>&quot;c12898e53644d98f6d25cab1b83b7699&quot;</ETag>
        <Size>1959</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-07 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-07T21:24:40.000Z</LastModified>
        <ETag>&quot;708c2ec3eb9b50c78a761d2701f0dcfe&quot;</ETag>
        <Size>747</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-08 07:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-08T08:28:16.000Z</LastModified>
        <ETag>&quot;d7601f36a2cc34d693fb53c68fbc6d8a&quot;</ETag>
        <Size>1200</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-08 15:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-08T16:24:33.000Z</LastModified>
        <ETag>&quot;12ddcafdf29538308f8c132a2c29726d&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-10 00:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-10T01:15:47.000Z</LastModified>
        <ETag>&quot;aa025134a9e8753ce7962662b53b392b&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-10 03:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-10T04:15:46.000Z</LastModified>
        <ETag>&quot;96cce0e4b593ea127c65dde8813c9c33&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-10 04:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-10T05:26:43.000Z</LastModified>
        <ETag>&quot;12f501f7a203b5d5bc4a024d8dd27b3a&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-10 05:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-10T06:25:34.000Z</LastModified>
        <ETag>&quot;578f0a5775b84f414a3ac31173ddf8ff&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-10 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-10T10:16:51.000Z</LastModified>
        <ETag>&quot;d2c0685164bc2d95bd9731b71e43cf58&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-10 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-10T14:15:45.000Z</LastModified>
        <ETag>&quot;b4537830c86aeebc148741c64a09dee3&quot;</ETag>
        <Size>922</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-11 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-11T15:24:36.000Z</LastModified>
        <ETag>&quot;d819052ae5cbc1928befc0fab56f5ecd&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-13 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-13T14:24:45.000Z</LastModified>
        <ETag>&quot;cd9110be01d155c92ebf52a9ea4a663c&quot;</ETag>
        <Size>2050</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-13 15:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-13T16:26:08.000Z</LastModified>
        <ETag>&quot;9ba3e4757308679fa4d61d2d1f815552&quot;</ETag>
        <Size>245</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-13 17:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-13T18:22:35.000Z</LastModified>
        <ETag>&quot;eab498d26b83124287fe5fa4821fdadd&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-13 18:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-13T19:18:55.000Z</LastModified>
        <ETag>&quot;ee321a07d4e724f07c403e81d27d4f9b&quot;</ETag>
        <Size>969</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-15 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-15T13:22:04.000Z</LastModified>
        <ETag>&quot;9f7d9ff5fec71ab7c71f8d5d4f27742d&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-16 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-16T10:17:03.000Z</LastModified>
        <ETag>&quot;9e87cc09d3538a19dcd9acf6cb3a585e&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-24 10:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-24T11:27:28.000Z</LastModified>
        <ETag>&quot;b8990cac2ab92e8f4e1715da5d97cee4&quot;</ETag>
        <Size>242</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-24 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-24T13:17:43.000Z</LastModified>
        <ETag>&quot;2eb1c7fcfadeedff6a4ac083e03b2ab0&quot;</ETag>
        <Size>500</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-30 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-30T13:22:41.000Z</LastModified>
        <ETag>&quot;4a4a63292ab674e06f7a74f17436a7f0&quot;</ETag>
        <Size>240</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-30 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-30T14:24:25.000Z</LastModified>
        <ETag>&quot;6945ac3215b476aef3edeb85b252d8d5&quot;</ETag>
        <Size>652</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-04-30 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-04-30T15:26:10.000Z</LastModified>
        <ETag>&quot;f3661f0393b2c42807932a37c3f04897&quot;</ETag>
        <Size>1213</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-04 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-04T20:36:39.000Z</LastModified>
        <ETag>&quot;53760bbc709ef5c4310e2345dc180913&quot;</ETag>
        <Size>406</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-07 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-07T14:53:19.000Z</LastModified>
        <ETag>&quot;76d171d0c66326156061432cdc57686d&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-12 18:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-12T20:02:32.000Z</LastModified>
        <ETag>&quot;2a497d267f9de053f3bd32b7ff833319&quot;</ETag>
        <Size>461</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-19 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-19T15:27:54.000Z</LastModified>
        <ETag>&quot;53fe9425fe8e5fed550bf6db6655c677&quot;</ETag>
        <Size>500</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-19 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-19T20:31:24.000Z</LastModified>
        <ETag>&quot;3b3d3e121d20de2d51034ccc482d2452&quot;</ETag>
        <Size>278</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-20 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-20T12:39:47.000Z</LastModified>
        <ETag>&quot;59aa4f4af1a308efff8598875c96cdf8&quot;</ETag>
        <Size>2832</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-20 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-20T13:30:47.000Z</LastModified>
        <ETag>&quot;e5806230d4e269fb602043214488e47a&quot;</ETag>
        <Size>11025</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-21 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-21T13:27:25.000Z</LastModified>
        <ETag>&quot;4a68926903ce963798b1a3a5936f8dda&quot;</ETag>
        <Size>233</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-22 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-22T10:33:10.000Z</LastModified>
        <ETag>&quot;3ae6f97c8f73197214187c78f1095af3&quot;</ETag>
        <Size>679</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-22 10:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-22T11:28:59.000Z</LastModified>
        <ETag>&quot;c914a23701454f9463b4f4144c2206e2&quot;</ETag>
        <Size>481</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-22 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-22T12:18:40.000Z</LastModified>
        <ETag>&quot;8deab54841215744ad89428ba35d491c&quot;</ETag>
        <Size>759</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-28 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-28T10:37:20.000Z</LastModified>
        <ETag>&quot;24ec155b19c9a03a244ed08a3edb1152&quot;</ETag>
        <Size>694</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-28 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-28T13:21:00.000Z</LastModified>
        <ETag>&quot;91bfa1c4f1d5297aa62cd03da9387b53&quot;</ETag>
        <Size>927</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-28 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-28T14:33:26.000Z</LastModified>
        <ETag>&quot;5db032ba263cb43dabcf65d2ba7f31f9&quot;</ETag>
        <Size>1180</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-28 21:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-28T22:37:28.000Z</LastModified>
        <ETag>&quot;db514efc0297a6a93d31f9e5aabd7d25&quot;</ETag>
        <Size>1401</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-28 22:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-28T23:33:41.000Z</LastModified>
        <ETag>&quot;705607655aba3590e548988dbfa62614&quot;</ETag>
        <Size>2454</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-28 23:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-29T00:30:34.000Z</LastModified>
        <ETag>&quot;1365ba0f7b5abd5dbc5dd5ad741eb5bc&quot;</ETag>
        <Size>1217</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-29 07:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-29T08:37:44.000Z</LastModified>
        <ETag>&quot;981bd10c0a69c395d6fe90e7fe50766e&quot;</ETag>
        <Size>478</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-29 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-29T13:16:38.000Z</LastModified>
        <ETag>&quot;9c3c155f066eca368db3325ce7e87159&quot;</ETag>
        <Size>2797</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-29 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-29T14:41:40.000Z</LastModified>
        <ETag>&quot;d0b66aecea8741ebfd4b7fe2136ef171&quot;</ETag>
        <Size>1682</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-29 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-29T15:38:15.000Z</LastModified>
        <ETag>&quot;34f0aa80cb328b4e4a23679e5b838d09&quot;</ETag>
        <Size>236</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-05-31 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-05-31T21:26:49.000Z</LastModified>
        <ETag>&quot;1f71effbe00cb2aaf947a45f1ae7534b&quot;</ETag>
        <Size>258</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-05 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-05T21:26:19.000Z</LastModified>
        <ETag>&quot;897292c4ea2032d8bb9aed5d3165f892&quot;</ETag>
        <Size>465</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-17 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-17T22:43:40.000Z</LastModified>
        <ETag>&quot;f4117a7a4b12a0e3297a69d62e59f163&quot;</ETag>
        <Size>465</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-22 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-22T14:35:59.000Z</LastModified>
        <ETag>&quot;772fb696ea1e46ee3491ab661649c2c5&quot;</ETag>
        <Size>465</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-22 16:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-22T17:28:51.000Z</LastModified>
        <ETag>&quot;a72e530df6194d9cf48847068be64aab&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-22 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-22T21:31:56.000Z</LastModified>
        <ETag>&quot;9d8a520e5641b0e1915e7012b1db32cc&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-25 17:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-25T18:35:59.000Z</LastModified>
        <ETag>&quot;309f52215e6a2227cab6991aaad93823&quot;</ETag>
        <Size>465</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-06-27 22:00:00/Datapoints.csv</Key>
        <LastModified>2020-06-27T23:37:21.000Z</LastModified>
        <ETag>&quot;9837bd52cbc8c241cff0ea4d6f44db8a&quot;</ETag>
        <Size>465</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-05 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-05T12:37:13.000Z</LastModified>
        <ETag>&quot;c7a224b12b6f00ec83aa1129be821212&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-15 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-15T12:36:25.000Z</LastModified>
        <ETag>&quot;ce58262f372675a8d93bf92dbe22e7eb&quot;</ETag>
        <Size>699</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-15 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-15T15:38:13.000Z</LastModified>
        <ETag>&quot;c4b6e047e1b5c267da94f2690e60384b&quot;</ETag>
        <Size>452</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-16 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-16T13:48:59.000Z</LastModified>
        <ETag>&quot;83dda8ec8b2209bc16f29667a6de5753&quot;</ETag>
        <Size>474</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-17 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-17T10:15:57.000Z</LastModified>
        <ETag>&quot;98c6faa712657c8d36c5b5d029f562f2&quot;</ETag>
        <Size>234</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-27 15:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-27T16:30:40.000Z</LastModified>
        <ETag>&quot;56346889235e444ae25d73368d719fdc&quot;</ETag>
        <Size>393</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-27 18:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-27T19:33:13.000Z</LastModified>
        <ETag>&quot;a13e70e51a1d1c3950dc4a5f6115a5b5&quot;</ETag>
        <Size>524</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-28 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-28T10:35:39.000Z</LastModified>
        <ETag>&quot;9cfd6072f41d8873309308b729315407&quot;</ETag>
        <Size>234</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-28 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-28T12:19:18.000Z</LastModified>
        <ETag>&quot;d76ea95b8d8617d49daa3ac41112a29e&quot;</ETag>
        <Size>234</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-29 08:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-29T09:42:25.000Z</LastModified>
        <ETag>&quot;34dffe6a9c79643db28885dba93fe81e&quot;</ETag>
        <Size>234</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-29 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-29T12:35:09.000Z</LastModified>
        <ETag>&quot;9049d41ef53df1ed99b20cbc33618541&quot;</ETag>
        <Size>234</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-29 17:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-29T18:30:15.000Z</LastModified>
        <ETag>&quot;17630077cfdb1e266b4e4dc836142c83&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-30 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-30T15:16:44.000Z</LastModified>
        <ETag>&quot;94403b2630946f6603624da3edbff602&quot;</ETag>
        <Size>6008</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-30 15:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-30T16:35:50.000Z</LastModified>
        <ETag>&quot;c6d34232f86b8ffb7b9fb818945b4f06&quot;</ETag>
        <Size>1758</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-30 16:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-30T17:30:10.000Z</LastModified>
        <ETag>&quot;3ea97c85a551e722ed1b25628319ee9b&quot;</ETag>
        <Size>663</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-31 10:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-31T11:30:21.000Z</LastModified>
        <ETag>&quot;9b2c6fd2cdb22e52f156919a9d0d5770&quot;</ETag>
        <Size>334</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-31 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-31T12:40:52.000Z</LastModified>
        <ETag>&quot;422d522f95733e5b53a76550de24e064&quot;</ETag>
        <Size>266</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-07-31 16:00:00/Datapoints.csv</Key>
        <LastModified>2020-07-31T17:33:52.000Z</LastModified>
        <ETag>&quot;b9c59e0c4f1d069ae2229bef60fc95f8&quot;</ETag>
        <Size>543</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-04 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-04T21:42:59.000Z</LastModified>
        <ETag>&quot;45b49cfc01c40179ed8daf4afc0b25b5&quot;</ETag>
        <Size>234</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-06 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-06T10:24:13.000Z</LastModified>
        <ETag>&quot;04ff1dfae2eea00a64f97460638af7df&quot;</ETag>
        <Size>5258</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-06 10:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-06T11:42:44.000Z</LastModified>
        <ETag>&quot;60a9c0f94e11840202edec78cf46e6bb&quot;</ETag>
        <Size>4912</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-08 20:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-08T21:27:28.000Z</LastModified>
        <ETag>&quot;bbefdea0b8adbd22ac0594baf1a5aecb&quot;</ETag>
        <Size>509</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-08 21:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-08T22:18:44.000Z</LastModified>
        <ETag>&quot;e21749b7802ce43a2af5a905cc842b37&quot;</ETag>
        <Size>1455</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-08 22:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-08T23:31:22.000Z</LastModified>
        <ETag>&quot;26c14f87af7fb2932a574a135cdb712d&quot;</ETag>
        <Size>4143</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-09 00:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-09T01:29:05.000Z</LastModified>
        <ETag>&quot;1214490f0e5cb8c20a71372b3775c135&quot;</ETag>
        <Size>687</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-09 01:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-09T02:16:35.000Z</LastModified>
        <ETag>&quot;f41f9f52657d38452cb78f5f88fe7cca&quot;</ETag>
        <Size>2144</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-09 21:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-09T22:16:32.000Z</LastModified>
        <ETag>&quot;0673c2ef3f226c986e60610c73caaca5&quot;</ETag>
        <Size>2701</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-09 23:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-10T00:30:22.000Z</LastModified>
        <ETag>&quot;43d5b96fa7f0d8f7bfa5c516c5c4e566&quot;</ETag>
        <Size>2451</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-10 00:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-10T01:31:10.000Z</LastModified>
        <ETag>&quot;6241e6e9876cbb63eb5ea4b278aab2da&quot;</ETag>
        <Size>996</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-10 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-10T10:41:29.000Z</LastModified>
        <ETag>&quot;764df04406e8425299088f4768f0c2ae&quot;</ETag>
        <Size>17864</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-10 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-10T14:15:56.000Z</LastModified>
        <ETag>&quot;43fa010c8c5b9f75e016f75f2dc1faf5&quot;</ETag>
        <Size>8912</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-11 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-11T10:16:44.000Z</LastModified>
        <ETag>&quot;d424946d2304102169759b120be27546&quot;</ETag>
        <Size>6900</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-11 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-11T12:19:17.000Z</LastModified>
        <ETag>&quot;d8409cf06cba5ac5c90b9c84ba1cb5f6&quot;</ETag>
        <Size>4766</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-11 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-11T13:31:47.000Z</LastModified>
        <ETag>&quot;c247dd82452beef58d3e5fec507d3683&quot;</ETag>
        <Size>6265</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-11 17:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-11T18:23:42.000Z</LastModified>
        <ETag>&quot;23b2c5124dbaf4fcbb97651e95fd42b6&quot;</ETag>
        <Size>3872</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-12 16:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-12T17:48:40.000Z</LastModified>
        <ETag>&quot;20911e36f6749142f76ab20e1cd15402&quot;</ETag>
        <Size>488</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-13 00:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-13T01:37:01.000Z</LastModified>
        <ETag>&quot;2463f416c5e0cc0ef300464ceb823526&quot;</ETag>
        <Size>1985</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-14 10:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-14T11:42:16.000Z</LastModified>
        <ETag>&quot;2ad52b184f22e8f42232dff10a20666e&quot;</ETag>
        <Size>2228</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-14 11:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-14T12:42:49.000Z</LastModified>
        <ETag>&quot;e69eb05b7984ebad21ea80c6bbef513c&quot;</ETag>
        <Size>516</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-14 15:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-14T16:16:51.000Z</LastModified>
        <ETag>&quot;12c484eef85e075e12d180eff9a717de&quot;</ETag>
        <Size>1506</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-18 22:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-18T23:20:49.000Z</LastModified>
        <ETag>&quot;86e65f04fb1cfaef6095b66ae8f58b00&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-19 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-19T13:18:35.000Z</LastModified>
        <ETag>&quot;ffece53500c5910cfff3660f58b16b71&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-20 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-20T10:15:01.000Z</LastModified>
        <ETag>&quot;e0a138b97cbe4edf683ee5ee377cbf6f&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-22 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-22T20:39:46.000Z</LastModified>
        <ETag>&quot;10ec943ef6be77df9419252fb87b2728&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-24 17:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-24T18:17:35.000Z</LastModified>
        <ETag>&quot;fa46944e1f0bc33a00019957bcad3409&quot;</ETag>
        <Size>6732</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-25 19:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-25T20:41:27.000Z</LastModified>
        <ETag>&quot;1c932333b7593e0858e6447b52652af0&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-26 05:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-26T06:37:27.000Z</LastModified>
        <ETag>&quot;2e98f3d6acb8bba2c9f5c97884c92e50&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-26 07:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-26T08:15:29.000Z</LastModified>
        <ETag>&quot;68da678c2733bf9f0a8f25f09299bce5&quot;</ETag>
        <Size>472</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-26 14:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-26T15:49:48.000Z</LastModified>
        <ETag>&quot;90ec3f1d49198a1d5e2ade1917a67295&quot;</ETag>
        <Size>980</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-27 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-27T10:29:00.000Z</LastModified>
        <ETag>&quot;7acf46ed4e1c9058e0c1bd8e9759c3a5&quot;</ETag>
        <Size>1986</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-27 22:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-27T23:38:57.000Z</LastModified>
        <ETag>&quot;4430f45b972eb164c4e6ed59dcd2f162&quot;</ETag>
        <Size>1256</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-28 08:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-28T09:26:34.000Z</LastModified>
        <ETag>&quot;bc1148734026da228abd4903510af2a7&quot;</ETag>
        <Size>473</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-28 09:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-28T10:39:40.000Z</LastModified>
        <ETag>&quot;f70a3db377aa9b83ec66b474c51e4ef0&quot;</ETag>
        <Size>2806</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-28 12:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-28T13:33:41.000Z</LastModified>
        <ETag>&quot;32c09bbbce31284ce77db92af2498c66&quot;</ETag>
        <Size>1419</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Datapoint/2020-08-28 13:00:00/Datapoints.csv</Key>
        <LastModified>2020-08-28T14:38:51.000Z</LastModified>
        <ETag>&quot;d770cb5b51b40b3eff1dacffca319534&quot;</ETag>
        <Size>1419</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Location/2020-08-28 08:00:00/Locations.csv</Key>
        <LastModified>2020-08-28T09:34:22.000Z</LastModified>
        <ETag>&quot;80c5d69d5701632714d6fcc00f0335d0&quot;</ETag>
        <Size>146</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Location/2020-08-28 09:00:00/Locations.csv</Key>
        <LastModified>2020-08-28T10:16:59.000Z</LastModified>
        <ETag>&quot;ca84a198fb3a9610b325e1bb7c345c30&quot;</ETag>
        <Size>290</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-04-24 09:00:00/Registrations.csv</Key>
        <LastModified>2020-04-24T10:25:00.000Z</LastModified>
        <ETag>&quot;404b7ae5b8fd6629aa426de481645155&quot;</ETag>
        <Size>110</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-04-24 12:00:00/Registrations.csv</Key>
        <LastModified>2020-04-24T13:16:10.000Z</LastModified>
        <ETag>&quot;f0797d1f5a47062ee951351a993404e6&quot;</ETag>
        <Size>109</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-04-30 12:00:00/Registrations.csv</Key>
        <LastModified>2020-04-30T13:36:01.000Z</LastModified>
        <ETag>&quot;b5b48d49cb0e8f530e7c590de5c549f6&quot;</ETag>
        <Size>76</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-04-30 13:00:00/Registrations.csv</Key>
        <LastModified>2020-04-30T14:27:50.000Z</LastModified>
        <ETag>&quot;fa5cbec2a643dd47968abc02de4d9bee&quot;</ETag>
        <Size>493</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-05-19 14:00:00/Registrations.csv</Key>
        <LastModified>2020-05-19T15:16:29.000Z</LastModified>
        <ETag>&quot;a236a86af28ce89b0d57a95f3026233c&quot;</ETag>
        <Size>219</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-05-22 00:00:00/Registrations.csv</Key>
        <LastModified>2020-05-22T01:39:50.000Z</LastModified>
        <ETag>&quot;59ea69fceb4d592dbd4291a0f828c20d&quot;</ETag>
        <Size>189</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-05-22 09:00:00/Registrations.csv</Key>
        <LastModified>2020-05-22T10:28:00.000Z</LastModified>
        <ETag>&quot;d52371d4d2c1e00e966b0a2595fb4be3&quot;</ETag>
        <Size>1741</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-06-04 10:00:00/Registrations.csv</Key>
        <LastModified>2020-06-04T11:32:13.000Z</LastModified>
        <ETag>&quot;7ea401f267cf357f2eef9751d12a8ba2&quot;</ETag>
        <Size>473</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-06-04 11:00:00/Registrations.csv</Key>
        <LastModified>2020-06-04T12:28:24.000Z</LastModified>
        <ETag>&quot;d48f5d150ca8790780c73b32901526b7&quot;</ETag>
        <Size>239</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-07-15 13:00:00/Registrations.csv</Key>
        <LastModified>2020-07-15T14:45:35.000Z</LastModified>
        <ETag>&quot;4a37ff5f43f5e5c4bc21c502fe5b0a35&quot;</ETag>
        <Size>220</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-07-15 14:00:00/Registrations.csv</Key>
        <LastModified>2020-07-15T15:49:00.000Z</LastModified>
        <ETag>&quot;c1cad4ae1928a6bcee2374b408f4faa7&quot;</ETag>
        <Size>109</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-08-29 10:00:00/Registrations.csv</Key>
        <LastModified>2020-08-29T11:41:29.000Z</LastModified>
        <ETag>&quot;97ca020018f295192252295f135492a5&quot;</ETag>
        <Size>699</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
    <Contents>
        <Key>Registration/2020-08-29 11:00:00/Registrations.csv</Key>
        <LastModified>2020-08-29T12:46:03.000Z</LastModified>
        <ETag>&quot;4e76b2665678b520490f5f8091809927&quot;</ETag>
        <Size>233</Size>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
</ListBucketResult>
```

```
curl --location --request GET 'https://s3.amazonaws.com/us-dev-data-export-0bbb112e/Connection/2020-02-03 21:00:00/dataexportserviceConnections.csv' \
--header 'X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' \
--header 'X-Amz-Date: 20200829T145742Z' \
--header 'Authorization: AWS4-HMAC-SHA256 Credential=AKIAT554AKGR7TP3F2HS/20200829/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=4a2a031d1719074da55c9f4df3c942a103c34063449ee7b8cd608260926b1bd0'
```

```
0bbb112e,ledevb,AC000W006512709,Mon Feb 03 21:30:45 UTC 2020,b95384c0-8165-11e8-929b-0a27c1b236f4,Offline
0bbb112e,ledevb,AC000W006512709,Mon Feb 03 21:30:45 UTC 2020,b95384c0-8165-11e8-929b-0a27c1b236f4,Online
```

```
curl --location --request GET 'https://s3.amazonaws.com/us-dev-data-export-0bbb112e/Datapoint/2020-02-05 12:00:00/dataexportserviceDatapoints.csv' \
--header 'X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' \
--header 'X-Amz-Date: 20200829T150500Z' \
--header 'Authorization: AWS4-HMAC-SHA256 Credential=AKIAT554AKGR7TP3F2HS/20200829/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=b5a7b81454de44c8ecec92279139533495891210ffdfe1f3bb610fda75b19173'
```

```
0bbb112e,ledevb,AC000W006670592,log,bG9n,string,369ec350-4810-11ea-3dc0-f21d21af9504,,Wed Feb 05 12:08:26 UTC 2020,Wed Feb 05 12:08:26 UTC 2020,b95384c0-8165-11e8-929b-0a27c1b236f4,false,false,false,user,,,,,Q01EXzE=,e30=,output
0bbb112e,ledevb,AC000W006670592,output,b3V0cHV0,integer,36d6ecee-4810-11ea-244f-229e7f739933,,Wed Feb 05 12:08:26 UTC 2020,Wed Feb 05 12:08:26 UTC 2020,b95384c0-8165-11e8-929b-0a27c1b236f4,false,false,false,user,7,,,,,e30=,output
```

```
curl --location --request GET 'https://s3.amazonaws.com/us-dev-data-export-0bbb112e/Registration/2020-04-24 09:00:00/Registrations.csv' \
--header 'X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' \
--header 'X-Amz-Date: 20200829T150934Z' \
--header 'Authorization: AWS4-HMAC-SHA256 Credential=AKIAT554AKGR7TP3F2HS/20200829/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=40be415f374d096770181a0987e6ea3e5e4b049a9d0f18e689c3fbaed8150961'
```

```
0bbb112e,ledevb,AC000W006512709,b95384c0-8165-11e8-929b-0a27c1b236f4,false,Dsn,,Fri Apr 24 09:57:47 UTC 2020
```

```
curl --location --request GET 'https://s3.amazonaws.com/us-dev-data-export-0bbb112e/Location/2020-08-28 08:00:00/Locations.csv' \
--header 'X-Amz-Content-Sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' \
--header 'X-Amz-Date: 20200829T151206Z' \
--header 'Authorization: AWS4-HMAC-SHA256 Credential=AKIAT554AKGR7TP3F2HS/20200829/us-east-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=e85d3c70165925ec98a49d1ebd54afb750f6f66e611e91c858f3ccac19a78d1c'
```

```
0bbb112e,ledevb,AC000W006512709,67.255.234.73, 44.787100,-65.123400,user-based,bc99cace-9b83-11ea-a601-0a580ae9531e,Fri Aug 28 08:52:08 UTC 2020
```
