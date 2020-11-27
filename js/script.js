$('#search-button').on('click', function () {
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
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                    `);
                });

            }else{
                $('#movie-list').html(`
                <div class='col'>
                    <h1 class = "text-center">`+ result.Error +`</h1>
                </div>
                `);
                
            }
        }
    });
});