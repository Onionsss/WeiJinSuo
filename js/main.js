

/**
 *   JS
 */

$(function () {
    /* 入口函数 */
    

    function reSizeBannerImg() {

        var width = $(window).width();

        var isSmall = width < 768;
        console.log(isSmall+width)
        console.log(new Date().getTime())
        $("#banner .item").each(function (i, item) {
            var $item = $(item)

            var url = isSmall?$item.data("image-xs"):$item.data("image-lg")
            console.log(url)
            $item.css("background-Image",'url("'+url+'")')

            if(isSmall){
                $item.html('<img src="'+url+'"/>')
            }else{
                $item.empty();
            }

        })

    }

    $(window).on("resize",reSizeBannerImg).trigger("resize")

})