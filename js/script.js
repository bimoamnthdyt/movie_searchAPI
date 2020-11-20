$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.co/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'f7ee9825',
            's' : '',
        },
        success : function (result) {
            if (result.Response == "true"){
                let movies = result.Search;
                console.log(movies);
            }else{
                $('#movie-list').html('<h1>Movie Not Found!</h1>')
            }
        }
    });
});