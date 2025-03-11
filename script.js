document.addEventListener('DOMContentLoaded', function(){
    const copy = document.querySelector('.copy');
    const linkTxt = document.querySelector('.link');

    copy.addEventListener('click', function(){
        navigator.clipboard.writeText('linkTxt.textContent')
        .then(() => {
            alert('Link copied to clipboard')
        })
        .catch((err) => {
            alert('Failed to copy link')
        });
    });
})

document.addEventListener('DOMContentLoaded', function(){
    const linkedinBtn = document.querySelector('#li');
    const twitterBtn = document.querySelector('#x');
    const facebookBtn = document.querySelector('#fb');
    const instagramBtn = document.querySelector('#ig');
    const pinterestBtn = document.querySelector('#pi');
    const telegramBtn = document.querySelector('#te');

    linkedinBtn.addEventListener('click', function(){
        const linkedinUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=$(encodeURIComponent{https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V}';
        window.open(linkedinUrl, '_blank');
    })

    twitterBtn.addEventListener('click', function(){
        const twitterUrl = 'https://twitter.com/intent/tweet?text=${encodeURIComponent(https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V)}';
        window.open(twitterUrl, '_blank');
    });

    facebookBtn.addEventListener('click', function(){
        const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V)}';
        window.open(facebookUrl, '_blank');
    });

    instagramBtn.addEventListener('click', function(){
        const instagramUrl = 'https://help.instagram.com/372819389498306/?helpref=uf_share=${encodeURIComponent(https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V)}';
        window.open(instagramUrl, '_blank');
    });

    pinterestBtn.addEventListener('click', function(){
        const pinterestUrl = 'https://pinterest.com/pin/create/button/?url=&media=${encodeURIComponent(https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V)}';
        window.open(pinterestUrl, '_blank');
    });

    telegramBtn.addEventListener('click', function(){
        const telegramtUrl = 'https://t.me/share/url?url=&text==${encodeURIComponent(https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V)}';
        window.open(telegramtUrl, '_blank');
    });
});