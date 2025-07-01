const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score');

let quizData = [];

fetch('questions.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load questions.');
    }
    return response.json();
  })
  .then(data => {
    quizData = data;
    showQuestions(quizData);
  })
  .catch(error => {
    quizContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  });

function showQuestions(questions) {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach((option, optIndex) => {
      const label = document.createElement('label');
      const radio = document.createElement('input');

      radio.type = 'radio';
      radio.name = `question${index}`; 
      radio.value = optIndex;

      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });

    quizContainer.appendChild(questionDiv);
  });
}

submitButton.addEventListener('click', () => {
  let score = 0;

  quizData.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

    const questionDiv = quizContainer.children[index];
    const labels = questionDiv.querySelectorAll('label');

    labels.forEach((label, optIndex) => {
      label.classList.remove('correct', 'incorrect');

      if (optIndex === q.correctIndex) {
        label.classList.add('correct');
      } else {
        const input = label.querySelector('input');
        if (input.checked) {
          label.classList.add('incorrect');
        }
      }
    });

    if (selectedOption && parseInt(selectedOption.value) === q.correctIndex) {
      score++;
    }
  });

  scoreContainer.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>`;
});
