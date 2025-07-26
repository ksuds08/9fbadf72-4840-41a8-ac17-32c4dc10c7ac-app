
document.getElementById('generateTemplate').addEventListener('click', function() {
    const jobTitle = document.getElementById('jobTitle').value;
    const industry = document.getElementById('industry').value;
    const experienceLevel = document.getElementById('experienceLevel').value;

    if (jobTitle && industry) {
        fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jobTitle: jobTitle,
                industry: industry,
                experienceLevel: experienceLevel
            })
        })
        .then(response => response.json())
        .then(data => {
            const suggestionsContainer = document.getElementById('templateSuggestions');
            suggestionsContainer.classList.remove('hidden');
            suggestionsContainer.innerHTML = data.templates.map(template => `
                <div class="template-card bg-white p-4 mb-4">
                    <h4 class="font-bold text-gray-800">${template.name}</h4>
                    <p class="text-gray-600">${template.description}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please fill in all fields.');
    }
});
