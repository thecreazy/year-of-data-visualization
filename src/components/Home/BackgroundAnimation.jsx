'use client';

import dat from 'dat.gui';
import { useEffect } from 'react';
import * as THREE from 'three';

let parameters = {
  speed: 0.2,
  hue: 0.5,
  hueVariation: 1,
  gradient: 0.3,
  density: 0.5,
  displacement: 0.66,
};
let guiHue;

class World {
  constructor(width, height, container, context) {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.context = context;
    this.renderer.setPixelRatio(context.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.container = container;
    this.scene = new THREE.Scene();
    this.width = width;
    this.height = height;
    this.aspectRatio = width / height;
    this.fieldOfView = 50;
    var nearPlane = 0.1;
    var farPlane = 20000;
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.aspectRatio,
      nearPlane,
      farPlane
    );
    this.camera.position.z = 200;
    this.container.appendChild(this.renderer.domElement);
    this.timer = 0;
    this.mousePos = { x: 0, y: 0 };
    this.targetMousePos = { x: 0, y: 0 };
    this.createPlane();
    this.render();
  }

  createPlane() {
    this.material = new THREE.RawShaderMaterial({
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent,

      uniforms: {
        uTime: { type: 'f', value: 0 },
        uHue: { type: 'f', value: 0.5 },
        uHueVariation: { type: 'f', value: 1 },
        uGradient: { type: 'f', value: 1 },
        uDensity: { type: 'f', value: 1 },
        uDisplacement: { type: 'f', value: 1 },
        uMousePosition: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
      },
    });
    this.planeGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);

    this.plane = new THREE.Mesh(this.planeGeometry, this.material);
    this.scene.add(this.plane);
  }

  render() {
    this.timer += parameters.speed;
    this.plane.material.uniforms.uTime.value = this.timer;

    this.mousePos.x += (this.targetMousePos.x - this.mousePos.x) * 0.1;
    this.mousePos.y += (this.targetMousePos.y - this.mousePos.y) * 0.1;

    if (this.plane) {
      this.plane.material.uniforms.uMousePosition.value = new THREE.Vector2(
        this.mousePos.x,
        this.mousePos.y
      );
    }

    this.renderer.render(this.scene, this.camera);
  }

  loop() {
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  updateSize(w, h) {
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  mouseMove(mousePos) {
    this.targetMousePos.x = mousePos.px;
    this.targetMousePos.y = mousePos.py;
  }
}

const BackgroundAnimation = () => {
  let mousePos = { x: 0, y: 0, px: 0, py: 0 };
  let world;

  useEffect(() => {
    function handleWindowResize() {
      world.updateSize(window.innerWidth, window.innerHeight);
    }
    function handleMouseMove(e) {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      mousePos.px = mousePos.x / window.innerWidth;
      mousePos.py = 1.0 - mousePos.y / window.innerHeight;
      world.mouseMove(mousePos);
    }
    world = new World(
      window.innerWidth,
      window.innerHeight,
      document.getElementById('backgroud'),
      window
    );
    window.addEventListener('resize', handleWindowResize, false);
    document.addEventListener('mousemove', handleMouseMove, false);
    handleWindowResize();
    world.loop();
    return () => {
      const canvas = document.getElementsByTagName('canvas')[0];
      if (canvas) canvas.remove();
    };
  }, []);
  return (
    <div id='backgroud' className='fixed w-full h-full top-0 left-0'></div>
  );
};

export default BackgroundAnimation;
