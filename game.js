var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 600, height: 600, backgroundColor: 0x000ff});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var titleScreen = new PIXI.Sprite.from("titlescreen.png");
var sprite = new PIXI.Sprite.from("background.png");
var creditButton = new PIXI.Sprite.from("creditButton.png");
var credits = new PIXI.Sprite.from("credits.png");

var oneOne = new PIXI.Sprite.from("one1.png");
var twoOne = new PIXI.Sprite.from("two1.png"); //Not visable
var threeOne = new PIXI.Sprite.from("three1.png"); //Not visable
var fourOne = new PIXI.Sprite.from('four1.png');
var fiveOne = new PIXI.Sprite.from("five1.png"); //Not visable
var sixOne = new PIXI.Sprite.from("six1.png"); //Not visable
var sevenOne = new PIXI.Sprite.from("seven1.png");
var eightOne = new PIXI.Sprite.from("eight1.png"); //Not visable
var nineOne = new PIXI.Sprite.from("nine1.png"); //Not visable

var oneTwo = new PIXI.Sprite.from("one2.png"); //Not viable
var twoTwo = new PIXI.Sprite.from("two2.png");
var threeTwo = new PIXI.Sprite.from('three2.png');
var fourTwo = new PIXI.Sprite.from("four2.png"); //Not visable
var fiveTwo = new PIXI.Sprite.from("five2.png");
var sixTwo = new PIXI.Sprite.from("six2.png");
var sevenTwo = new PIXI.Sprite.from("seven2.png"); //Not visable
var eightTwo = new PIXI.Sprite.from("eight2.png"); //Not visable
var nineTwo = new PIXI.Sprite.from("nine2.png");

var oneThree = new PIXI.Sprite.from("one3.png"); //Not visable
var twoThree = new PIXI.Sprite.from("two3.png"); //Not visable
var threeThree = new PIXI.Sprite.from("three3.png");
var fourThree = new PIXI.Sprite.from("four3.png");
var fiveThree = new PIXI.Sprite.from("five3.png"); //Not visable
var sixThree = new PIXI.Sprite.from("six3.png");
var sevenThree = new PIXI.Sprite.from("seven3.png"); //Not visable
var eightThree = new PIXI.Sprite.from("eight3.png");
var nineThree = new PIXI.Sprite.from("nine3.png"); //Not visable

var oneFour = new PIXI.Sprite.from("one4.png");
var twoFour = new PIXI.Sprite.from("two4.png"); //Not visable
var threeFour = new PIXI.Sprite.from("three4.png");
var fourFour = new PIXI.Sprite.from("four4.png");
var fiveFour = new PIXI.Sprite.from("five4.png"); //Not visable
var sixFour = new PIXI.Sprite.from('six4.png');
var sevenFour = new PIXI.Sprite.from("seven4.png"); //Not visable
var eightFour = new PIXI.Sprite.from("eight4.png"); //Not visable
var nineFour = new PIXI.Sprite.from("nine4.png"); //Not visible

var oneFive = new PIXI.Sprite.from("one5.png"); //Not visable
var twoFive = new PIXI.Sprite.from("two5.png"); //Not visable
var threeFive = new PIXI.Sprite.from("three5.png"); //Not visable
var fourFive = new PIXI.Sprite.from("four5.png");
var fiveFive = new PIXI.Sprite.from("five5.png"); //Not visable
var sixFive = new PIXI.Sprite.from("six5.png");
var sevenFive = new PIXI.Sprite.from("seven5.png"); //Not visable
var eightFive = new PIXI.Sprite.from("eight5.png");
var nineFive = new PIXI.Sprite.from("nine5.png");

