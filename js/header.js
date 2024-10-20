// Function to dynamically load header content
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    
    // Check if header content already exists
    if (!headerContainer.innerHTML.trim()) {
        fetch('header.html') // Fetch the header.html file
            .then(response => response.text()) // Convert the response to text (HTML)
            .then(data => {
                headerContainer.innerHTML = data; // Inject HTML into header-container
            })
            .catch(error => console.error('Error loading header:', error)); // Handle any errors
    }
}

// Call loadHeader to inject the header when the page loads
document.addEventListener('DOMContentLoaded', loadHeader);