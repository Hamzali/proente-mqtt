var mqttServer = require('mqtt-server');

var servers = mqttServer({
  mqtt: 'tcp://0.0.0.0:1883',
}, {
  emitEvents: true // default
}, function(client){
    client.on('data', function (data) {
        console.log("MSG: ", data, String(data.payload));
    });
  client.connack({
    returnCode: 0
  });
});

servers.listen(function(){
  console.log('listening!');
});
