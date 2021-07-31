import loadHome from './home.js';
import loadBackground from './background.js';


function loadDystrophin(){
    return(`
        <div class='scenarioDescription'>
            <div class='info' style="width:90%;hight:200px;background-color:#E6E9Ed;margin:auto;color:#656D78;text-align:left;border-radius:10px;padding:10px;margin-top:20px;">
                <span>
                    <b>Dystrophin</b>.
                </span>
            </div>
        </div>
   `);
}

function loadTreatment(){
    return(`
        <div class='scenarioDescription'>
            <div class='info' style="width:90%;hight:200px;background-color:#E6E9Ed;margin:auto;color:#656D78;text-align:left;border-radius:10px;padding:10px;margin-top:20px;">
                <span>
                    <b>Treatment</b>.
                </span>
            </div>
        </div>
   `);
}

function loadProgression(){
    return(`
        <div class='scenarioDescription'>
            <div class='info' style="width:90%;hight:200px;background-color:#E6E9Ed;margin:auto;color:#656D78;text-align:left;border-radius:10px;padding:10px;margin-top:20px;">
                <span>
                    <b>Progression</b>.
                </span>
            </div>
        </div>
   `);
}


$(document).ready(function() {
    $( ".ml-auto .nav-item" ).bind( "click", function(event) {
        event.preventDefault();
        var clickedItem = $( this );
        $( ".ml-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
        console.log('New This: ',$( this ).text());
	let contextId = $( this ).text();
	$('#mainPage').html('');
	$('#mainPage').html(mainPageContext(contextId));
    });
});

function mainPageContext(context){
    console.log('Preping for ',context);
    console.log(context.includes('Background'));
    if(context.includes('Home')){
        return loadHome();
    }
    if(context.includes('Background')){
	console.log('Returning background');
        return(loadBackground());
    }
    if(context.includes('Dystrophin')){
        return loadDystrophin();
    }
    if(context.includes('Treatment')){
        return loadTreatment();
    }
    if(context.includes('Progression')){
        return loadProgression();
    }
}

$('#mainPage').html(loadHome());
