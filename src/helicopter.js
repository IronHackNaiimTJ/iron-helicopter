class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.tick = 0;
    this.x = 100;
    this.y = 0;
    this.y0 = this.y;

    this.w = 100;
    this.h = 40;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0.05;
    this.ax = 0;
    this.g = 0.1;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    // this.weapon = new Weapon(this)

    // this._setListeners()
    this.animationTick = 0;

    this.alturaHeli = this.img.height / 4;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      // DIVIDIR LA IMAGEN VARIOS FRAMES
      (this.img.height / this.img.frames) * this.img.frameIndex,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      // ALTO Y ANCHO DE LA IMAGEN
      this.w,
      this.h
    );
    this.animate();

    // this.weapon.draw()
  }

  isFloor() {
    if (this.y + this.h >= this.ctx.canvas.height) {
      this.y = this.y0;
      this.vy = 0;
      alert("GAME OVER");
    }
    return this.y + this.h >= this.ctx.canvas.height;
  }

  move() {
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.w > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
    }
    if (this.y < this.y0) {
      this.y = this.y0;
      this.vy = 0;
    }

    this.isFloor();
  }

  onKeyEvent(event) {
    switch (event.keyCode) {
      // case KEY_SPACE:
      //   // this.weapon.shoot();
      //   break;
      case UP:
        this.vy = -2;

        break;
      case LEFT:
        this.vx = -HELICOP_SPEED;
        break;
      case RIGHT:
        this.vx = HELICOP_SPEED;
        break;

      default:
        break;
    }
  }

  animate() {
    this.animationTick += 1;

    if (this.animationTick > HELICO_RAN_ANIMATION) {
      // dice las veces que debe ir cambiando el frame de mario en este caso cambia cada 10 veces(10frames)
      this.animationTick = 0;
      this.img.frameIndex += 1;

      if (this.img.frameIndex > this.img.frames - 1) {
        this.img.frameIndex = 0;
      }
    }
  }
}
