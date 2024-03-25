// script.js

document.addEventListener("DOMContentLoaded", function() {
    const applyFilterButton = document.getElementById("applyFilter");
    const resourceCardsContainer = document.getElementById("resourceCards");
  
    applyFilterButton.addEventListener("click", applyFilter);
  
    // Function to apply filter
    function applyFilter() {
      const grade = document.getElementById("grade").value;
      const duration = document.getElementById("duration").value;
  
      // Additional filters can be added similarly
      // const topic = document.getElementById("topic").value;
      // const filter1 = document.getElementById("filter1").value;
      // const filter2 = document.getElementById("filter2").value;
      // const filter3 = document.getElementById("filter3").value;
  
      // Call function to filter and display cards
      filterAndDisplayCards(grade, duration);
    }
  
    // Function to filter and display cards
    function filterAndDisplayCards(grade, duration) {
      // You need to replace this with your actual data or fetch data from an API
      const resources = [
        { title: "AI Snapshopts", grade: "9-12", duration: "standalone", imageUrl: "stub-assets/ai.png" },
        { title: "Diné CS 1", grade: "9-12", duration: "semester", imageUrl: "stub-assets/cs1.png" },
        // Add more resource objects here
      ];
  
      // Clear previous cards
      resourceCardsContainer.innerHTML = "";
  
      // Filter resources based on selected criteria
      const filteredResources = resources.filter(resource => {
        return resource.grade === grade && resource.duration === duration;
      });
  
      // Display filtered cards
      filteredResources.forEach(resource => {
        const card = createResourceCard(resource);
        resourceCardsContainer.appendChild(card);
      });
    }
  
    // Function to create a resource card
    function createResourceCard(resource) {
      const card = document.createElement("div");
      card.classList.add("resourceCard");
  
      const image = document.createElement("img");
      image.src = resource.imageUrl;
      card.appendChild(image);
  
      const title = document.createElement("h3");
      title.textContent = resource.title;
      card.appendChild(title);
  
      const grade = document.createElement("p");
      grade.textContent = "Grade: " + resource.grade;
      card.appendChild(grade);
  
      const duration = document.createElement("p");
      duration.textContent = "Duration: " + resource.duration;
      card.appendChild(duration);
  
      const button = document.createElement("button");
      button.textContent = "Access Resource";
      // Add functionality to the button if needed
      card.appendChild(button);
  
      return card;
    }
  });
  