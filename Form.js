class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html('Car Racing Game');
        title.position(130,0);
        var input = createInput("Name");
        input.position(130,160);
        var Button = createButton("Play");
        Button.position(250,200);
        var greeting = createElement('h2');
        Button.mousePressed(function(){
            input.hide();
            Button.hide();
            var Name = input.value();
            playerCount = playerCount+1;
            player.update(Name);
            player.updateCount(playerCount);
            greeting.html("Welcome"+Name);
            greeting.position(130,160);
            
        })
    }
}