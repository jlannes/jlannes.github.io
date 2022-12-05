var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "laser", "x": 300, "y": 300 },
                { "type": "sawblade", "x": 400, "y": 250 },
                { "type": "sawblade", "x": 400, "y": 300 },
                { "type": "sawblade", "x": 400, "y": 350 },
                { "type": "cube", "x": 500, "y": groundY - 50 },
                { "type": "coin", "x": 500, "y": groundY - 50 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        var oneShotMode = false;

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(xValue, y) {
            var hitZoneSize = 25;
            if (oneShotMode === false) {
                var damageFromObstacle = 10;
            } else {
                var damageFromObstacle = 100;
            }
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = xValue;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            sawBladeHitZone.addChild(obstacleImage);
        }
        for (var x = 0; x < 4000; x += 200) {
            createSawBlade(400 + x, 250);
            createSawBlade(400 + x, 300);
            createSawBlade(400 + x, 350);
        }
        function createLaser(x, y) {
            var hitZoneSize = 5;
            if (oneShotMode === false) {
                var damageFromObstacle = 50;
            } else {
                var damageFromObstacle = 100;
            }
            var laserHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            laserHitZone.x = x;
            laserHitZone.y = y;
            game.addGameItem(laserHitZone);
            var obstacleImage = draw.rect(100, 20, "red", "rgb(255, 105, 105)", 3);
            laserHitZone.addChild(obstacleImage);
        }
        createLaser(300, 300);
        function createCubeEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "red", "black");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            enemy.rotationalVelocity = 1;
            if (oneShotMode === false) {
                enemy.onPlayerCollision = function halfDmg() {
                    game.changeIntegrity(-50)
                };
            } else {
                enemy.onPlayerCollision = function oneShot() {
                    game.changeIntegrity(-100)
                };
            }
            enemy.onProjectileCollision = function enemyKilled() {
                game.increaseScore(100);
                enemy.shrink();
                game.changeIntegrity(10)
            }
        }
        for (var x = 0; x < 4000; x += 200) {
            createCubeEnemy(500 + x, groundY - 50);
        }
        function createReward(x, y, score) {
            var coin = game.createGameItem("coin", 25);
            var yellowCircle = draw.circle(12.5, "yellow", "orange", 3);
            coin.addChild(yellowCircle);
            coin.x = x;
            coin.y = y;
            game.addGameItem(coin);
            coin.velocityX = -2;
            coin.onPlayerCollision = function coinCollected() {
                game.increaseScore(score)
                game.changeIntegrity(100)
                coin.shrink()
            };
        }
        for (var x = 0; x < 4000; x += 800) {
            createReward(500 + x, groundY - 50, 500);
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
