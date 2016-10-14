//Create GLOBAL variable below here on line 2
var global_result;

    $(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var movie = result.feed.entry[0]['im:image'][2].label;
                console.log(movie);
                for(i=0; i<result.feed.entry.length;i++){
                    var images = result.feed.entry[i]['im:image'][2].label;
                    var img = $('<img>',{
                        src: images
                        });
                    $('#main').append(img);
                    var movie_title = result.feed.entry[i]['title'].label;
                    var movie_title1 = $('<h1>',{
                        text: movie_title,
                    });
                    $(movie_title1).appendTo('#main');
                }

            }
        });
        console.log('End of click function');
    });
});

