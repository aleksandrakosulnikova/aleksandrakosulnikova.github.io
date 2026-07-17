function openCertModal(src) {
    const modal = document.getElementById('cert-modal');
    const img = document.getElementById('cert-modal-img');
    img.src = src;
    modal.classList.add('active');
}

function closeCertModal() {
    document.getElementById('cert-modal').classList.remove('active');
}