document.addEventListener('DOMContentLoaded', ()=> {
    const grid=document.getElementById('rosterGrid')
    const render= list => {
        grid.innerHTML=''
        list.forEach((player, i) => {
            const col = document.createElement('div')
            col.className='col-md-4 col-sm-12 d-flex justify-content-center my-5'
            col.innerHTML=`
            <div class="card h-100" style="width:210px;">
                    <img src="${player.photo}" alt="${player.firstName} ${player.lastName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${player.firstName} ${player.lastName}</h5>
                        <div class="badge badge-position badge-pos-${player.position}">${player.position}</div>
                        <p class="small mb-3">Age: ${player.age}</p>

<!-- Button trigger modal -->
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
  <div class="modal-dialog" >
    <div class="modal-content" style="background-color:black; border:2px solid white;">

    <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel${i}">${player.firstName} ${player.lastName}</h1>
      </div>

      <div class="modal-body">
        <p class="hiddenFact">${player.hiddenFact}</p>   
       <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



                    </div>
                </div>
            `

            grid.appendChild(col)

            
        })


    }




render(players)
})


