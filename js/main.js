
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('4', 'assets/pics/4.jpg');
	game.load.image('2', 'assets/pics/2.jpg');
	game.load.image('1', 'assets/pics/1.jpg');
	game.load.audio('a', 'assets/sound/5.mp3');

}

var sprite;
var cursors;
var emitter;
var text;
var count;
var ball;

function create() {

    game.add.image(0, 0, '4');
	   game.add.image(333, 0, '4');
	    game.add.image(666, 0, '4');
		
		game.add.image(0, 110, '4');
	   game.add.image(333, 110, '4');
	    game.add.image(666, 110, '4');
		
		game.add.image(0, 220, '4');
	   game.add.image(333, 220, '4');
	    game.add.image(666, 220, '4');
		
		game.add.image(0, 330, '4');
	   game.add.image(333, 330, '4');
	    game.add.image(666, 330, '4');
		
	

    game.add.image(0, 440, '4');
	 game.add.image(333, 440, '4');
	  game.add.image(666, 440, '4');

	//	Enable p2 physics
	game.physics.startSystem(Phaser.Physics.P2JS);

    //  Make things a bit more bouncey
    game.physics.p2.defaultRestitution = 0.8;

    //  Add a sprite
	sprite = game.add.sprite(300, 500, '2');

    //  Enable if for physics. This creates a default rectangular body.
	game.physics.p2.enable(sprite);

    //  Modify a few body properties
	sprite.body.setZeroDamping();
	sprite.body.fixedRotation = true;

    text = game.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });
	text = game.add.text(20, 50, 'collect at least 40 hearts', { fill: '#ffffff' });

    cursors = game.input.keyboard.createCursorKeys();
	
	

   game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.arcade.gravity.y = 150;
	game.time.events.repeat(Phaser.Timer.SECOND * 0.4, 100, createBall, this);
	
	
	count = 0;

    text = game.add.text(700, 40, "Count:0", {
        font: "20px Arial",
        fill: "#ff0044",
        align: "center"
    });

    text.anchor.setTo(0.5, 0.5);
	
	game.physics.p2.enable([ sprite,createBall], true);
	block.body.onBeginContact.add(blockHit, this);
}


function createBall() {

    //  A bouncey ball sprite just to visually see what's going on.

    ball = game.add.sprite(game.world.randomX, 0, '1');

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    
    ball.body.collideWorldBounds = false;
	}
	
function update() {

	sprite.body.setZeroVelocity();

    if (cursors.left.isDown)
    {
    	sprite.body.moveLeft(400);
    }
    else if (cursors.right.isDown)
    {
    	sprite.body.moveRight(400);
    }

    if (cursors.up.isDown)
    {
    	sprite.body.moveUp(400);
    }
    else if (cursors.down.isDown)
    {
    	sprite.body.moveDown(400);
    }
	
	
	game.physics.arcade.collide(sprite, ball, collisionHandler,updateText, null, this);


}
function collisionHandler(sprite,ball){
  remove (ball);
}
function updateText() {

    count++;

    text.setText("Count:" + count );

}


