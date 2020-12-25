class Player{
    constructor(){
    
    }
    getCount(){
        var playerCountref = db.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        db.ref('/').update({
            playerCount:count
        })
    }
    update(Name){
        var playerIndex = "Player"+playerCount;
        db.ref(playerIndex).set({
            Name:Name
        })
    }
}