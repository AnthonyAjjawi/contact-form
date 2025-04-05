
document.getElementById("myform").addEventListener("submit", redirect);

function redirect(e) {
    e.preventDefault();
    window.open('mailto:anthony_ajjawi@hotmail.com?subject=subject&body=body');
}

