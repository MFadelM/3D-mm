function setup() {
  // Membuat canvas 3D
  createCanvas(400, 400, WEBGL);
}

function draw() {
  // Mengatur latar belakang
  background(200);

  // Menambahkan pencahayaan
  ambientLight(150);
  directionalLight(255, 255, 255, 0, -1, 1);

  rotateX(frameCount * 0.030);
  rotateZ(frameCount * 0.030);

  // Kursi - Dudukan
  push();
  translate(0, 0, 0); // Posisi dudukan di tengah
  fill(139, 70, 100); // Warna coklat kayu
  box(100, 10, 100); // Dudukan kotak
  pop();

  // Kursi - Sandaran
  push();
  translate(0, -55, -45); // Posisi sandaran di belakang dudukan
  fill(139, 69, 19); // Warna sama untuk sandaran
  box(100, 100, 10); // Sandaran kotak
  pop();

  // Kursi - Kaki depan kiri
  push();
  translate(-40, 45, 40); // Posisi kaki depan kiri
  fill(101, 67, 33); // Warna kayu lebih gelap
  box(10, 100, 10); // Kaki berbentuk kotak kecil
  pop();

  // Kursi - Kaki depan kanan
  push();
  translate(40, 45, 40); // Posisi kaki depan kanan
  fill(101, 67, 33);
  box(10, 100, 10);
  pop();

  // Kursi - Kaki belakang kiri
  push();
  translate(-40, 45, -40); // Posisi kaki belakang kiri
  fill(101, 67, 33);
  box(10, 100, 10);
  pop();

  // Kursi - Kaki belakang kanan
  push();
  translate(40, 45, -40); // Posisi kaki belakang kanan
  fill(101, 67, 33);
  box(10, 100, 10);
  pop();
  
  rotateX(frameCount * 0.005);
  rotateZ(frameCount * 0.003);

}
