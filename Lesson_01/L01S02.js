//
// L01S02 - example server side script
//


var gr = new GlideRecord('INCIDENT');
gr.addActiveQuery();
gr.query();

while (gr.next()) {

    gs.info(gr.getValue('number'));
}

//Updated Script

var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

var x = '';

while (gr.next()) {
    x = gr.getValue('number');

    if(x.substring(0,4) == 'TASK'){
        gs.info(x);
    }
}


//Get incidents

var gr = new GlideRecord('incident');
gr.addActiveQuery();
gr.query();

var x = '';

while (gr.next()) {
    x = gr.getValue('number');

    gs.info(x);
}