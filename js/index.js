/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //this.onDeviceReady();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        // Test loading
        $('#log').text('Test loading');
        

        //var queue = new createjs.LoadQueue();
        //queue.on('complete', this.handleComplete, this);
        //queue.on('fileload', this.handleFileLoad, this);
        //queue.loadFile('img/archives3_doc2_p2.jpg');
        //queue.load();

        //$('#log').html('<h1>Hi</h1>');
        //$('#log').html('<img src="img/archives3_doc2_p2.png">');

        $.ajax({
            //type: 'GET',
            url: 'img/archives3_doc2_p2.jpg',
            //timeout: 100,
            success: function(data){
                $('#log').text('success');
            },
            error: function() {
                $('#log').text('error');
            }
        });


        // Play the audio file at url
        var my_media = new Media('sounds/beep9.mp3',
            // success callback
            function () {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function (err) {
                console.log("playAudio():Audio Error: " + err);
        }
        );
        // Play audio
        my_media.play();
        
    },

    handleComplete: function() {
        $('#log').text('Loading complete');
    },

    handleFileLoad: function(evt) {
        $('#log').text(evt.item.src);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
