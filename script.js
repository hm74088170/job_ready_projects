// searchinput
// searchbtn

const dictionary = async (word) => {
  const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${encodeURIComponent(word)}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b8dfa1764dmsh535eda85d7439fcp13a42ajsnfecbd554154f',
      'x-rapidapi-host': 'urban-dictionary7.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const heading = document.querySelector(".heading");
    const para = document.querySelector(".para");
    const para1 = document.querySelector(".para1");

    if (result.list && result.list.length > 0) {
      const topDef = result.list[0];
      heading.textContent = topDef.word;
      para.textContent = topDef.definition;
      para1.textContent = topDef.example;
    } else {
      heading.textContent = "No results found";
      para.textContent = "";
    }
  } catch (error) {
    console.error("Error:", error);
    document.querySelector(".heading").textContent = "Error fetching data";
    document.querySelector(".para").textContent = "";
  }
};

document.getElementById("searchbtn").addEventListener("click", (e) => {
  e.preventDefault(); // prevent form from reloading the page
  const word = document.getElementById("searchinput").value.trim();
  if (word) {
    dictionary(word);
  }
});

