var elementos_menu = [
    'HTML',
    'CSS',
    'JS',
    'PHP',
    'MySQL',
    'Python'
]

function Menu() {
    const mis_elementos = elementos_menu.map(elemento => 
        <a class="nav-item nav-link link-body-emphasis" href="#">{elemento}</a>    
    )
  return (
    <div class="nav-scroller py-1 mb-3 border-bottom">
    <nav class="nav nav-underline justify-content-between">
      {mis_elementos}
    </nav>
  </div>
  );
}

export default Menu; 
