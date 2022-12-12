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
                { "type": "sawblade", "x": 600, "y": 250 },
                { "type": "sawblade", "x": 600, "y": 300 },
                { "type": "sawblade", "x": 600, "y": 350 },
                { "type": "cube", "x": 700, "y": groundY - 50 },
                { "type": "sawblade", "x": 800, "y": 250 },
                { "type": "sawblade", "x": 800, "y": 300 },
                { "type": "sawblade", "x": 800, "y": 350 },
                { "type": "cube", "x": 900, "y": groundY - 50 },
                { "type": "sawblade", "x": 1000, "y": 250 },
                { "type": "sawblade", "x": 1000, "y": 300 },
                { "type": "sawblade", "x": 1000, "y": 350 },
                { "type": "cube", "x": 1100, "y": groundY - 50 },
                { "type": "sawblade", "x": 1200, "y": 250 },
                { "type": "sawblade", "x": 1200, "y": 300 },
                { "type": "sawblade", "x": 1200, "y": 350 },
                { "type": "cube", "x": 1300, "y": groundY - 50 },
                { "type": "coin", "x": 1300, "y": groundY - 50 },
                { "type": "sawblade", "x": 1400, "y": 250 },
                { "type": "sawblade", "x": 1400, "y": 300 },
                { "type": "sawblade", "x": 1400, "y": 350 },
                { "type": "cube", "x": 1500, "y": groundY - 50 },
                { "type": "sawblade", "x": 1600, "y": 250 },
                { "type": "sawblade", "x": 1600, "y": 300 },
                { "type": "sawblade", "x": 1600, "y": 350 },
                { "type": "cube", "x": 1700, "y": groundY - 50 },
                { "type": "sawblade", "x": 1800, "y": 250 },
                { "type": "sawblade", "x": 1800, "y": 300 },
                { "type": "sawblade", "x": 1800, "y": 350 },
                { "type": "cube", "x": 1900, "y": groundY - 50 },
                { "type": "sawblade", "x": 2000, "y": 250 },
                { "type": "sawblade", "x": 2000, "y": 300 },
                { "type": "sawblade", "x": 2000, "y": 350 },
                { "type": "cube", "x": 2100, "y": groundY - 50 },
                { "type": "coin", "x": 2100, "y": groundY - 50 },
                { "type": "sawblade", "x": 2200, "y": 250 },
                { "type": "sawblade", "x": 2200, "y": 300 },
                { "type": "sawblade", "x": 2200, "y": 350 },
                { "type": "cube", "x": 2300, "y": groundY - 50 },
                { "type": "sawblade", "x": 2400, "y": 250 },
                { "type": "sawblade", "x": 2400, "y": 300 },
                { "type": "sawblade", "x": 2400, "y": 350 },
                { "type": "cube", "x": 2500, "y": groundY - 50 },
                { "type": "sawblade", "x": 2600, "y": 250 },
                { "type": "sawblade", "x": 2600, "y": 300 },
                { "type": "sawblade", "x": 2600, "y": 350 },
                { "type": "cube", "x": 2700, "y": groundY - 50 },
                { "type": "sawblade", "x": 2800, "y": 250 },
                { "type": "sawblade", "x": 2800, "y": 300 },
                { "type": "sawblade", "x": 2800, "y": 350 },
                { "type": "cube", "x": 2900, "y": groundY - 50 },
                { "type": "coin", "x": 2900, "y": groundY - 50 },
                { "type": "sawblade", "x": 3000, "y": 250 },
                { "type": "sawblade", "x": 3000, "y": 300 },
                { "type": "sawblade", "x": 3000, "y": 350 },
                { "type": "cube", "x": 2500, "y": groundY - 50 },
                { "type": "sawblade", "x": 3200, "y": 250 },
                { "type": "sawblade", "x": 3200, "y": 300 },
                { "type": "sawblade", "x": 3200, "y": 350 },
                { "type": "cube", "x": 2700, "y": groundY - 50 },
                { "type": "sawblade", "x": 3400, "y": 250 },
                { "type": "sawblade", "x": 3400, "y": 300 },
                { "type": "sawblade", "x": 3400, "y": 350 },
                { "type": "cube", "x": 2900, "y": groundY - 50 },
                { "type": "sawblade", "x": 3600, "y": 250 },
                { "type": "sawblade", "x": 3600, "y": 300 },
                { "type": "sawblade", "x": 3600, "y": 350 },
                { "type": "cube", "x": 3100, "y": groundY - 50 },
                { "type": "coin", "x": 3100, "y": groundY - 50 },
                { "type": "sawblade", "x": 3800, "y": 250 },
                { "type": "sawblade", "x": 3800, "y": 300 },
                { "type": "sawblade", "x": 3800, "y": 350 },
                { "type": "cube", "x": 3300, "y": groundY - 50 },
                { "type": "sawblade", "x": 4000, "y": 250 },
                { "type": "sawblade", "x": 4000, "y": 300 },
                { "type": "sawblade", "x": 4000, "y": 350 },
                { "type": "cube", "x": 3500, "y": groundY - 50 },
                { "type": "sawblade", "x": 4200, "y": 250 },
                { "type": "sawblade", "x": 4200, "y": 300 },
                { "type": "sawblade", "x": 4200, "y": 350 },
                { "type": "cube", "x": 3700, "y": groundY - 50 },
                { "type": "sawblade", "x": 4400, "y": 250 },
                { "type": "sawblade", "x": 4400, "y": 300 },
                { "type": "sawblade", "x": 4400, "y": 350 },
                { "type": "cube", "x": 3900, "y": groundY - 50 },
            ]
        };
        for (var object = 0; object < levelData.gameItems.length; object++) {
            var eachElement = levelData["gameItems"][object];
                if (eachElement["type"] === "sawblade") {
                    createSawBlade(eachElement["x"], eachElement["y"]);
                }
        }
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
        // for (var x = 0; x < 4000; x += 200) {
        //     createSawBlade(400 + x, 250);
        //     createSawBlade(400 + x, 300);
        //     createSawBlade(400 + x, 350);
        // }
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
        // createLaser(300, 300);
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
        // for (var x = 0; x < 4000; x += 200) {
        //     createCubeEnemy(500 + x, groundY - 50);
        // }
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
        // for (var x = 0; x < 4000; x += 800) {
        //     createReward(500 + x, groundY - 50, 500);
        // }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
