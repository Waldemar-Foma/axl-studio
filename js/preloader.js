setTimeout(function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 600);
}, 2800);