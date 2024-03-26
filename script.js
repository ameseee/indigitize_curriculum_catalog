const applyFilterButton = document.getElementById("applyFilter");
const resourceCardsContainer = document.getElementById("resourceCards");

// Pull in Cards
// (stubbed for now)

const resources = [
  { title: "AI Snapshots", grade: "9-12", duration: "standalone", imageUrl: "stub-assets/ai.png", topic: "Any", device: "Any" },
  { title: "Diné CS 1", grade: "9-12", duration: "semester", imageUrl: "stub-assets/cs1.png", topic: "Any", device: "Any" },
  { title: "AI: Decision Trees", grade: "9-12", duration: "standalone", imageUrl: "stub-assets/ai1.png", topic: "Any", device: "Any" },
  { title: "Unplugged Lessons", grade: "k-5", duration: "standalone", imageUrl: "stub-assets/unplugged.jpeg", topic: "Any", device: "Any" },
  { title: "Wellness in Tech", grade: "9-12", duration: "standalone", imageUrl: "stub-assets/naca_logo.png", topic: "Any", device: "Any" },
  { title: "Ai: Your Data", grade: "6-8", duration: "week", imageUrl: "stub-assets/ai2.png", topic: "Any", device: "Any" },
];

// Filter
applyFilterButton.addEventListener("click", applyFilter);

function applyFilter() {
  const grade = document.getElementById("grade").value;
  const duration = document.getElementById("duration").value;
  const topic = document.getElementById("topic").value;
  const device = document.getElementById("device").value;

  resourceCardsContainer.innerHTML = "";

  const filteredResources = resources.filter(resource => {
    return  (resource.grade === grade || grade == "All")
            && (resource.duration === duration || duration == "Any")
            && (resource.topic === topic || topic == "Any")
            && (resource.device == device || device == "Any");
  });
console.log(filteredResources, "hi")
  displayCard(filteredResources);
}

function displayCard(resources) {
  resources.forEach(resource => {
    resourceCardsContainer.innerHTML += `
      <div class="resourceCard">
        <img src="${resource.imageUrl}" alt="Resource Image">
        <h3>${resource.title}</h3>
        <p><bold>Grade:</bold> ${resource.grade}</p>
        <p><bold>Duration:</bold> ${resource.duration}</p>
        <div>
          <button>Access Resource</button>
        </div>
      </div>
    `;
  });
}
  