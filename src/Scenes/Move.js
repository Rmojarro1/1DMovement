class Move extends Phaser.Scene{
    constructor(){
        super("moveScene"); 
        this.my = {sprite: {}};
        this.avatarX = 430; 
        this.avatarY = 430; 
    }

    preload(){
        this.load.setPath("./assets/"); 
        this.load.image("avatar", "shipBlue_manned.png"); 
        this.load.image("laser", "laserBlue_burst.png"); 
    }; 

    create(){
        let my = this.my; 

        my.sprite.playerSprite = this.add.sprite(this.avatarX, this.avatarY, "avatar"); 

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D); 
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
        this.spaceKeyPressed = false;


        this.laser = null; 



        /*this.input.keyboard.on('keydown-Space', (event) => {
            const spawnX = my.sprite.playerSprite.x;
            const spawnY = my.sprite.playerSprite.y;
            const laser = this.add.sprite(spawnX, spawnY, "laser");
            //const newSmile = this.add.sprite(clickX, clickY, 'smile'); 
        }); */
        
    }; 

    update(){
        let my = this.my;
        if (this.aKey.isDown) {
            my.sprite.playerSprite.x -= 10;
            if (my.sprite.playerSprite.x <= 0) my.sprite.playerSprite.x = 0;
        }
        if (this.dKey.isDown) {
            my.sprite.playerSprite.x += 10;
            if (my.sprite.playerSprite.x >= 800) my.sprite.playerSprite.x = 800;
        }
        if(this.spaceKey.isDown && !this.spaceKeyPressed){
            this.spaceKeyPressed = true;
            if(this.laser){
                this.laser.destroy(); 
                this.laser = null; 
            }
            const spawnX = my.sprite.playerSprite.x;
            const spawnY = my.sprite.playerSprite.y;
            this.laser = this.add.sprite(spawnX, spawnY, "laser");
            //let myLaser = this.laser; 
        }
        else if(!this.spaceKey.isDown){
            this.spaceKeyPressed = false; 
        }

        if(this.laser){
            this.laser.y -= 10; 
            if(this.laser.y < 0){
                this.laser.destroy(); 
                this.laser = null; 
            }
        }
        
    }; 
}