var oneSix = new PIXI.Sprite.from("one6.png"); //Not visable
var twoSix = new PIXI.Sprite.from("two6.png");
var threeSix = new PIXI.Sprite.from("three6.png");
var fourSix = new PIXI.Sprite.from("four6.png"); //Not visable
var fiveSix = new PIXI.Sprite.from("five6.png"); //Not visable
var sixSix = new PIXI.Sprite.from("six6.png"); //Not visable
var sevenSix = new PIXI.Sprite.from("seven6.png"); //Not visable
var eightSix = new PIXI.Sprite.from("eight6.png");
var nineSix = new PIXI.Sprite.from("nine6.png");

var oneSeven = new PIXI.Sprite.from("one7.png"); //Not visable
var twoSeven = new PIXI.Sprite.from("two7.png");
var threeSeven = new PIXI.Sprite.from("three7.png"); //Not visable
var fourSeven = new PIXI.Sprite.from("four7.png"); //Not visable
var fiveSeven = new PIXI.Sprite.from("five7.png");
var sixSeven = new PIXI.Sprite.from("six7.png"); //Not visable
var sevenSeven = new PIXI.Sprite.from("seven7.png");
var eightSeven = new PIXI.Sprite.from("eight7.png");
var nineSeven = new PIXI.Sprite.from("nine7.png"); //Not visable

var oneEight = new PIXI.Sprite.from("one8.png"); //Not visable
var twoEight = new PIXI.Sprite.from("two8.png"); //Not visable
var threeEight = new PIXI.Sprite.from("three8.png");
var fourEight = new PIXI.Sprite.from("four8.png");
var fiveEight = new PIXI.Sprite.from("five8.png"); //Not visable
var sixEight = new PIXI.Sprite.from("six8.png"); //Not visable
var sevenEight = new PIXI.Sprite.from("seven8.png"); //Not visable
var eightEight = new PIXI.Sprite.from("eight8.png"); //Not visable
var nineEight = new PIXI.Sprite.from("nine8.png"); //Not visable

var oneNine = new PIXI.Sprite.from("one9.png"); //Not visable
var twoNine = new PIXI.Sprite.from("two9.png");
var threeNine = new PIXI.Sprite.from("three9.png"); //Not visable
var fourNine = new PIXI.Sprite.from("four9.png"); //Not visable
var fiveNine = new PIXI.Sprite.from("five9.png");
var sixNine = new PIXI.Sprite.from("six9.png"); //Not visable
var sevenNine = new PIXI.Sprite.from("seven9.png");
var eightNine = new PIXI.Sprite.from("eight9.png"); //Not visable
var nineNine = new PIXI.Sprite.from("nine9.png"); //Not visable

var rowOne = 173;
var colOne = 176;
var rowTwo = 205;
var colTwo = 210;
var rowThree = 235;
var colThree = 240;
var rowFour = 270;
var colFour = 273;
var rowFive = 300;
var colFive = 305;
var rowSix = 335;
var colSix = 330;
var rowSeven = 365;
var colSeven = 367;
var rowEight = 397;
var colEight = 400;
var rowNine = 430;
var colNine = 433;

oneOne.anchor.x = 0.5;
oneOne.anchor.y = 0.5;
oneOne.position.x = colOne;
oneOne.position.y = rowOne;

twoOne.anchor.x = 0.5;
twoOne.anchor.y = 0.5;
twoOne.position.x = colThree;
twoOne.position.y = rowThree;

threeOne.anchor.x = 0.5;
threeOne.anchor.y = 0.5;
threeOne.position.x = colOne;
threeOne.position.y = rowTwo;

fourOne.anchor.x = 0.5;
fourOne.anchor.y = 0.5;
fourOne.position.x = colOne;
fourOne.position.y = rowThree;

fiveOne.anchor.x = 0.5;
fiveOne.anchor.y = 0.5;
fiveOne.position.x = colTwo;
fiveOne.position.y = rowTwo;

sixOne.anchor.x = 0.5;
sixOne.anchor.y = 0.5;
sixOne.position.x = colTwo;
sixOne.position.y = rowOne;

sevenOne.anchor.x = 0.5;
sevenOne.anchor.y = 0.5;
sevenOne.position.x = colThree;
sevenOne.position.y = rowTwo;

