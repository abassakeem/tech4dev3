const projects = [
  {
    image: "./img/project1.svg",
    genre: "Drama",
    title: "King of Boys",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project2.svg",
    genre: "Soap Opera",
    title: "Flint",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project1.svg",
    genre: "Drama",
    title: "King of Boys",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project2.svg",
    genre: "Soap Opera",
    title: "Flint",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project1.svg",
    genre: "Drama",
    title: "King of Boys",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project2.svg",
    genre: "Soap Opera",
    title: "Flint",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project1.svg",
    genre: "Drama",
    title: "King of Boys",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project2.svg",
    genre: "Soap Opera",
    title: "Flint",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project1.svg",
    genre: "Drama",
    title: "King of Boys",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project2.svg",
    genre: "Soap Opera",
    title: "Flint",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project1.svg",
    genre: "Drama",
    title: "King of Boys",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
  {
    image: "./img/project2.svg",
    genre: "Soap Opera",
    title: "Flint",
    daysLeft: 25,
    description:
      "King of Boys follows the story of Alhaja Eniola Salami, a businesswoman and philanthropist with a checkered past and a promising political future.",
    fundraisingGoal: "ETH 592,000,000",
    hardcap: "ETH 30,000,000",
    token: "$KOB",
    creator: "Kemi Adetiba",
    location: "Dubai, UAE",
  },
];

function renderCards(projects) {
  const cardSection = document.querySelector(".cards-section");
  if (!cardSection) {
    console.error("Cards section not found!");
    return;
  }

  cardSection.innerHTML = "";

  projects.forEach((project) => {
    const truncateDescription = (description) => {
      const words = description.split(" ");
      return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
    };

    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "my-8");

    cardElement.innerHTML = `
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-1 gap-4 items-center rounded-xl w-full">
        <div class="shadow rounded-xl">
          <div class="">
            <img src="${project.image}" class="w-full" alt="${project.title}" />
          </div>
          <div class="p-6">
            <div class="flex justify-between">
              <div class="">
                <span class="p-2 text-white bg-[#EF466F] rounded-[74px] text-[10px]">${
                  project.genre
                }</span>
                <h3 class="font-bold text-xl my-2">${project.title}</h3>
              </div>
              <div class="bg-[#FFD0B6] text-center p-2 text-[#DC562B] rounded-lg">
                <h3 class="font-bold text-2xl">${project.daysLeft}</h3>
                <p class="text-[8px] font-thin">Days Left</p>
              </div>
            </div>
            <p class="text-xs py-1">${truncateDescription(
              project.description
            )}</p>
            
        <div class="rounded-lg">
                <div class="flex align-center py-1 gap-2">
                  <div class="">
                    <img src="./img/money.svg" />
                  </div>
                  <div class="border-b border-[#E8EEFD]">
                    <h6 class="text-[10px]">Fundraising Goal</h6>
                    <p class="font-extrabold">${project.fundraisingGoal}</p>
                  </div>
                </div>

                <div class="">
                  <div class="">
                    <div class="flex items-center gap-2">
                      <div class="">
                        <img src="./img/Group 333.svg" class="" />
                      </div>
                      <div class="py-1">Participate via:</div>
                    </div>
                  </div>

                  <div class="ml-4 flex gap-4 mb-1">
                    <span class="px-2 py-1 border-[#D1D5DB] text-[9px] border flex gap-2 rounded-lg">
                      <img src="./img/Color dot.svg" />
                      <span class="text-[9px]">BTC</span>
                    </span>
                    <span class="px-2 py-1 border-[#D1D5DB] text-[9px] border gap-2 flex rounded-lg">
                      <img src="./img/Color dot2.svg" />
                      <span class="text-[9px]">ETH</span>
                    </span>
                    <span class="px-2 py-1 border-[#D1D5DB] border flex gap-2 rounded-lg">
                      <img src="./img/Color dot3.svg" />
                      <span class="text-[9px]">BNB</span>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 py-2">
                    <div class="">
                      <img src="./img/Group 333.svg" class="" />
                    </div>
                    <div class="">
                      <span class="font-bold">Hardcap:</span> ${project.hardcap}
                    </div>
                  </div>
                  <div class="flex items-center justify-between gap-2">
                    <div class="token flex items-center gap-2">
                      <div class="py-2">
                        <img src="./img/Group 333.svg" class="" />
                      </div>
                      <div class="font-bold py-2">
                        Token: <span class="text-[#FF6B18]">${
                          project.token
                        }</span>
                      </div>
                    </div>
                    <div class="stage flex items-center gap-2">
                      <div class="py-2">
                        <img src="./img/Group 333.svg" class="" />
                      </div>
                      <div class="font-bold py-2">
                        Stage: <span class="font-medium">Presale</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between gap-2 py-2 border-t border-[#E8EEFD]">
                    <div class="flex items-center gap-2">
                      <img src="./img/profile img.svg" class="rounded-full" /> ${
                        project.creator
                      }
                    </div>
                    <div class="flex items-center gap-2">
                      <img src="./img/location.png" />
                      ${project.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    cardSection.appendChild(cardElement);
  });
}

function renderIco(projects) {
  const IcoSection = document.querySelector(".ico");
  if (!IcoSection) {
    console.error("Cards section not found!");
    return;
  }

  IcoSection.innerHTML = "";

  projects.forEach((project) => {
    const truncateDescription = (description) => {
      const words = description.split(" ");
      return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
    };

    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "my-8");

    cardElement.innerHTML = `
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-1 gap-4 items-center rounded-xl w-full">
        <div class="shadow rounded-xl">
          
          <div class="p-6">
            <div class="flex justify-between">
              <div class="">
                <span class="p-2 text-white bg-[#EF466F] rounded-[74px] text-[10px]">${
                  project.genre
                }</span>
                <h3 class="font-bold text-xl my-2">${project.title}</h3>
              </div>
              <div class="bg-[#FFD0B6] text-center p-2 text-[#DC562B] rounded-lg">
                <h3 class="font-bold text-2xl">${project.daysLeft}</h3>
                <p class="text-[8px] font-thin">Days Left</p>
              </div>
            </div>
            <p class="text-xs py-1">${truncateDescription(
              project.description
            )}</p>
            
        <div class="rounded-lg">
                <div class="flex align-center py-1 gap-2">
                  <div class="">
                    <img src="./img/money.svg" />
                  </div>
                  <div class="flex flex-col justify-between>
                  <div class="border-b border-[#E8EEFD]">
                    <h6 class="text-[6px]">Fundraising Goal</h6>
                    <p class="font-extrabold text-[10px]">${project.fundraisingGoal}</p>
                  </div>
                  <div class="border-b border-[#E8EEFD]">
                    <h6 class="text-[6px]">Fundraising Goal</h6>
                    <p class="font-extrabold text-[10px]">${project.fundraisingGoal}</p>
                  </div>
                  </div>
                </div>

               

                  
                  
                    

                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    IcoSection.appendChild(cardElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(projects);
  renderIco(projects);
});

export { renderCards, renderIco, projects };
