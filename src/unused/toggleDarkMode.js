  const toggleDarkMode = () => {
    // Add your logic for left icon click
    //setTheme(darkTheme);
    if (darkMode == 0){
    document.body.style.backgroundColor = '#181a1b';
    document.body.style.color = '#ffffff';
    const searchInput = document.getElementById('search-input');
    searchInput.style.color = 'white';
    searchInput.style.backgroundColor = '#181a1b';
    darkMode = 1;
    console.log('Dark Mode toggled');
    }else{
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = 'black';
    const searchInput = document.getElementById('search-input');
    searchInput.style.color = 'black';
    searchInput.style.backgroundColor = 'white';
    darkMode = 0;
    console.log('Dark Mode toggled');
    }
  };
