//es. 1<) crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa

  
  const list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
 
  function populateTable(developers) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Pulisce la tabella ogni volta che viene popolata
    developers.forEach(dev => {
      const row = document.createElement('tr');
      row.classList.add('border-b');
      
      row.innerHTML = `
        <td class="px-4 py-2">${dev.firstName}</td>
        <td class="px-4 py-2">${dev.lastName}</td>
        <td class="px-4 py-2">${dev.country}</td>
        <td class="px-4 py-2">${dev.continent}</td>
        <td class="px-4 py-2">${dev.language}</td>
        <td class="px-4 py-2">${dev.age}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  function filterDevelopers() {
    const selectedContinent = document.getElementById('continentSelect').value;
    const selectedLanguage = document.getElementById('languageSelect').value;
    
    const filteredDevelopers = list.filter(dev => 
      dev.language === selectedLanguage && dev.continent === selectedContinent
    );
    
    const resultDiv = document.getElementById('result');

    if (filteredDevelopers.length > 0) {
      let resultText = `<h3 class="text-xl font-semibold text-blue-700">Sono stati trovati ${filteredDevelopers.length} sviluppatori:</h3>`;
      resultText += '<ul class="mt-4 space-y-2">';
      filteredDevelopers.forEach(dev => {
        resultText += `
          <li class="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100">
            <strong class="text-blue-600">${dev.firstName} ${dev.lastName}</strong> (${dev.country})
          </li>`;
      });
      resultText += '</ul>';
      resultDiv.innerHTML = resultText;
    } else {
      resultDiv.innerHTML = `<p class="text-red-600 font-semibold">Nessun sviluppatore trovato.</p>`;
    }

    populateTable(filteredDevelopers);
  }

  function initializeTable() {
    populateTable(list);
  }


  document.getElementById('filterButton').addEventListener('click', filterDevelopers);

  window.onload = initializeTable;
