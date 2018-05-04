window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = this.document.getElementById('canvas');
    
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var ball = {
        positionX: 0,
        positionY: 0,
        positionZ: 0,

        rotationX: 0,
        rotationY: 0,
        rotationZ: 0
    };

    var gui = new dat.GUI();
    gui.add(ball, 'positionX',-5, 5, 0.01);
    gui.add(ball, 'positionY',-5, 5, 0.01);
    gui.add(ball, 'positionZ',-5, 5, 0.01);
    gui.add(ball, 'rotationX',-0.2, 0.2, 0.001);
    gui.add(ball, 'rotationY',-0.2, 0.2, 0.001);
    gui.add(ball, 'rotationZ',-0.2, 0.2, 0.001);

      



    var renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(100, 0, 1000);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    var geometry = new THREE.SphereGeometry(200, 12, 12);
    // var material = new THREE.MeshBasicMaterial({color: 0x00ff00,wireframe:true});
    var material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors:THREE.FaceColors});

    for(var i = 0; i < geometry.faces.length; i++){
        geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
    }
    
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    

    function loop() {
        mesh.rotation.x += ball.rotationX;
        mesh.rotation.y += ball.rotationY;
        mesh.rotation.z += ball.rotationZ;

        mesh.position.x += ball.positionX;
        mesh.position.y += ball.positionY;
        mesh.position.z += ball.positionZ;

        renderer.render(scene, camera);
        requestAnimationFrame(function () {loop();});    
    }

    loop();

}