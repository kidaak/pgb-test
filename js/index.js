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
        if (!navigator.userAgent.match(/(Chrome|Safari)/)) {
            document.addEventListener('deviceready', this.onDeviceReady, false);    
        } else {
            app.onDeviceReady();
        }
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        if (localStorage.getItem('storedData')) {
            $('.log').text(localStorage.getItem('storedData'));
        } else {
            $('.log').text('Storing "Hello"')
            localStorage.setItem('storedData', 'Hello');
        }

        $('#clear-btn').on('click', function() {
            $('.log').text('Cleared');
            localStorage.clear();
        });

        /*
        var info = 'Device Model: '    + device.model    + '<br />' +
                    'Device Cordova: '  + device.cordova  + '<br />' +
                    'Device Platform: ' + device.platform + '<br />' +
                    'Device UUID: '     + device.uuid     + '<br />' +
                    'Device Version: '  + device.version  + '<br />';
        $('#device-info').html(info);
        */

        var stage = new createjs.Stage('demoCanvas');
        createjs.Touch.enable(stage);
        var circle = new createjs.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50);
        stage.addChild(circle);
        stage.update();
        circle.on("pressmove", function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
            stage.update();
        });
    }
};
