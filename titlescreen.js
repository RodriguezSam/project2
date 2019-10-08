var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 600, height: 600, backgroundColor: 0x000ff});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var sprite = new PIXI.Sprite.from("titlescreen.png");

stage.addChild(sprite);

function animate()
{
	requestAnimationFrame(animate);
	renderer.render(stage);
}

animate();
