import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav id="nav-id" class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <div class="container">
                <a href="#" class="navbar-brand">
                    <i class="bi bi-bootstrap"></i>
                    <span class="align-middle">Orfebrería</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a href="#" class="nav-link" aria-current="page">
                                Inicio
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Productos
                           </a>
                           <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                             <li><a class="dropdown-item" href="#">Collares</a></li>
                             <li><a class="dropdown-item" href="#">Pulseras</a></li>
                             <li><a class="dropdown-item" href="#">Aros</a></li>
                           </ul>
                         </li>
                        <li class="nav-item">
                            <a href="#comentarios" class="nav-link">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
 
   </>
  )
}

export default Navbar


//    <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Logo Orfebrería</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarScroll">
//       <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Inicio</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Productos
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
//             <li><a class="dropdown-item" href="#">Collares</a></li>
//             <li><a class="dropdown-item" href="#">Pulseras</a></li>
//             {/* <li><hr class="dropdown-divider"/></li> */}
//             <li><a class="dropdown-item" href="#">Aros</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contacto</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav> 