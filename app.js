const qrData = document.getElementById('qrData')

const frm = document.querySelector('.frm')

const qrCode = document.querySelector('.qr_code')

let qrSrc=""






//? ADDEVENTLİSTENER İLE TEKTİKLEME YAP
frm.addEventListener('submit',(e)=>{

    e.preventDefault()

    //qrcode oluştur
    createQR()


    //form reset
    frm.reset()

})


//? QR CODE OLUŞTUR
const createQR=()=>{

    fetch(`https://api.qrserver.com/v1/create-qr-code/?size150x150=&data=${qrData.value}`)
    .then((response)=>{

        
        if(response.ok){

            qrSrc=response.url

            domaYaz()
        }

        return response
    })

}



//? QR CODE ÇIKTISINI DOMA YAZ
const domaYaz=()=>{

    qrCode.innerHTML +=`
    
    <img src="${qrSrc}" alt="">

    `

}