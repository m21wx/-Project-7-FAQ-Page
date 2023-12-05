
		let boxs = document.querySelectorAll('.box .titleBox button');

		boxs.forEach((e)=>{
			e.onclick =(i)=>{
			 let a = e.parentElement
			let activeText = a.nextElementSibling.classList.toggle('active');
			if(activeText == false){
				e.innerHTML=`<i class="fa-solid fa-plus"></i>`
			}else{
				e.innerHTML=` <i class="fa-solid fa-minus"></i>`;
			}
			
		
			
			}
		})
