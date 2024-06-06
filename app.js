const input = document.querySelector('input');
const ul = document.querySelector('ul');


// Add new todo
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        const li = document.createElement('li');
        li.innerHTML = `<span>X</span> ${input.value}`;
        input.value = "";
        ul.append(li);
    }
}
)

// Mark Completed
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // const x=e.srcElement;
        e.target.classList.toggle('completed');
    }
    // console.log(e.srcElement);
})


// Delete Todo
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.stopPropagation();
        const li = e.target.parentElement;
        li.style.transition = 'opacity 0.6s';
        li.style.opacity = 0;
        setTimeout(function () {
            li.remove();
        }, 600);
    }
})

// Toggle Input
document.getElementById('plus').addEventListener('click', function () {
    const input = document.querySelector('input');
    if (input.style.display === 'none') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
});

