(function(){
    require.config({
        baseUrl:    'js/',
        defaultExt: '.js',
        paths:{
            jquery:'jquery-1.12.1.min'
            ,
            zepto:'zepto.min'
        }
        ,
        shim:{
            zepto:{
                exports:'$'
            }
        }
    });
})();