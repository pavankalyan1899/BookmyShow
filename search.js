const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", e => {
    e.preventDefault();


    const textValue = document.getElementById("search-text").value;
    console.log(textValue);


    var settings = {


        "url": `https://api-gate2.movieglu.com/filmLiveSearch/?n=2&query=${textValue}`,


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
        }
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
           <a href="moviedetails.html?id=${film.film_id}"> <div class=" p-3 card mb-2 bg-dark " style= "width: 15rem ">

            <div class="card-body p-3 ">
       
            </div >

            <div id="film-details" data-movie="${film.film_id}" class="card-text text-white p-2">
                 <img src="https://image.movieglu.com/${film.film_id}/IND_${film.film_id}h0.jpg"> 
                
                <p> <b>Song Name:</b> ${film.film_name}</p >
                <p><b> Release date:</b> ${film.release_dates[0].release_date}</p>
            </div >
         
            </div ></a>`
        })


        document.querySelector('#cont').innerHTML = output
    });
})