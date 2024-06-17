let container = document.querySelector('.container');
let btn = document.querySelector('.button_start');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

let interval;

btn.onclick = function(){
    // Démarrer ou Redemarrer la partie
    if (interval) {
        clearInterval(interval);
        
    }

    let score = 0;
    let time = 30;
    container.innerHTML = "";

     interval = setInterval(function showTarget(){
        
        //création de la cible

        let target = document.createElement('img');
        target.id="target";
        target.src="poker-chat.webp";
        container.appendChild(target);
        target.style.top = (Math.random() * (500 - target.offsetHeight )+ 75) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';
        

        //faire disparaitre la cible

        setTimeout(function(){
            target.remove();
        }, 2000);

        //quand on clique sur la cible
        target.onclick = function(){
            score += 1;
            target.style.display = 'none'
        }
        time -= 1;

        //afficher le score 
        scoreContainer.innerHTML = `Score : ${score}`
        timeContainer.innerHTML = `Temps : ${time}`
    
    
        // fin du jeu quand le temps est écoulé
        if(time === 0){
            clearInterval(interval);
            container.innerHTML ="bravo ! tu a tuer "+ score +  " chat blasé ^^ ";
            
        }
        }, 1000);

}



    let modal = document.getElementById('modal');
    let modalOkBtn = document.getElementById('modal-ok-btn');
    let closeModal = document.getElementsByClassName('close')[0];

    modal.style.display = "block"; // Afficher la modal au chargement de la page

    modalOkBtn.onclick = function() {
        modal.style.display = "none"; // Cacher la modal quand on clique sur OK
    }

    closeModal.onclick = function() {
        modal.style.display = "none"; // Cacher la modal quand on clique sur le bouton de fermeture
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Cacher la modal si on clique en dehors de la modal
        }
    }




