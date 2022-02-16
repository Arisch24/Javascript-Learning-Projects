/*
    !!!IMPORTANT
    e.target refers to the target element which is clicked on
    e.currentTarget refers to the target element which has the eventListener

    Example: e.target can be any element within the child of the eventListener 
    whereas currentTarget is only the element which has the eventListener
*/

// First way
const lists = document.querySelectorAll('.faq');

for(const list of lists){
    list.addEventListener('click', function(e) {
        e.currentTarget.querySelector('.text-container').classList.toggle('active');
        e.currentTarget.querySelector('.btn').classList.toggle('active');
    });
}


// Second way
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', (e) => {
        const content = collapsible.nextElementSibling;
        
        collapsible.classList.toggle('.active');

        if(collapsible.classList.contains('.active')){
            // either height or max height can be used as preference
            content.style.maxHeight = content.scrollHeight + 'px';
            e.currentTarget.querySelector('.btn').classList.add('active');
        }else{
            content.style.maxHeight = 0;
            e.currentTarget.querySelector('.btn').classList.remove('active');
        }
    });
});