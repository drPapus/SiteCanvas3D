window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = this.document.getElementById('canvas');
    
    var ball = {
        rotationY: 0
    };

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);


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
        mesh.rotation.y += Math.PI / 500;
        renderer.render(scene, camera);
        requestAnimationFrame(function () {loop();});    
    }

    loop();

}