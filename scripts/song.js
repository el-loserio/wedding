$(document).ready(function(){
    var songs = [
        'Ugly Kid Joe – Everything About You',
        'Joy Division – Love Will Tear Us Apart',
        'Gram Parsons – Streets Of Baltimore',
        'Fleetwood Mac – Go Your Own Way',
    ];
    $('#first-dance').text(songs[Math.floor(Math.random() * songs.length)]);
});
