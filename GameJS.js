var game = new Phaser.Game(2400, 2400, Phaser.AUTO, '', { preload: preload, create: create, update: update });





function preload() {
    game.load.tilemap('labyrint2', 'labyrint2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('Wall', 'DawnLike/Objects/Wall.png');
    game.load.image('Floor', 'DawnLike/Objects/Floor.png');
    game.load.image('Door0', 'DawnLike/Objects/Door1.png');
    game.load.spritesheet('dude, assets/dude.png');
    
}

var map;
var player;



function create() {
    map = game.add.tilemap('labyrint2');
    map.addTilesetImage('Wall', 'tiles');
    map.addTilesetImage('Floor', 'tiles');
    map.addTilesetImage('Door0', 'tiles');
    
    // speler
    player = game.add.sprite(-1, 1374, 'dude');
        //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    player.fixedToCamera = true;
    
}

function update() {

}

