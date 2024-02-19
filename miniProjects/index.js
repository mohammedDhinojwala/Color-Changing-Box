const rect = document.querySelector('.center');

rect.addEventListener('mousemove', (details)=>{
   let rectLocation =  rect.getBoundingClientRect();
//    console.log(rectLocation)

   let insideRectPointerVal = details.clientX - rectLocation.left;
//    console.log(insideRectVal)

    
    if(insideRectPointerVal < rectLocation.width/2){
        // console.log('left')
        const colorRed = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectPointerVal);
        console.log(Math.floor(colorRed))

    gsap.to('.center', {
        backgroundColor  : `rgb(${colorRed},0,0)`,
        transition : `ease`,

    })

    }
    
    else if(insideRectPointerVal > rectLocation.width/2){
        
        const colorBlue = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectPointerVal);
        console.log(Math.floor(colorBlue))  

    gsap.to('.center', {
        backgroundColor  : `rgb(0,0,${colorBlue})`,
        transition : `ease`,

    })

    }

    else if(insideRectPointerVal === rectLocation.width/2){
        gsap.to('.center', {
            backgroundColor  : `white`,
        }) 
    }

})

rect.addEventListener('mouseleave', () => {
    gsap.to('.center', {
        backgroundColor  : `white`,
        transition : `ease`,
    })
})