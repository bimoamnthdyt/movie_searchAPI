function searchMovie() {

    $('#movie-list').html('');

    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'f7ee9825',
            's' : $('#search-input').val()
        },
        success : function (result) {
            if (result.Response == "True"){
                let movies = result.Search
                
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4"> 
                    <div class="card">
                        <img src="` + data.Poster +`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">` + data.Title + `</h5>
                            <p class="card-text">` + data.Year + `</p>
                            <a href="#" class="card-link">See Details</a>
                        </div>
                    </div>
                    </div>
                    `);
                });

                $('#search-input').val('');

            }else{
                $('#movie-list').html(`
                <div class='col'>
                    <h1 class = "text-center">`+ result.Error +`</h1>
                </div>
                `);
                
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
        searchMovie();
    }
})