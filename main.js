var settings = {


    "url": `https://api-gate2.movieglu.com/filmsNowShowing/?n=10`,


    "method": "GET",


    "timeout": 0,
    "headers": {
        "api-version": "v200",

        "Access-Control-Allow-origin": "*",
        "Authorization": "Basic UEVPUDo4T3l1T1EyWlRLRUo=",
        "client": "PEOP",
        "x-api-key": "7dhFPQ2vp4812JMlW5HNg3r1g5NrHzNV6MRA4QhB",
        "device-datetime": "2022-06-06T10:08:29.530Z",
        "geolocation": "17.387;78.491",
        "territory": "IN",
    },
};
$.ajax({
    url: 'url',
    // headers: { 'Access-Control-Allow-Origin': '*' },
    // data: data,
    type: 'GET',
    /* etc */
    dataType: "jsonp",
    contentType: "applicaton/json",
    crossDomain: true,
    success: function (data) {

    }
})

$.ajax(settings).done(function (response) {
    console.log(response);
    let output = '';

    response.films.forEach(film => {
        output += `
        
        <a class="text-decoration-none" href="moviedetails.html?id=${film.film_id}"><div class=" mb-5" style= "width: auto ">

            <div class="">
       
            </div >

            <div id="film-details" data-movie="${film.film_id}" class="card-text text-white p-2">
                 <img src="https://image.movieglu.com/${film.film_id}/IND_${film.film_id}h0.jpg" width="200px" height="250px"> <br>
                
                <div class="text-center">
                <span> <b> ${film.film_name} </b></span ><br>
                <span class=""><b> Release date:</b> ${film.release_dates[0].release_date}</span></div>
            </div >
         
            </div ></a> `
    })


    document.querySelector('#cont').innerHTML = output
});