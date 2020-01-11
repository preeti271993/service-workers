var push = require('web-push')

let vapidKeys = 
  { 
     publicKey: 'BBtR9fc40711j4CBNGdVtfgj4mPDNaa1Yt10MosYDVcDeQb6F5HJvlH40UBinMSKjdMXEdghOIxgJqY4LI4LeZQ',
     privateKey: 'ISl-7KhAz3veKcrbjYd5-0HlxfJpSh-3pIeCa33qQH4' 
  }

  push.setVapidDetails('mailto: preeti.kumari@droom.in' , vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};

  push.sendNotification(sub, 'test message')
 