import "../style.css";
import "@translations";

import rhino_img from "@img/rhino.jpg";

let canvasCtx = null;

const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 420;

const drawCanvas = ({ width, height }) => {
  const canvas = document.getElementById("canvas-example-1");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  return ctx;
};

function overlaySquares(ctx, { x, y }) {
  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10 + x, 10 + y, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30 + x, 30 + y, 50, 50);
}

function strokeSquare(ctx, pos = { x: 0, y: 0 }) {
  const FILL_POSITION = 25;
  const CLEAR_POSITION = 45;
  const STROKE_POSITION = 50;

  ctx.fillRect(FILL_POSITION + pos.x, FILL_POSITION + pos.y, 100, 100);
  ctx.clearRect(CLEAR_POSITION + pos.x, CLEAR_POSITION + pos.y, 60, 60);
  ctx.strokeRect(STROKE_POSITION + pos.x, STROKE_POSITION + pos.y, 50, 50);
}

function drawTriange(ctx, pos = { x: 0, y: 0 }) {
  const SIDE = 25;
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x + SIDE, pos.y + SIDE);
  ctx.lineTo(pos.x + SIDE, pos.y - SIDE);
  ctx.fill();
}

function twoTriangles(ctx, pos = { x: 0, y: 0 }) {
  const TRIANGLE_1_INITIAL_X = 25;
  const TRIANGLE_1_INITIAL_Y = 25;
  const TRIANGLE_1_SIDE_1_Y = 25;
  const TRIANGLE_1_SIDE_1_X = 105;
  const TRIANGLE_1_SIDE_2_X = 25;
  const TRIANGLE_1_SIDE_2_Y = 105;

  const TRIANGLE_2_INITIAL_X = 125;
  const TRIANGLE_2_INITIAL_Y = 125;
  const TRIANGLE_2_SIDE_1_X = 125;
  const TRIANGLE_2_SIDE_1_Y = 45;
  const TRIANGLE_2_SIDE_2_X = 45;
  const TRIANGLE_2_SIDE_2_Y = 125;

  // Filled triangle
  ctx.beginPath();
  ctx.moveTo(pos.x + TRIANGLE_1_INITIAL_X, pos.y + TRIANGLE_1_INITIAL_Y);
  ctx.lineTo(pos.x + TRIANGLE_1_SIDE_1_X, pos.y + TRIANGLE_1_SIDE_1_Y);
  ctx.lineTo(pos.x + TRIANGLE_1_SIDE_2_X, pos.y + TRIANGLE_1_SIDE_2_Y);
  ctx.fill();

  // Stroked triangle
  ctx.beginPath();
  ctx.moveTo(pos.x + TRIANGLE_2_INITIAL_X, pos.y + TRIANGLE_2_INITIAL_Y);
  ctx.lineTo(pos.x + TRIANGLE_2_SIDE_1_X, pos.y + TRIANGLE_2_SIDE_1_Y);
  ctx.lineTo(pos.x + TRIANGLE_2_SIDE_2_X, pos.y + TRIANGLE_2_SIDE_2_Y);
  ctx.closePath();
  ctx.stroke();
}

function smileyFace(ctx) {
  ctx.beginPath();

  ctx.fillStyle = "yellow";
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  ctx.lineTo(75 + 35, 75); // Línea para cerrar la boca

  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye

  //ctx.stroke();

  ctx.fill();
  ctx.stroke();

  ctx.beginPath(); // Comienza un nuevo camino
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();
}

function daCanvasIsMyPassion() {
  canvasCtx = drawCanvas({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });

  const SQUARES_POSITION_X = CANVAS_WIDTH / 2 - 30;
  const SQUARES_POSITION_Y = CANVAS_HEIGHT / 2 - 30;

  /* 1. example of overlapped squares */
  overlaySquares(canvasCtx, { x: SQUARES_POSITION_X, y: SQUARES_POSITION_Y });

  /* 2. example of drawing squares */
  strokeSquare(canvasCtx, { x: 225, y: 290 });

  /* 3. example of drawing a triangle */
  drawTriange(canvasCtx, { x: 150, y: 100 });

  /* 4. example of drawing a smiley face */
  smileyFace(canvasCtx);

  /* 5. example of drawing two triangles */
  twoTriangles(canvasCtx, { x: 200, y: 0 });

  /* 6. example of drawing a path */
  const p = new Path2D("M10 300 h 80 v 80 h -80 Z");
  canvasCtx.stroke(p);

  /* 7.  */
  const circle = new Path2D();
  circle.arc(120, 340, 25, 0, 2 * Math.PI);
  canvasCtx.fill(circle);
}

function draw() {
  const ctx = document.getElementById("canvas-example-2").getContext("2d");
  const img = new Image();

  img.onload = () => {
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.strokeStyle = "red";
    ctx.stroke();
  };
  img.src = rhino_img;
}

// window.addEventListener("load", graphicDraw);

window.addEventListener("load", daCanvasIsMyPassion);
window.addEventListener("load", draw);

//     when the user choose a image in the input type load the image in the the canva
//     and draw a red line in the image

const input = document.getElementById("file");

input.addEventListener("change", (e) => {
  const ctx = document.getElementById("canvas-example-3").getContext("2d");
  const img = new Image();
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    img.src = e.target.result;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.moveTo(30, 96);
      ctx.lineTo(70, 66);
      ctx.lineTo(103, 76);
      ctx.lineTo(170, 15);
      ctx.strokeStyle = "red";
      ctx.stroke();
    };
  };

  reader.readAsDataURL(file);
});