eightOne.anchor.x = 0.5;
eightOne.anchor.y = 0.5;
eightOne.position.x = colTwo;
eightOne.position.y = rowThree;

nineOne.anchor.x = 0.5;
nineOne.anchor.y = 0.5;
nineOne.position.x = colThree;
nineOne.position.y = rowOne;

oneTwo.anchor.x = 0.5;
oneTwo.anchor.y = 0.5;
oneTwo.position.x = colSix;
oneTwo.position.y = rowTwo;

twoTwo.anchor.x = 0.5;
twoTwo.anchor.y = 0.5;
twoTwo.position.x = colFour;
twoTwo.position.y = rowTwo;

threeTwo.anchor.x = 0.5;
threeTwo.anchor.y = 0.5;
threeTwo.position.x = colFive;
threeTwo.position.y = rowThree;

fourTwo.anchor.x = 0.5;
fourTwo.anchor.y = 0.5;
fourTwo.position.x = colSix;
fourTwo.position.y = rowOne;

fiveTwo.anchor.x = 0.5;
fiveTwo.anchor.y = 0.5;
fiveTwo.position.x = colSix;
fiveTwo.position.y = rowThree;

sixTwo.anchor.x = 0.5;
sixTwo.anchor.y = 0.5;
sixTwo.position.x = colFive;
sixTwo.position.y = rowTwo;

sevenTwo.anchor.x = 0.5;
sevenTwo.anchor.y = 0.5;
sevenTwo.position.x = colFive;
sevenTwo.position.y = rowOne;

eightTwo.anchor.x = 0.5;
eightTwo.anchor.y = 0.5;
eightTwo.position.x = colFour;
eightTwo.position.y = rowOne;

nineTwo.anchor.x = 0.5;
nineTwo.anchor.y = 0.5;
nineTwo.position.x = colFour;
nineTwo.position.y = rowThree;

oneThree.anchor.x = 0.5;
oneThree.anchor.y = 0.5;
oneThree.position.x = colEight;
oneThree.position.y = rowThree;

twoThree.anchor.x = 0.5;
twoThree.anchor.y = 0.5;
twoThree.position.x = colEight;
twoThree.position.y = rowOne;

threeThree.anchor.x = 0.5;
threeThree.anchor.y = 0.5;
threeThree.position.x = colNine;
threeThree.position.y = rowOne;

fourThree.anchor.x = 0.5;
fourThree.anchor.y = 0.5;
fourThree.position.x = colSeven;
fourThree.position.y = rowTwo;

fiveThree.anchor.x = 0.5;
fiveThree.anchor.y = 0.5;
fiveThree.position.x = colSeven;
fiveThree.position.y = rowOne;

sixThree.anchor.x = 0.5;
sixThree.anchor.y = 0.5;
sixThree.position.x = colNine;
sixThree.position.y = rowThree;

sevenThree.anchor.x = 0.5;
sevenThree.anchor.y = 0.5;
sevenThree.position.x = colSeven;
sevenThree.position.y = rowThree;

eightThree.anchor.x = 0.5;
eightThree.anchor.y = 0.5;
eightThree.position.x = colEight;
eightThree.position.y = rowTwo;

nineThree.anchor.x = 0.5;
nineThree.anchor.y = 0.5;
nineThree.position.x = colNine;
nineThree.position.y = rowTwo;

oneFour.anchor.x = 0.5;
oneFour.anchor.y = 0.5;
oneFour.position.x = colThree;
oneFour.position.y = rowFive;

twoFour.anchor.x = 0.5;
twoFour.anchor.y = 0.5;
twoFour.position.x = colTwo;
twoFour.position.y = rowSix;

threeFour.anchor.x = 0.5;
threeFour.anchor.y = 0.5;
threeFour.position.x = colTwo;
threeFour.position.y = rowFour;

