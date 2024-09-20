import * as THREE from "three";

export default function printTangerine() {
    // 한라봉
    const tangerine = new THREE.Group(); // 한라봉


    const trunk = new THREE.Group(); // 한라봉 : 줄기 그룹
    // 한라봉 : 줄기 전체
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xff7f00,
        // emissive: 0xffffff,
        alphaHash: 0.1,
    });
    // console.log(bodyMaterial);

    // 한라봉 : 아랫부분
    const bottomGeometry = new THREE.DodecahedronGeometry(2, 1);
    const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);
    trunk.add(bottom)
    // scene.add(bottom);

    // 한라봉 : 윗부분
    const topGeometry = new THREE.TetrahedronGeometry(0.8, 3);
    const top = new THREE.Mesh(topGeometry, bodyMaterial);
    // scene.add(top);
    top.position.y = 1.7;
    trunk.add(top)


    const leaves = new THREE.Group();
    // 한라봉 : 잎전체
    const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x008000,
    side: THREE.DoubleSide,
    });

    // 한라봉 : 잎 - 심지
    const stemGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.4);
    const stem = new THREE.Mesh(stemGeometry, leafMaterial);
    // scene.add(stem);
    stem.position.y = 2.5;
    leaves.add(stem)

    // 한라봉 : 잎
    const leafGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI / 3);
    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
    // scene.add(leaf);
    leaf.position.set(-0.5, 2.4, -0.1);
    leaf.rotation.z = Math.PI / -2;
    leaves.add(leaf)

    tangerine.add(trunk);
    tangerine.add(leaves);

    return tangerine
}