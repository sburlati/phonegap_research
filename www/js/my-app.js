// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var username = '';
var password = '';
var url_matt  = 'empty.html';
var url_tomma = 'empty.html';
var url_bibi  = 'empty.html';

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    console.log("Device is ready!");
});



// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
    
})

myApp.onPageInit('index', function (page) {
    // Do something here for "index" page
    console.log("onPageInit('index'");
    console.log("username="+username+' / '+"password="+password);
    
    /* 
    var pageContainer = $$(page.container);
    pageContainer.find('.link').on('click', function () {
    username = pageContainer.find('input[name="username"]').val();
    password = pageContainer.find('input[name="password"]').val();
    console.log('username='+username+' '+'password='+password);
    });
    */
    
}); 


myApp.onPageInit('index', function () {
   // console.log('e');
   // var pagex = e.detail.page;
   // console.log('e'+pagex);
    
    /*
           $$(document).keyup(function(){
               
                console.log('index/kk');
                var values = 'x'; 
                var what = '#aTextContent';
                values = values + $$(what).val();
                console.log('index/kk:');
                console.log('index/kk: '+values+' :');
           });
    */    
    
})


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name == 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page:'+page.name);
    }
	
    if( page.name == 'index') {
        //console.log('index...1');
        $$(document).keyup(function(){
                var from = '#aTextContent';
                var into = '#aOutptContent';
                var values = $$(from).val();
                $$(into).html('++'+values+'++');     
                console.log('index/kk '+page.name+' '+values);
        });
        //console.log('index...2');
    }
    
/*    
    if( page.name == 'tab1') {
        //console.log('index...1');
    $$('.show-tab-1').on('click', function () {
        myApp.showTab('#tab1','#tab1',true,true);
        myApp.showTab('#tab2','#tab2',true,true);
        });
    $$('.show-tab-2').on('click', function () {
        myApp.showTab('#tab2');
        });
    $$('.show-tab-3').on('click', function () {
        myApp.showTab('#tab3');
        });  
    $$('.show-tab-4').on('click', function () {
        myApp.showTab('#tab4');
        });  
    $$('.hide-tab-1').on('click', function () {
        myApp.hideTab('#tab1','#tab1',true,false);
        });
    $$('.hide-tab-2').on('click', function () {
        myApp.hideTab('#tab2');
        });
    $$('.hide-tab-3').on('click', function () {
        myApp.hideTab('#tab3');
        });  
    $$('.hide-tab-4').on('click', function () {
        myApp.hideTab('#tab4');
        });  

        //console.log('index...2');
    } //<!-- tab1 -->
*/   
    
    if( page.name == 'week') {
        //init
        var w1=false; var w2=false; var w3=false; var w4=true;
        var values = '';
        w1= true; w2=true; w3=true;
        //
        $('#s-matt').click();
        $('#s-matt').click();
        $('#s-tomma').click();
        $('#s-tomma').click();
        $('#s-bibi').click();
        $('#s-bibi').click();
        //
     
    //myApp.alert('Username: ' + username + ', Password: '+ password);
        
        //console.log("w="+w1+' '+w2+' '+w3+' '+w4);
    $$('.s-matt').on('click', function () {
        var into = '#wrapper-1-matt'; // $$('#s-matt').html('');
        var url  = url_matt; //'matt.html';
        //var from = into;
        //if(values === '' ) { values = ' @ '+ $(from).data(); }
        //console.log('.s-matt'+' '+page.name+' :'+values+': ');
        if(w1) {$$(into).html('<hr />');} else { $(into).load(url); } 
        w1=!w1;    
        //console.log(' '+into+' '+page.name+' '+'w='+w1+' '+w2+' '+w3+' '+w4);
    });
        
    $$('.s-tomma').on('click', function () {
        var into = '#wrapper-2-tomma'; // $$('#s-tomma').html('');
        var url  = url_tomma; // 'tomma.html';
        if(w2) {$$(into).html('<hr />');} else { $(into).load(url); } 
        w2=!w2;     
        //console.log(' '+into+' '+page.name+' '+'w='+w1+' '+w2+' '+w3+' '+w4);
    });
        
    $$('.s-bibi').on('click', function () {
        var into = '#wrapper-3-bibi'; // $$('#s-bibi').html('');
        var url  = url_bibi; // 'bibi.html';
        if(w3) {$$(into).html('<hr />');} else { $(into).load(url); } 
        w3=!w3;     
        //console.log(' '+into+' '+page.name+' '+'w='+w1+' '+w2+' '+w3+' '+w4); 
    });
        
    $$('.s-four').on('click', function () {
        var into = '#wrapper-4-four'; $$('#s-four').html('');
        if(w4) {$$(into).html('<hr />');} else {$$(into).html('-'); } 
        w4=!w4;     
        //console.log(' '+into+' '+page.name+' '+'w='+w1+' '+w2+' '+w3+' '+w4);
    });
 
        //console.log("w="+w1+' '+w2+' '+w3+' '+w4);
    } //<!-- week -->

    if( page.name == 'usrpass') {
        //console.log('index...1');
        $$(document).keyup(function(){
                var user = '#username';
                var pass = '#password';
                var u = $$(user).val();
                var p = $$(pass).val();  
                console.log('user/pass '+page.name+' '+'u='+u+' '+'p='+p);
            username = u;
            password = p;
            /*
            if(username == 'stefano' && password == 'bibitomma') {
                // url_matt  = 'matt.html';
                url_tomma = 'tomma.html';
                url_bibi  = 'bibi.html';  
            } */
            if(username == 'stefano' && password.includes('matt') ) {
                url_matt  = 'matt.html';
                // url_tomma = 'tomma.html';
                // url_bibi  = 'bibi.html';  
            } 
            if(username == 'stefano' && password.includes('tomma') ) {
                // url_matt  = 'matt.html';
                url_tomma = 'tomma.html';
                // url_bibi  = 'bibi.html';  
            } 
            if(username == 'stefano' && password.includes('bibi') ) {
                // url_matt  = 'matt.html';
                // url_tomma = 'tomma.html';
                url_bibi  = 'bibi.html';  
            } 
            /*
            else {
                // url_matt  = 'empty.html';
                url_tomma = 'empty.html';
                url_bibi  = 'empty.html';                
            } */
        });
        //console.log('index...2');
    }

})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page (fixed)');
})