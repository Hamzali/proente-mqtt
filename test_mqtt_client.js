var mqtt = require('mqtt')
var client  = mqtt.connect([{host: 'localhost', port: '1883'}])

client.on('connect', function () {
  client.subscribe('#', function (err) {
      console.log(err);
  });
});
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
});

setInterval(() => client.publish('test_topic', '{msg: hello}'), 1000);

