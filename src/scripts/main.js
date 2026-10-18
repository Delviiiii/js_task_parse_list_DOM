'use strict';

const persons = [...document.querySelector('ul').querySelectorAll('li')];

function sortList(list) {
  list.sort((personA, personB) => {
    const x = Number(
      personA.dataset.salary.replaceAll('$', '').replaceAll(',', ''),
    );
    const y = Number(
      personB.dataset.salary.replaceAll('$', '').replaceAll(',', ''),
    );

    return y - x;
  });

  // Formating web content by sorted peoples
  list.forEach((node) => {
    const ulBlock = document.querySelector('ul');

    ulBlock.append(node);
  });
}

function getEmployees(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(list[i].dataset);
  }

  return result;
}

sortList(persons);
getEmployees(persons);
