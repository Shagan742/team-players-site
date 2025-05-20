document.addEventListener('DOMContentLoaded', ()=> {
    const grid=document.getElementById('rosterGrid')
    const render= list => {
        grid.innerHTML=''
        list.forEach(player => {
            const col = document.createElement('div')
            col.className='col-6 col-lg-2'
            col.innerHTML=`
            
            <div class="card h-100 shadow-sm">
                    <img src="${player.photo}" alt="${player.firstName} ${player.lastName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${player.firstName} ${player.lastName}</h5>
                        <div class="badge badge-position badge-pos-${player.position}">${player.position}</div>
                        <p class="small text-muted mb-0">Age: ${player.age}</p>
                    
                    <btn class="btn bg-secondary onclick="document.getElementById('modal`+ increaseNumber() +`').style.display='block' "">More Info</btn>
                        <div id="modal` + increaseNumber() + `">
                            <div class="modal-content">
                                <div class="modal-container">
                                <span onclick="document.getElementById('modal` + increaseNumber() + `').style.display='none'">&times</span>
                                <p>shskjfdhsdkldfhasklfhsdlhfkls</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            
            `
            
            grid.appendChild(col)

            
        })

        


    }


function increaseNumber() {
            let x = 0;
            x++;
        }

render(players)
})


