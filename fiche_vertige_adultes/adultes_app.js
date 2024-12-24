const checkboxes = document.querySelectorAll('.other_check');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if (this.checked) {
      targetElement.classList.remove('hidden');
    } else {
      targetElement.classList.add('hidden');
    }
  });
});

function updateMainChoice(otherChoiceInput,id) {
  const mainChoice = document.getElementById(id);
  console.log(otherChoiceInput,mainChoice)
  if (otherChoiceInput.trim()) {
    mainChoice.value = otherChoiceInput;
  }
}


window.addEventListener("load", function() {
    const form = document.getElementById('dynamicForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
    const names=new Set()
    Array.from(form.elements).forEach((element) => {
      if (element.name) {
        names.add(element.name)
      }
    });
    const data = new FormData(form);
    for (let iter of names){
      const name_tab = data.getAll(iter);
      const name_string = name_tab.join(', ');
      data.set(iter, name_string);
    }
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});
