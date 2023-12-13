document.addEventListener('DOMContentLoaded', function() {
    const galerijaLink = document.querySelector('.links a[href="#"]');
    
    galerijaLink.addEventListener('click', function(event) {
        event.preventDefault(); // 
    
        window.location.href = 'galerija.html';
    });
});

