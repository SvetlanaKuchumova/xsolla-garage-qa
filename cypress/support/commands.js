//GET-запрос для просмотра списка всех задач
Cypress.Commands.add('taskList', () => {
    cy
      .request('https://garage-best-team-ever.tk/task')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  //  cy.clearCookies()
  })

//POST-запрос для добавления задачи
  Cypress.Commands.add('addTask', () => {
    cy
    .request('POST', 'https://garage-best-team-ever.tk/task', { 
        user_id: 0,
        title: 'Автотест добавления задачи',
        text_content: 'Купить макарошки и арбуз',
        date_create: '2020-09-09 08:20:49',
        date_close: null,
        date_target: '2020-09-19 10:20:49',
        is_completed: false,
        is_important: false,
        is_urgent: true
     })
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('user_id', 0);
        expect(response.body).to.have.property('title', 'Автотест добавления задачи');
        expect(response.body).to.have.property('text_content', 'Купить макарошки и арбуз'); // true 
        expect(response.body).to.have.property('date_create', '2020-09-09 08:20:49');
        expect(response.body).to.have.property('date_close', null);
        expect(response.body).to.have.property('date_target', '2020-09-19 10:20:49');
        expect(response.body).to.have.property('is_completed', false);
        expect(response.body).to.have.property('is_important', false);
        expect(response.body).to.have.property('is_urgent', true);
      })
  })

//DELETE-запрос для удаления задачи
Cypress.Commands.add('deleteTask', (id) => {
    cy
      .request('DELETE',`https://garage-best-team-ever.tk/task/${id}`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
