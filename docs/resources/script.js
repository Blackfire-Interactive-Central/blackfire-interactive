let isMenuShown = false;

function toggleHamMenu()
{
    const menu = document.getElementById('hamburger-menu');

    if (!isMenuShown)
    {
        menu.style.visibility = 'visible';
        isMenuShown = true;
    }
    else
    {
        menu.style.visibility = 'hidden';
        isMenuShown = false;
    }
}

