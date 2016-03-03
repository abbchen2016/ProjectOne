(function(){
    var works = ['aaa','bbb','ccc','ddd','aaa','bbb','ccc','ddd','aaa','bbb','ccc','ddd','aaa','bbb','ccc','ddd'];//16个作品
    var divHtml = "";
    (function(arr){
        for(var i = 0;i<arr.length;i++){
            divHtml+='<div class="col-xs-4 col-sm-4 col-md-3 col-lg-2">' +
                    '<div class="row">' +
                        '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">产品'+arr[i]+'</div>' +
                        '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><img src="image/wait.jpg" class="img-responsive"></div>' +
                        '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><a href="#">简介</a></div>' +
                        '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><a href="#">下载</a></div>' +
                    '</div>' +
                '</div>';
        }
    })(works);
    document.getElementById('divContent').innerHTML=divHtml;
})();