fourFour.anchor.x = 0.5;
fourFour.anchor.y = 0.5;
fourFour.position.x = colTwo;
fourFour.position.y = rowFive;

fiveFour.anchor.x = 0.5;
fiveFour.anchor.y = 0.5;
fiveFour.position.x = colThree;
fiveFour.position.y = rowFour;

sixFour.anchor.x = 0.5;
sixFour.anchor.y = 0.5;
sixFour.position.x = colThree;
sixFour.position.y = rowSix;

sevenFour.anchor.x = 0.5;
sevenFour.anchor.y = 0.5;
sevenFour.position.x = colOne;
sevenFour.position.y = rowSix;

eightFour.anchor.x = 0.5;
eightFour.anchor.y = 0.5;
eightFour.position.x = colOne;
eightFour.position.y = rowFive;

nineFour.anchor.x = 0.5;
nineFour.anchor.y = 0.5;
nineFour.position.x = colOne;
nineFour.position.y = rowFour;

oneFive.anchor.x = 0.5;
oneFive.anchor.y = 0.5;
oneFive.position.x = colFive;
oneFive.position.y = rowSix;

twoFive.anchor.x = 0.5;
twoFive.anchor.y = 0.5;
twoFive.position.x = colFive;
twoFive.position.y = rowFive;

threeFive.anchor.x = 0.5;
threeFive.anchor.y = 0.5;
threeFive.position.x = colSix;
threeFive.position.y = rowSix;

fourFive.anchor.x = 0.5;
fourFive.anchor.y = 0.5;
fourFive.position.x = colFour;
fourFive.position.y = rowFour;

fiveFive.anchor.x = 0.5;
fiveFive.anchor.y = 0.5;
fiveFive.position.x = colFour;
fiveFive.position.y = rowSix;

sixFive.anchor.x = 0.5;
sixFive.anchor.y = 0.5;
sixFive.position.x = colFour;
sixFive.position.y = rowFive;

sevenFive.anchor.x = 0.5;
sevenFive.anchor.y = 0.5;
sevenFive.position.x = colSix;
sevenFive.position.y = rowFour;

eightFive.anchor.x = 0.5;
eightFive.anchor.y = 0.5;
eightFive.position.x = colFive;
eightFive.position.y = rowFour;

nineFive.anchor.x = 0.5;
nineFive.anchor.y = 0.5;
nineFive.position.x = colSix;
nineFive.position.y = rowFive;

oneSix.anchor.x = 0.5;
oneSix.anchor.y = 0.5;
oneSix.position.x = colNine;
oneSix.position.y = rowFour;

twoSix.anchor.x = 0.5;
twoSix.anchor.y = 0.5;
twoSix.position.x = colSeven;
twoSix.position.y = rowFour;

threeSix.anchor.x = 0.5;
threeSix.anchor.y = 0.5;
threeSix.position.x = colSeven;
threeSix.position.y = rowFive;

fourSix.anchor.x = 0.5;
fourSix.anchor.y = 0.5;
fourSix.position.x = colNine;
fourSix.position.y = rowSix;

fiveSix.anchor.x = 0.5;
fiveSix.anchor.y = 0.5;
fiveSix.position.x = colEight;
fiveSix.position.y = rowFive;

sixSix.anchor.x = 0.5;
sixSix.anchor.y = 0.5;
sixSix.position.x = colEight;
sixSix.position.y = rowFour;

sevenSix.anchor.x = 0.5;
sevenSix.anchor.y = 0.5;
sevenSix.position.x = colNine;
sevenSix.position.y = rowFive;

eightSix.anchor.x = 0.5;
eightSix.anchor.y = 0.5;
eightSix.position.x = colSeven;
eightSix.position.y = rowSix;

nineSix.anchor.x = 0.5;
nineSix.anchor.y = 0.5;
nineSix.position.x = colEight;
nineSix.position.y = rowSix;

