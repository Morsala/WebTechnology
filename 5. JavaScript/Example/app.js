var btn = document.getElementById('btn');
var cont = document.getElementById('content');
var flag = localStorage.getItem('theme');

color_change(flag);

function color_change (theme) {
    if (theme == 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');

        btn.classList.add('light');
        btn.classList.remove('dark');

        cont.classList.add('light');
        cont.classList.remove('dark');
    }
    else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');

        btn.classList.add('dark');
        btn.classList.remove('light');

        cont.classList.add('dark');
        cont.classList.remove('light');
    }
}

btn.onclick = function () {
    flag = flag == 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', flag);
/*
    if(flag == 'light') flag = 'dark';
    else if(flag == 'dark') flag = 'light';
*/

    color_change(flag);
}