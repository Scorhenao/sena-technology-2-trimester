const alertSuccess=(message)=>{
    Swal.fire({
        position: "top",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}



const alertError=(message)=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        showConfirmButton: false,
        timer:1000
      });
}