oneSeven.anchor.x = 0.5;
oneSeven.anchor.y = 0.5;
oneSeven.position.x = colTwo;
oneSeven.position.y = rowNine;

twoSeven.anchor.x = 0.5;
twoSeven.anchor.y = 0.5;
twoSeven.position.x = colOne;
twoSeven.position.y = rowNine;

threeSeven.anchor.x = 0.5;
threeSeven.anchor.y = 0.5;
threeSeven.position.x = colThree;
threeSeven.position.y = rowNine;

fourSeven.anchor.x = 0.5;
fourSeven.anchor.y = 0.5;
fourSeven.position.x = colThree;
fourSeven.position.y = rowEight;

fiveSeven.anchor.x = 0.5;
fiveSeven.anchor.y = 0.5;
fiveSeven.position.x = colOne;
fiveSeven.position.y = rowSeven;

sixSeven.anchor.x = 0.5;
sixSeven.anchor.y = 0.5;
sixSeven.position.x = colOne;
sixSeven.position.y = rowEight;

sevenSeven.anchor.x = 0.5;
sevenSeven.anchor.y = 0.5;
sevenSeven.position.x = colTwo;
sevenSeven.position.y = rowSeven;

eightSeven.anchor.x = 0.5;
eightSeven.anchor.y = 0.5;
eightSeven.position.x = colThree;
eightSeven.position.y = rowSeven;

nineSeven.anchor.x = 0.5;
nineSeven.anchor.y = 0.5;
nineSeven.position.x = colTwo;
nineSeven.position.y = rowEight;

oneEight.anchor.x = 0.5;
oneEight.anchor.y = 0.5;
oneEight.position.x = colFour;
oneEight.position.y = rowSeven;

twoEight.anchor.x = 0.5;
twoEight.anchor.y = 0.5;
twoEight.position.x = colSix;
twoEight.position.y = rowEight;

threeEight.anchor.x = 0.5;
threeEight.anchor.y = 0.5;
threeEight.position.x = colFour;
threeEight.position.y = rowEight;

fourEight.anchor.x = 0.5;
fourEight.anchor.y = 0.5;
fourEight.position.x = colFive;
fourEight.position.y = rowSeven;

fiveEight.anchor.x = 0.5;
fiveEight.anchor.y = 0.5;
fiveEight.position.x = colFive;
fiveEight.position.y = rowEight;

sixEight.anchor.x = 0.5;
sixEight.anchor.y = 0.5;
sixEight.position.x = colSix;
sixEight.position.y = rowSeven;

sevenEight.anchor.x = 0.5;
sevenEight.anchor.y = 0.5;
sevenEight.position.x = colFour;
sevenEight.position.y = rowNine;

eightEight.anchor.x = 0.5;
eightEight.anchor.y = 0.5;
eightEight.position.x = colSix;
eightEight.position.y = rowNine;

nineEight.anchor.x = 0.5;
nineEight.anchor.y = 0.5;
nineEight.position.x = colFive;
nineEight.position.y = rowNine;

oneNine.anchor.x = 0.5;
oneNine.anchor.y = 0.5;
oneNine.position.x = colSeven;
oneNine.position.y = rowEight;

twoNine.anchor.x = 0.5;
twoNine.anchor.y = 0.5;
twoNine.position.x = colNine;
twoNine.position.y = rowSeven;

threeNine.anchor.x = 0.5;
threeNine.anchor.y = 0.5;
threeNine.position.x = colEight;
threeNine.position.y = rowSeven;

fourNine.anchor.x = 0.5;
fourNine.anchor.y = 0.5;
fourNine.position.x = colEight;
fourNine.position.y = rowNine;

fiveNine.anchor.x = 0.5;
fiveNine.anchor.y = 0.5;
fiveNine.position.x = colNine;
fiveNine.position.y = rowNine;

sixNine.anchor.x = 0.5;
sixNine.anchor.y = 0.5;
sixNine.position.x = colSeven;
sixNine.position.y = rowNine;

