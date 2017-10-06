(function () {
    var _myConnection, // My RTCPeerConnection instance
        //_myMediaStream; // My MediaStream instance
        sendChannel,
        receiveChannel,
        dataConstraint,
        msgTxt = document.querySelector('input#msg-txt'),
        chatLogTxt = document.querySelector('textarea#chat-log'),
        sendButton = document.querySelector('button#send-btn');
        closeButton = document.querySelector('button#close-btn');


    // Set up the SignalR connection
    var hub = $.connection.webRtcHub;
    $.connection.hub.url = '/signalr/hubs';
    $.connection.hub.start(function () {
        console.log('connected to signal server.');
        init(); // Start up the app
    });

    // Generates a new connection object and ties up the proper callbacks.
    function _createConnection() {
        console.log('creating RTCPeerConnection...');

        dataConstraint = null;
        // Create a new PeerConnection
        var connection = new RTCPeerConnection(null); // null = no ICE servers

        connection.ondatachannel = receiveChannelCallback;

        sendChannel = connection.createDataChannel('sendDataChannel', dataConstraint);

        // A new ICE candidate was found
        connection.onicecandidate = function (event) {
            if (event.candidate) {
                // Let's send it to our peer via SignalR
                hub.server.send(JSON.stringify({ "candidate": event.candidate }));
            }
        };

        sendChannel.onopen = onSendChannelStateChange;
        sendChannel.onclose = onSendChannelStateChange;
        
        //sendChannel.onmessage = onReceiveMessageCallback;


        return connection;
    };

    function onReceiveMessageCallback(event) {
        console.log('Received Message');
        chatLogTxt.value = chatLogTxt.value + event.data + "\n";
    };

    function receiveChannelCallback(event) {
        console.log('Receive Channel Callback');
        receiveChannel = event.channel;
        receiveChannel.onmessage = onReceiveMessageCallback;
        receiveChannel.onopen = onReceiveChannelStateChange;
        receiveChannel.onclose = onReceiveChannelStateChange;
    };

    function onReceiveChannelStateChange() {
        var readyState = receiveChannel.readyState;
        console.log('Receive channel state is: ' + readyState);
    }

    function onSendChannelStateChange() {
        var readyState = sendChannel.readyState;
        console.log('Send channel state is: ' + readyState);
        if (readyState === 'open') {
            msgTxt.disabled = false;
            msgTxt.focus();
            sendButton.disabled = false;
            closeButton.disabled = false;
        } else {
            msgTxt.disabled = true;
            sendButton.disabled = true;
            closeButton.disabled = true;
        }
    };

    // Callback that receives notifications from the SignalR server
    hub.client.processNewMessage = function (data) {
        var message = JSON.parse(data),
            connection = _myConnection || _createConnection(null);

        // An SDP message contains connection and media information, and is either an 'offer' or an 'answer'
        if (message.sdp) {
            connection.setRemoteDescription(new RTCSessionDescription(message.sdp)).then(function(){
                if (connection.remoteDescription.type == 'offer') {
                    console.log('received offer, sending answer...');

                    // Create an SDP response
                    connection.createAnswer(function (desc) {
                        // Which becomes our local session description
                        connection.setLocalDescription(desc, function () {
                            // And send it to the originator, where it will become their RemoteDescription
                            hub.server.send(JSON.stringify({ 'sdp': connection.localDescription }));
                        });
                    }, function (error) { console.log('Error creating session description: ' + error); });
                } else if (connection.remoteDescription.type == 'answer') {
                    console.log('got an answer');
                }
            });
        } else if (message.candidate) {
            console.log('adding ice candidate...');
            connection.addIceCandidate(new RTCIceCandidate(message.candidate));
        }

        _myConnection = connection;
    };

    function init() {

        // Hookup the start button functionality
        document.querySelector('#ConnectBtn').addEventListener('click', function () {
            _myConnection = _myConnection || _createConnection(null);

            // Create an offer to send our peer
            _myConnection.createOffer(function (desc) {
                // Set the generated SDP to be our local session description
                _myConnection.setLocalDescription(desc, function () {
                    // And send it to our peer, where it will become their RemoteDescription
                    hub.server.send(JSON.stringify({ "sdp": desc }));
                });
            }, function (error) { console.log('Error creating session description: ' + error); });
        });

        sendButton.disabled = false;
        closeButton.disabled = false;

        sendButton.onclick = sendData;
        closeButton.onclick = closeDataChannels;
    };

    function sendData() {
        var data = msgTxt.value;
        sendChannel.send(data);
        chatLogTxt.value = chatLogTxt.value + data + "\n";
        console.log('Sent Data: ' + data);
    };

    function closeDataChannels() {
        console.log('Closing data channels');
        sendChannel.close();
        trace('Closed data channel with label: ' + receiveChannel.label);
        _myConnection.close();
        _myConnection = null;
        sendButton.disabled = true;
        closeButton.disabled = true;
        msgTxt.value = '';
        chatLogTxt.value = '';
    };

})();