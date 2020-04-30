var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
        	gravity: { y: 0}
        }
    },
scene: { 
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);
var platforms;
var player;
var cursors;
var hp;
var nHP;

function preload(){
	this.load.image('background','assets/background.png');	
	this.load.image('fond','assets/fond.png');
	this.load.image('sol','assets/platform.png');
	this.load.image('sol2','assets/platform3.png');
	this.load.image('sol3','assets/platform2.png');
	this.load.image('sol4','assets/platform4.png');
	this.load.spritesheet('perso','assets/player.png',{frameWidth: 64, frameHeight: 64});
	this.load.spritesheet('alien', 'assets/monstre.png',{frameWidth: 64, frameHeight: 64});
	this.load.spritesheet('alien2', 'assets/monstre2.png',{frameWidth: 64, frameHeight: 64});
	this.load.image('potion','assets/heal.png');
	this.load.image('door','assets/porte.png');
	this.load.image('roc','assets/rock.png');
}


function create(){
	var back =
	this.add.image(0,0,'background').setOrigin(0);
	this.cameras.main.setBounds(0, 0, 1000 * 2, 1000 * 2);
    this.physics.world.setBounds(0, 0, 1000 * 2, 1000 * 2);

    //murs
	platforms = this.physics.add.staticGroup();

	//haut
	platforms.create(75,32,'sol').setScale(2).refreshBody();
	platforms.create(151,32,'sol').setScale(2).refreshBody();
	platforms.create(226,32,'sol').setScale(2).refreshBody();
	platforms.create(301,32,'sol').setScale(2).refreshBody();
	platforms.create(376,32,'sol').setScale(2).refreshBody();
	platforms.create(451,32,'sol').setScale(2).refreshBody();
	platforms.create(526,32,'sol').setScale(2).refreshBody();
	platforms.create(601,32,'sol').setScale(2).refreshBody();
	platforms.create(676,32,'sol').setScale(2).refreshBody();
	platforms.create(751,32,'sol').setScale(2).refreshBody();
	platforms.create(826,32,'sol').setScale(2).refreshBody();
	platforms.create(901,32,'sol').setScale(2).refreshBody();
	platforms.create(976,32,'sol').setScale(2).refreshBody();
	platforms.create(1051,32,'sol').setScale(2).refreshBody();
	platforms.create(1126,32,'sol').setScale(2).refreshBody();
	platforms.create(1201,32,'sol').setScale(2).refreshBody();
	platforms.create(1276,32,'sol').setScale(2).refreshBody();
	platforms.create(1351,32,'sol').setScale(2).refreshBody();
	platforms.create(1426,32,'sol').setScale(2).refreshBody();
	platforms.create(1501,32,'sol').setScale(2).refreshBody();
	platforms.create(1576,32,'sol').setScale(2).refreshBody();
	platforms.create(1651,32,'sol').setScale(2).refreshBody();
	platforms.create(1726,32,'sol').setScale(2).refreshBody();
	platforms.create(1801,32,'sol').setScale(2).refreshBody();
	platforms.create(1876,32,'sol').setScale(2).refreshBody();
	platforms.create(1951,32,'sol').setScale(2).refreshBody();
	
	//bas
	platforms.create(75,1968,'sol4').setScale(2).refreshBody();
	platforms.create(151,1968,'sol4').setScale(2).refreshBody();
	platforms.create(226,1968,'sol4').setScale(2).refreshBody();
	platforms.create(301,1968,'sol4').setScale(2).refreshBody();
	platforms.create(376,1968,'sol4').setScale(2).refreshBody();
	platforms.create(451,1968,'sol4').setScale(2).refreshBody();
	platforms.create(526,1968,'sol4').setScale(2).refreshBody();
	platforms.create(601,1968,'sol4').setScale(2).refreshBody();
	platforms.create(676,1968,'sol4').setScale(2).refreshBody();
	platforms.create(751,1968,'sol4').setScale(2).refreshBody();
	platforms.create(826,1968,'sol4').setScale(2).refreshBody();
	platforms.create(901,1968,'sol4').setScale(2).refreshBody();
	platforms.create(976,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1051,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1126,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1201,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1276,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1351,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1426,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1501,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1576,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1651,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1726,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1801,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1876,1968,'sol4').setScale(2).refreshBody();
	platforms.create(1951,1968,'sol4').setScale(2).refreshBody();

	//gauche
	platforms.create(32,75,'sol2').setScale(2).refreshBody();
	platforms.create(32,151,'sol2').setScale(2).refreshBody();
	platforms.create(32,226,'sol2').setScale(2).refreshBody();
	platforms.create(32,301,'sol2').setScale(2).refreshBody();
	platforms.create(32,376,'sol2').setScale(2).refreshBody();
	platforms.create(32,451,'sol2').setScale(2).refreshBody();
	platforms.create(32,526,'sol2').setScale(2).refreshBody();
	platforms.create(32,601,'sol2').setScale(2).refreshBody();
	platforms.create(32,676,'sol2').setScale(2).refreshBody();
	platforms.create(32,751,'sol2').setScale(2).refreshBody();
	platforms.create(32,826,'sol2').setScale(2).refreshBody();
	platforms.create(32,901,'sol2').setScale(2).refreshBody();
	platforms.create(32,976,'sol2').setScale(2).refreshBody();
	platforms.create(32,1051,'sol2').setScale(2).refreshBody();
	platforms.create(32,1126,'sol2').setScale(2).refreshBody();
	platforms.create(32,1201,'sol2').setScale(2).refreshBody();
	platforms.create(32,1276,'sol2').setScale(2).refreshBody();
	platforms.create(32,1351,'sol2').setScale(2).refreshBody();
	platforms.create(32,1426,'sol2').setScale(2).refreshBody();
	platforms.create(32,1501,'sol2').setScale(2).refreshBody();
	platforms.create(32,1576,'sol2').setScale(2).refreshBody();
	platforms.create(32,1651,'sol2').setScale(2).refreshBody();
	platforms.create(32,1726,'sol2').setScale(2).refreshBody();
	platforms.create(32,1801,'sol2').setScale(2).refreshBody();
	platforms.create(32,1876,'sol2').setScale(2).refreshBody();
	platforms.create(32,1951,'sol2').setScale(2).refreshBody();

	//droite
	platforms.create(1968,75,'sol3').setScale(2).refreshBody();
	platforms.create(1968,151,'sol3').setScale(2).refreshBody();
	platforms.create(1968,226,'sol3').setScale(2).refreshBody();
	platforms.create(1968,301,'sol3').setScale(2).refreshBody();
	platforms.create(1968,376,'sol3').setScale(2).refreshBody();
	platforms.create(1968,451,'sol3').setScale(2).refreshBody();
	platforms.create(1968,526,'sol3').setScale(2).refreshBody();
	platforms.create(1968,601,'sol3').setScale(2).refreshBody();
	platforms.create(1968,676,'sol3').setScale(2).refreshBody();
	platforms.create(1968,751,'sol3').setScale(2).refreshBody();
	platforms.create(1968,826,'sol3').setScale(2).refreshBody();
	platforms.create(1968,901,'sol3').setScale(2).refreshBody();
	platforms.create(1968,976,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1051,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1126,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1201,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1276,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1351,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1426,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1501,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1576,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1651,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1726,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1801,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1876,'sol3').setScale(2).refreshBody();
	platforms.create(1968,1951,'sol3').setScale(2).refreshBody();

	
	//murs objectif
	platforms.create(750,75,'sol2').setScale(2).refreshBody();
	platforms.create(875,250,'sol').setScale(2).refreshBody();
	platforms.create(1260,250,'sol').setScale(2).refreshBody();
	platforms.create(1380,75,'sol3').setScale(2).refreshBody();

	
	//monstres
	monstre = this.physics.add.group();

    monstre = this.physics.add.sprite(400,100,'alien');
    monstre.setVelocity(0, -150);
    monstre.setBounce(1);

    monstre2 = this.physics.add.sprite(300,700);
    monstre2.setVelocity(150,0);
    monstre2.setBounce(1);

    
    //porte
    porte = this.physics.add.group();
    porte = this.physics.add.sprite(1068,240,'door');
    porte.setImmovable();
    
    //rochers
    rock = this.physics.add.group();
    rock = this.physics.add.sprite(300,300,'roc');
    rock = this.physics.add.sprite(500,380,'roc');
    rock = this.physics.add.sprite(200,700,'roc');
    rock = this.physics.add.sprite(800,430,'roc');
    rock = this.physics.add.sprite(1100,600,'roc');
    rock = this.physics.add.sprite(1500,300,'roc');
    rock = this.physics.add.sprite(1800,1000,'roc');
    rock = this.physics.add.sprite(1200,1500,'roc');
    rock = this.physics.add.sprite(300,1600,'roc');

    this.anims.create({
        frames: this.anims.generateFrameNumbers('alien', {start: 0, end: 1}),
        frameRate: 10,
        repeat: -1
    });

	monstre.setCollideWorldBounds(false);
	monstre.body.setGravityY(000);
	this.physics.add.collider(monstre,platforms);

	player = this.physics.add.sprite(150,400,'perso');
	player.setCollideWorldBounds(false);
	player.setBounce(0.2);
	player.body.setGravityY(000);
	this.physics.add.collider(player,platforms);

	cursors = this.input.keyboard.createCursorKeys();

	this.cameras.main.startFollow(player,true,1,1,0,0);

	this.anims.create({
		key:'left',
		frames: this.anims.generateFrameNumbers('perso', {start: 8, end: 13}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'up',
		frames: this.anims.generateFrameNumbers('perso', {start: 14, end: 19}),
		frameRate: 10,
		repeat: -1
	});
	
	this.anims.create({
		key:'down',
		frames: this.anims.generateFrameNumbers('perso', {start: 1, end: 7}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'stop',
		frames: [{key: 'perso', frame:0}],
		frameRate: 20
	});

	hpText = this.add.text(16,16, 'PV: 3', {fontSize: '32px', fill:'#fff'});

	healPot = this.physics.add.group();
	healPot.create(850,100,'potion');

	this.physics.add.collider(healPot, platforms);
	this.physics.add.overlap(healPot, player, collectHeal, null, this);

	this.physics.add.collider(player, monstre, hitMonster, null, this);
}


function update(){
	//déplacements personnage
	if(cursors.left.isDown){
		player.anims.play('left', true);
		player.setVelocityX(-150);
		player.setFlipX(true);
	}else if(cursors.right.isDown){
		player.setVelocityX(150);
		player.anims.play('left', true);
		player.setFlipX(false);
	}else{
		player.anims.play('stop', true);
		player.setVelocityX(0);
	}

	if(cursors.up.isDown){
		player.anims.play('up', true);
		player.setVelocityY(-150);
		player.setFlipY(false);
	}else if(cursors.down.isDown){
		player.setVelocityY(150);
		player.anims.play('down', true);
		player.setFlipY(false);
	}else{
		player.anims.play('stop', true);
		player.setVelocityY(0);
	}

	//déplacements monstres
	if(monstre.y <= 200){
		this.tweens.add({
			targets: monstre,
			y: 300,
			ease: 'Linear',
			duration: 4000,
		});
	}

}


//function collectHeal(player, potion) {
//	if (nHP == 3) {
//		potion.disableBody(true,true);
		
//		if(healPot.countActive(true)===0){
//			healPot.children.iterate(function(child){
//			child.enableBody(true,child.x,child.y - 170, true, true);
//			});
//		}	
//	}

//	if (nHP <= 2 ){
//		potion.disableBody(false,false);
//		nHP += 1;
//		hpText.setText('PV: '+nHP);

//	if(healPot.countActive(true)===0){
//			healPot.children.iterate(function(child){
//			child.enableBody(true,child.x,child.y - 170, true, true);
//			});
//	}
//	}

//	if (nHP < 3) {
//		potion.disableBody(true,true);
//		nHP++;
//		hpText.setText('PV: '+nHP);

//		if(healPot.countActive(true)===0){
//			healPot.children.iterate(function(child){
//			child.enableBody(true,child.x,child.y - 170, true, true);
//			});
//		}
//	}
//}


function collectHeal(player,potion){
	potion.disableBody(true,true);
	nHP++;
}


function hitMonster(player,monstre){
	monstre.disableBody(true,true);
}


function drop(player,monstre){
	monstre.destroy();
	itemplayer.create(monstre.x, monstre.y, 'potion');
}

