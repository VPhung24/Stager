function getTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('time_span').innerHTML = t_str;
}

function getArtistSchedules() {
    // Create fake data to read in
    // return list of Artist objects each of which consists of 
    // [Stage #, Artist, Date, Artist Pic URL, Short Description]
}

function updateStage() {
    var currentTime = new Date()
    var day = currentTime.getDay()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    // var artist_schedules = getArtistSchedules()
    // var prev_artist = 
    // for(int i = 1; i < artist_schedules.length; i++) {
    //     if artist_schedules[i - 1] < currentTime and 
    //         artist_schedules[i] > currentTime
    //         if artist_schedules[i].stage == Lands End
    //             update Lands End html page
    //         if artist_schedules[i].stage == Twin Peaks
    //             update Twin Peaks html page
                // var artist_pic = artist_schedules[i].artist_pic 
                // document.getElementById('artist-pic').innerHTML = artist_pic;
                // var curr_artist = document.getElementById('').innerHTML
                // var next_artist = document.getElementById('').innerHTML
                // var curr_artist_desc = document.getElementById('').innerHTML
    // }


    
}