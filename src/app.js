/**
 * Created by yuyingying on 2017/2/13.
 */
define('tpl10677', ["zepto",'vr'], function ($,VR) {
    return function(classid){
        let ss = 3 ;
        let squar = (b)=>{ return b*b ;}
        let sum = (a=1,b=2) =>{return a+b ;}
        console.log(sum(5,6));
        console.log(ss);
    };
})