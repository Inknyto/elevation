function displayResults(results) {
    results.forEach(result => {

        const skillsDiv = document.createElement("div");
        skillsDiv.classList.add('job_skills');
        head = document.createElement('h3');
        head.innerText = 'Required_skills:';
        skillsDiv.appendChild(head);

        // Loop through each skill category
        for (const category in result.skills) {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add('skill_category');

            const categoryTitle = document.createElement("span");
            categoryTitle.classList.add('category_title');
            categoryTitle.textContent = category;
            categoryDiv.appendChild(categoryTitle);

            // Loop through each skill in the category
            result.skills[category].forEach(skill => {
                const skillSpan = document.createElement("span");
                skillSpan.classList.add('skill');
                skillSpan.textContent = skill;
                categoryDiv.appendChild(skillSpan);
            });

            skillsDiv.appendChild(categoryDiv);
        }
	return skillsDiv
    });
}

