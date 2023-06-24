class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
    this.fps = 60
  }

  start() {
    if (!this.drawIntervalId) {
      // this.audio.play()
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, 1000 / this.fps);
    }
  }

  clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.bg.draw();
    this.helicopter.draw();

  }

  move() {
    this.bg.move();
    this.helicopter.move();
  }

  checkCollisions() {
    if(this.helicopter.isFloor()){
      this.gameOver()
    }
    // TODO: check helicopter on floor?
    // TODO: iterate obstacles. check colX and colY
  }

  onKeyEvent(event) {
    this.helicopter.onKeyEvent(event);
  }

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}