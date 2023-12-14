document.addEventListener('DOMContentLoaded', function() {


    // Change the profile picture after 2 seconds
    setTimeout(function() {
        document.getElementById('profile-pic').src = 'img/doug.jpg'; // Replace with your desired image URL
    }, 2000);

    // Change the profile name after 4 seconds
    setTimeout(function() {
        document.getElementById('profile-name').innerHTML = 'Doug Jones'; // Replace with your desired name
    }, 4000);

    // Add a new class to profile description after 6 seconds
    setTimeout(function() {
        var desc = document.getElementById('profile-desc');
        desc.classList.add('new-desc-style');
    }, 6000);

    // Toggle background color every 2 seconds
    setInterval(function() {
        var card = document.getElementById('profile-card');
        card.classList.toggle('new-background');
    }, 2000);
});

// Remember to add the new classes in your CSS file.
