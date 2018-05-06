/**
 * Created by Administrator on 2018/5/6.
 */
(function($) {

    $(function() {
        var html = "";
        for(var i = 0 ; i < 10 ; i++){
            html += "<div>" +
                "<header>" +
                "<h2><a href='#'>Spring boot--学习体会</a></h2>" +
                "</header>" +
                "<p>Spring boot--学习体会Spring boot--学习体会Spring boot--学习体会Spring boot--学习体会Spring boot--学习体会</p>" +
                "<hr class=\"major\" />" +
                "   </div>" +
                "            <div>" +
                "   <header>" +
                "   <h2><a href=\"#\">使用云服务器之感</a></h2>" +
                "   </header>" +
                "   <p>使用云服务器之感使用云服务器之感使用云服务器之感使用云服务器之感使用云服务器之感使用云服务器之感使用云服务器之感使用云服务器之感</p>" +
                "   <hr class=\"major\" />" +
                "   </div>" ;
        }
        $("#zl-aricle-body").html(html);
    })
})(jQuery);