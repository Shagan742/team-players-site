document.addEventListener('DOMContentLoaded', ()=> {
    const grid=document.getElementById('rosterGrid')
    const render= list => {
        grid.innerHTML=''
        list.forEach(player, i => {
            const col = document.createElement('div')
            col.className='col-6 col-lg-2'
            let i = 0;
            i++;
            col.innerHTML=`
            
            <div class="card h-100 shadow-sm">
                    <img src="${player.photo}" alt="${player.firstName} ${player.lastName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${player.firstName} ${player.lastName}</h5>
                        <div class="badge badge-position badge-pos-${player.position}">${player.position}</div>
                        <p class="small text-muted mb-0">Age: ${player.age}</p>
                        <btn class="btn bg-secondary" onclick="document.getElementById('modal${i}').style.display='block'">More Info</btn>

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>



                        
                   
            
            `
    //  <div id="modal${i}" class="modal${i}" onclick="document.getElementById('modal${i}').style.display='none'">
    //                     <div class="modal${i}-content">
    //                     <div class="modal${i}-container">
    //                     <p class="paragraph">Fun Fact: ${this.hiddenFact}</p>
    //                     </div>
    //                     </div>
    //                     </div>

            grid.appendChild(col)

            
        })


    }




render(players)
})


