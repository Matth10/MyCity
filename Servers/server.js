// MODULES
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectId = require('mongodb').ObjectId;
var assert = require('assert');
const url = require('./bddurl').url;
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var crypto = require('crypto');
const algorithm = 'aes-256-ctr';
var bcrypt = require('bcrypt');
//KEYS AND CERTIFICATES
// const key = fs.readFileSync('');//TODO fill with the key file
// const certificate = fs.readFileSync('');//TODO
// const credentials = { key : key, cert : certificate};

//CONFIGURATION APPLICATION
var port = 8080;
var tabClients = [];
var Client = function(Socket) {
  this.socket = Socket;
  this.pseudo = '';
  this.secret = '';
};
//Salt for Hash
var saltRounds = 10;
//connection to the database
let db = new sqlite3.Database(__dirname + '/' + 'clients.db', err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Authentification database.');
});

//APPLICATION ROUTING
//get the index.html to load the fronthead
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

io.on('connection', socket => {
  //store the socket in the Object Sockets
  var client = new Client(socket);
  tabClients.push(client);
  console.log(`there are ${tabClients.length} clients connected`);

  socket
    .on('chargerEvenements', data => {
      MongoClient.connect(
        url,
        { useNewUrlParser: true },
        async function(err, client) {
          if (err) throw err;
          var db = client.db('mycity');
          var evenements;
          console.log('successfully connected to the database');

          function getEvenements(db) {
            return db
              .collection('mycity')
              .find({})
              .toArray();
          }

          getEvenements(db).then(function(array) {
            socket.emit('chargerEvenementsSucceed', array);
          });

          client.close();
        }
      );
    })
    .on('disconnect', () => {
      removeSocket(socket);
      console.log(`there are ${tabClients.length} clients connected`);
      console.log('One client was disconnected');
    })

    .on('AddEvent', data => {
      MongoClient.connect(
        url,
        function(err, client) {
          if (err) throw err;
          var db = client.db('mycity').collection('mycity');

          db.insert(data);
          console.log('New event was created');

          function getEvenements(db) {
            return db.findOne({ description: data.description });
          }

          getEvenements(db).then(function(found) {
            console.log(found);
            socket.emit('onNewEventAdded', found);
          });

          client.close();
        }
      );
    })

    .on('RemoveParticipant', data => {
      // data contains data.event (id) and data.user (username)
      MongoClient.connect(
        url,
        function(err, client) {
          if (err) throw err;
          var db = client.db('mycity').collection('mycity');

          try {
            db.updateOne(
              { _id: ObjectId(data.event) },
              {
                $pull: { participants: data.user },
                $inc: { nbPersonInscrit: -1 },
              }
            ).then(function(e) {
              socket.emit('removeParticipant_SUCCESS', data);
              // Broadcast is not recieved by sender
              socket.broadcast.emit(
                'participantRemoved',
                data.event.toString()
              );
            });
          } catch (e) {
            socket.emit('removeParticipant_FAILED', e);
          }

          client.close();
        }
      );
    })

    .on('AddParticipant', data => {
      // data contains data.event (id) and data.user (username)
      MongoClient.connect(
        url,
        function(err, client) {
          if (err) throw err;
          var db = client.db('mycity').collection('mycity');

          db.updateOne(
            { _id: ObjectId(data.event) },
            {
              $push: { participants: data.user },
              $inc: { nbPersonInscrit: 1 },
            }
          ).then(() => {
            // Only non-senders recieve broadcast
            db.findOne({ _id: ObjectId(data.event) }).then(found => {
              console.log(found);
              socket.broadcast.emit('onEventUpdated', event);
            });
          });
          client.close();
        }
      );
    })

    .on('GetParticipants', data => {
      // data contains data.event (id)
      MongoClient.connect(
        url,
        function(err, client) {
          if (err) throw err;
          var db = client.db('mycity').collection('mycity');

          db.findOne({ _id: ObjectId(data.event) }, { participants: 1 }).then(
            function(found) {
              socket.emit('GetParticipantsSucceed', found.participants);
            }
          );
          client.close();
        }
      );
    })

    .on('ResetParticipants', _ => {
      MongoClient.connect(
        url,
        function(err, client) {
          if (err) throw err;
          var db = client.db('mycity').collection('mycity');

          // db.updateMany({},
          //         { $set : {
          //             "participants" : [],
          //             "nbPersonInscrit" : 0
          //           }
          //         });
          socket.emit('ResetParticipantsSuccess', true);

          client.close();
        }
      );
    })

    .on('UpdateType', _ => {
      MongoClient.connect(
        url,
        function(err, client) {
          if (err) throw err;
          var db = client.db('mycity').collection('mycity');

          // db.find().forEach( function (x) {
          //   x.participants = [];
          //   db.save(x);

          client.close();
        }
      );
    });
});

//SERVER LISTENING
http.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

//check if client exist
function isClientExist(client) {
  tabClients.forEach(function(c) {
    if (c.pseudo === client.pseudo) {
      return true;
    }
  });
  return false;
}

function removeSocket(source) {
  tabClients.splice(
    tabClients
      .map(client => {
        client.pseudo;
      })
      .indexOf(source.pseudo),
    1
  );
}