sevenNine.anchor.x = 0.5;
sevenNine.anchor.y = 0.5;
sevenNine.position.x = colEight;
sevenNine.position.y = rowEight;

eightNine.anchor.x = 0.5;
eightNine.anchor.y = 0.5;
eightNine.position.x = colNine;
eightNine.position.y = rowEight;

nineNine.anchor.x = 0.5;
nineNine.anchor.y = 0.5;
nineNine.position.x = colSeven;
nineNine.position.y = rowSeven;

creditButton.anchor.x = 0.5;
creditButton.anchor.y = 0.5;
creditButton.position.x = 295;
creditButton.position.y = 507;

stage.addChild(titleScreen);
stage.addChild(sprite);
stage.addChild(creditButton);
stage.addChild(credits);

stage.addChild(oneOne);
stage.addChild(twoOne);
stage.addChild(threeOne);
stage.addChild(fourOne);
stage.addChild(fiveOne);
stage.addChild(sixOne);
stage.addChild(sevenOne);
stage.addChild(eightOne);
stage.addChild(nineOne);

stage.addChild(oneTwo);
stage.addChild(twoTwo);
stage.addChild(threeTwo);
stage.addChild(fourTwo);
stage.addChild(fiveTwo);
stage.addChild(sixTwo);
stage.addChild(sevenTwo);
stage.addChild(eightTwo);
stage.addChild(nineTwo);

stage.addChild(oneThree);
stage.addChild(twoThree);
stage.addChild(threeThree);
stage.addChild(fourThree);
stage.addChild(fiveThree);
stage.addChild(sixThree);
stage.addChild(sevenThree);
stage.addChild(eightThree);
stage.addChild(nineThree);

stage.addChild(oneFour);
stage.addChild(twoFour);
stage.addChild(threeFour);
stage.addChild(fourFour);
stage.addChild(fiveFour);
stage.addChild(sixFour);
stage.addChild(sevenFour);
stage.addChild(eightFour);
stage.addChild(nineFour);

stage.addChild(oneFive);
stage.addChild(twoFive);
stage.addChild(threeFive);
stage.addChild(fourFive);
stage.addChild(fiveFive);
stage.addChild(sixFive);
stage.addChild(sevenFive);
stage.addChild(eightFive);
stage.addChild(nineFive);

stage.addChild(oneSix);
stage.addChild(twoSix);
stage.addChild(threeSix);
stage.addChild(fourSix);
stage.addChild(fiveSix);
stage.addChild(sixSix);
stage.addChild(sevenSix);
stage.addChild(eightSix);
stage.addChild(nineSix);

stage.addChild(oneSeven);
stage.addChild(twoSeven);
stage.addChild(threeSeven);
stage.addChild(fourSeven);
stage.addChild(fiveSeven);
stage.addChild(sixSeven);
stage.addChild(sevenSeven);
stage.addChild(eightSeven);
stage.addChild(nineSeven);

stage.addChild(oneEight);
stage.addChild(twoEight),
stage.addChild(threeEight);
stage.addChild(fourEight);
stage.addChild(fiveEight);
stage.addChild(sixEight);
stage.addChild(sevenEight);
stage.addChild(eightEight);
stage.addChild(nineEight);

stage.addChild(oneNine);
stage.addChild(twoNine);
stage.addChild(threeNine);
stage.addChild(fourNine);
stage.addChild(fiveNine);
stage.addChild(sixNine);
stage.addChild(sevenNine);
stage.addChild(eightNine);
stage.addChild(nineNine);

