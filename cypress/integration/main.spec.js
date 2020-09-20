const { id } = require("common-tags");
const { toInteger } = require("lodash");

context('Best planner', () => {         
  
  it('Test task List (GET)', () => {
    cy.taskList();
  })

  it('Test add task (POST)', () => {
    cy.addTask();
  })
  
  it('Test delete task (DELETE)', () => {
    cy.deleteTask(id);
  })

  it('Check the main page', () => {
    //открытие сайта
    cy.visit('https://garage-best-team-ever.tk/');
    //проверка отображения элементов главной страницы
    cy.get('h1').should('contain', 'The best planner ever');
    cy.get('h2').should('contain', 'Tasks');
    cy.contains('button', '+ NEW TASK');

  })
  it('Test CRUD', () => {
    cy.contains('+ NEW TASK').click();

  })
})