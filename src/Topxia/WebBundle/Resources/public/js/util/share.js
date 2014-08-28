define(function(require, exports, module) {

    exports.create = function(select,name,type) {

    var itemsAll = ['tsina','qq','weixin','renren','more'
    ];

    var itemsByqq = ['qq','more'
    ];

    var config=[];
    config.itemsAll=itemsAll;
    config.itemsByqq=itemsByqq;

    if(type=="dropdown"){
        var html='<div class="dropdown pull-right" style="padding:6px 12px;"><a class="dropdown-toggle text-muted "  href="#" id="dropdownMenu1" data-toggle="dropdown" >分享到<span class="caret"></span></a><ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1"><div class="bdsharebuttonbox" style="padding:10px;">';
    }else{
        var html='<div><ul><div class="bdsharebuttonbox" style="padding:10px;">';
    }
 
    if(config[name].indexOf("qq")>=0){
         html+='<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>';
    }
    if(config[name].indexOf("tsina")>=0){
         html+='<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>';
    }
    if(config[name].indexOf("weixin")>=0){
         html+='<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>';
    }
    if(config[name].indexOf("renren")>=0){
         html+='<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a> ';
    }
    if(config[name].indexOf("more")>=0){
         html+='<a href="#" class="bds_more" data-cmd="more"></a>'; 
    }
    var bdText=$(select).attr("data-bdText");
    html+='</div>';
     window._bd_share_config={     
    "common":{       "bdSnsKey":{},
           "bdText":bdText,
           "bdMini":"2",       
           "bdMiniList":false,       
           "bdPic":"",       
           "bdStyle":"0",       
           "bdSize":"24"       
            },       
    "share":{},       
    "image":{        
            "viewList":["qzone","weixin","tqq","tsina","renren"],         
            "viewText":"分享到：",         "viewSize":"16"      
            },       
    "selectShare":{         
            "bdContainerClass":null,         
            "bdSelectMiniList":["tsina","qzone","weixin","renren"]       
            }};       
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)]; 
    
    html+='</ul></div>';
    $(select).html(html);
}


});