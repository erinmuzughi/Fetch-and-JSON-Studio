// TODO: add code here
window.addEventListener("load", function (){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){
            data.sort(function(a, b){
                return b.hoursInSpace - a.hoursInSpace
            });
            for (let i = 0; i < data.length; i++){
                const div = document.getElementById("container");
                const astronautID = data[i].id;
                div.innerHTML += `
                <div class ="astronaut">
                    <div class="bio">
                    <h3>Full Name ${data[i].firstName} ${data[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${data[i].hoursInSpace}</li>
                            <li id="${astronautID}">Active: ${data[i].active}</li>
                            <li>Skills: ${data[i].skills}</li>
                        </ul>
                    </div>
                        <img class="avatar" src=${data[i].picture}>
                    </div>
                  `;
                  if (data[i].active === true){
                    const isActive = document.getElementById(astronautID);
                    isActive.style.color = "green";
                }
            }
        });
    });//end of fetch
}); //end of event listener function