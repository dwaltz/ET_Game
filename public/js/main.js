$(function(){
	// create an new instance of a pixi stage
	var stage = new PIXI.Stage(0x001f8e);

// create a renderer instance
	var renderer = PIXI.autoDetectRenderer(800, 600);

// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	requestAnimFrame(animate);

// create a texture from an image path
	var texture = PIXI.Texture.fromImage("./img/et.png");
	var houseS = PIXI.Texture.fromImage("./img/house.png");

// create a new Sprite using the texture
	var et = new PIXI.Sprite(texture);
	var house = new PIXI.Sprite(houseS);

// center the sprites anchor point
	et.anchor.x = 0.5;
	et.anchor.y = 0.5;
	et.anchor.x = 0.5;
	et.anchor.y = 0.5;

// move the sprite t the center of the screen
	et.position.x = 200;
	et.position.y = 150;
	house.position.x = 250;
	house.position.y = 150;

	stage.addChild(et);
	stage.addChild(house);

	$(window).on('keydown',function(ev){
		switch(ev.keyCode)
		{
			case 37:
				et.position.x = et.position.x - 10;
				if( et.scale.x < 0 ) et.scale.x = 1;
				//left
				break;
			case 39:
				et.position.x = et.position.x + 10;
				if( et.scale.x > 0 ) et.scale.x = -1;
				//right
				break;
			case 38:
				et.position.y = et.position.y - 10;
				//down
				break;
			case 40:
				et.position.y = et.position.y + 10;
				//up
				break;
		}
		animate();
	});

	function animate() {

		requestAnimFrame(animate);

		// render the stage
		renderer.render(stage);
	}
});