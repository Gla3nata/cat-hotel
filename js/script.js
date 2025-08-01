// document.querySelectorAll('.faq-question').forEach(question => {
//   question.addEventListener('click', () => {
//     const answer = question.nextElementSibling;
//     answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//   });
// });

let question = document.querySelectorAll('.questions__header');
console.log(question);

question.forEach(question => {
 question.addEventListener('click', () => {
   const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    console.log(answer);
 })})