function hideNumbers()
{
  twoOne.visible = false;
  threeOne.visible = false;
  fiveOne.visible = false;
  sixOne.visible = false;
  eightOne.visible = false;
  nineOne.visible = false;

  oneTwo.visible = false;
  fourTwo.visible = false;
  sevenTwo.visible = false;
  eightTwo.visible = false;

  oneThree.visible = false;
  twoThree.visible = false;
  fiveThree.visible = false;
  sevenThree.visible = false;
  nineThree.visible = false;

  twoFour.visible = false;
  fiveFour.visible = false;
  sevenFour.visible = false;
  eightFour.visible = false;
  nineFour.visible = false;

  oneFive.visible = false;
  twoFive.visible = false;
  threeFive.visible = false;
  fiveFive.visible = false;
  sevenFive.visible = false;

  oneSix.visible = false;
  fourSix.visible = false;
  fiveSix.visible = false;
  sixSix.visible = false;
  sevenSix.visible = false;

  oneSeven.visible = false;
  threeSeven.visible = false;
  fourSeven.visible = false;
  sixSeven.visible = false;
  nineSeven.visible = false;

  oneEight.visible = false;
  twoEight.visible = false;
  fiveEight.visible = false;
  sixEight.visible = false;
  sevenEight.visible = false
  eightEight.visible = false;
  nineEight.visible = false;

  oneNine.visible = false;
  threeNine.visible = false;
  fourNine.visible = false;
  sixNine.visible = false;
  eightNine.visible = false;
  nineNine.visible = false;
}
hideNumbers();

function hideGame()
{
  titleScreen.visible = true;
  sprite.visible = false;
  credits.visible = false;

  oneOne.visible = false;
  fourOne.visible = false;
  sevenOne.visible = false;

  twoTwo.visible = false;
  threeTwo.visible = false;
  fiveTwo.visible = false;
  sixTwo.visible = false;
  nineTwo.visible = false;

  threeThree.visible = false;
  fourThree.visible = false;
  sixThree.visible = false;
  eightThree.visible = false;

  oneFour.visible = false;
  threeFour.visible = false;
  fourFour.visible = false;
  sixFour.visible = false;

  fourFive.visible = false;
  sixFive.visible = false;
  eightFive.visible = false;
  nineFive.visible = false;

  twoSix.visible = false;
  threeSix.visible = false;
  eightSix.visible = false;
  nineSix.visible = false;

  twoSeven.visible = false;
  fiveSeven.visible = false;
  sevenSeven.visible = false;
  eightSeven.visible = false;

  threeEight.visible = false;
  fourEight.visible = false;

  twoNine.visible = false;
  fiveNine.visible = false;
  sevenNine.visible = false;
}
hideGame();

function startGame()
{
  titleScreen.visible = false;
  creditButton.visible = false;

  sprite.visible = true;

  oneOne.visible = true;
  fourOne.visible = true;
  sevenOne.visible = true;

  twoTwo.visible = true;
  threeTwo.visible = true;
  fiveTwo.visible = true;
  sixTwo.visible = true;
  nineTwo.visible = true;

  threeThree.visible = true;
  fourThree.visible = true;
  sixThree.visible = true;
  eightThree.visible = true;

  oneFour.visible = true;
  threeFour.visible = true;
  fourFour.visible = true;
  sixFour.visible = true;

  fourFive.visible = true;
  sixFive.visible = true;
  eightFive.visible = true;
  nineFive.visible = true;

  twoSix.visible = true;
  threeSix.visible = true;
  eightSix.visible = true;
  nineSix.visible = true;

  twoSeven.visible = true;
  fiveSeven.visible = true;
  sevenSeven.visible = true;
  eightSeven.visible = true;

  threeEight.visible = true;
  fourEight.visible = true;

  twoNine.visible = true;
  fiveNine.visible = true;
  sevenNine.visible = true;
}
titleScreen.interactive = true;
titleScreen.button = true;
titleScreen.on('mousedown', startGame);

function startCredits()
{
  titleScreen.visible = false;
  creditButton.visible = false;
  credits.visible = true;
}
creditButton.interactive = true;
creditButton.button = true;
creditButton.on('mousedown', startCredits);

function animate()
{
	requestAnimationFrame(animate);
	renderer.render(stage);
}

animate();
