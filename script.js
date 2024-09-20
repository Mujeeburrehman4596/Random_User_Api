document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userPhone = document.getElementById('user-phone');
    const userAddress = document.getElementById('user-address');
    const userDob = document.getElementById('user-dob');

    generateBtn.addEventListener('click', () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                userAvatar.src = user.picture.large;
                userName.textContent = `${user.name.first} ${user.name.last}`;
                userEmail.textContent = `Email: ${user.email}`;
                userPhone.textContent = `Phone: ${user.phone}`;
                userAddress.textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}`;
                userDob.textContent = `Date of Birth: ${user.dob.date.split('T')[0]}`;
            })
            .catch(error => console.error('Error fetching user data:', error));
    });
});
